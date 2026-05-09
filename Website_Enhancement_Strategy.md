# Website Enhancement Strategy v0.2

**Status:** Strategic plan, awaiting Michal's review and re-prioritisation
**Date:** 2026-05-09
**Successor to:** `WEBSITE_BRIEFING.md` (March 24, 2026 — original site spec)
**Scope:** Translates the new Drafts/ and Chapter/ materials produced during April–May 2026 into a concrete, sequenced enhancement plan for the TEPALIT Digital Companion (`website/`).
**Working language:** English (collaboration record); the website itself remains bilingual (Slovak primary, English secondary).
**Funder:** APVV-24-0484 (TEPALIT).

---

## 0. Executive summary

Between the original WEBSITE_BRIEFING (24 March 2026) and today (9 May 2026) the project has produced four classes of new material that the current `website/v0.1.0` implementation does not yet reflect:

1. **A full draft of the Theologos paper** (`Drafts/Theologos_Draft_v0.1_Full.md`, ~7,200 words + 36 footnotes + 16-entry verified bibliography), with three companion audit documents (§§1–4, §§5–7, bibliography), a Theologos house-style guide, and a paper outline. The paper introduces a conceptual move the current website does not yet expose: the distinction between **cross-confessional Lutheranisation** (Tranovský working on Brethren / Utraquist sources) and **intra-confessional Lutheranisation** (the AC 1581 → BA 1585 register-shift inside one Lutheran-aligned codex). PAIR_006 is now the worked example for the latter.
2. **A complete chapter workspace** (`Chapter/Chapter_Master_Plan.md` v0.2, `Chapter/Chapter_Outline.md` v0.1) — the full Slovak chapter outline (six sections, four loci × five sub-loci, primary-source list, secondary-literature starter, decision log) and a five-phase plan. The current `/chapter/` page is a single coming-soon placeholder; it can now show real structure.
3. **An audit-corrected literature-gap reconnaissance** (`Drafts/DeepResearch_Literature_Gap_Report.md`, 61 KB, with the pre-audit version preserved as a backup) listing ~30 post-2010 peer-reviewed items, a top-10 prioritisation matrix, and an explicit historiographical finding: **no peer-reviewed post-2010 anglophone or German-language venue defends the older "Calvinist Eucharist" reading of the Confessio Bohemica 1575**. The persistence of that reading is a tertiary-reference-work phenomenon (Britannica, encyclopedia.com, derivative AI synthesis), not an ongoing scholarly disagreement. The chapter §4.1 will refute it as one of its substantive contributions.
4. **A methods-paper apparatus** (`MethodsPaper_Outline.md`, `MethodsPaper_Abstracts.md`) describing the project's three-axis trust framework — `epistemic_status` × `evidentiary_strength` × `verification_status` — as a peer-reviewable methodological contribution to confessional-DH. The website partially exposes this on `/hymn-pairs/`, but does not yet treat the framework as a first-class scholarly artefact.

This strategy document proposes **fourteen enhancements organised in three tiers** — five Tier A (anchor), six Tier B (substantive expansion), three Tier C (architectural). Tier A items are high-leverage and ready-to-implement against existing data. Tier B items require additional content authoring (mostly aggregation from existing markdown into the website data layer). Tier C items are longer-horizon architectural improvements (build pipeline, search, IIIF integration).

**Headline recommendation:** prioritise the five Tier-A items as the first implementation wave, split across two sprints per §7 (Sprint 1: A3 Four-modes framing, A1 Companion-papers section, A4 Chapter scaffold; Sprint 2: A5 Sources expansion, A2 CB 1575 archive). Each of these directly surfaces work already completed, and together they shift the site from "MVP companion" to "publication-grade research apparatus."

---

## 1. What's new since the original briefing

### 1.1 Files added between March 24 and May 9, 2026

| Domain | New files | Bytes (approx.) | Implication for website |
|---|---|---|---|
| Theologos paper | `Drafts/Theologos_Draft_v0.1_Full.md`, `Drafts/Theologos_Paper_Outline.md`, `Drafts/Theologos_Bibliography.md`, `Drafts/Theologos_Audit_v0.1_Sec1_Sec4.md`, `Drafts/Theologos_Audit_v0.1_Sec5_Sec7.md`, `Drafts/Theologos_Bibliography_Audit.md`, `Drafts/Theologos_Style_Guide.md`, `Drafts/Source_Notes_Sec1_Sec2.md` | ~210 KB | Companion-paper landing page; PAIR_006 deepening; CB 1575 mention link; verification-discipline showcase |
| Chapter workspace | `Chapter/Chapter_Master_Plan.md`, `Chapter/Chapter_Outline.md`, `Chapter/README.md`, `Chapter/Drafts/README.md` | ~55 KB | Replace `/chapter/` placeholder with structured outline + phase tracker; bilingual section status; primary/secondary source mapping per locus |
| Literature reconnaissance | `Drafts/DeepResearch_Literature_Gap_Prompt.md`, `Drafts/DeepResearch_Literature_Gap_Report.md`, `Drafts/DeepResearch_Literature_Gap_Report_PreAudit_Backup.md` | ~120 KB | Sources expansion (top-10 matrix); CB 1575 historiographical archive; methodological-discipline showcase (audit story) |
| Methods paper | `MethodsPaper_Outline.md`, `MethodsPaper_Abstracts.md` | ~45 KB | Methods companion paper landing page; three-axis trust framework as first-class artefact |
| Project metadata refresh | `CHANGELOG.md`, `CITATION.cff`, `.zenodo.json`, `README.md`, `LICENSE-CONTENT.md` | ~30 KB | Already integrated into footer / cite page; v0.1.0 release on Zenodo (DOI 10.5281/zenodo.20081435) |

### 1.2 Chapter Master Plan v0.2 — what changed

`Chapter/Chapter_Master_Plan.md` v0.2 (2026-05-09) **closes Phase 1** (literature reconnaissance) and refreshes the Phase-2 priority list against the audit-corrected lit-gap report. Key decisions:

