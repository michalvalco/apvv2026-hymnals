# TEPALIT Theological Taxonomy — Design Document

**Version:** 1.0  
**Created:** 2026-03-24  
**Author:** Michal Valčo (with Claude — design partner)  
**Status:** Foundation complete — population in progress  
**Context:** Part of the APVV-24-0484 (TEPALIT) grant project. Serves as the data model for the monograph chapter, the companion website, and the corpus annotation schema.

---

## Purpose

This taxonomy is the intellectual backbone of the TEPALIT chapter *Dogmatická komparácia luteranizmu a českých konfesií*. It serves three functions simultaneously:

1. **Scholarly architecture** — structures the comparative analysis across four theological *loci*
2. **Data model** — underpins all visualisations on the companion website (network graph, parallel viewer, dashboards)
3. **Annotation schema** — provides the tagging vocabulary for hymns, liturgical texts, and confessional documents

Every design decision here has downstream consequences for the website, the analysis, and ultimately the argument of the chapter.

---

## Design Principles

### 1. Grounded in Attested Forms

Categories emerge from what the sources *actually say* — their terminology, their distinctions, their emphases. We do not impose modern systematic theology onto 16th-century texts. The `term_variants.csv` file grounds every concept in historically attested vocabulary across four languages.

### 2. Epistemic Classification at Every Node

Adapted from the ITSERR Epistemic Modesty Framework. Every tagged claim carries a confidence indicator:

| Indicator | When Applied | Example |
|---|---|---|
| **FACTUAL** | Verifiable from the source text; multiple methods agree | "CA X affirms real presence" |
| **INTERPRETIVE** | Reasonable scholarly inference; single-method detection | "This hymn stanza implies spiritual presence" |
| **DEFERRED** | Requires expert theological judgment; contested | "Tranovský's modification reveals deliberate Lutheranisation" |

This prevents the visualisations from presenting interpretive claims with factual certainty — the core danger of DH tools in theology.

### 3. Separation of Domain Data from Logic

All theological categories live in CSV files editable by any team member (Klátik, Sekelská, Valčo) without touching code. Processing scripts import these files. This follows the ITSERR pattern: `entity_mapping.csv` (domain data) ↔ `entity_resolution.py` (logic).

### 4. Multi-Tradition Coverage Without False Symmetry

Not every *locus* has equal weight in every tradition. The taxonomy allows asymmetry:
- Unity ecclesiology is rich and distinctive → many sub-categories
- Unity soteriology largely converges with Lutheran → fewer distinctions needed
- Old-Utraquist positions often lack formal articulation → we note the silence, not invent positions

### 5. Developmental Awareness

Traditions are not monolithic. The taxonomy distinguishes phases:
- `UTRAQUIST_OLD` vs. `UTRAQUIST_NEO`
- `UNITY_EARLY` (Chelčický) vs. `UNITY_MATURE` (post-Lukáš) vs. `UNITY_BLAHOSLAV` (hymnological peak)
- `LUTHERAN_WITTENBERG` vs. `LUTHERAN_HUNGARIAN` (regional adaptations)

---

## File Inventory

| File | Purpose | Population Status |
|---|---|---|
| `loci_hierarchy.csv` | Layer 1: 4 *loci* × 20 sub-loci with descriptions | Complete (structure) |
| `confessional_positions.csv` | Layer 2: Attested positions per tradition per sub-locus | Eucharist complete; others in progress |
| `hymnic_evidence.csv` | Layer 3: Tagged text fragments from hymns and liturgies | Template ready; first FACTUAL pair populated |
| `hymn_pairs.csv` | Layer 4: Analytical dossiers per hymn pair (case-study layer) | First FACTUAL anchor, one PLACEHOLDER, one DEFERRED target |
| `hymnic_functions.csv` | Function-type definitions (how theology appears in hymns) | Complete |
| `term_variants.csv` | Multilingual theological vocabulary (LA, CZ, DE, SK) | Eucharist complete; others in progress |
| `SCHEMA.md` | Field definitions, validation rules, data types | Complete |

---

## Four-Layer Architecture

### Layer 1: Theological Loci (`loci_hierarchy.csv`)

The macro-structure. Four *loci* with five sub-categories each = 20 taggable theological categories. These are the axes of comparison in the chapter and the filtering dimensions on the website.

### Layer 2: Confessional Positions (`confessional_positions.csv`)

