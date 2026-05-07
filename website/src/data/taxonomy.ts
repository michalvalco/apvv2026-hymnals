/**
 * Taxonomy data loader — reads CSV files at Astro build time.
 * No external CSV parser needed; these are small, well-formed files
 * where we control the format (see taxonomy/SCHEMA.md).
 */

// Imported for cross-file referential integrity checks (synoptikon_id).
// synoptikon-comparisons.ts has no dependency on this file, so no cycle.
import { comparisons as _synoptikonComparisons } from "./synoptikon-comparisons";

let _synoptikonIds: Set<string> | null = null;

// ── Types ──

export interface Locus {
  locus_code: string;
  locus_name_la: string;
  locus_name_sk: string;
  locus_name_en: string;
  parent_locus: string;
  description_en: string;
  chapter_section: string;
  priority: "HIGHEST" | "HIGH" | "MEDIUM" | "LOW";
}

export interface ConfessionalPosition {
  locus_code: string;
  tradition: "LUTHERAN" | "UTRAQUIST" | "UNITY";
  tradition_phase: string;
  position_label: string;
  position_description: string;
  primary_source_id: string;
  source_reference: string;
  secondary_source_id: string;
  epistemic_status: "FACTUAL" | "INTERPRETIVE" | "DEFERRED";
  notes: string;
}

export interface TermVariant {
  canonical_term: string;
  locus_code: string;
  latin: string;
  czech_16c: string;
  german_16c: string;
  slovak_cs: string;
  semantic_field: string;
  notes: string;
}

export interface HymnicFunction {
  function_code: string;
  function_name_en: string;
  function_name_sk: string;
  description_en: string;
  detection_markers: string;
  theological_weight: number;
  example: string;
}

export interface HymnicEvidence {
  text_id: string;
  source_collection_id: string;
  source_number: string;
  incipit: string;
  stanza_or_section: string;
  locus_codes: string;
  tradition: "LUTHERAN" | "UTRAQUIST" | "UNITY";
  tradition_phase: string;
  hymnic_function: string;
  original_language: string;
  text_snippet: string;
  theological_modification: string;
  modification_type: string;
  paired_text_id: string;
  epistemic_status: "FACTUAL" | "INTERPRETIVE" | "DEFERRED";
  notes: string;
}

export type EvidentiaryStrength = "DOCUMENTED" | "INFERRED" | "CONJECTURED";
export type VerificationStatus =
  | "VERIFIED"
  | "SECONDARY_ONLY"
  | "PRIMARY_PENDING"
  | "UNVERIFIED";

export interface HymnPair {
  pair_id: string;
  pair_label_sk: string;
  pair_label_en: string;
  source_text_id: string;
  receptor_text_id: string;
  transfer_direction: string;
  primary_locus_code: string;
  all_locus_codes: string;
  modification_typology: string;
  theological_argument_sk: string;
  theological_argument_en: string;
  epistemic_status: "FACTUAL" | "INTERPRETIVE" | "DEFERRED";
  evidentiary_strength: EvidentiaryStrength;
  verification_status: VerificationStatus;
  citation_chain: string;
  chapter_section: string;
  synoptikon_id: string;
  notes_sk: string;
  notes_en: string;
}

// ── CSV Parser ──

/**
 * Parses a CSV string into an array of objects.
 * Handles quoted fields with commas and newlines.
 */
function parseCSV(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let current: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++; // skip escaped quote
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        current.push(field);
        field = "";
      } else if (ch === "\n" || (ch === "\r" && next === "\n")) {
        current.push(field);
        field = "";
        if (current.some((f) => f.trim() !== "")) {
          rows.push(current);
        }
        current = [];
        if (ch === "\r") i++; // skip \r in \r\n
      } else {
        field += ch;
      }
    }
  }
  // Last field/row
  current.push(field);
  if (current.some((f) => f.trim() !== "")) {
    rows.push(current);
  }

  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = (row[i] ?? "").trim();
    });
    return obj;
  });
}

// ── File Loaders ──

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const TAXONOMY_DIR = resolve(process.cwd(), "..", "taxonomy");

function loadCSV(filename: string): Record<string, string>[] {
  const content = readFileSync(resolve(TAXONOMY_DIR, filename), "utf-8");
  return parseCSV(content);
}

// ── Validation helpers ──

