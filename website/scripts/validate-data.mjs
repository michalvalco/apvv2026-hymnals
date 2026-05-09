#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// validate-data.mjs — TEPALIT taxonomy data-validation pre-build pass.
//
// Runs as the first step of `npm run build`. Loads the six CSV files in
// ../taxonomy/, validates them for:
//
//   1. Required columns present
//   2. Enum values from a fixed allowlist (epistemic_status, tradition,
//      verification_status, etc.)
//   3. ID uniqueness within each file (locus_code, pair_id, text_id, …)
//   4. Cross-file referential integrity:
//        - confessional_positions.locus_code → loci_hierarchy.locus_code
//        - term_variants.locus_code           → loci_hierarchy.locus_code
//        - hymnic_evidence.locus_codes        → loci_hierarchy.locus_code
//        - hymnic_evidence.paired_text_id     → hymnic_evidence.text_id
//        - hymn_pairs.source_text_id          → hymnic_evidence.text_id
//        - hymn_pairs.receptor_text_id        → hymnic_evidence.text_id
//        - hymn_pairs.primary_locus_code      → loci_hierarchy.locus_code
//        - hymn_pairs.all_locus_codes         → loci_hierarchy.locus_code
//        - loci_hierarchy.parent_locus        → loci_hierarchy.locus_code
//
//   5. Format checks (snake_case canonical_term, §N.M chapter_section, …)
//
// Errors fail the build (exit 1). Warnings report but do not fail. Run with
// `--quiet` to suppress per-file PASS lines and emit only errors/warnings.
//
// Maintenance: when a CSV's schema changes, add the new constraint to its
// validate*() function below. Cross-file lookups stay centralised in
// loadAllTables() so they only happen once.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TAXONOMY_DIR = resolve(__dirname, "..", "..", "taxonomy");
const QUIET = process.argv.includes("--quiet");

// ── ANSI helpers (degrade to no-op if NO_COLOR is set or stdout is not a TTY) ──
const noColor = process.env.NO_COLOR || !process.stdout.isTTY;
const c = {
  red: (s) => (noColor ? s : `\x1b[31m${s}\x1b[0m`),
  yellow: (s) => (noColor ? s : `\x1b[33m${s}\x1b[0m`),
  green: (s) => (noColor ? s : `\x1b[32m${s}\x1b[0m`),
  cyan: (s) => (noColor ? s : `\x1b[36m${s}\x1b[0m`),
  dim: (s) => (noColor ? s : `\x1b[2m${s}\x1b[0m`),
  bold: (s) => (noColor ? s : `\x1b[1m${s}\x1b[0m`),
};

// ── Minimal CSV parser ──
// Handles RFC 4180-ish CSV: comma separators, double-quoted fields,
// embedded newlines inside quotes, "" escape for literal quote.
// All TEPALIT CSVs are well-formed and small (<50 KB), so a hand-rolled
// parser is appropriate; pulling in a dependency for a build-time linter
// would be overkill.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
        } else {
          inQuotes = false;
          i++;
        }
      } else {
        field += ch;
        i++;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ",") {
        row.push(field);
        field = "";
        i++;
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
        i++;
      } else if (ch === "\r") {
        // Skip; the \n on the next iteration handles row break.
        i++;
      } else {
        field += ch;
        i++;
      }
    }
  }
  // Flush last cell/row if file does not end with newline.
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // Drop trailing empty rows.
  while (rows.length > 0 && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === "") {
    rows.pop();
  }
  if (rows.length === 0) return { header: [], data: [] };
  const header = rows[0];
  const data = rows.slice(1).map((r, idx) => {
    const obj = { _line: idx + 2 }; // +2: 1-indexed + skip header
    header.forEach((h, j) => {
      obj[h] = (r[j] ?? "").trim();
    });
    return obj;
  });
  return { header, data };
}

// ── Diagnostic accumulators ──
const errors = []; // {file, line, msg}
const warnings = [];

function err(file, line, msg) {
  errors.push({ file, line, msg });
}
function warn(file, line, msg) {
  warnings.push({ file, line, msg });
}

// ── Loaders ──
function loadCsv(name) {
  const path = resolve(TAXONOMY_DIR, name);
  const text = readFileSync(path, "utf8");
  return parseCsv(text);
}

// ── Validation rules ──

