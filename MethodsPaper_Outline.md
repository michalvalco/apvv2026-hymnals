# Methods Paper Outline — Three Trust Axes for Confessional Hymnology DH

**Status:** Draft v0.1 — outline for a standalone methods paper to be spun off from the TEPALIT companion dataset.
**Date:** 2026-05-07
**Author:** Michal Valčo (provisional sole author — co-authorship with Klátik / Sekelská to be discussed at next TEPALIT working meeting)
**Funder:** APVV-24-0484 (TEPALIT)
**Estimated length:** 6,500–7,500 words (target ~7,000; section budgets sum to 6,900).

---

## Working title

> **Three Trust Axes for Digital Confessional Hymnology: Decomposing Epistemic Status, Evidentiary Strength, and Verification in *Lex Orandi* Datasets**

### Alternates (for venue fit)

- *Beyond FACTUAL/INTERPRETIVE/DEFERRED: A Three-Axis Trust Framework for Confessional-Theology DH Datasets*
- *Atomic Citability with Epistemic Honesty: A Hymn-Pair Dossier Schema for Digital Reformation Studies*
- *The* Lex Orandi *Lens, Operationalised: Schema, Validation, and Epistemic Transparency for Confessional Hymnology*

---

## Target venues (ranked by fit)

| # | Venue | Open access? | Fit | Notes |
|---|---|---|---|---|
| 1 | **Digital Humanities Quarterly (DHQ)** | Yes (gold OA, no APC) | Methods-focused, broad DH readership. Submission is *rolling, not deadline-based*; review turnaround historically 12–18 months. **TBD: confirm whether *lex-orandi*–adjacent or confessional-DH methods papers have appeared in DHQ — verify in archive search before submission.** | Primary target. |
| 2 | **Journal of Open Humanities Data (JOHD)** | Yes (gold OA) | "Data paper" companion describing the hymn-pair dataset; can be paired with the methods paper for double publication. **TBD: confirm current APC level (free / waived / fee).** | Secondary — submit data paper here once Zenodo DOI is minted. |
| 3 | **Journal of Religion, Media and Digital Culture (JRMDC)** | Yes (gold OA) | Religion + DH intersection; smaller readership but closer to subject matter. | Backup if DHQ rejects. |
| 4 | **International Journal of Humanities and Arts Computing (IJHAC)** | Hybrid (closed/gold) | Methods-heavy DH; less common in religion subfield. | Lower priority — fewer readers in our subfield. |
| 5 | *Bulletin of the Comité international d'études patristiques* / *Patristica Slavica* | Closed | Adjacent subfield reach (early Christian liturgy) but methodology paper may not fit. | Skip unless reframed. |

**Recommendation:** DHQ (methods paper) + JOHD (data paper) as a coordinated double submission once v0.1.0 dataset has a DOI. The two papers cite each other.

---

## Argument in one paragraph

DH projects in confessional theology routinely conflate two distinct epistemic dimensions: *what kind of claim is this?* (factual / interpretive / deferred) and *how good is the textual evidence?* (documented / inferred / conjectured). The ITSERR-style FACTUAL/INTERPRETIVE/DEFERRED framework, while a clear advance over flat-rendering of all claims as equally trustworthy, hides a third dimension that matters specifically for theological-historical datasets: *has the project itself collated the primary witnesses, or are we relying on secondary documentation?* This paper argues that **three orthogonal trust axes** — `epistemic_status`, `evidentiary_strength`, `verification_status` — are necessary for confessional-theology DH datasets to be honestly peer-reviewable, and demonstrates the framework with the TEPALIT hymn-pair dossier (APVV-24-0484), where each axis is independently navigable in both schema and UI.

---

## Proposed structure

### 0. Abstract (~200 words)

### 1. Introduction: the epistemic problem in confessional DH (~600 words)

- DH projects in Reformation/confessional theology have rich data layers but routinely display interpretive scholarly claims as established facts at the same visual weight.
- The boundary between *attested data* and *scholarly synthesis* erodes when both are flat-rendered.
- Stakes: peer-review of DH datasets, replicability, accountability, scholarly trust. The chapter-monograph apparatus has well-developed conventions for distinguishing fact from interpretation (footnotes, hedge-words, scholarly apparatus); DH platforms have not yet caught up.
- Confessional theology has a sharper version of the problem: peer reviewers in this subfield are particularly alert to whether a claim about a 16th-century manuscript is *the author's verified reading* or *a relayed claim from secondary literature*.
- This paper proposes a three-axis trust decomposition, demonstrates it on a working dataset, and discusses implications for the broader DH methodology of religious-historical data.