const VALID_PRIORITIES = new Set<Locus["priority"]>(["HIGHEST", "HIGH", "MEDIUM", "LOW"]);
const VALID_EPISTEMIC = new Set(["FACTUAL", "INTERPRETIVE", "DEFERRED"]);
const VALID_TRADITIONS = new Set(["LUTHERAN", "UTRAQUIST", "UNITY"]);

function validateLocus(row: Record<string, string>, index: number): Locus {
  const required: (keyof Locus)[] = [
    "locus_code", "locus_name_la", "locus_name_sk", "locus_name_en",
    "description_en", "chapter_section", "priority",
  ];
  for (const key of required) {
    if (!row[key]?.trim()) {
      throw new Error(`loci_hierarchy.csv row ${index + 1}: missing required column "${key}"`);
    }
  }
  const priority = row.priority.trim().toUpperCase();
  if (!VALID_PRIORITIES.has(priority as Locus["priority"])) {
    throw new Error(`loci_hierarchy.csv row ${index + 1}: invalid priority "${row.priority}"`);
  }
  return {
    locus_code: row.locus_code.trim(),
    locus_name_la: row.locus_name_la.trim(),
    locus_name_sk: row.locus_name_sk.trim(),
    locus_name_en: row.locus_name_en.trim(),
    parent_locus: (row.parent_locus ?? "").trim(),
    description_en: row.description_en.trim(),
    chapter_section: row.chapter_section.trim(),
    priority: priority as Locus["priority"],
  };
}

function validatePosition(row: Record<string, string>, index: number): ConfessionalPosition {
  const required: (keyof ConfessionalPosition)[] = [
    "locus_code", "tradition", "tradition_phase", "position_label",
    "position_description", "primary_source_id",
    "epistemic_status",
  ];
  for (const key of required) {
    if (!row[key as string]?.trim()) {
      throw new Error(`confessional_positions.csv row ${index + 1}: missing required column "${key}"`);
    }
  }
  const locusCode = row.locus_code.trim();
  if (!locusCode.includes(".")) {
    throw new Error(`confessional_positions.csv row ${index + 1}: locus_code "${locusCode}" must reference a sub-locus (contain a ".")`);
  }
  if (!VALID_TRADITIONS.has(row.tradition.trim())) {
    throw new Error(`confessional_positions.csv row ${index + 1}: invalid tradition "${row.tradition}"`);
  }
  if (!VALID_EPISTEMIC.has(row.epistemic_status.trim())) {
    throw new Error(`confessional_positions.csv row ${index + 1}: invalid epistemic_status "${row.epistemic_status}"`);
  }
  return {
    locus_code: locusCode,
    tradition: row.tradition.trim() as ConfessionalPosition["tradition"],
    tradition_phase: row.tradition_phase.trim(),
    position_label: row.position_label.trim(),
    position_description: row.position_description.trim(),
    primary_source_id: row.primary_source_id.trim(),
    source_reference: row.source_reference.trim(),
    secondary_source_id: (row.secondary_source_id ?? "").trim(),
    epistemic_status: row.epistemic_status.trim() as ConfessionalPosition["epistemic_status"],
    notes: (row.notes ?? "").trim(),
  };
}

function validateLociSchema(loci: Locus[]): void {
  const codes = new Set<string>();
  for (let i = 0; i < loci.length; i++) {
    if (codes.has(loci[i].locus_code)) {
      throw new Error(`loci_hierarchy.csv row ${i + 1}: duplicate locus_code "${loci[i].locus_code}"`);
    }
    codes.add(loci[i].locus_code);
  }
  for (let i = 0; i < loci.length; i++) {
    if (loci[i].parent_locus && !codes.has(loci[i].parent_locus)) {
      throw new Error(`loci_hierarchy.csv row ${i + 1}: parent_locus "${loci[i].parent_locus}" does not reference any existing locus_code`);
    }
  }
}

// ── Public API ──

let _loci: Locus[] | null = null;
export function getLoci(): Locus[] {
  if (!_loci) {
    _loci = loadCSV("loci_hierarchy.csv").map((row, i) => validateLocus(row, i));
    validateLociSchema(_loci);
  }
  return _loci;
}

export function getParentLoci(): Locus[] {
  return getLoci().filter((l) => !l.parent_locus);
}

export function getSubLoci(parentCode: string): Locus[] {
  return getLoci().filter((l) => l.parent_locus === parentCode);
}

export function getLocusByCode(code: string): Locus | undefined {
  return getLoci().find((l) => l.locus_code === code);
}

