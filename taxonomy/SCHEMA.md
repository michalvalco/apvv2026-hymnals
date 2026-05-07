# TEPALIT Taxonomy — Schema Reference

**Version:** 1.0  
**Last updated:** 2026-03-24

This document defines every field across the taxonomy CSV files. It serves as the contract for data validation scripts and for any team member adding data.

---

## General Rules

1. **Encoding:** All CSV files use UTF-8 encoding.
2. **Delimiter:** Comma (`,`). Fields containing commas must be quoted.
3. **Multi-value separator:** Semicolon (`;`) within a single field — e.g., `L1.1;L1.5` for multiple locus codes.
4. **Empty fields:** Leave blank (not `NULL`, not `N/A`). An empty field means "not yet documented" or "not applicable."
5. **Epistemic status:** Every row in `confessional_positions.csv` and `hymnic_evidence.csv` MUST have an `epistemic_status` value. No exceptions.
6. **Source references:** Use `Short ID` values from `Sources/Source_Index.md`. These are stable identifiers.

---

## File: `loci_hierarchy.csv`

The master list of theological *loci* and sub-*loci*.

| Field | Type | Required | Description |
|---|---|---|---|
| `locus_code` | String | YES | Unique identifier. Format: `L{n}` for parent loci, `L{n}.{m}` for sub-loci. |
| `locus_name_la` | String | YES | Latin name of the locus (used in scholarly apparatus). |
| `locus_name_sk` | String | YES | Slovak name (for the chapter text). |
| `locus_name_en` | String | YES | English name (for the website and international audience). |
| `parent_locus` | String | NO | Parent `locus_code` (empty for top-level loci). |
| `description_en` | String | YES | One-sentence description of what this locus covers. |
| `chapter_section` | String | YES | Chapter section reference (e.g., `§4.1`). |
| `priority` | Enum | YES | Research priority: `HIGHEST`, `HIGH`, `MEDIUM`, `LOW`. |

**Validation rules:**
- `locus_code` must be unique across the file.
- `parent_locus`, if non-empty, must reference an existing `locus_code`.
- `priority` must be one of the four enumerated values.

---

## File: `confessional_positions.csv`

Attested theological positions per tradition per sub-locus.

| Field | Type | Required | Description |
|---|---|---|---|
| `locus_code` | String | YES | References `loci_hierarchy.csv`. Must be a sub-locus code (e.g., `L1.1`, not `L1`). |
| `tradition` | Enum | YES | `LUTHERAN`, `UTRAQUIST`, `UNITY`. |
| `tradition_phase` | String | YES | Developmental phase. See enumeration below. |
| `position_label` | String | YES | Machine-readable label (snake_case). Used as node identifier in visualisations. |
| `position_description` | String | YES | Prose description of the position. 1–3 sentences. Must be in the author's own words, not a direct quote. |
| `primary_source_id` | String | YES | Short ID from Source Index. The source where this position is *most clearly* articulated. |
| `source_reference` | String | NO | Specific location within the source (article number, page range, etc.). |
| `secondary_source_id` | String | NO | Short ID of a secondary source that analyses or contextualises this position. |
| `epistemic_status` | Enum | YES | `FACTUAL`, `INTERPRETIVE`, `DEFERRED`. |
| `notes` | String | NO | Free-text annotation. Methodological caveats, cross-references, research tasks. |

**Tradition phase values:**

| Tradition | Allowed Phases |
|---|---|
| `LUTHERAN` | `CONFESSIONAL` (Book of Concord normative), `HUNGARIAN` (regional confessions), `CS_TRANOSKY` (as expressed in Cithara Sanctorum) |
| `UTRAQUIST` | `OLD` (pre-1520s conservative), `NEO` (post-Lutheran-contact, Agenda Česká era) |
| `UNITY` | `EARLY` (Chelčický to c. 1490), `MATURE` (Lukáš Pražský era, c. 1500–1528), `BLAHOSLAV` (mid-16th c. hymnological peak), `CONFESSIO_1535` (formal confession) |

