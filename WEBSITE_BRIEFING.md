# TEPALIT Companion Website — Briefing for Claude Code

**From:** Claude Desktop (Session with Michal Valčo, March 24, 2026)  
**To:** Claude Code for implementation  
**Project:** APVV-24-0484 (TEPALIT) — Companion website for the monograph chapter

---

## What This Is

A world-class academic Digital Humanities website accompanying Michal Valčo's monograph chapter *Dogmatická komparácia luteranizmu a českých konfesií (utrakvizmus, Jednota bratská) v zrkadle liturgických a hymnologických prameňov (16.–18. storočie)* for the TEPALIT grant project.

The site embodies the core thesis — *lex orandi, lex credendi* ("what is prayed reveals what is believed") — by making hymn texts, liturgical orders, and confessional documents the primary interactive interface. Visitors don't just read about theological convergence; they *see it emerge from the sources* through interactive exploration.

**The site is maximalist in vision, built in tiers.** Tier 1 (serves the chapter) is the MVP. Tiers 2–3 extend toward a full DH research platform. Every tier must be production-quality, not a prototype.

---

## Repository Context

```
apvv2026-hymnals/                  ← THIS REPO
├── CLAUDE.md                      ← Project identity + conventions for Claude Code
├── Outline.md                     ← Detailed chapter outline with source mapping
├── Sources/
│   ├── Source_Index.md            ← Master source registry (50+ primary/secondary sources)
│   └── [documented sources]
├── taxonomy/                      ← THE DATA FOUNDATION (created March 24, 2026)
│   ├── README.md                  ← Design document (share with team)
│   ├── SCHEMA.md                  ← Field definitions, validation rules
│   ├── loci_hierarchy.csv         ← 4 loci × 5 sub-loci = 20 theological categories
│   ├── confessional_positions.csv ← Attested positions per tradition per locus (26 entries, growing)
│   ├── hymnic_evidence.csv        ← Tagged text fragments (template with examples, populated Phase 3)
│   ├── hymnic_functions.csv       ← 10 function types (how theology appears in hymns)
│   └── term_variants.csv          ← 34 terms × 4 languages (LA, CZ, DE, SK)
├── website/                       ← TO BE CREATED — site lives here
├── resources/                     ← PDFs, scans (gitignored)
└── admin/                         ← Grant admin
```

### Related Repository (Same Machine)

`C:\Users\valco\OneDrive\Documents\GitHub\ITSERR-RESILIENCE-Project\` — Michal's DH pipeline project for 16th-century Latin texts. Has a mature MkDocs site, OCR pipeline, Corpus Browser prototype, and entity resolution system. Several patterns should be adapted for TEPALIT. Key files to examine:

- `entity_relationship_strategy.md` — Entity relationship analysis framework with proximity weights, rhetorical context types, and visualisation priorities
- `03_prototype/stockel_annotation/ENTITY_RESOLUTION_ROADMAP.md` — Entity resolution architecture (CSV data + Python logic pattern)
- `01_research/epistemic_modesty_framework.md` — FACTUAL/INTERPRETIVE/DEFERRED classification system
- `docs/` — MkDocs Material site structure
- `03_prototype/stockel_annotation/scripts/build_corpus_json.py` — Corpus data generation pattern
- `03_prototype/stockel_annotation/scripts/entity_resolution.py` — Entity mapping from CSV

---

## Design Philosophy

### Visual Identity
Dark, warm palette — aged parchment tones, deep burgundy, gold accents — with modern typography. The gravitas of a Kralická Bible page meeting the interactivity of Observable notebooks. Three tradition colours used throughout:

| Tradition | Colour | Hex (suggested) |
|---|---|---|
| Lutheran | Gold | `#D4A843` |
| Utraquist | Crimson | `#8B2332` |
| Unity of Brethren | Teal | `#2E8B8B` |

### Core Principle
"What Was Sung Reveals What Was Believed" — not just a tagline but a methodological statement. Every interactive feature should *demonstrate* the *lex orandi, lex credendi* method rather than merely describe it.

### Sustainability Architecture (NON-NEGOTIABLE)
- **Static site generator** — Astro or Next.js static export
- **All data as flat files** — JSON, CSV, Markdown. NO database dependency. NO server to maintain.
- **Host on GitHub Pages** — zero cost, CI/CD from repo
- **No Typesense, no Neo4j, no server-side search** — use Pagefind (client-side) or similar
- The site must survive indefinitely after the 2028 grant end. It's just files on the internet.

---

## Technical Stack