- **Decision logged 2026-05-09 (v0.2):** "No citation surfaced by AI-generated reconnaissance enters `Sources/*.md` without an independent verification step." This is now a first-class methodological commitment with a documented audit precedent (the 20% bibliographic-error rate in the original AI-generated reconnaissance report).
- **Decision logged v0.1:** "The Confessio Bohemica 1575 refutation (against the Calvinist-Eucharistic mis-reading) becomes one of the chapter's substantive contributions, primarily located in §4.1." The refutation is now strongly supported because the audit confirmed *no peer-reviewed post-2010 venue* defends the older characterisation.
- **Decision logged v0.1:** "PAIR_006 enters the chapter as a sub-component of §5, not as a stand-alone section." The Theologos paper handles the focused PAIR_006 argument; the chapter's §5 nests it within the broader *Cithara Sanctorum* reception narrative.
- **Tier-1 / Tier-2 / Tier-3 source priority list refreshed** with fifteen new high-priority items, split between Tier 1 (eight, accessible without acquisition: Crews 2018, Ruščin 2019, Csepregi 2003, Csepregi 2004, Hroboň 2011, Puff 2018, Hrejsa 1912, David 1999) and Tier 2 (seven, requiring ILL or collegial coordination: Just/Rothkegel 2012, Haberkern 2016, Haberkern 2023, Augustínová 2011, Leaver 2024, Csepregi 2009, Grešová-Sekelská 2016).

### 1.3 Theologos paper — new conceptual contribution

The paper's argument is **complementary** to the existing Lutheranisation thesis and does not displace it. Its contribution is a **scale move**: confessional sharpening operates not only at the cross-confessional boundary (Brethren/Utraquist source → CS) but also **within the Lutheran orbit itself** (moderate Czech printed AC 1581 → sharper Slovak manuscript BA 1585). Both are register-intensification events in a continuous trajectory CB 1575 → AC 1581 → BA 1585 → CS 1636. The website's data model already supports both modes — the `transfer_direction` enum in `taxonomy/SCHEMA.md` includes `LUTHERAN_REGIONAL_CONTINUITY` (PAIR_004, PAIR_005) and `LUTHERAN_CONFESSIONAL_INTENSIFICATION` (PAIR_006) alongside the cross-confessional `UTRAQUIST_TO_LUTHERAN` / `UNITY_TO_LUTHERAN` / `HUSSITE_TO_LUTHERAN`. What the website does not yet do is **foreground this two-mode taxonomy** as a navigational and visual primitive.

### 1.4 Hymn-pair dataset — current state

The taxonomy CSVs at HEAD now contain six hymn pairs with the following trust-state distribution:

| Pair | Direction | epistemic | evidentiary | verification | Notes |
|---|---|---|---|---|---|
| PAIR_001_AY_PANNA | UTRAQUIST_TO_LUTHERAN | FACTUAL | DOCUMENTED | SECONDARY_ONLY | Marian de-Catholicising; via Grešová-Sekelská 2021 |
| PAIR_002_PANE_NAS | UNITY_TO_LUTHERAN | INTERPRETIVE | CONJECTURED | UNVERIFIED | Working hypothesis; Synoptikon exemplar |
| PAIR_003_BA_CS_TARGET | (research-target manifest) | DEFERRED | CONJECTURED | UNVERIFIED | 34-pair to-do list from Vajda 1944 |
| PAIR_004_OTCE_NEBESKY | LUTHERAN_REGIONAL_CONTINUITY | FACTUAL | DOCUMENTED | VERIFIED | BA 1585 → CS 1636 melodic continuity |
| PAIR_005_NEYSWETEGSIJ | LUTHERAN_REGIONAL_CONTINUITY | FACTUAL | DOCUMENTED | PRIMARY_PENDING | Introit; CS facsimile lookup pending |
| PAIR_006_AC_BA_EUCHARIST | LUTHERAN_CONFESSIONAL_INTENSIFICATION | FACTUAL | DOCUMENTED | VERIFIED | The Theologos paper's worked example |

Two pairs are VERIFIED (PAIR_004, PAIR_006). One is PRIMARY_PENDING with a documented unblocker (PAIR_005). One is SECONDARY_ONLY pending Tier-2 source acquisition (PAIR_001). Two are transparently flagged as research-target / working-hypothesis (PAIR_002, PAIR_003). This distribution is a **strength**, not a weakness — the website's task is to display the variety honestly, which it currently does, but with under-emphasised conceptual structure.

---

## 2. Audit of the current website state

The Astro implementation at `website/` is **production-quality** as of v0.1.0 (released 2026-05-08, Zenodo DOI 10.5281/zenodo.20081435). Twelve routes, four hand-curated TypeScript data files (~1,700 LoC), four reusable Astro components, custom Tailwind theme with three tradition colours, vanilla SVG visualisations, no external runtime dependencies, GitHub Pages deployment, full bilingual SK/EN interface, semantic HTML, noscript fallbacks, JSON-LD `Dataset` structured data, and a print stylesheet for offline scholarly use. The implementation has shipped what the original briefing called Tier 1 in nearly its entirety.

### 2.1 What v0.1.0 already delivers

| Briefing target | v0.1.0 status | Notes |
|---|---|---|
| 1.1 Site scaffold | ✅ Done | Hero, navigation, footer, APVV acknowledgment, CC license |
| 1.2 Interactive timeline | ✅ Done | 60 events, 4 lanes, vanilla SVG with collision avoidance, noscript fallback |
| 1.4 Modest network graph | ✅ Done | ~45 nodes, ~65 edges, force layout, three-filter axis (tradition × edge-type × date) |
| 1.5 Parallel text viewer (Synoptikon) | ✅ Done (12 comparisons) | Side-by-side columns, modification badges (A/D/R/S), language toggle; many cells INTERPRETIVE/DEFERRED awaiting verification |
| 1.6 Theological taxonomy | ✅ Done | 4 loci × 5–6 sub-loci, terms in 4 languages, hymnic functions with theological weights |
| 1.3 Hypertext monograph viewer | 🟡 Placeholder | `/chapter/` is a single coming-soon page; no chapter content yet |
| Hymn-pair dossier | ✅ Done (6 pairs) | Three-axis trust badges, citation chains, JSON-LD per pair, print stylesheet |
| Sources register | 🟡 Partial | 10 curated sources + ~10 stub entries; defers to GitHub for full source notes |
| Cite, News/Releases, 404 | ✅ Done | Static pages with Zenodo badge, version history, friendly error |
| Epistemic legend component | ✅ Done | Reusable across all visualisation pages |

### 2.2 Where the briefing is under-served

The original briefing's Tier 1 listed six items; v0.1.0 implements five of them, with the sixth (the hypertext monograph viewer) standing as a coming-soon placeholder pending the chapter draft itself. Tier 2 items (Lutheranisation Diff Tool, Confessional Fingerprinting, Analytical Dashboards, Corpus Explorer + Search) are not implemented, but the underlying taxonomy data does not yet support all of them and most should not ship as half-data prototypes. Tier 3 items (Scriptural Root System, Geographic Map, IIIF, Hypothes.is, Export & API) are not implemented and remain deliberate stretch goals.

