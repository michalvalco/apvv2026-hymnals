# Changelog

All notable changes to the TEPALIT Digital Companion are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/) and
[Semantic Versioning](https://semver.org/).

## [0.1.0] — 2026-05-07

First public release of the TEPALIT Digital Companion. Tagged as the citable
dataset baseline for the APVV-24-0484 (TEPALIT) grant chapter on the
Lutheranisation thesis.

### Added

#### Data layer (taxonomy/)

- **Four-layer taxonomy** released as versioned CSV files:
  1. `loci_hierarchy.csv` — 4 loci × 5 sub-loci (now 6 under Ecclesiology with
     L2.6 *Communio Sanctorum et Mariologia*); LA / SK / EN.
  2. `confessional_positions.csv` — attested positions per tradition per locus.
  3. `hymnic_evidence.csv` — tagged text fragments with epistemic classification.
  4. `hymn_pairs.csv` — analytical case-study layer (new in this release).
  - Plus `hymnic_functions.csv` (10 function types) and `term_variants.csv`
    (multilingual theological vocabulary).

- **Five seed hymn-pair dossiers** with three-axis trust classification:
  - `PAIR_001_AY_PANNA` — FACTUAL/DOCUMENTED. Tranovský's documented Marian
    de-Catholicising per Grešová-Sekelská 2021, p. 9. Anchor case.
  - `PAIR_002_PANE_NAS` — INTERPRETIVE/CONJECTURED. Working hypothesis flagged
    as research-target placeholder.
  - `PAIR_003_BA_CS_TARGET` — DEFERRED. Manifest for 34 remaining hymns of
    Vajda 1944's BA→CS list.
  - `PAIR_004_OTCE_NEBESKY` — FACTUAL/DOCUMENTED. Liturgical continuity from
    Bystrická agenda 1585 to CS 1636 per Grešová-Sekelská 2023, pp. XV–XVI.
  - `PAIR_005_NEYSWETEGSIJ` — FACTUAL/DOCUMENTED. Introit continuity per
    Grešová-Sekelská 2023, pp. XV–XVI; Grešová-Sekelská 2021, p. 6.

- **New transfer-direction enum**: `LUTHERAN_REGIONAL_CONTINUITY` for
  intra-tradition Hungarian-Lutheran → Slovak-Lutheran continuity (the BA→CS
  channel; complements the cross-confessional Lutheranisation channels).

- **`AgBratska_1585`** added as a separate source register entry
  (previously collapsed under `AgCeska_1581`).

- **`KancKolinsky_1517`** added as a source register entry (previously
  referenced by the dossier but missing from the index).

#### Companion website

- `/hymn-pairs/` — bilingual case-study dossier with three-axis trust badges,
  source ↔ receptor strips, citation chains, real interactive filter bar
  (epistemic / evidentiary / verification / transfer direction), per-pair
  "How to cite this pair" snippet (APA + BibTeX + permalink), JSON-LD
  Dataset structured data, and visible "text pending direct collation"
  indicators on placeholder evidence rows.

- `/sources/` — anchored register for every source ID referenced by the
  data layer; curated bilingual descriptions for the most-used sources;
  links out to the full `Source_Index.md` on GitHub.

- `/synoptikon/` — parallel text viewer with six confessional-comparison
  pairs (Eucharist, Ecclesiology, Soteriology, Scripture & Tradition).

- `/network/` — D3.js intertextual network graph.

- `/timeline/` — interactive chronology of confessional documents,
  hymnals, and liturgical orders (1420–1683).

- `/taxonomy/` — auto-generated landing pages per locus and sub-locus,
  with confessional-position cards and epistemic-status indicators.

#### Engineering

- Build-time validator (`getHymnPairs`) enforces cross-file integrity:
  locus codes must exist in `loci_hierarchy.csv`; evidence text_ids
  must exist in `hymnic_evidence.csv`. Build fails loudly on typos.

- Open Graph + Twitter card meta tags on every page; Dublin Core hints
  (`DC.publisher`, `DC.rights`, `citation_publisher`); canonical URL.

- `CITATION.cff` at repo root — GitHub now displays "Cite this repository"
  with full preferred-citation block, references entry for Grešová-Sekelská
  2021, CC-BY-4.0 licence, and APVV-24-0484 grant identifier.

- `.zenodo.json` — rich Zenodo deposit metadata for automatic archival
  on each tagged release (once Zenodo↔GitHub integration is enabled).

### Documentation

- `taxonomy/SCHEMA.md` — full field definitions and validation rules for
  all five CSV files including the new `hymn_pairs.csv`.
- `taxonomy/README.md` — four-layer architecture description.
- `CLAUDE.md` — project identity, deliverable, methodology, conventions.
- `CHANGELOG.md` — this file.

### Methodology

- **Three-axis trust framework** distinguishes:
  - `epistemic_status` — what kind of claim is this? (FACTUAL / INTERPRETIVE / DEFERRED)
  - `evidentiary_strength` — how strong is the textual evidence? (DOCUMENTED / INFERRED / CONJECTURED)
  - `verification_status` — has the project personally collated primary witnesses?
    (VERIFIED / SECONDARY_ONLY / PRIMARY_PENDING / UNVERIFIED)

- Pairs flagged `CONJECTURED` or `UNVERIFIED` carry a research-target banner;
  never displayed as established fact.

### Acknowledgments

This work was supported by the Slovak Research and Development Agency
under the Contract no. APVV-24-0484.