// Per `taxonomy/SCHEMA.md`: every column listed below is marked YES (required)
// in its file's schema table. Optional columns (NO) are NOT listed here. If you
// add a new required field to a CSV, add it here too — and remember to add the
// corresponding enum / cross-reference / format check below.
const REQUIRED_COLS = {
  "loci_hierarchy.csv": [
    "locus_code", "locus_name_la", "locus_name_sk", "locus_name_en",
    "description_en", "chapter_section", "priority",
  ],
  "confessional_positions.csv": [
    "locus_code", "tradition", "tradition_phase", "position_label",
    "position_description", "primary_source_id", "epistemic_status",
  ],
  "term_variants.csv": [
    "canonical_term", "locus_code", "latin", "czech_16c",
    "german_16c", "slovak_cs", "semantic_field",
  ],
  "hymnic_evidence.csv": [
    "text_id", "source_collection_id", "incipit", "locus_codes",
    "tradition", "tradition_phase", "hymnic_function", "original_language",
    "epistemic_status",
  ],
  "hymnic_functions.csv": [
    "function_code", "function_name_en", "function_name_sk",
    "description_en", "detection_markers", "theological_weight", "example",
  ],
  "hymn_pairs.csv": [
    "pair_id", "pair_label_sk", "pair_label_en",
    "primary_locus_code", "all_locus_codes",
    "theological_argument_sk", "theological_argument_en",
    "epistemic_status", "evidentiary_strength", "verification_status",
  ],
};

const ENUMS = {
  epistemic_status: new Set(["FACTUAL", "INTERPRETIVE", "DEFERRED"]),
  // Per SCHEMA.md the documented set is LUTHERAN / UTRAQUIST / UNITY only.
  // No row currently uses anything else; the validator stays strict.
  tradition: new Set(["LUTHERAN", "UTRAQUIST", "UNITY"]),
  evidentiary_strength: new Set(["DOCUMENTED", "INFERRED", "CONJECTURED"]),
  verification_status: new Set([
    "VERIFIED", "SECONDARY_ONLY", "PRIMARY_PENDING", "UNVERIFIED",
  ]),
  priority: new Set(["HIGHEST", "HIGH", "MEDIUM", "LOW"]),
  // transfer_direction allows empty (non-directional comparisons per SCHEMA.md)
  // plus the seven documented values:
  transfer_direction: new Set([
    "",
    "UTRAQUIST_TO_LUTHERAN",
    "UNITY_TO_LUTHERAN",
    "HUSSITE_TO_LUTHERAN",
    "LUTHERAN_REGIONAL_CONTINUITY",
    "LUTHERAN_CONFESSIONAL_INTENSIFICATION",
    "LATIN_TO_VERNACULAR",
    "GERMAN_TO_CZECH",
  ]),
  // hymnic_evidence.original_language per SCHEMA.md: LA / CZ / DE / SK
  original_language: new Set(["LA", "CZ", "DE", "SK"]),
};

// Required-columns gate. Returns true if every required column is present;
// otherwise reports an error for each missing column (which then short-
// circuits the per-row checks for that file).
function checkColumns(file, header) {
  const required = REQUIRED_COLS[file] || [];
  const present = new Set(header);
  let ok = true;
  for (const col of required) {
    if (!present.has(col)) {
      err(file, 1, `Missing required column "${col}"`);
      ok = false;
    }
  }
  return ok;
}

// Generic per-row enum + uniqueness validator.
function checkUnique(file, rows, idCol) {
  const seen = new Map();
  for (const r of rows) {
    const id = r[idCol];
    if (!id) continue;
    if (seen.has(id)) {
      err(file, r._line, `Duplicate ${idCol} "${id}" (also at line ${seen.get(id)})`);
    } else {
      seen.set(id, r._line);
    }
  }
}

function checkEnum(file, row, col, enumSet) {
  const v = row[col];
  if (v === undefined) return; // column missing was already reported
  if (!enumSet.has(v)) {
    err(
      file,
      row._line,
      `${col}="${v}" not in allowed set {${[...enumSet].filter(Boolean).join(", ")}}`,
    );
  }
}

// Split a semicolon-separated cell, trim, drop empties.
function splitSemis(s) {
  return (s || "").split(";").map((x) => x.trim()).filter(Boolean);
}

// ── Per-table checks ──

function validateLoci(table, lociSet) {
  if (!checkColumns("loci_hierarchy.csv", table.header)) return;
  checkUnique("loci_hierarchy.csv", table.data, "locus_code");
  for (const r of table.data) {
    checkEnum("loci_hierarchy.csv", r, "priority", ENUMS.priority);
    // parent_locus must be either empty (top-level) or a known locus_code
    if (r.parent_locus && !lociSet.has(r.parent_locus)) {
      err("loci_hierarchy.csv", r._line, `parent_locus "${r.parent_locus}" does not exist as locus_code`);
    }
    // chapter_section format §N or §N.M (allow Slovak section markers too)
    if (r.chapter_section && !/^§\d+(\.\d+)?$/.test(r.chapter_section)) {
      warn("loci_hierarchy.csv", r._line, `chapter_section "${r.chapter_section}" does not match §N or §N.M format`);
    }
  }
}