### 2. Background: ITSERR's epistemic modesty and its limits (~700 words)

- The ITSERR-RESILIENCE project's contribution: the FACTUAL / INTERPRETIVE / DEFERRED classification at every annotation node.
- What this solves: the flat-rendering problem; the visualisation no longer claims that every node is equally certain.
- What it does *not* solve: the cell `INTERPRETIVE` collapses two distinct meanings — (a) "this is a scholarly inference based on directly verified text" and (b) "this is a scholarly inference based on someone else's transcription which I trust but haven't checked." Both are scholarly inferences, but they are not the same epistemic act.
- The "I read it and you should trust me" gap: secondary documentation vs. primary collation. In confessional theology, this gap is decisive: a claim documented in a peer-reviewed article is much stronger than a claim I am making myself; both are stronger than a claim I am making about a text I haven't seen with my own eyes.
- Adjacent literature: Drucker on graphesis; Sahle et al. on critical editions in DH; Burdick et al. on DH visualisation conventions.

### 3. The three-axis decomposition (~1,500 words)

- **Axis 1: `epistemic_status` — type of claim**
  - Values: FACTUAL / INTERPRETIVE / DEFERRED
  - Same as ITSERR; semantics: what kind of claim is being made?
  - Examples from the TEPALIT corpus.

- **Axis 2: `evidentiary_strength` — quality of textual evidence**
  - Values: DOCUMENTED / INFERRED / CONJECTURED
  - DOCUMENTED: a peer-reviewed scholarly source explicitly identifies the textual evidence.
  - INFERRED: we have direct access to both witnesses and have made the inference ourselves.
  - CONJECTURED: we lack both secondary documentation and verified textual access (working hypothesis or research target).

- **Axis 3: `verification_status` — project's own collation**
  - Values: VERIFIED / SECONDARY_ONLY / PRIMARY_PENDING / UNVERIFIED
  - VERIFIED: project members have personally collated the primary witnesses.
  - SECONDARY_ONLY: relying entirely on secondary transcription/description.
  - PRIMARY_PENDING: primaries are accessible to us but not yet collated into the data model.
  - UNVERIFIED: neither secondary documentation nor primary access has been obtained.

- **Why three not two:** the cells `(INTERPRETIVE, DOCUMENTED, SECONDARY_ONLY)` and `(INTERPRETIVE, INFERRED, VERIFIED)` are routinely confused in DH visualisations. They look identical when only Axis 1 is rendered. They are very different epistemic acts.

- **Worked-example matrix:** every realistic combination demonstrated on PAIR_001–PAIR_006 from the TEPALIT dataset.

### 4. Application: the TEPALIT hymn-pair dossier (~1,200 words)

- Project context: the APVV-24-0484 grant, the *lex orandi, lex credendi* methodology, the Cithara Sanctorum 1636 as the receptor text, the Lutheranisation thesis.
- Schema architecture: four-layer taxonomy (loci → confessional positions → hymnic evidence → hymn pairs).
- Worked dossier: PAIR_001_AY_PANNA — the documented Marian de-Catholicising case (Grešová-Sekelská 2021, p. 9). Walk through the three trust axes for this pair, showing why each is needed.
- Honest research-target display: PAIR_002_PANE_NAS (CONJECTURED placeholder) and PAIR_003_BA_CS_TARGET (DEFERRED 34-pair manifest). Show how the public companion site visually flags these so they are not mistaken for established evidence.
- Newer additions: PAIR_004 / PAIR_005 / PAIR_006 demonstrating different cells of the trust matrix.

### 5. Schema and validation (~700 words)

- CSV-based domain data + TypeScript loader with build-time cross-file integrity checks.
- Public-display rule: any pair with `evidentiary_strength = CONJECTURED` or `verification_status = UNVERIFIED` MUST carry a visible research-target banner.
- Bilingual data (Slovak / English) at every layer — argues that the data layer should match the page surface's bilingual claim.
- Citation infrastructure: `CITATION.cff`, `.zenodo.json`, JSON-LD `Dataset` structured data, per-pair "How to cite" snippets (APA + BibTeX + permalink).

### 6. Discussion: when three axes are necessary (~1,100 words)