| Layer | Technology | Rationale |
|---|---|---|
| Static site generator | Astro (preferred) or Next.js static export | Fast, modern, MDX for chapter, component islands |
| Styling | Tailwind CSS + custom design tokens | Rapid iteration, consistent theming |
| Visualisations | D3.js + Observable Plot | Gold standard for custom academic viz |
| Graph rendering | Sigma.js or d3-force | Large node/edge networks |
| Text display | Custom (or CETEIcean.js if TEI adopted later) | Parallel text viewer |
| Search | Pagefind (client-side) | Zero server dependency |
| Maps | Leaflet.js (if Tier 3 reached) | Open-source, historical overlays |
| Charts | Observable Plot or Chart.js | Declarative, responsive |
| Annotations | Hypothes.is (Tier 3) | Standard scholarly layer |
| Hosting | GitHub Pages | Free, CI/CD |

---

## Tier 1 — "Serves the Chapter" (BUILD THIS FIRST)

This is the MVP that makes the monograph more powerful. Target: ~200 hours of Michal's time.

### 1.1 Site Scaffold
- Landing page with hero section, project summary, team, APVV acknowledgment
- Navigation structure for all planned sections (even if some are "Coming Soon")
- Responsive design, dark/warm palette
- Footer with APVV-24-0484 acknowledgment, CC license, GitHub link

### 1.2 Interactive Timeline — Confessional Streams
Horizontal, zoomable timeline with three parallel swim-lanes (Lutheran gold, Utraquist crimson, Unity teal). Events: confessional documents, key hymnals, liturgical orders, political milestones. Connecting arcs between lanes show influence/borrowing/reaction.

**Data source:** Build from `Sources/Source_Index.md` — each source has a date and tradition.
**Tech:** D3.js with zoom/pan. Each node clickable → source card with metadata.

### 1.3 Hypertext Monograph Viewer
The chapter itself published as richly annotated hypertext:
- Every citation is a live link to the source in the corpus explorer (when built)
- Every theological claim has a "show evidence" toggle → expands to show primary texts
- Marginal icons link to relevant visualisations
- Footnotes expand inline; bibliography links to digital editions
- Section navigation with progress indicator
- **The chapter text will be in Slovak** — the interface chrome should be bilingual (SK + EN)

**Data source:** Chapter Markdown (from `Drafts/`) processed through Astro MDX pipeline.

### 1.4 Modest Network Graph
Hand-curated from the chapter arguments. ~80–120 nodes, not auto-generated from massive corpus.
- Nodes = texts (hymns, confessional articles, liturgical rubrics)
- Edges = relationships typed and coloured (borrowing, polemic, parallel, shared scripture)
- Filtering: by tradition, by locus, by date range
- Cluster detection shows unexpected cross-confessional affinity

**Data source:** `taxonomy/confessional_positions.csv` + `taxonomy/hymnic_evidence.csv` → processed into JSON for D3/Sigma.

### 1.5 Parallel Text Viewer — Synoptikon
Even 5–8 carefully chosen text comparisons covering key moments in each locus.
- Multi-column synchronised reader
- Aligned by theological section / stanza
- Colour-highlighted differences (diff view, but for theology — colour-code by locus)
- Toggle between original language and translation
- Click any phrase → highlight across all parallel texts

**Data source:** Manually curated comparison pairs. Format: JSON with aligned segments.

### 1.6 Theological Taxonomy Documentation
The taxonomy itself (`taxonomy/` directory) published as a scholarly reference.
- Browsable hierarchy of 20 sub-loci
- Each locus page shows: confessional positions across traditions, key terms in 4 languages, relevant hymnic evidence
- This is a *scholarly contribution*, not just a tech feature

**Data source:** `taxonomy/*.csv` files rendered as interactive tables.

---

## Tier 2 — "Scales the Argument" (Build After Tier 1)

### 2.1 Corpus Explorer — Thesaurus
Faceted search over the tagged corpus:
- Facets: tradition, document type, locus, date, language, sacramental terminology, scriptural references
- Result cards with incipit, metadata, locus tags, snippet with keyword highlighting
- Links to parallel viewer, network graph position

**Data source:** `taxonomy/hymnic_evidence.csv` (when fully populated) → indexed JSON.

### 2.2 Lutheranisation Diff Tool ★ (SIGNATURE FEATURE)
Take a specific hymn and show its transformation step-by-step:
- Original Czech text (e.g., from Ivančický kancionál)
- Intermediate adaptation (if traceable)
- Cithara Sanctorum version
- At each stage: highlight what changed *theologically* (not just textually)
- Colour-code changes by locus (L1 = one colour, L2 = another, etc.)
- Side panel: explain *why* the change matters doctrinally

**Data source:** `taxonomy/hymnic_evidence.csv` pairs linked via `paired_text_id`, with `theological_modification` and `modification_type` fields driving the diff display.