The comparative core. For each sub-locus, each tradition's *attested* position is documented with:
- A canonical label
- A prose description
- The primary source citation
- An epistemic status indicator

This is the data that feeds the radar/spider charts and the confessional profile comparisons.

### Layer 3: Hymnic/Liturgical Evidence (`hymnic_evidence.csv`)

The *lex orandi* layer — tagged text fragments from hymns, prayers, and liturgical orders, annotated with:

> **Scope note**: despite the file name, this layer covers more than hymns. Per `SCHEMA.md`, evidence rows can record *liturgical prose* (rubrics, communion-preparation formulas, agenda-of-the-mass passages) alongside hymn texts. The `hymnic_function` field carries the distinction (e.g. `LITURGICAL_PROPER` for introits, `CATECHETICAL` for didactic-rubric passages, `CONFESSIONAL` for sung-creed-style content). The file is named `hymnic_evidence.csv` for historical reasons; "lex orandi evidence" is a more accurate description.

- Which *locus* they express
- Which tradition they belong to
- What hymnic function they serve (confessional, doxological, polemical, etc.)
- What theological modifications occurred during transfer (the "Lutheranisation" evidence)

This layer feeds the network graph and the parallel text viewer.

### Layer 4: Hymn-Pair Dossiers (`hymn_pairs.csv`)

The case-study layer where the chapter's §5 argument lives. Each row is a complete analytical record for one hymn pair:
- Bilingual prose argument (SK / EN)
- Citation chain documenting *who* established the pair
- Three orthogonal trust axes: epistemic status (claim type), evidentiary strength (textual evidence quality), and verification status (whether the project has personally collated the primary witnesses)
- Modification typology, transfer direction, chapter section anchor

This is the "scholarly evidence dossier" — the unit of evidence at peer-review scale. While Layer 3 records text fragments, Layer 4 records *the pair as a scholarly claim*. Pairs marked `CONJECTURED` or `UNVERIFIED` are flagged on the public website so research-in-progress is never displayed as established fact.

---

## Relationship to ITSERR Pipeline

This taxonomy adapts several innovations from the ITSERR-RESILIENCE project:

| ITSERR Component | TEPALIT Adaptation |
|---|---|
| `entity_mapping.csv` (130 Latin name variants → 30 canonical entities) | `term_variants.csv` (theological terms across 4 languages → canonical locus codes) |
| Rhetorical context types (POLEMIC, TESTIMONIAL, HERMENEUTICAL, etc.) | Hymnic function types (CONFESSIONAL, DOXOLOGICAL, POLEMICAL, etc.) |
| Epistemic classification (FACTUAL / INTERPRETIVE / DEFERRED) | Applied at every layer of the taxonomy |
| Proximity weighting system (same sentence > same block > same chapter) | Adapted: same stanza > same hymn > same kancionál section |
| Entity Resolution module pattern (CSV data + Python logic) | Future: `validate_taxonomy.py`, `build_network_json.py` |

---

## Usage Notes

### For the Chapter

When writing §4 (Komparatívna analýza), each sub-section corresponds to a `locus_code`. The `confessional_positions.csv` provides the structured comparison; `hymnic_evidence.csv` provides the *lex orandi* examples. The chapter's argument flows from Layer 2 (normative documents say X) through Layer 3 (but hymns reveal Y).

### For the Website

- **Network graph nodes** = entries in `hymnic_evidence.csv` + `confessional_positions.csv`
- **Network graph edges** = shared `locus_code` values, cross-references, source/adaptation pairs
- **Parallel text viewer (Synoptikon)** = pairs identified in `hymnic_evidence.csv` via `theological_modification` field
- **Hymn-pair dossier (`/hymn-pairs/`)** = each row of `hymn_pairs.csv` rendered as a research record with epistemic flags, citation chain, and link to the underlying evidence rows / Synoptikon comparison
- **Filtering controls** = `locus_code`, `tradition`, `hymnic_function`, `epistemic_status`, `evidentiary_strength`, `verification_status`
- **Radar charts** = aggregated from `confessional_positions.csv`

### For Team Collaboration

Sekelská can add hymnological evidence to `hymnic_evidence.csv` without modifying any other file. Klátik can review or extend `confessional_positions.csv`. The CSV format is deliberately chosen for accessibility — editable in Excel, diffable in Git, importable into any database.

---

## Acknowledgment

This work was supported by the Slovak Research and Development Agency under the Contract no. APVV-24-0484.

---

*See `SCHEMA.md` for detailed field definitions and validation rules.*