- Confessional DH's specific peer-review failures: anecdotal review evidence from the Reformation-studies subfield.
- Replicability for theological-historical datasets: what does it mean to "replicate" a hymn-pair claim?
- The dossier as atomically citable scholarly unit: every pair has its own permalink, citation, and trust-axis state.
- Implications for citation infrastructure: citability granularity should match the unit at which scholarly disagreement actually happens — pair-level, not project-level.
- When two axes suffice: in non-confessional DH (literary history, archaeology) the third axis may be less critical because primary access tends to be more uniformly available. The third axis is most necessary in subfields where primary witnesses are scattered, partial, or behind library-access barriers.

### 7. Limitations and future work (~500 words)

- What three axes still don't capture:
  - **Collaborator attribution**: which project member collated which pair? (Multi-author DH datasets need this.)
  - **Temporal versioning of trust**: a SECONDARY_ONLY pair becomes VERIFIED after collation. The framework records the current state but not the trajectory. A version-aware trust model is future work.
  - **Confidence intervals**: trust is treated as discrete; some claims live between two cells.
- Schema extensibility: new transfer directions, new modification typologies as scholarly understanding deepens.
- Intersection with versioned datasets: Zenodo DOIs version the data; should there be a per-version trust diff?

### 8. Conclusion (~300 words)

- The three-axis framework is small (one extra column in a CSV) but consequential: it forces the project, the reader, and the peer reviewer to distinguish what we know in literature, what we have verified ourselves, and what kind of claim we are making.
- Open invitation: schema available under CC BY 4.0 + MIT; we welcome adoption and adaptation in adjacent subfields.

---

## Critical bibliography (sketch — ~25 sources)

### DH methodology

- Drucker, J. (2014). *Graphesis: Visual Forms of Knowledge Production*.
- Sahle, P. (2016). *Digitale Editionsformen* (3 vols.).
- Burdick, A. et al. (2012). *Digital_Humanities*.
- Posner, M. (2016). "What's Next: The Radical, Unrealised Potential of Digital Humanities."
- **TBD:** ITSERR-RESILIENCE project — identify whether a methodology paper has been published or is in preparation; if not, cite the project's GitHub/documentation as a software/methods reference rather than a peer-reviewed paper. Search points: ITSERR project pages, lead PI publications, recent CHR / DH / Patristics-DH conference proceedings.
- D'Ignazio & Klein. (2020). *Data Feminism*.

### *Lex orandi, lex credendi* literature

- Holeton, D. (various). "Lex orandi — lex credendi" essays in BRRP.
- Wainwright, G. (1980). *Doxology*.
- Kavanagh, A. (1984). *On Liturgical Theology*.

### Confessional-theology DH adjacents

- Confessio platform / Strassburg project (TODO: confirm details)
- Hymnorum Thesaurus Bohemicus (HTB) — http://www.clavmon.cz/htb/

### Standard citation infrastructure

- FAIR data principles (Wilkinson et al. 2016).
- CITATION.cff specification (Druskat et al.).
- Zenodo–GitHub integration documentation.
- DataCite metadata schema.

### Reformation hymnology methodology

- Grešová-Sekelská, A. (2021, 2023).
- Vajda, J. (1944).
- Mladějovská, B. (2008) — Brethren hymnody catalogue.
- Mocko, J. (1909).

### Slovak and Central-European DH

- ITSERR-RESILIENCE project corpus.
- Slovak Academy of Sciences DH publications (TBD).

---

## Worked examples to feature

| # | Pair | Trust signature | Why featured |
|---|---|---|---|
| 1 | PAIR_001_AY_PANNA | (FACTUAL, DOCUMENTED, SECONDARY_ONLY) | The "claim is in the literature but I haven't checked the primaries" cell. Single best example of why Axis 3 matters. |
| 2 | PAIR_002_PANE_NAS | (INTERPRETIVE, CONJECTURED, UNVERIFIED) | Honest research-target placeholder — three "lowest" values demonstrating transparent labelling of work-in-progress. |
| 3 | PAIR_003_BA_CS_TARGET | (DEFERRED, CONJECTURED, UNVERIFIED) | Manifest-style record showing how a research target is publicly enumerated. |
| 4 | PAIR_006_AC_BA_EUCHARIST | (FACTUAL, DOCUMENTED, PRIMARY_PENDING) | Strongest cell available to the project today: peer-reviewed verbatim citations from both witnesses (Benka 2024), but the project hasn't done its own collation. Demonstrates the gradient between PRIMARY_PENDING and VERIFIED. |