**Validation rules:**
- `locus_code` must exist in `loci_hierarchy.csv` and must be a sub-locus (contain a `.`).
- `tradition` must be one of the three enumerated values.
- `primary_source_id` must exist in Source Index (not validated by script — manual check).
- `position_label` must be unique within the combination of `locus_code` + `tradition` + `tradition_phase`.
- `epistemic_status` must be one of the three enumerated values.

---

## File: `hymnic_evidence.csv`

Tagged text fragments from hymns, prayers, and liturgical orders. This is the *lex orandi* data layer.

| Field | Type | Required | Description |
|---|---|---|---|
| `text_id` | String | YES | Unique identifier. Format: `{collection_abbreviation}_{number}` (e.g., `CS042`, `IV208`, `AC_MASS_01`). |
| `source_collection_id` | String | YES | Short ID from Source Index referencing the kancionál, agenda, or liturgical order. |
| `source_number` | String | NO | Hymn number, folio reference, or section identifier within the collection. |
| `incipit` | String | YES | First line or identifying phrase of the text. |
| `stanza_or_section` | String | NO | Specific location within the text (e.g., `st. 3`, `canon`, `rubric after communion`). |
| `locus_codes` | String | YES | Semicolon-separated list of `locus_code` values this text fragment expresses. |
| `tradition` | Enum | YES | `LUTHERAN`, `UTRAQUIST`, `UNITY`. |
| `tradition_phase` | String | YES | Phase within tradition (same values as `confessional_positions.csv`). |
| `hymnic_function` | Enum | YES | Function code from `hymnic_functions.csv`. |
| `original_language` | Enum | YES | `LA` (Latin), `CZ` (Czech), `DE` (German), `SK` (Slovak). |
| `text_snippet` | String | NO | Short excerpt (≤100 words) of the relevant passage. Transcribed from source. |
| `theological_modification` | String | NO | Description of how this text was modified from its source (if applicable). **The key evidence field for the Lutheranisation thesis.** |
| `modification_type` | Enum | NO | Type of modification: `ADDITION`, `DELETION`, `SUBSTITUTION`, `REFRAMING`, `STRUCTURAL`. Empty if no modification. |
| `paired_text_id` | String | NO | `text_id` of the source or adaptation that this text is paired with for comparison. |
| `epistemic_status` | Enum | YES | `FACTUAL`, `INTERPRETIVE`, `DEFERRED`. |
| `notes` | String | NO | Free-text annotation. |

**Modification type definitions:**

| Type | Description | Example |
|---|---|---|
| `ADDITION` | New material added that was not in the source | Tranovský adds a real-presence stanza |
| `DELETION` | Material from the source removed | A Unity disciplinary stanza dropped |
| `SUBSTITUTION` | Specific terms or phrases replaced | 'duchovně' (spiritually) → 'pravě' (truly) |
| `REFRAMING` | Same content but recontextualised (e.g., moved to a different liturgical position) | A general hymn repositioned as communion hymn |
| `STRUCTURAL` | Stanza order changed, stanzas split/merged | Reordering to place confessional content first |

**Validation rules:**
- `text_id` must be unique across the file.
- `locus_codes` entries must all exist in `loci_hierarchy.csv`.
- `hymnic_function` must exist in `hymnic_functions.csv`.
- `paired_text_id`, if non-empty, must reference another `text_id` in this file.
- If `theological_modification` is non-empty, `modification_type` must also be non-empty.
- `epistemic_status` is required — no exceptions.

---

## File: `hymn_pairs.csv`

The case-study layer that sits *above* `hymnic_evidence.csv`. Each row is a complete analytical dossier for one hymn pair (or multi-witness comparison) — the unit of evidence at which the chapter's §5 argument operates. While `hymnic_evidence.csv` records text fragments and `paired_text_id` links them, `hymn_pairs.csv` records the *pair as a scholarly claim*: who documented it, with what confidence, on what evidentiary basis, and whether it has been verified against primary sources by this project.

