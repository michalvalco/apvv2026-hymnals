/**
 * Taxonomy data loader — reads CSV files at Astro build time.
 * No external CSV parser needed; these are small, well-formed files
 * where we control the format (see taxonomy/SCHEMA.md).
 */

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

// ── Public API ──

let _loci: Locus[] | null = null;
export function getLoci(): Locus[] {
  if (!_loci) {
    _loci = loadCSV("loci_hierarchy.csv") as unknown as Locus[];
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
    _positions = loadCSV(
      "confessional_positions.csv",
    ) as unknown as ConfessionalPosition[];
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