let _positions: ConfessionalPosition[] | null = null;
export function getPositions(): ConfessionalPosition[] {
  if (!_positions) {
    _positions = loadCSV("confessional_positions.csv").map((row, i) =>
      validatePosition(row, i),
    );
  }
  return _positions;
}

export function getPositionsForLocus(code: string): ConfessionalPosition[] {
  return getPositions().filter((p) => p.locus_code === code);
}

let _terms: TermVariant[] | null = null;
export function getTerms(): TermVariant[] {
  if (!_terms) {
    _terms = loadCSV("term_variants.csv") as unknown as TermVariant[];
  }
  return _terms;
}

export function getTermsForLocus(code: string): TermVariant[] {
  return getTerms().filter((t) => t.locus_code === code);
}

let _functions: HymnicFunction[] | null = null;
export function getHymnicFunctions(): HymnicFunction[] {
  if (!_functions) {
    _functions = loadCSV("hymnic_functions.csv") as unknown as HymnicFunction[];
    _functions.forEach((f) => {
      f.theological_weight = parseFloat(f.theological_weight as unknown as string);
    });
  }
  return _functions;
}

let _evidence: HymnicEvidence[] | null = null;
export function getHymnicEvidence(): HymnicEvidence[] {
  if (!_evidence) {
    _evidence = loadCSV("hymnic_evidence.csv") as unknown as HymnicEvidence[];
  }
  return _evidence;
}

export function getEvidenceForLocus(code: string): HymnicEvidence[] {
  return getHymnicEvidence().filter((e) =>
    e.locus_codes.split(";").map((c) => c.trim()).includes(code),
  );
}

export function getEvidenceById(textId: string): HymnicEvidence | undefined {
  if (!textId) return undefined;
  return getHymnicEvidence().find((e) => e.text_id === textId);
}

const VALID_EVIDENTIARY = new Set(["DOCUMENTED", "INFERRED", "CONJECTURED"]);
const VALID_VERIFICATION = new Set([
  "VERIFIED",
  "SECONDARY_ONLY",
  "PRIMARY_PENDING",
  "UNVERIFIED",
]);
const VALID_TRANSFER_DIRECTION = new Set([
  "UTRAQUIST_TO_LUTHERAN",
  "UNITY_TO_LUTHERAN",
  "HUSSITE_TO_LUTHERAN",
  "LUTHERAN_REGIONAL_CONTINUITY",
  "LUTHERAN_CONFESSIONAL_INTENSIFICATION",
  "LATIN_TO_VERNACULAR",
  "GERMAN_TO_CZECH",
]);

function validatePair(row: Record<string, string>, index: number): HymnPair {
  const required = [
    "pair_id",
    "pair_label_sk",
    "pair_label_en",
    "primary_locus_code",
    "all_locus_codes",
    "theological_argument_sk",
    "theological_argument_en",
    "epistemic_status",
    "evidentiary_strength",
    "verification_status",
  ];
  for (const key of required) {
    if (!row[key]?.trim()) {
      throw new Error(
        `hymn_pairs.csv row ${index + 1}: missing required column "${key}"`,
      );
    }
  }
  if (!VALID_EPISTEMIC.has(row.epistemic_status.trim())) {
    throw new Error(
      `hymn_pairs.csv row ${index + 1}: invalid epistemic_status "${row.epistemic_status}"`,
    );
  }
  if (!VALID_EVIDENTIARY.has(row.evidentiary_strength.trim())) {
    throw new Error(
      `hymn_pairs.csv row ${index + 1}: invalid evidentiary_strength "${row.evidentiary_strength}"`,
    );
  }
  if (!VALID_VERIFICATION.has(row.verification_status.trim())) {
    throw new Error(
      `hymn_pairs.csv row ${index + 1}: invalid verification_status "${row.verification_status}"`,
    );
  }
  const td = (row.transfer_direction ?? "").trim();
  if (td && !VALID_TRANSFER_DIRECTION.has(td)) {
    throw new Error(
      `hymn_pairs.csv row ${index + 1}: invalid transfer_direction "${td}" (allowed: ${Array.from(VALID_TRANSFER_DIRECTION).join(", ")} or empty)`,
    );
  }
  return {
    pair_id: row.pair_id.trim(),
    pair_label_sk: row.pair_label_sk.trim(),
    pair_label_en: row.pair_label_en.trim(),
    source_text_id: (row.source_text_id ?? "").trim(),
    receptor_text_id: (row.receptor_text_id ?? "").trim(),
    transfer_direction: (row.transfer_direction ?? "").trim(),
    primary_locus_code: row.primary_locus_code.trim(),
    all_locus_codes: row.all_locus_codes.trim(),
    modification_typology: (row.modification_typology ?? "").trim(),
    theological_argument_sk: row.theological_argument_sk.trim(),
    theological_argument_en: row.theological_argument_en.trim(),
    epistemic_status: row.epistemic_status.trim() as HymnPair["epistemic_status"],
    evidentiary_strength:
      row.evidentiary_strength.trim() as EvidentiaryStrength,
    verification_status:
      row.verification_status.trim() as VerificationStatus,
    citation_chain: (row.citation_chain ?? "").trim(),
    chapter_section: (row.chapter_section ?? "").trim(),
    synoptikon_id: (row.synoptikon_id ?? "").trim(),
    notes_sk: (row.notes_sk ?? "").trim(),
    notes_en: (row.notes_en ?? "").trim(),
  };
}