| Field | Type | Required | Description |
|---|---|---|---|
| `pair_id` | String | YES | Unique identifier. Format: `PAIR_{n}_{short_label}` (e.g., `PAIR_001_AY_PANNA`). |
| `pair_label_sk` | String | YES | Display label in Slovak. |
| `pair_label_en` | String | YES | Display label in English. |
| `source_text_id` | String | NO | `text_id` from `hymnic_evidence.csv` for the source (earlier) text. May be empty for research-target entries. |
| `receptor_text_id` | String | NO | `text_id` from `hymnic_evidence.csv` for the receptor (later) text. May be empty for research-target entries. |
| `transfer_direction` | Enum | NO | `UTRAQUIST_TO_LUTHERAN`, `UNITY_TO_LUTHERAN`, `HUSSITE_TO_LUTHERAN`, `LUTHERAN_REGIONAL_CONTINUITY`, `LUTHERAN_CONFESSIONAL_INTENSIFICATION`, `LATIN_TO_VERNACULAR`, `GERMAN_TO_CZECH`. Empty for non-directional comparisons. `LUTHERAN_REGIONAL_CONTINUITY` covers intra-tradition Hungarian-Lutheran → Slovak-Lutheran channels (e.g. BA 1585 → CS 1636). `LUTHERAN_CONFESSIONAL_INTENSIFICATION` covers intra-codex or intra-tradition shifts from a moderate Lutheran register (often with Utraquist liturgical residue) to a sharper confessional Lutheran register (e.g. AC 1581 → BA 1585 within one codex). |
| `primary_locus_code` | String | YES | The single locus most theologically at stake in this pair. References `loci_hierarchy.csv`. |
| `all_locus_codes` | String | YES | Semicolon-separated full set of relevant locus codes. |
| `modification_typology` | String | NO | Semicolon-separated modification types from `hymnic_evidence.csv` schema (`ADDITION;DELETION;SUBSTITUTION;REFRAMING;STRUCTURAL`). Empty for research-target entries. |
| `theological_argument_sk` | String | YES | 1–4 sentence prose argument (Slovak). What does this pair show, theologically? |
| `theological_argument_en` | String | YES | 1–4 sentence prose argument (English). |
| `epistemic_status` | Enum | YES | `FACTUAL`, `INTERPRETIVE`, `DEFERRED`. Same semantics as elsewhere. |
| `evidentiary_strength` | Enum | YES | Quality of textual evidence — see definitions below. |
| `verification_status` | Enum | YES | Whether *this project* has personally verified the primary witnesses — see definitions below. |
| `citation_chain` | String | NO | Semicolon-separated `Short ID`s of secondary sources documenting this pair. |
| `chapter_section` | String | NO | Where this pair will be discussed in the monograph chapter (e.g., `§5`, `§4.1`). |
| `synoptikon_id` | String | NO | If the pair has a corresponding Synoptikon comparison, the comparison `id`. |
| `notes_sk` | String | NO | Methodological notes, verification roadmap, related observations (Slovak). |
| `notes_en` | String | NO | Same (English). |

**`evidentiary_strength` values:**

| Value | Meaning |
|---|---|
| `DOCUMENTED` | A peer-reviewed scholarly source explicitly identifies this pair and its modification. We are reporting what the literature has established. |
| `INFERRED` | We have direct access to both witnesses and have made the comparison ourselves; the modification claim is the project's own analysis. |
| `CONJECTURED` | We have neither secondary documentation nor verified textual access; the pair is a research target or working hypothesis. Must be flagged in the public surface. |

**`verification_status` values:**

| Value | Meaning |
|---|---|
| `VERIFIED` | Project members have personally collated the primary texts (or a critical edition) of both witnesses. |
| `SECONDARY_ONLY` | We rely entirely on a secondary source's transcription/description. Primary witnesses not yet inspected by project members. |
| `PRIMARY_PENDING` | Primary witnesses are available to us (digitised, accessible) but have not been collated into the data model yet. |
| `UNVERIFIED` | Neither secondary documentation nor primary access has been obtained. |

**Validation rules:**
- `pair_id` must be unique across the file.
- `primary_locus_code` and every code in `all_locus_codes` must exist in `loci_hierarchy.csv`.
- `source_text_id` and `receptor_text_id`, if non-empty, must reference existing `text_id` values in `hymnic_evidence.csv`.
- `synoptikon_id`, if non-empty, must reference an existing comparison `id` in `website/src/data/synoptikon-comparisons.ts`.
- `modification_typology` is required when at least one underlying evidence row (referenced by `source_text_id` or `receptor_text_id`) populates `theological_modification`. It MAY remain empty for pure-continuity pairs where no textual modification is documented (e.g. `LUTHERAN_REGIONAL_CONTINUITY` pairs), provided the prose argument explains the absence.
- `epistemic_status`, `evidentiary_strength`, and `verification_status` are all required — no exceptions.