### 2.3 Where the briefing did not anticipate the new materials

The briefing was written before:

- the Theologos paper was drafted (so no companion-papers section was specified)
- the chapter master plan was elaborated with a phase tracker (so the `/chapter/` route had no structural target)
- the literature-gap report ran (so the sources page was specified at MVP scope, not as the central bibliographic infrastructure it could now become)
- the methods-paper line of work materialised (so the three-axis trust framework was implicit in the data, not surfaced as a first-class artefact)
- the CB 1575 historiographical refutation crystallised as a substantive contribution (so no dedicated visualisation was scoped for it)

These five additions are what Section 3 below proposes to address.

---

## 3. Strategic principles for the enhancement

Five principles govern every recommendation in this document. They follow from the project's existing CLAUDE.md, WEBSITE_BRIEFING.md, taxonomy/SCHEMA.md, and the new Chapter Master Plan v0.2.

**P1. Sustainability over feature creep.** Every enhancement must survive the 2028 grant end. New JavaScript dependencies, build-time pipelines, and external services are evaluated against the test "will this still work without maintenance in 2030?" Static site, flat files, GitHub Pages, no database, no server. The current implementation passes this test; new work must not regress it.

**P2. Epistemic transparency at every visible surface.** Every claim displayed on the website carries its trust state — `epistemic_status`, `evidentiary_strength`, `verification_status` — visible at a glance, not buried in tooltips. This rule applies to existing pages and to every new page proposed in this document. Research-in-progress (CONJECTURED / UNVERIFIED) must be flagged in a way no reader can mistake for established fact.

**P3. Scholar-editable data layer.** Domain data lives in `taxonomy/*.csv` files editable in any text editor or spreadsheet. Processing logic (TypeScript loaders, future build scripts) lives in code. The Sekelská-Klátik-Valčo team can update CSVs without touching code. This separation, already established in v0.1.0, is preserved and extended.

**P4. Bilingual at every layer.** The chapter is in Slovak; the international audience reads English; the website chrome is bilingual SK/EN throughout. Every new page or component proposed here ships with both languages. Forbidden vocabulary (per CLAUDE.md and WEBSITE_BRIEFING) is enforced in copy review.

**P5. Cite-first, not flash-first.** Each new artefact (companion paper, refutation archive, chapter outline, source register entry) carries its own permalink, its own citation snippet (APA + BibTeX where applicable), and its own JSON-LD where relevant. The site rewards a scholar who arrives via Google Scholar with a complete scholarly record at the URL, not a JavaScript-only experience.

---

## 4. Tier A — Anchor enhancements (high leverage, ready to implement)

These five items leverage work already completed in `Drafts/`, `Chapter/`, and `taxonomy/`. They convert finished textual material into structured website surfaces. None requires new research; all require disciplined transposition.

### A1. Companion Papers section (`/papers/`)

**What.** A new top-level section listing the project's two preliminary publications: the Theologos paper and the methods paper. Each paper gets:

- `/papers/theologos/` — landing page with bilingual abstract (current draft has English abstract; Slovak translation needed), argument synopsis (~250 words pulled from `Drafts/Theologos_Draft_v0.1_Full.md` introduction), status (Draft v0.1 complete, awaiting submission), forward link to PAIR_006 dossier, full bibliography (16 entries from `Drafts/Theologos_Bibliography.md`), citation snippets (APA + BibTeX), and a download link to the rendered PDF (when produced) or to the GitHub markdown source.
- `/papers/methods/` — same structure for the methods paper. Status: outline v0.1 complete; drafting target TBD (per `MethodsPaper_Outline.md` the plan is a coordinated DHQ methods paper + JOHD data paper double submission once the v0.1.0 dataset DOI is minted, which has now happened). Three abstract variants (470 / 240 / 1,150 words) from `MethodsPaper_Abstracts.md` displayed with venue strategy.
- `/papers/` — index page listing both papers with status badges, target venues, bilingual labels.

**Why.** The Theologos paper is the project's most polished scholarly artefact. It is currently invisible on the website — a reader who arrives at `/hymn-pairs/PAIR_006` sees the dossier but no link to the paper that develops it. Adding `/papers/theologos/` closes this gap with no new research, only structural work.

**Data sources.** `Drafts/Theologos_*.md` (7 files: draft, paper outline, bibliography, three audits, style guide), `MethodsPaper_*.md` (2 files: outline + abstracts). All source content already audited and bibliography-clean.