**Implementation concept:** A three-column view (or stepped horizontal scroll). Left = source. Middle = intermediate (if exists). Right = CS version. Between columns: animated "transformation" annotations showing what moved, what was added, what was deleted. Each annotation links to the relevant locus in the taxonomy.

### 2.3 Confessional Fingerprinting ★
Radar/spider charts where each tradition develops a distinctive "shape":
- Axes = the 20 sub-loci (or a curated subset)
- Values = density of attestation in hymnic evidence for each locus
- Overlay traditions for comparison
- **Per-hymn fingerprinting:** Individual hymns or texts also get shapes. Ask: "Does this CS hymn look more Lutheran or more Unity in its theological fingerprint?"
- Classification tool: paste/select a text → compute its fingerprint → show nearest tradition match

**Data source:** Aggregated from `taxonomy/hymnic_evidence.csv` by `locus_codes` × `tradition`.

### 2.4 Analytical Dashboards
Pre-built interactive charts presenting key findings:

**2.4a Chord Diagram — "Who Borrows from Whom?"**
Traditions as arc segments; chords show volume/direction of textual borrowing. Immediately shows that Unity→Lutheran transfer (via CS) is massive, while Lutheran→Utraquist is minimal.

**2.4b Sankey Diagram — "The Journey of a Hymn"**
Trace individual hymns from origin through intermediate collections to final CS form. Each stage shows what changed.

**2.4c Stacked Area Chart — "Theological Emphasis Over Time"**
X = decades (1400–1700). Y = proportion of corpus tagged with each locus.

**2.4d Radar/Spider Charts — "Confessional Profiles"**
Per-tradition, overlaid for comparison. The "shapes" from §2.3.

**Tech:** Observable Plot or Chart.js. Data as CSV/JSON from taxonomy.

---

## Tier 3 — "World-Class DH Showcase" (Only If Time Permits)

### 3.1 Scriptural Root System Visualisation ★
Visualise *patterns* of biblical citation across traditions:
- Which traditions cite which books, which verses, in which liturgical contexts
- Tree or root-system visualisation: biblical books as roots, confessional texts as branches
- Reveals deep structural affinities invisible in linear reading
- Interactive: click a biblical book → see all traditions' citations light up; click a tradition → see its scriptural "root system"

### 3.2 Geographic Map — Loci Reformationis
Interactive map of Central Europe:
- Cities where documents were produced/printed/adopted
- Trade routes for hymnal dissemination
- Confessional territory overlays (toggle by date)
- Animated boundary shifts (1400→1700 slider)

**Tech:** Leaflet.js with historical base maps.

### 3.3 Full IIIF Facsimile Integration
Deep zoom on manuscript/print images via OpenSeadragon + IIIF.

### 3.4 Community Annotation Layer
Hypothes.is integration on the monograph text.

### 3.5 Export & API
All visualisations exportable as SVG/PNG. Corpus data downloadable as CSV/JSON under CC-BY.

---

## The Taxonomy → Website Data Pipeline

This is the critical data flow. Every visualisation reads from the taxonomy CSVs:

```
taxonomy/loci_hierarchy.csv          → Site navigation, locus pages, filter controls
taxonomy/confessional_positions.csv  → Radar charts, confessional profiles, network graph nodes
taxonomy/hymnic_evidence.csv         → Network graph edges, parallel viewer, Lutheranisation Diff,
                                       corpus explorer, Sankey diagrams, chord diagrams
taxonomy/hymnic_functions.csv        → Filter options, edge styling in network graph
taxonomy/term_variants.csv           → Multilingual search, theological vocabulary heatmaps
```

**Build script needed:** A `scripts/build_site_data.py` (or JS equivalent) that:
1. Reads all taxonomy CSVs
2. Validates against `SCHEMA.md` rules
3. Generates JSON files optimised for each visualisation component
4. Outputs to `website/src/data/` (or equivalent Astro data directory)

This follows the ITSERR pattern: `build_corpus_json.py` reads source data → generates `corpus.json` → Corpus Browser reads it.

---

## Patterns to Adapt from ITSERR

### 1. Entity Resolution (CSV → canonical mapping)
ITSERR: `entity_mapping.csv` (130 variants) → `entity_resolution.py` → 30 canonical entities  
TEPALIT: `term_variants.csv` (34 terms × 4 languages) → `build_site_data.py` → canonical locus tags

### 2. Epistemic Classification
ITSERR: Every detected reference carries FACTUAL/INTERPRETIVE/DEFERRED status  
TEPALIT: Every `confessional_positions.csv` and `hymnic_evidence.csv` entry carries the same. **Visualisations must display this.** Colour/opacity/icon conventions for each status.

### 3. Proximity Weighting
ITSERR: Same sentence (5×) > same Q&A block (3×) > same sermon (1.5×)  
TEPALIT: Same stanza (5×) > same hymn (3×) > same kancionál section (1.5×) > same collection (1×)