function validateConfessionalPositions(table, lociSet) {
  if (!checkColumns("confessional_positions.csv", table.header)) return;
  for (const r of table.data) {
    checkEnum("confessional_positions.csv", r, "tradition", ENUMS.tradition);
    checkEnum("confessional_positions.csv", r, "epistemic_status", ENUMS.epistemic_status);
    if (r.locus_code && !lociSet.has(r.locus_code)) {
      err("confessional_positions.csv", r._line, `locus_code "${r.locus_code}" does not exist`);
    }
  }
}

function validateTermVariants(table, lociSet) {
  if (!checkColumns("term_variants.csv", table.header)) return;
  checkUnique("term_variants.csv", table.data, "canonical_term");
  for (const r of table.data) {
    // canonical_term is snake_case lowercase — but the lowercase test is
    // Unicode-aware (\p{Ll} matches Slovak č/š/ž/etc.) so legitimately
    // Slovak-only terms like "bibličtina" pass while uppercase / spaces
    // / hyphens fail.
    if (r.canonical_term && !/^[\p{Ll}0-9_]+$/u.test(r.canonical_term)) {
      err("term_variants.csv", r._line, `canonical_term "${r.canonical_term}" is not snake_case lowercase (Unicode lowercase letters, digits, underscore)`);
    }
    if (r.locus_code && !lociSet.has(r.locus_code)) {
      err("term_variants.csv", r._line, `locus_code "${r.locus_code}" does not exist`);
    }
  }
}

function validateHymnicEvidence(table, lociSet, functionCodeSet) {
  if (!checkColumns("hymnic_evidence.csv", table.header)) return;
  checkUnique("hymnic_evidence.csv", table.data, "text_id");
  // Build text_id index for paired_text_id back-reference check
  const textIds = new Set(table.data.map((r) => r.text_id).filter(Boolean));
  for (const r of table.data) {
    checkEnum("hymnic_evidence.csv", r, "tradition", ENUMS.tradition);
    checkEnum("hymnic_evidence.csv", r, "epistemic_status", ENUMS.epistemic_status);
    checkEnum("hymnic_evidence.csv", r, "original_language", ENUMS.original_language);
    for (const code of splitSemis(r.locus_codes)) {
      if (!lociSet.has(code)) {
        err("hymnic_evidence.csv", r._line, `locus_codes contains unknown locus "${code}"`);
      }
    }
    // Cross-file: hymnic_function must reference an existing function_code in
    // hymnic_functions.csv (per SCHEMA.md cross-file integrity constraints).
    if (r.hymnic_function && !functionCodeSet.has(r.hymnic_function)) {
      err("hymnic_evidence.csv", r._line, `hymnic_function "${r.hymnic_function}" does not exist as function_code in hymnic_functions.csv`);
    }
    if (r.paired_text_id && !textIds.has(r.paired_text_id)) {
      err("hymnic_evidence.csv", r._line, `paired_text_id "${r.paired_text_id}" does not exist as text_id`);
    }
  }
}

function validateHymnicFunctions(table) {
  if (!checkColumns("hymnic_functions.csv", table.header)) return;
  checkUnique("hymnic_functions.csv", table.data, "function_code");
  for (const r of table.data) {
    if (r.function_code && !/^[A-Z0-9_]+$/.test(r.function_code)) {
      warn("hymnic_functions.csv", r._line, `function_code "${r.function_code}" is not SCREAMING_SNAKE_CASE`);
    }
    // theological_weight is loose-form (e.g., "1-3", "primary"); skip enum check.
  }
}