**Effort.** Medium. Two static pages (Theologos + Methods) + one index. Mostly content transposition. Estimated 4–6 hours of focused work for the markdown-to-Astro lift, plus another 2–3 hours for the Slovak abstract translation (Michal's call whether to use existing v02 master annotation Slovak abstract or commission fresh).

**Risks.** None substantive. The Slovak abstract for the Theologos paper does not yet exist and would need to be drafted fresh or sourced from the v02 master annotation; the methods paper is English-primary by design (DH venues are anglophone) so a Slovak abstract is courtesy not necessity.

**Open questions for Michal:**
- Should the Theologos paper draft itself be exposed in full on the website, or only the abstract + bibliography? (Recommendation: abstract + bibliography only on the public surface; full draft remains in `Drafts/` until submission to *Theologos*, after which the publisher's licence governs distribution.)
- Should the methods paper get more or less prominence than the Theologos paper? (Recommendation: equal weight in the `/papers/` index, but the Theologos paper is closer to publication-ready and warrants a slightly richer landing page.)

### A2. Confessio Bohemica 1575 historiographical archive (`/cb1575/`)

**What.** A dedicated page for one specific scholarly intervention: the refutation of the older "Calvinist Eucharist" reading of the Confessio Bohemica 1575. Page anatomy:

- **The contested formula.** The Czech-original eucharistic article verbatim — *duchovně i podstatně, věrou i také ústy* (spiritually and substantially, by faith and also by mouth) — set in display typography, with English translation. Source: Hrejsa 1912, p. [TBD]; Just/Rothkegel 2012 critical edition, pp. 47–176.
- **The older reading (with citations).** The "Calvinist Eucharist" characterisation as it appears in *Encyclopaedia Britannica* online ("Bohemian Confession" entry), encyclopedia.com (Gale, "Bohemian Brethren" entry), and the Schaff *Creeds of Christendom* tradition (1877). Each citation displayed with retrieval date and direct quote where licence allows.
- **The new consensus (with citations).** Just/Rothkegel 2012, *Reformierte Bekenntnisschriften* 3/1 (the cornerstone item); Haberkern 2023, *R&RR* 25/2–3 ("The Bohemian Confession of 1575: Towards an Archaeology of the Czech Reformation", DOI 10.1080/14622459.2023.2283009); Hrejsa 1912 (the originary Czech-language refutation). Brief synopsis of each work's argument.
- **The pattern observation.** The lit-gap report's empirical claim: *no peer-reviewed post-2010 anglophone or German-language venue defending the Calvinist reading was located*. The persistence of the older characterisation is a phenomenon of tertiary reference works, not of current scholarship.
- **Forward link.** The chapter §4.1 will develop the refutation in full; the Theologos paper §6 gestures toward it briefly. Both linked.

**Why.** This is the chapter's most consequential historiographical contribution and one of its most distinctive moves. The website can host the public-facing version of the refutation as a free-standing scholarly resource, citable independently of the chapter, and serving readers who arrive via search engines querying "Confessio Bohemica Calvinist Eucharist" with the corrective.

**Data sources.** `Drafts/DeepResearch_Literature_Gap_Report.md` §5; the chapter outline `§4.1` material; the Theologos paper's §6.i paragraph (~480 words); cross-references already in `taxonomy/confessional_positions.csv` for the L1.1 and L1.2 sub-loci.

**Effort.** Medium-high. One rich page with carefully sourced quotations. Estimated 6–10 hours including verification of the Czech-original formula against Hrejsa 1912 and the Just/Rothkegel critical edition, when the latter is acquired (Tier 2 ILL).

**Risks.** Two:
- The Czech-original formula needs a final philological double-check against Hrejsa 1912 (the project notes have it; the chapter and the Theologos paper §6 invoke it; but neither has yet been re-checked against the original 1912 print). The audit of `Theologos_Audit_v0.1_Sec5_Sec7.md` flags this as "format consistent with project notes; verbatim Czech to be cross-checked against Hrejsa 1912 by Michal before submission as part of the chapter work." The website page can follow the same discipline and ship an INTERPRETIVE flag on the verbatim until the cross-check is done.
- Direct quotation of *Encyclopaedia Britannica* requires a fair-use determination. The project's outgoing CC BY 4.0 license does not affect this — the question is fair-use of incoming Britannica material under copyright. Recommendation: quote only the diagnostic phrase ("Calvinist interpretation of the Eucharist") with retrieval date, framed as a brief documentary observation about reference-work persistence, not a full reproduction of the entry. Slovak academic convention is permissive about brief, transformative citation of this kind.

**Open questions for Michal:**
- Should the page be in `/cb1575/` (its own top-level), or nested as `/chapter/cb1575/` (under the chapter), or `/papers/cb1575/` (under papers)? (Recommendation: top-level `/cb1575/` because the page is a free-standing scholarly resource that survives the chapter's eventual completion.)
- Bilingual: Slovak primary or English primary? (Recommendation: Slovak primary, since the formula is Czech-original and the chapter is Slovak; English secondary for international citation utility.)

### A3. Four-Modes-of-Lutheranisation framing in `/hymn-pairs/`

**What.** A conceptual restructuring of the hymn-pairs page that surfaces the Theologos paper's distinction between cross-confessional and intra-Lutheran Lutheranisation, plus the regional-continuity and research-target categories that complete the schema. The Theologos paper's substantive contribution is the *two-mode* distinction (cross-confessional vs intra-Lutheran); the page surfaces *four* equal-weighted operational modes because regional-continuity and research-target are needed to classify the full hymn-pair dataset honestly. Implementation:

- **Pair grouping by mode.** The existing card grid is augmented with a group header above each cluster:
  - **Cross-confessional Lutheranisation.** PAIR_001 (UTRAQUIST_TO_LUTHERAN), PAIR_002 (UNITY_TO_LUTHERAN, working hypothesis).
  - **Intra-Lutheran register intensification.** PAIR_006 (LUTHERAN_CONFESSIONAL_INTENSIFICATION) — the worked example developed in the Theologos paper.
  - **Regional Lutheran continuity.** PAIR_004, PAIR_005 (LUTHERAN_REGIONAL_CONTINUITY) — Hungarian-Lutheran liturgical practice flowing into CS.
  - **Research-target manifest.** PAIR_003 (DEFERRED, the 34-pair Vajda manifest).
- **A short conceptual prelude** (~150 words SK + EN) at the top of the page summarising the four-modes framework, citing the Theologos paper, and linking to `/papers/theologos/` (depends on A1).
- **Filter bar enhancement.** Add a `transfer_direction` mode filter to the existing filter set on `/hymn-pairs/`. (The current filter axes need a quick check at implementation time; the audit identified the page as "filtered, sortable card-based grid" with three trust axes prominent on each card, but did not enumerate every filter chip. The mode filter is additive either way.)

**Why.** This is the most direct way to expose the chapter's substantive scholarly move on the website. The data already supports it (the `transfer_direction` enum is in `taxonomy/SCHEMA.md` since v0.1.0 and the values are populated correctly in `taxonomy/hymn_pairs.csv`). What's missing is the page-level conceptual framing.

**Data sources.** `taxonomy/hymn_pairs.csv` (already present); `Drafts/Theologos_Draft_v0.1_Full.md` §§5–6 for the conceptual prelude; `taxonomy/SCHEMA.md` `transfer_direction` definitions for the mode labels.

**Effort.** Low-medium. The current filter set on `/hymn-pairs/` should be enumerated at implementation time; adding a `transfer_direction` mode filter is additive in any case. The page-level conceptual prelude (~150 words SK + EN) is ~30 minutes of copy. Estimated 2–4 hours total. Strong candidate for the first sprint.

**Risks.** Minor. Care needed with the Slovak vocabulary for the modes — `intra-konfesionálna luteranizácia` vs `medzi-konfesionálna luteranizácia` — to match Slovak academic register without over-coining.

**Open questions for Michal:**
- Slovak labels for the four modes: needs a quick coinage review. Recommended:
  - "Medzi-konfesionálna luteranizácia" / "Cross-confessional Lutheranisation"
  - "Intra-luteránska intenzifikácia registra" / "Intra-Lutheran register intensification"
  - "Regionálna luteránska kontinuita" / "Regional Lutheran continuity"
  - "Výskumné ciele" / "Research targets"

### A4. Chapter scaffold replacing the coming-soon placeholder

**What.** The current `/chapter/` page is a single coming-soon stub. With `Chapter/Chapter_Outline.md` and `Chapter/Chapter_Master_Plan.md` in place, the page can become a structured outline view:

- **Phase tracker.** Visual indicator of the five phases per the Master Plan; current state is "Phase 2 in progress, Phase 1 closed with audit pass 2026-05-09".
- **Six-section outline display.** §1 Úvod, §2 Konfesionálny kontext, §3 Dogmatické profily, §4 Komparatívna analýza (with all four sub-sections), §5 Transfer a recepcia, §6 Záver. For each section: title (SK + EN), brief description, primary loci touched, status (drafting sequence per Master Plan: §4.1 → §4.2 → §4.3 → §4.4 → §3 → §5 → §1 → §6 → §2 floating), and forward links to the most relevant pages on the site (e.g., §4.1 links to `/cb1575/`, `/hymn-pairs/?direction=intra-lutheran`, `/synoptikon/?locus=L1.1`).
- **Source-base inventory display.** Tier 1 (primary), Tier 2 (verified peer-reviewed scholarship), Tier 3 (scaffolding, with the documented Tier-3 errors highlighted) — each tier with bullet-list of representative sources, drawn from the Master Plan §"Source-base inventory".
- **Decision log.** A concise display of the v0.1 and v0.2 decisions from the Master Plan's decision log, framed as project-methodological transparency.
- **Funding and license.** APVV-24-0484 acknowledgment block; Slovak-academic version per Chapter README.

**Why.** The current placeholder under-sells what's actually been done. The chapter has a stable outline, a versioned master plan, a four-locus structure, a list of primary sources per tradition, and a documented sequence of drafting decisions. Showing this on the website transforms `/chapter/` from "coming soon, check back in 2028" to "the chapter is in active production, here is its structure and current state."

**Data sources.** `Chapter/Chapter_Outline.md` (v0.1, port from .docx v02), `Chapter/Chapter_Master_Plan.md` (v0.2). Both are in canonical-Markdown form ready for transposition.

**Effort.** Medium. One large structured page, mostly transposition with light Astro templating. Estimated 6–10 hours including bilingual labels, status badges, and the link map.

**Risks.** The Master Plan contains private collaboration content (the Decision Log mentions specific people; the Source-base inventory includes Tier-2 acquisition decisions like "Best obtained collegially from Adriana directly"). The website should expose only the public-facing layer — the outline, the section structure, the source-tier framework — not the operational decisions about acquisition timing or coordination meetings. Curate accordingly.

**Open questions for Michal:**
- How public should the decision log be? (Recommendation: include the v0.1 / v0.2 substantive decisions — Tier-3 discipline rule, CB 1575 refutation as substantive contribution, PAIR_006 nesting in §5 — but exclude the operational items about specific people and acquisition timing.)
- Should the chapter outline display include the bibliography starter from Chapter_Outline.md §"Sekundárna literatúra"? (Recommendation: yes, but link out to `/sources/` for the full register; the outline page shows the curated starter list as the chapter's bibliography spine.)

### A5. Sources expansion — top-10 prioritisation matrix integration

**What.** The current `/sources/` page has 10 curated sources + a stub list. The lit-gap report's prioritisation matrix has 10 sources (with detailed rationale per item) plus 6 secondary recommendations. Action:

- **Integrate the top-10 matrix** into the curated section. For each item: full citation per `Drafts/DeepResearch_Literature_Gap_Report.md`, rationale (one-paragraph from the report's "Why it matters" prose), tier flag (Tier 1 accessible / Tier 2 ILL-required / Tier 3 audit follow-up), web-discoverable link (DOI, JSTOR, academia.edu, brrp.org, sav.sk, Cambridge Core), and acquisition status (acquired / Tier 2 ILL pending / collegial-coordination — the latter only flagged when public; Adriana-handoff items can be marked "expected via TEPALIT collaboration" without naming individuals).
- **Add a tag system** to the page: tag each source with locus codes (L1.1, L1.2, ...), tradition (LUTHERAN / UTRAQUIST / UNITY / TRANS), language (CZ / SK / DE / EN / LA / HU / PL).
- **Surface the audit story.** A small panel near the top of the page describing the verification discipline ("≈20% of AI-generated reconnaissance contained bibliographic errors; the project's discipline is one verified `Source/*.md` file per cited work, written only after the source has been actually consulted or its bibliographic detail confirmed against authoritative metadata"), with a link to the methods paper landing page. This is the project's best epistemic-discipline showcase and belongs prominently on `/sources/`.
- **A "Recently added" section** showing the Phase-2-priority Tier-1 source notes as they are produced (Crews 2018, Csepregi 2003, Hrejsa 1912, etc.). Auto-derived from the dates in `Sources/*.md` files via a small build-time index.

**Why.** The lit-gap report's prioritisation matrix is the single most impactful content artefact produced in May 2026. Surfacing it on the website turns the `/sources/` page from "ten curated entries" into a publicly-citable annotated bibliography for the chapter, which is itself a scholarly contribution.

**Data sources.** `Drafts/DeepResearch_Literature_Gap_Report.md` §"Closing Prioritisation Matrix" + secondary recommendations; `Sources/Source_Index.md` for the project's existing canonical IDs; `Sources/*.md` files for the per-source short-form descriptions.

**Effort.** High. ~30 sources to add or upgrade, each with verification work, tagging, and bilingual labels. Estimated 12–20 hours, but parallelisable across multiple sessions and naturally coupled to the Chapter Master Plan's Phase 2 source-note creation activities. Best done as the source notes themselves are produced; not a single-sprint effort.

**Risks.** Citation accuracy. The lit-gap report itself underwent a 20% bibliographic-error audit; the website should not re-introduce that error rate by transcribing sloppily. Recommendation: every source added to `/sources/` undergoes the same verification as a `Sources/*.md` note (DOI, journal page, ISBN, publisher catalogue).

**Open questions for Michal:**
- Should the public site display Tier 2 / Tier 3 status flags? (Recommendation: yes for Tier 2 — "ILL pending" is honest and signals work-in-progress; no for Tier 3 — internal scaffolding is internal.)
- Should the audit story be expanded into a longer methodological essay on `/sources/`, or kept as a 100-word panel? (Recommendation: 100-word panel here, with link to the full methods paper at `/papers/methods/`.)

---

## 5. Tier B — Substantive expansions (moderate leverage, more authoring)

These six items extend the website's analytical capability beyond what the v0.1.0 implementation does. They depend on data that either does not yet exist in the taxonomy or exists only in fragmentary form. Their priority should rise as the chapter draft itself materialises.

### B1. Lutheranisation Diff Tool (the WEBSITE_BRIEFING signature feature, now anchored)

**What.** The original briefing's signature Tier-2 feature: a three-column view comparing source → intermediate → CS, with theological annotations between columns colour-coded by locus. With PAIR_006 verified and the Theologos paper drafted, this now has a real anchor:

- **First implementation:** PAIR_006 — AC 1581 (Czech printed register) ↔ BA 1585 (Slovak manuscript register), with the Theologos paper's verbatim quotations and theological annotations driving the side-by-side display.
- **Second implementation:** PAIR_004 — BA 1585 → CS 1636 melodic continuity, building on PAIR_006 to extend the trajectory CB 1575 → AC 1581 → BA 1585 → CS 1636.
- **Third implementation:** PAIR_001 (Marian de-Catholicising) once the project has personally collated KK1517 against CS1636 (currently SECONDARY_ONLY).
- **Annotation language.** Theological notes use the four-locus colour code (gold / burgundy / teal / parchment) consistent with the rest of the site.

**Why.** The signature feature of the original briefing, now with verified data ready to populate it. It is the single most powerful argument the website can make for the *lex orandi, lex credendi* methodology — readers see a concrete textual change, see why it matters theologically, and see the citation chain that establishes the change.

**Data sources.** `taxonomy/hymnic_evidence.csv` (needs population for AC1581 / BA1585 / CS1636 verbatim strings), `Drafts/Theologos_Draft_v0.1_Full.md` §§3–4 for the theological annotations, `Sources/Verification_PAIR_006.md` for the verification dossier.

**Effort.** High. The visualisation itself is moderate complexity (similar to the existing Synoptikon, with an annotation overlay). The data preparation is the heavy lift: getting the verbatim AC / BA / CS texts into the data model. Estimated 12–20 hours for first PAIR_006 implementation; additional 6–8 hours per subsequent pair.

**Risks.** Texts must be transcribed accurately (the project's existing PAIR_006 verification dossier handles this for AC and BA via Benka 2024; CS 1636 facsimile lookup is the open piece for PAIR_005 and would also unlock PAIR_004 fully). Long-term: the signature feature is so visible that any error in it is highly visible too.

### B2. Confessional Fingerprinting (radar charts with epistemic gating)

**What.** Per the original briefing: radar/spider charts where each tradition develops a "shape" from the density of attestation across the 20 sub-loci. Implementation discipline: every radial axis carries an epistemic indicator; cells based on FACTUAL/DOCUMENTED data are full opacity, INTERPRETIVE 80%, DEFERRED 60%, per the EpistemicLegend conventions already used elsewhere.

- **Tradition profiles:** LUTHERAN (CONFESSIONAL / HUNGARIAN / CS_TRANOSKY), UTRAQUIST (OLD / NEO), UNITY (EARLY / MATURE / BLAHOSLAV / CONFESSIO_1535), with the developmental phases as overlay options.
- **Per-pair fingerprinting:** each hymn pair's locus distribution becomes its own micro-radar; comparing PAIR_006's L1.1+L1.5 concentration against PAIR_001's L2.6+L4.4 visualises the topical difference.

**Why.** A second analytical mode that complements the network graph; gives readers a quick gestural sense of where each tradition's theological emphasis sits. The original briefing scoped this; the data layer now has enough population (with epistemic gating) to support it honestly.

**Data sources.** `taxonomy/confessional_positions.csv` aggregated by `locus_code × tradition × tradition_phase`; `taxonomy/hymn_pairs.csv` for per-pair fingerprints.

**Effort.** Medium-high. Radar chart rendering in vanilla SVG is achievable (the network graph is more complex and is implemented vanilla); estimated 12–16 hours.

**Risks.** Premature aggregation. The current `confessional_positions.csv` has 27 rows; with full population the chart will have very different shapes. Defer until the CSV is more thoroughly populated, OR ship a Phase-1 chart with explicit "preliminary, based on N entries" notice.

### B3. Lutheranisation trajectory visualisation (CB 1575 → AC 1581 → BA 1585 → CS 1636)

**What.** A horizontal trajectory display showing the four documents in chronological sequence, with key theological registers (manducatio impiorum, "pravý"/"substanciálny" qualifiers, Marian content, Eucharistic vocabulary) tracked across the four positions. Each register-shift is a labelled annotation between two adjacent points.

**Why.** This is the chapter's overarching narrative arc, distilled visually. It complements the timeline (which is broader) and the network graph (which is denser) by foregrounding the four-document spine.

**Data sources.** `taxonomy/hymn_pairs.csv` PAIR_006 (AC→BA), the existing Theologos paper §6.i material (CB→AC parallel), Tranovský's editorial method per Grešová-Sekelská 2021, 2023.

**Effort.** Medium. Custom SVG visualisation, similar to a stripped-down Sankey. Estimated 10–14 hours.

**Risks.** Conceptual: this collapses several distinct phenomena (cross-confessional inheritance, intra-confessional register intensification, editorial Lutheranisation) into one visual line. The framing must explicitly distinguish them, or the visualisation will mislead.

### B4. Glossary / Term Variants viewer (`/glossary/`)

**What.** The taxonomy has 34+ canonical terms × 4 languages (LA / CZ 16c / DE 16c / SK CS) in `taxonomy/term_variants.csv`. Currently this CSV is rendered at the bottom of `/taxonomy/` as a static reference table. A dedicated `/glossary/` page can:

- Filter by language (search for a Czech term and see its Latin / German / Slovak counterparts)
- Filter by locus
- Show etymology, period orthography, attestation source per term
- Link to the term's primary `confessional_positions.csv` entries

**Why.** Multilingual scholarly utility. A reader from any of the four languages can find the canonical form. Also supports the chapter's terminological consistency commitment (Master Plan §"Voice and style").

**Data sources.** `taxonomy/term_variants.csv` (already populated for Eucharist; in-progress elsewhere).

**Effort.** Low-medium. Mostly UI work over existing data. Estimated 4–6 hours.

**Risks.** Minor.

### B5. Sankey diagram — "The Journey of a Hymn"

**What.** Per the original briefing's §2.4b: a Sankey diagram tracing individual hymns from origin through intermediate collections to final CS form. Concrete instances:
- PAIR_004 (Otče Nebeský Bože: BA 1585 → CS 1636 — narrow path)
- PAIR_001 (Marian: KK 1517 → CS 1636 — Marian-de-Catholicised path)
- A composite "Vajda 1944's 36 hymns from BA → CS" once PAIR_003's targets are individually verified

**Why.** Aesthetic and scholarly: shows the volumetric story Grešová-Sekelská 2021's "approximately half is Utraquist in origin" finding represents.

**Data sources.** `taxonomy/hymn_pairs.csv` aggregated by `transfer_direction`; eventually a denser `taxonomy/hymnic_evidence.csv` that records the journey in finer-grained nodes.

**Effort.** High. Sankey rendering in vanilla SVG is doable but involved; estimated 16–24 hours. Alternatively, ship with d3-sankey as an isolated dependency *if* the team accepts a single library dependency for one feature; this would cut the effort in half.

**Risks.** Premature: with only 6 hymn pairs in the dataset, a Sankey will look sparse. Best deferred until PAIR_003's 34 targets have been individually verified or at least promoted to evidence rows.

### B6. Pagefind static search

**What.** Pagefind (https://pagefind.app/) integrated as a build-time step. Indexes all rendered HTML; produces `dist/pagefind/` which is served as static files. Search UI as a header dropdown; results page filterable by section (chapter / hymn-pairs / sources / synoptikon / network).

**Why.** Currently the site has no search beyond client-side filter chips on individual pages. With ~30 sources, 6 hymn pairs, 12 synoptikon comparisons, 60 timeline events, and 21 loci, a unified search index becomes increasingly valuable. Pagefind is the canonical static-site search tool; works with Astro via official integration; survives the 2028 grant end as static files.

**Data sources.** All rendered HTML (Pagefind indexes the build output, not source files).

**Effort.** Low-medium. Astro-Pagefind integration is well-documented; the effort is mostly UI work for the search modal. Estimated 4–6 hours.

**Risks.** Build-time complexity. The build pipeline becomes "Astro build → Pagefind index" instead of just "Astro build". Easy to recover from, but a new dependency to maintain.

---

## 6. Tier C — Methodological / architectural improvements (longer horizon)

These three items improve the underlying engineering, not user-visible features. They are valuable, but not urgent unless the project's collaboration model changes (e.g., Sekelská starts editing CSVs frequently, Klátik wants to inspect the data layer directly, or a third party adopts the schema for a parallel project).

### C1. Build script: `scripts/build_site_data.{py,ts}` — taxonomy CSV → website TS data

**What.** The original briefing (§"The Taxonomy → Website Data Pipeline") specified a build script that reads `taxonomy/*.csv`, validates against `taxonomy/SCHEMA.md`, and generates the TypeScript data files at `website/src/data/`. Currently this pipeline is implicit — the TypeScript files are hand-curated alongside the CSVs and the two are kept in sync manually.

- **Implementation:** A Python or Node.js script reading the six CSVs, validating cross-file references, and emitting `website/src/data/{taxonomy,timeline-events,...}.ts` with build-time integrity checks.
- **CI integration:** GitHub Actions workflow runs the script on every push and fails if validation errors exist.

**Why.** Makes the schema enforceable. Currently a typo in `confessional_positions.csv` referencing a nonexistent locus_code goes undetected until someone notices the page render is broken. With a build script, the typo fails CI.

**Effort.** Medium. Build script ~300 LoC + tests. CI workflow ~40 LoC. Estimated 12–16 hours.

**Risks.** Requires a small new toolchain (Python 3 with pandas, or Node.js with csv-parser). Currently the project has Astro + Tailwind only; adding a third runtime is friction. Mitigation: implement in TypeScript using the existing custom CSV parser already in `website/src/data/taxonomy.ts`; this keeps the toolchain Node-only.

### C2. Per-locus dynamic detail pages (`/taxonomy/[code]/`) full population

**What.** The route `/taxonomy/[code].astro` exists in the current implementation but each locus's detail content is currently sparse. Full population would render:

- Detailed prose description (1–2 paragraphs per sub-locus)
- All confessional positions for the sub-locus (LUTHERAN / UTRAQUIST / UNITY × phases) with epistemic indicators
- All hymnic evidence rows with the sub-locus
- All hymn pairs with the sub-locus as primary or secondary
- Cross-references to chapter section and to relevant Synoptikon comparisons

**Why.** Each sub-locus becomes a permalink-stable scholarly entry-point. A Google Scholar search for "Modus Praesentiae Cithara Sanctorum" should land on `/taxonomy/L1.1/` with the full TEPALIT analysis.

**Effort.** High. 21 sub-loci × ~30 minutes of content authoring each = 10–11 hours of authoring; plus ~6 hours of template work. Total 16–18 hours, parallelisable.

**Risks.** Authoring discipline. Each sub-locus page is a small scholarly mini-essay; doing them in haste produces low-quality reference content.

### C3. Export & API — JSON download endpoints under CC BY 4.0

**What.** Per the original briefing's Tier 3 §3.5: a `/data/` route or set of `.json` files serving the taxonomy CSVs as JSON, the hymn-pair dossiers as JSON-LD `Dataset`, and the timeline events as a single JSON. CC BY 4.0 license clearly displayed; provenance metadata (build timestamp, git SHA) embedded.

**Why.** Lets adjacent DH projects ingest the TEPALIT data without scraping HTML. Enables Hugo / Eleventy / Jupyter notebook workflows that the static site itself cannot host.

**Effort.** Low-medium. Astro's static endpoint feature handles this cleanly. Estimated 4–6 hours.

**Risks.** None substantive.

---

## 7. Build sequencing — recommended order

The following sequence is calibrated to Michal's capacity (Phase 2 of the chapter is in progress, with most cycles going to source-note creation and chapter drafting) and to where each enhancement maximally reuses already-completed material.

**Sprint 1 (next 2–3 working sessions, ~12–20 hours):**
1. **A3** Four-Modes-of-Lutheranisation framing in `/hymn-pairs/` (2–4 h). Lowest risk, highest immediate visibility.
2. **A1** Companion-papers section `/papers/` (4–6 h). Surfaces the Theologos paper.
3. **A4** Chapter scaffold replacing placeholder (6–10 h). Replaces the most under-served route.

**Sprint 2 (next 4–6 working sessions, ~18–30 hours):**
4. **A5** Sources expansion with lit-gap top-10 (12–20 h, parallelisable). Couples to ongoing `Sources/*.md` work.
5. **A2** CB 1575 historiographical archive (6–10 h). Anchored once the Czech-original formula is verified.

**Sprint 3 (Phase 3 of chapter; ~32–48 hours total over multiple sessions):**
6. **B1** Lutheranisation Diff Tool with PAIR_006 anchor (12–20 h).
7. **B6** Pagefind search (4–6 h).
8. **B4** Glossary / Term Variants viewer (4–6 h).
9. **C1** Build script for taxonomy CSV → TS (12–16 h, defer until B-tier work creates pressure).

**Sprint 4 (Phase 4 of chapter, 2027–2028 window):**
10. **B3** Lutheranisation trajectory visualisation.
11. **B2** Confessional Fingerprinting (after fuller CSV population).
12. **B5** Sankey "Journey of a Hymn".
13. **C2** Per-locus dynamic page full population.
14. **C3** Export & API.

This sequence puts the highest-leverage transposition work first (Sprint 1), the historiographical-archive and citation-infrastructure work second (Sprint 2), the signature analytical tools third (Sprint 3), and the longer-horizon visualisations last (Sprint 4). Tier-C architectural improvements stay flexible and slip into whichever sprint creates pressure for them.

---

## 8. Risks and dependencies

**R1. Chapter draft availability.** Several Tier-A items (A4 chapter scaffold) and most Tier-B items (B1 Diff Tool, B3 trajectory) become more powerful once the chapter §4.1 draft exists. Until then, the website displays the chapter's *infrastructure* but not its *prose*. This is the right order — building the apparatus first, then populating with prose — but it means some pages will look "structural" rather than "essayistic" until 2028.

**R2. Tier-2 source acquisitions.** Items A2 (CB 1575 archive) and B1 (Diff Tool extensions) benefit substantially from Just/Rothkegel 2012, Haberkern 2016, and Augustínová 2011, all of which are Tier-2 ILL items per the Master Plan. Until acquired, the website ships with INTERPRETIVE flags in places where DOCUMENTED would be cleaner. This is honest, not a defect, but the user experience improves as the acquisitions land.

**R3. Sekelská coordination point.** Per Chapter Master Plan, "Before §5 is drafted, check with Sekelská whether any new findings from her ongoing work (post-2023) should be incorporated." Items B1 / B3 / B5 all touch §5 territory; if Sekelská has post-2023 findings (Confessio Augustana 2024 monograph, possible new editions), the website's portrayal of CS reception should incorporate them rather than ship outdated.

**R4. Klátik editorial conventions.** The Master Plan flags "Before Phase 4 begins, confirm the chapter's target length and editorial conventions with Klátik." This affects A4 (chapter scaffold) only insofar as the public-facing structure should match the eventual published structure. Manageable risk; A4 ships against the current outline and updates if Klátik's conventions shift.

**R5. Britannica fair-use determination.** Item A2 (CB 1575 archive) needs a fair-use call on direct quotation of the Britannica entry. Recommendation as in §4.A2: quote only the diagnostic phrase with retrieval date, framed as a brief documentary observation about reference-work persistence. Slovak academic convention is permissive about transformative citation of this kind. The project's outgoing CC BY 4.0 license is independent of this question — it governs how the website's own content may be reused, not what the website may quote from third parties.

**R6. Volunteer-time-pressure on `Sources/*.md` notes.** Item A5 (Sources expansion) couples directly to Phase 2 source-note creation. Each `Sources/*.md` note takes 30–45 minutes per the Master Plan. The website integration adds maybe another 10–15 minutes per source. Total effort scales with the number of sources documented; over 2026–2027 this should be spread across many short sessions rather than a single sprint.

---

## 9. What to ask Michal before proceeding

Before any implementation begins, six decisions should be confirmed:

**Q1.** Sprint 1 priorities — does the recommended ordering (A3 → A1 → A4) match Michal's preference? Alternative: A1 → A2 → A4 (papers and CB1575 archive first, hymn-pairs framing second).

**Q2.** Is the Theologos paper draft to be exposed in full on the website? Recommendation in §4.A1: abstract + bibliography only, full draft in `Drafts/` until journal submission.

**Q3.** Slovak labels for the four Lutheranisation modes (cross-confessional, intra-Lutheran intensification, regional Lutheran continuity, research targets) — does Michal want to coin these now, or work from the recommended set in §4.A3?

**Q4.** CB 1575 page placement — top-level `/cb1575/`, or nested under chapter / papers? Recommendation: top-level.

**Q5.** Acquisition timing for Tier-2 sources — does Michal want the website to display "Tier 2 ILL pending" status flags, or hide the acquisition state and only show what's verified?

**Q6.** Bilingual labour — three of the eleven enhancements (A1, A2, A4) need fresh Slovak content not currently present in any project file (Slovak abstract for Theologos paper; Slovak landing copy for CB 1575 archive; Slovak phase-tracker labels for chapter scaffold). Does Michal write these, or is a draft-by-Claude-then-edit-by-Michal pipeline acceptable?

These six decisions, taken together, shape the first sprint. Each is small individually. Asking them in a single session at the start of implementation is the cleanest workflow.

---

## 10. Acknowledgments and provenance

This strategy document was prepared in response to Michal's request "examine [the new materials] closely and develop a complex strategy of our website enhancement". It synthesises:

- The eleven new files in `Drafts/` (Theologos paper draft, three audits, bibliography, style guide, paper outline, three literature-gap files — prompt, report, pre-audit backup, source notes)
- The four new files in `Chapter/` (Master Plan v0.2, Outline v0.1, two READMEs)
- The two methods-paper files at root (`MethodsPaper_Outline.md`, `MethodsPaper_Abstracts.md`)
- The current state of `taxonomy/*.csv` (six files, 118 lines, with new `hymn_pairs.csv` and `transfer_direction` enum extensions for `LUTHERAN_REGIONAL_CONTINUITY` and `LUTHERAN_CONFESSIONAL_INTENSIFICATION`)
- The current state of `website/src/` (12 routes, 4 data files, 4 components, ~5,500 LoC across pages + data + components) audited via dedicated review on 2026-05-09
- External verification of key resources: the Haberkern 2023 R&RR article (DOI confirmed via tandfonline), the Cithara Sanctorum 1636 first edition repository at REAL-R / MTAK Budapest, the Pagefind static-search Astro integration, and the Kralická Bible digital availability via Manuscriptorium and Kramerius MZK

The recommendations follow the project's existing conventions per `CLAUDE.md`, `WEBSITE_BRIEFING.md`, and `taxonomy/SCHEMA.md`. Forbidden vocabulary is observed; bilingual coverage is preserved at every layer; the static-site / GitHub-Pages / no-database architecture is preserved.

This document is itself a versioned artefact: v0.2 to mark its succession to the v0.1-implicit `WEBSITE_BRIEFING.md`. Future revisions should bump this version and log substantive changes in a brief decision log.

This work was supported by the Slovak Research and Development Agency under the Contract no. APVV-24-0484.

---

*End of strategy document. Awaiting Michal's review and re-prioritisation before any implementation begins.*