---

## Anticipated reviewer pushback (and responses)

| Likely objection | Response |
|---|---|
| "Three axes is overkill — most DH projects don't need this." | Confessional theology has specific peer-review demands. We don't claim universal applicability; we identify the subfield where the third axis is essential. |
| "Isn't this just rebranding good methodology?" | Explicit axis decomposition is a methodological move, not a rebrand. The cells matter — visualisation, filtering, validation all depend on which cell a claim occupies. |
| "How does this scale?" | 5 pairs at v0.1.0 is proof-of-concept. The pattern scales linearly with annotator effort. The CSV-based domain data ensures non-developers can extend without touching code. |
| "What about provenance metadata standards (PROV-O, etc.)?" | Three axes are a *user-facing* abstraction; PROV-O is the underlying logical model. Axis 3 (`verification_status`) maps to PROV `wasDerivedFrom` chains. Future work: emit PROV-O JSON-LD for each pair. |
| "Do you have inter-annotator agreement data?" | Not yet — single-annotator project at v0.1.0. The methodology is designed to make annotator disagreement *visible* via the trust-cell distribution, not to suppress it. Future multi-annotator phase will report agreement statistics. |
| "How does this interact with FAIR principles?" | The three trust axes are complementary to, not a replacement for, FAIR (Findable, Accessible, Interoperable, Reusable). FAIR addresses how a dataset is *exposed*; the trust axes address how *individual claims within the dataset* are epistemically classified. The TEPALIT companion meets FAIR via DOI (Findable), CC-BY-4.0 + GitHub (Accessible), CSV + JSON-LD + CFF (Interoperable), and per-pair permalinks + atomic citation (Reusable); the trust axes layer on top to expose the *quality* of each reusable unit. A future paper could explicitly map the three axes to PROV-O `wasDerivedFrom` chains for machine-readable provenance. |

---

## Open decisions for Michal

1. **Authorship.** Solo, or co-author with Klátik or Sekelská? The methodology is project-shared but the schema design is solo work. Recommend solo for first methods paper; team papers for substantive findings.
2. **Submission timing.** Before the chapter (methodology-first, more visible in DH circles), or after (chapter as primary deliverable, methods paper as spin-off)? **Recommendation: before** — the methods paper does not depend on chapter conclusions and gets the project on the DH map ahead of TEPALIT collective volume.
3. **Translation strategy.** EN-only (DHQ standard), or bilingual SK/EN with Slovak version published in *Filozofia* / *Slavica Slovaca* / a Slovak DH venue? **Recommendation: EN primary, SK abstract in CITATION.cff and `.zenodo.json`. Full Slovak translation as time permits.**
4. **Scope.** Full methods paper as outlined here, or shorter "data paper" for JOHD only? **Recommendation: both** — different audiences, different argument depths.
5. **Inclusion of dataset?** Should the paper bundle a Zenodo deposit of the v0.1.0 dataset (with DOI) as a supplementary archive? **Recommendation: yes** — strengthens the data-paper argument and supports replicability.

---

## Next concrete steps (Phase 3 priority)

1. ☐ Confirm DHQ open-call timeline; check submission queue and review turnaround.
2. ☐ Identify the right ITSERR-RESILIENCE methodology paper(s) to cite.
3. ☐ Acquire / review Drucker, Sahle, Burdick references in full.
4. ☐ Read at least one BRRP article systematically using *lex orandi, lex credendi* (Holeton confirmed candidate).
5. ☐ Discuss authorship at next TEPALIT working meeting (post-merge of the v0.1.0 release).
6. ☑ ~~Tag v0.1.0 of the dataset → Zenodo DOI → cite in methods paper.~~ **Done 2026-05-08**: v0.1.0 tagged, GitHub Release published, Zenodo concept DOI minted: `10.5281/zenodo.20081435`. Cite as: Valčo, M., & TEPALIT Project (2026). *TEPALIT Digital Companion* (v0.1.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.20081435
7. ☐ Draft §1 (Introduction) and §3 (Three-Axis Decomposition) first — these are the conceptual core. §4 (Application) is largely transcription from the existing companion site.

---

*This outline is a planning document, not a draft. The methods paper itself will be written in Phase 3 (2027) once the chapter argument is clearer and the dataset has matured beyond v0.1.0. The outline serves as a strategic placeholder so the methods-paper publication path is preserved through the project lifecycle.*