let _pairs: HymnPair[] | null = null;
export function getHymnPairs(): HymnPair[] {
  if (!_pairs) {
    _pairs = loadCSV("hymn_pairs.csv").map((row, i) => validatePair(row, i));
    const ids = new Set<string>();
    for (let i = 0; i < _pairs.length; i++) {
      if (ids.has(_pairs[i].pair_id)) {
        throw new Error(
          `hymn_pairs.csv row ${i + 1}: duplicate pair_id "${_pairs[i].pair_id}"`,
        );
      }
      ids.add(_pairs[i].pair_id);
    }
    // Cross-file integrity: locus codes, evidence text_ids
    const locusCodes = new Set(getLoci().map((l) => l.locus_code));
    const evidenceIds = new Set(getHymnicEvidence().map((e) => e.text_id));
    for (let i = 0; i < _pairs.length; i++) {
      const p = _pairs[i];
      if (!locusCodes.has(p.primary_locus_code)) {
        throw new Error(
          `hymn_pairs.csv row ${i + 1}: primary_locus_code "${p.primary_locus_code}" not found in loci_hierarchy.csv`,
        );
      }
      const allCodes = p.all_locus_codes
        .split(";")
        .map((c) => c.trim())
        .filter(Boolean);
      for (const c of allCodes) {
        if (!locusCodes.has(c)) {
          throw new Error(
            `hymn_pairs.csv row ${i + 1}: all_locus_codes contains "${c}", not found in loci_hierarchy.csv`,
          );
        }
      }
      if (p.source_text_id && !evidenceIds.has(p.source_text_id)) {
        throw new Error(
          `hymn_pairs.csv row ${i + 1}: source_text_id "${p.source_text_id}" not found in hymnic_evidence.csv`,
        );
      }
      if (p.receptor_text_id && !evidenceIds.has(p.receptor_text_id)) {
        throw new Error(
          `hymn_pairs.csv row ${i + 1}: receptor_text_id "${p.receptor_text_id}" not found in hymnic_evidence.csv`,
        );
      }
    }
    // Cross-file integrity: synoptikon comparison ids
    if (_synoptikonIds === null) {
      _synoptikonIds = new Set(_synoptikonComparisons.map((c) => c.id));
    }
    for (let i = 0; i < _pairs.length; i++) {
      const sid = _pairs[i].synoptikon_id;
      if (sid && !_synoptikonIds.has(sid)) {
        throw new Error(
          `hymn_pairs.csv row ${i + 1}: synoptikon_id "${sid}" not found in website/src/data/synoptikon-comparisons.ts`,
        );
      }
    }
  }
  return _pairs;
}

export const TRANSFER_DIRECTION_LABELS: Record<
  string,
  { sk: string; en: string }
> = {
  UTRAQUIST_TO_LUTHERAN: {
    sk: "Z utrakvistických prameňov do luteránskych",
    en: "From Utraquist sources to Lutheran",
  },
  UNITY_TO_LUTHERAN: {
    sk: "Z bratrských prameňov do luteránskych",
    en: "From Brethren sources to Lutheran",
  },
  HUSSITE_TO_LUTHERAN: {
    sk: "Z husitských prameňov do luteránskych",
    en: "From Hussite sources to Lutheran",
  },
  LUTHERAN_REGIONAL_CONTINUITY: {
    sk: "Regionálna luteránska kontinuita (uhorské agendy → CS)",
    en: "Regional Lutheran continuity (Hungarian agendas → CS)",
  },
  LUTHERAN_CONFESSIONAL_INTENSIFICATION: {
    sk: "Luteránska konfesionálna intenzifikácia (mierny → tvrdý register)",
    en: "Lutheran confessional intensification (moderate → hard register)",
  },
  LATIN_TO_VERNACULAR: {
    sk: "Z latinčiny do národného jazyka",
    en: "From Latin to vernacular",
  },
  GERMAN_TO_CZECH: {
    sk: "Z nemčiny do češtiny",
    en: "From German to Czech",
  },
};