**Display rule for the public website:** any pair with `evidentiary_strength = CONJECTURED` or `verification_status = UNVERIFIED` MUST be visually marked as such on the public surface. Concealing research-in-progress as established fact violates the project's epistemic-transparency commitment.

---

## File: `hymnic_functions.csv`

Definitions of how theology manifests in hymns and liturgical texts.

| Field | Type | Required | Description |
|---|---|---|---|
| `function_code` | String | YES | Unique machine-readable code (UPPER_SNAKE_CASE). |
| `function_name_en` | String | YES | English display name. |
| `function_name_sk` | String | YES | Slovak display name (for the chapter). |
| `description_en` | String | YES | 1–2 sentence definition. |
| `detection_markers` | String | YES | Textual cues that indicate this function (keywords, formulae, structural features). |
| `theological_weight` | Float | YES | Weight multiplier (0.0–1.0) for network analysis. Higher = more theologically significant. |
| `example` | String | YES | A concrete example illustrating this function. |

---

## File: `term_variants.csv`

Multilingual theological vocabulary mapping.

| Field | Type | Required | Description |
|---|---|---|---|
| `canonical_term` | String | YES | Machine-readable canonical label (snake_case). Used as node identifier. |
| `locus_code` | String | YES | References `loci_hierarchy.csv`. |
| `latin` | String | YES | Latin forms, semicolon-separated. Include inflectional variants found in sources. |
| `czech_16c` | String | YES | 16th-century Czech forms as attested in sources. Use period-appropriate orthography. |
| `german_16c` | String | YES | 16th-century German forms. |
| `slovak_cs` | String | YES | Slovak forms as found in Cithara Sanctorum and related texts. May include bibličtina forms. |
| `semantic_field` | String | YES | Grouping within the locus (e.g., `MODE_OF_PRESENCE`, `COMMUNION_PRACTICE`). UPPER_SNAKE_CASE. |
| `notes` | String | NO | Etymology, usage context, attestation sources, scholarly discussion. |

**Validation rules:**
- `canonical_term` must be unique across the file.
- `locus_code` must exist in `loci_hierarchy.csv`.
- All four language fields must be non-empty (even if only one form is known — note uncertainty in `notes`).

**Orthographic note:** Czech 16th-century forms should reflect *attested* orthography from the period (e.g., `ů` not `ú` where period sources use the former; `spůsob` not `způsob`). The `notes` field should flag cases where modernised forms are used due to lack of original attestation.

---

## Cross-File Integrity Constraints

1. Every `locus_code` used in any file must exist in `loci_hierarchy.csv`.
2. Every `source_collection_id` and `primary_source_id` should exist in `Sources/Source_Index.md` (manual verification — Source Index is not a CSV).
3. Every `hymnic_function` used in `hymnic_evidence.csv` must exist in `hymnic_functions.csv`.
4. Every `paired_text_id` in `hymnic_evidence.csv` must reference another existing `text_id` in the same file.
5. Every `canonical_term` in `term_variants.csv` should be associable with at least one `confessional_positions.csv` entry via shared `locus_code`.
6. Every `source_text_id` and `receptor_text_id` in `hymn_pairs.csv` must reference an existing `text_id` in `hymnic_evidence.csv` (when populated).
7. Every `synoptikon_id` in `hymn_pairs.csv` must reference an existing comparison id in the website data layer.

---

## Future: Validation Script

A `validate_taxonomy.py` script (to be developed in Phase 3) will enforce all rules above. Adapted from the ITSERR pattern where `entity_resolution.py` validates `entity_mapping.csv`. The script will:

1. Load all CSV files
2. Check all cross-file references
3. Verify enum values
4. Flag missing required fields
5. Report uniqueness violations
6. Output a validation report as Markdown

---

*This schema is a living document. Update it whenever a field is added, renamed, or redefined.*