function validateHymnPairs(table, lociSet, evidenceTextIds) {
  if (!checkColumns("hymn_pairs.csv", table.header)) return;
  checkUnique("hymn_pairs.csv", table.data, "pair_id");
  for (const r of table.data) {
    checkEnum("hymn_pairs.csv", r, "epistemic_status", ENUMS.epistemic_status);
    checkEnum("hymn_pairs.csv", r, "evidentiary_strength", ENUMS.evidentiary_strength);
    checkEnum("hymn_pairs.csv", r, "verification_status", ENUMS.verification_status);
    checkEnum("hymn_pairs.csv", r, "transfer_direction", ENUMS.transfer_direction);
    if (r.primary_locus_code && !lociSet.has(r.primary_locus_code)) {
      err("hymn_pairs.csv", r._line, `primary_locus_code "${r.primary_locus_code}" does not exist`);
    }
    for (const code of splitSemis(r.all_locus_codes)) {
      if (!lociSet.has(code)) {
        err("hymn_pairs.csv", r._line, `all_locus_codes contains unknown locus "${code}"`);
      }
    }
    // Determine whether this row is a working-hypothesis / research-target.
    // For honestly flagged research-target pairs (CONJECTURED evidence OR
    // DEFERRED epistemic status) a placeholder text_id that does not yet exist
    // in hymnic_evidence is acceptable — collation has not started. For all
    // other pairs (FACTUAL/INTERPRETIVE + DOCUMENTED/INFERRED), a missing
    // text_id reference is almost certainly a typo that should fail the build.
    const isWorkingHypothesis =
      r.evidentiary_strength === "CONJECTURED" ||
      r.epistemic_status === "DEFERRED";
    const refReport = isWorkingHypothesis ? warn : err;
    if (r.source_text_id && !evidenceTextIds.has(r.source_text_id)) {
      refReport(
        "hymn_pairs.csv",
        r._line,
        `source_text_id "${r.source_text_id}" not in hymnic_evidence` +
          (isWorkingHypothesis ? " (acceptable for working-hypothesis pairs)" : ""),
      );
    }
    if (r.receptor_text_id && !evidenceTextIds.has(r.receptor_text_id)) {
      refReport(
        "hymn_pairs.csv",
        r._line,
        `receptor_text_id "${r.receptor_text_id}" not in hymnic_evidence` +
          (isWorkingHypothesis ? " (acceptable for working-hypothesis pairs)" : ""),
      );
    }
  }
}

// ── Main ──

function main() {
  if (!QUIET) {
    console.log(c.bold(c.cyan("→ TEPALIT taxonomy validation")));
    console.log(c.dim(`  reading from ${TAXONOMY_DIR}`));
  }

  const loci = loadCsv("loci_hierarchy.csv");
  const lociSet = new Set(loci.data.map((r) => r.locus_code).filter(Boolean));

  const positions = loadCsv("confessional_positions.csv");
  const terms = loadCsv("term_variants.csv");
  const evidence = loadCsv("hymnic_evidence.csv");
  const evidenceTextIds = new Set(evidence.data.map((r) => r.text_id).filter(Boolean));
  const functions = loadCsv("hymnic_functions.csv");
  const pairs = loadCsv("hymn_pairs.csv");

  // Validate functions FIRST so the function_code set is available to the
  // hymnic_evidence.hymnic_function cross-reference check below.
  validateLoci(loci, lociSet);
  validateConfessionalPositions(positions, lociSet);
  validateTermVariants(terms, lociSet);
  validateHymnicFunctions(functions);
  const functionCodeSet = new Set(
    functions.data.map((r) => r.function_code).filter(Boolean),
  );
  validateHymnicEvidence(evidence, lociSet, functionCodeSet);
  validateHymnPairs(pairs, lociSet, evidenceTextIds);

  // Report
  const fileCounts = {};
  for (const e of errors) fileCounts[e.file] = (fileCounts[e.file] || 0) + 1;
  for (const w of warnings) fileCounts[w.file] = (fileCounts[w.file] || 0) + 1;

  const allFiles = [
    "loci_hierarchy.csv",
    "confessional_positions.csv",
    "term_variants.csv",
    "hymnic_evidence.csv",
    "hymnic_functions.csv",
    "hymn_pairs.csv",
  ];

  for (const file of allFiles) {
    const fileErrors = errors.filter((e) => e.file === file);
    const fileWarnings = warnings.filter((w) => w.file === file);
    if (fileErrors.length === 0 && fileWarnings.length === 0) {
      if (!QUIET) console.log(`  ${c.green("✓")} ${file}`);
      continue;
    }
    console.log(`  ${fileErrors.length > 0 ? c.red("✗") : c.yellow("!")} ${file}`);
    for (const e of fileErrors) {
      console.log(`    ${c.red("error")} L${e.line}: ${e.msg}`);
    }
    for (const w of fileWarnings) {
      console.log(`    ${c.yellow("warn")}  L${w.line}: ${w.msg}`);
    }
  }

  console.log("");
  if (errors.length > 0) {
    console.log(c.red(c.bold(`✗ ${errors.length} error(s), ${warnings.length} warning(s) — build aborted`)));
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log(c.yellow(`! 0 errors, ${warnings.length} warning(s) — build continues`));
  } else if (!QUIET) {
    console.log(c.green(c.bold(`✓ taxonomy validation passed (${loci.data.length + positions.data.length + terms.data.length + evidence.data.length + functions.data.length + pairs.data.length} rows across ${allFiles.length} files)`)));
  }
}

main();