export const EVIDENTIARY_LABELS: Record<
  EvidentiaryStrength,
  { sk: string; en: string; description_sk: string; description_en: string }
> = {
  DOCUMENTED: {
    sk: "Doložené",
    en: "Documented",
    description_sk:
      "Recenzovaný odborný prameň výslovne identifikuje tento pár a jeho úpravu.",
    description_en:
      "A peer-reviewed scholarly source explicitly identifies this pair and its modification.",
  },
  INFERRED: {
    sk: "Odvodené",
    en: "Inferred",
    description_sk:
      "Máme priamy prístup k obom svedkom; tvrdenie o úprave je vlastná analýza projektu.",
    description_en:
      "We have direct access to both witnesses; the modification claim is the project's own analysis.",
  },
  CONJECTURED: {
    sk: "Hypotéza",
    en: "Conjectured",
    description_sk:
      "Pracovná hypotéza alebo výskumný cieľ — nemáme zatiaľ ani sekundárnu dokumentáciu, ani overený textový prístup.",
    description_en:
      "Working hypothesis or research target — we lack both secondary documentation and verified textual access.",
  },
};

export const VERIFICATION_LABELS: Record<
  VerificationStatus,
  { sk: string; en: string; description_sk: string; description_en: string }
> = {
  VERIFIED: {
    sk: "Overené",
    en: "Verified",
    description_sk:
      "Členovia projektu osobne porovnali primárne texty (alebo ich kritické vydania) oboch svedkov.",
    description_en:
      "Project members have personally collated the primary texts (or critical editions) of both witnesses.",
  },
  SECONDARY_ONLY: {
    sk: "Iba sekundárny prameň",
    en: "Secondary source only",
    description_sk:
      "Spoliehame sa výlučne na transkripciu/popis v sekundárnom prameni. Primárne svedectvá projektom zatiaľ nepreverené.",
    description_en:
      "We rely entirely on a secondary source's transcription/description. Primary witnesses not yet inspected by project members.",
  },
  PRIMARY_PENDING: {
    sk: "Primárne prístupné, kolacia čaká",
    en: "Primary accessible, collation pending",
    description_sk:
      "Primárne svedectvá sú nám prístupné (digitalizované), no zatiaľ neboli začlenené do dátového modelu.",
    description_en:
      "Primary witnesses are available to us (digitised, accessible) but have not been collated into the data model yet.",
  },
  UNVERIFIED: {
    sk: "Neoverené",
    en: "Unverified",
    description_sk:
      "Ani sekundárna dokumentácia, ani primárny prístup neboli získané.",
    description_en:
      "Neither secondary documentation nor primary access has been obtained.",
  },
};

// ── Tradition display helpers ──

export const TRADITION_META: Record<
  string,
  { sk: string; en: string; color: string; css: string }
> = {
  LUTHERAN: {
    sk: "Luteránska",
    en: "Lutheran",
    color: "#D4A843",
    css: "lutheran",
  },
  UTRAQUIST: {
    sk: "Utrakvistická",
    en: "Utraquist",
    color: "#8B2332",
    css: "utraquist",
  },
  UNITY: {
    sk: "Jednota bratská",
    en: "Unity of Brethren",
    color: "#2E8B8B",
    css: "unity",
  },
};

export const PHASE_LABELS: Record<string, string> = {
  CONFESSIONAL: "Book of Concord",
  HUNGARIAN: "Hungarian regional",
  CS_TRANOSKY: "Cithara Sanctorum",
  OLD: "Old (conservative)",
  NEO: "Neo-Utraquist",
  EARLY: "Early (Chelčický)",
  MATURE: "Mature (post-Lukáš)",
  BLAHOSLAV: "Blahoslav era",
  CONFESSIO_1535: "Confessio Fidei 1535",
};

export const PRIORITY_ORDER: Record<string, number> = {
  HIGHEST: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3,
};