### 4. Rhetorical Context → Hymnic Function
ITSERR: 6 types (POLEMIC, TESTIMONIAL, HERMENEUTICAL, ILLUSTRATIVE, PROBATIVE, PRESCRIPTIVE)  
TEPALIT: 10 types (CONFESSIONAL, DOXOLOGICAL, CATECHETICAL, PENITENTIAL, POLEMICAL, NARRATIVE, DEVOTIONAL, ESCHATOLOGICAL, LITURGICAL_PROPER, INTERCESSORY)

### 5. MkDocs Documentation Site
ITSERR uses MkDocs Material with GitHub Pages CI/CD. TEPALIT site is more ambitious (not just docs but interactive DH), so Astro is preferred — but the CI/CD pattern is the same.

### 6. Three-Tier Interface
ITSERR: Overview (summary) → Exploration (interactive) → Raw Data (export)  
TEPALIT: Same principle across all visualisations.

---

## Epistemic Classification in Visualisations

This is non-negotiable. Adapted from ITSERR's Epistemic Modesty Framework. Every visualisation must visually distinguish:

| Status | Visual Convention | Meaning |
|---|---|---|
| FACTUAL | Full opacity, solid lines, filled markers | Verifiable from source text |
| INTERPRETIVE | 80% opacity, standard lines, half-filled markers | Reasonable scholarly inference |
| DEFERRED | 60% opacity, dashed lines, hollow markers | Requires expert judgment |

This prevents the DH trap of presenting interpretive claims as established facts. The distinction must be visible at a glance, not buried in hover tooltips.

---

## Build Order

1. **Site scaffold** — Astro project, Tailwind, routing, landing page, navigation
2. **Taxonomy pages** — Render CSV data as interactive reference (proves the data pipeline works)
3. **Timeline** — High visual impact, moderate complexity, good early win
4. **Parallel text viewer** — Core scholarly tool, moderate complexity
5. **Network graph** — The flagship visualisation; needs taxonomy data
6. **Monograph viewer** — MDX pipeline for chapter text
7. **Lutheranisation Diff** — Signature feature, Tier 2
8. **Confessional fingerprinting** — Radar charts + per-text classification, Tier 2
9. **Analytical dashboards** — Derived from data; incremental
10. **Corpus explorer + search** — Needs larger corpus; Tier 2–3
11. **Scriptural root system** — Tier 3, novel visualisation
12. **Map, IIIF, annotation** — Tier 3, if time permits

---

## What Claude Code Should Do

1. **Read the taxonomy files** — `taxonomy/README.md`, `taxonomy/SCHEMA.md`, and all CSVs. Understand the data model before writing any code.

2. **Initialise the Astro project** in `website/` with Tailwind, the colour palette, and the site structure.

3. **Build Tier 1 components** in the order specified above, starting with the scaffold and taxonomy pages.

4. **Create `scripts/build_site_data.py`** (or JS equivalent within Astro) that converts taxonomy CSVs → JSON for each component.

5. **Implement the epistemic classification visual conventions** from the start — not as an afterthought.

6. **Use the ITSERR repo as reference** for patterns (entity resolution, build scripts, web prototype architecture) but don't copy code directly — the domains are different.

7. **Commit incrementally** — each component should be a working addition, not a massive single commit.

---

## Working Conventions

- **Language:** Site interface bilingual (SK primary, EN secondary). Code comments in English.
- **Michal's voice:** The monograph viewer will display Slovak academic text with Michal's distinctive style (see CLAUDE.md).
- **Forbidden in UI copy:** "delve," "dive," "navigate," "leverage," "unlock," "crucial," "tapestry," "in the ever-evolving landscape."
- **APVV acknowledgment:** Must appear on every page footer: "This work was supported by the Slovak Research and Development Agency under the Contract no. APVV-24-0484."
- **License:** Code = MIT. Content = CC BY 4.0.

---

## Key Contacts (for understanding scope, not for contacting)

- **Adriana Sekelská** — Her hymnological data feeds §5 (Transfer/Reception) and the Lutheranisation Diff tool. Don't duplicate her musicological work.
- **Ivan Debnár** — IT/database role on the team. The website's flat-file architecture means no database dependency, but if Debnár builds a shared corpus database later, the site should be able to ingest its exports.

---

*This briefing was prepared by Claude Desktop based on extensive analysis of the TEPALIT project context, the ITSERR-RESILIENCE pipeline, and the newly created theological taxonomy. The .docx file `Website building notes (ITSERR-inspired).docx` contains the raw conversation analysis that led to these specifications — it can be consulted for rationale but should not be treated as a specification document.*
