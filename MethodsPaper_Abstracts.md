# Conference Abstracts — TEPALIT Methods Paper

**Status:** Drafts v0.1 — for submission once a target CFP is selected.
**Date:** 2026-05-08
**Source:** `MethodsPaper_Outline.md` (~7,000-word full-length methods paper, target Phase 3 / 2027 for DHQ).
**Funder:** APVV-24-0484 (TEPALIT).

This file holds three abstract variants of the same flagship paper for different CFP word-budget tiers, plus a venue strategy. It also includes one alternate-framing abstract that pivots from the methodological contribution to a substantive Reformation-history finding (PAIR_006) for venues where a Reformation-history audience is the primary target.

---

## 1. Standard CFP abstract (~470 words)

Suitable for: most DH conference CFPs (DH2027, CHR, DH Benelux, EADH, DHd), TEI, IAH, religion-DH workshops.

> **Three Trust Axes for Digital Confessional Hymnology: Decomposing Epistemic Status, Evidentiary Strength, and Verification in *Lex Orandi* Datasets**
>
> Digital humanities datasets in confessional theology — Reformation studies, hymnology, comparative liturgics — face a peer-review problem that more mature DH subfields have already encountered: the boundary between *what published scholarship has shown* and *what the dataset is inferring from that scholarship* erodes when both are flat-rendered as visualisations. The ITSERR-RESILIENCE project's epistemic-modesty framework (FACTUAL / INTERPRETIVE / DEFERRED) is a clear advance over flat-rendering, but it conflates two distinct epistemic dimensions — *what kind of claim is being made* and *how strong the textual evidence is* — and hides a third dimension that is decisive for theological-historical datasets: *whether the project's own members have personally collated the primary witnesses*.
>
> This paper argues that **three orthogonal trust axes** are necessary for confessional-theology DH datasets to be honestly peer-reviewable, and demonstrates the framework with a working dataset: the TEPALIT hymn-pair dossier (APVV-24-0484, Slovak Research and Development Agency).
>
> The three axes are: (1) **epistemic status** (FACTUAL / INTERPRETIVE / DEFERRED) — what kind of claim; (2) **evidentiary strength** (DOCUMENTED / INFERRED / CONJECTURED) — quality of textual evidence; (3) **verification status** (VERIFIED / SECONDARY_ONLY / PRIMARY_PENDING / UNVERIFIED) — whether the project has personally collated primary witnesses. The cells `(INTERPRETIVE, DOCUMENTED, SECONDARY_ONLY)` and `(INTERPRETIVE, INFERRED, VERIFIED)` are routinely conflated in single-axis DH visualisations; they are very different epistemic acts.
>
> The TEPALIT case study comprises six hymn-pair dossiers comparing the Slovak Lutheran *Cithara Sanctorum* (1636) with its Czech-Reformation source kancionáls and agendas. Each pair is a self-contained scholarly record with stable permalink, citation chain, and trust-axis state. As of v0.1.0, two pairs are VERIFIED via project-member collation of peer-reviewed critical editions (Benka 2024; Grešová-Sekelská 2023), one is PRIMARY_PENDING with explicit unblock paths documented, one is SECONDARY_ONLY pending print-edition acquisition, one is transparently flagged as a working hypothesis, and one is a research-target manifest. The trust state is exposed in CSV, JSON-LD `Dataset` structured data, and a bilingual (Slovak/English) companion website with a four-axis filter bar.
>
> The contribution is methodological, not substantive: the Reformation findings are reported elsewhere. What is offered here is a schema, a build-time validation pipeline, a dossier template, and a worked demonstration. The schema is released under CC BY 4.0 (data) + MIT (code) and is designed for adoption in adjacent confessional-DH subfields.
>
> The presentation will demonstrate the dossier interface, walk through one VERIFIED upgrade as a worked example, and discuss when three axes are necessary versus when two suffice.
>
> **Keywords:** epistemic transparency, *lex orandi lex credendi*, Reformation hymnology, Cithara Sanctorum, dossier methodology, FAIR data, schema design.

---

## 2. Short abstract (~240 words)

Suitable for: poster CFPs, lightning-talk slots, panel descriptions, very strict CFP word limits (e.g., DH Benelux short-paper: 250 words).

> **Three Trust Axes for Digital Confessional Hymnology**
>
> DH datasets in confessional theology routinely conflate distinct epistemic dimensions: *what kind of claim is being made* (factual / interpretive / deferred) versus *how strong the textual evidence is* (documented / inferred / conjectured) versus *whether the project has personally collated the primary witnesses* (verified / secondary-only / primary-pending / unverified). The cells `(INTERPRETIVE, DOCUMENTED, SECONDARY_ONLY)` and `(INTERPRETIVE, INFERRED, VERIFIED)` look identical when only one axis is rendered; they are very different epistemic acts.
>
> This paper proposes a three-axis trust decomposition for *lex orandi* datasets and demonstrates it on the TEPALIT hymn-pair dossier (APVV-24-0484, Slovak Research and Development Agency) — six paired comparisons between the Slovak Lutheran *Cithara Sanctorum* (1636) and its Czech-Reformation source kancionáls. Two pairs are VERIFIED via collation of critical editions; one is PRIMARY_PENDING with documented unblockers; one is SECONDARY_ONLY pending print-edition acquisition; one is transparently flagged as a working hypothesis; one is a research-target manifest. The trust state is exposed in CSV, in JSON-LD `Dataset` structured data, and in a bilingual companion website's four-axis filter bar.
>
> The contribution is schema and pipeline, not findings. Schema released under CC BY 4.0 (data) + MIT (code).
>
> **Keywords:** epistemic transparency, *lex orandi*, Reformation hymnology, schema design.

---

## 3. Extended abstract (~1,150 words)

Suitable for: extended-abstract tracks (some ADHO calls), DH2027 long-paper, religion-DH workshops that ask for paper-style proposals, IAH presentations.

> **Three Trust Axes for Digital Confessional Hymnology: Decomposing Epistemic Status, Evidentiary Strength, and Verification in *Lex Orandi* Datasets**
>
> ### Problem
>
> Digital humanities datasets in confessional theology — Reformation studies, hymnology, comparative liturgics, *lex orandi lex credendi* projects — share a structural weakness with adjacent religious-historical subfields: the boundary between *what published scholarship has demonstrated*, *what the project is inferring from that scholarship*, and *what the project has independently verified against primary witnesses* erodes when claims at all three levels are flat-rendered as nodes in a network graph or rows in a comparison table. Peer reviewers in this subfield are particularly alert to whether a claim about a 16th-century manuscript is *the author's verified reading* or *a relayed claim from secondary literature*; visualisation pipelines have not caught up with the conventions monograph apparatus has long encoded (footnotes, hedge-words, scholarly apparatus).
>
> The ITSERR-RESILIENCE project's epistemic-modesty framework (FACTUAL / INTERPRETIVE / DEFERRED, applied at every annotation node) is a clear advance over flat rendering. But the framework conflates two distinct epistemic dimensions: *what kind of claim* (a fact vs. an inference) and *how strong the textual evidence* (a peer-reviewed transcription vs. one's own analysis). It also leaves a third dimension implicit: *whether the project has done its own primary-source verification* or is relying on someone else's documentation. In confessional-theology DH, that third dimension is often decisive — a claim sourced from a critical edition the project has read is much stronger than a claim sourced from an article the project has read about a critical edition the project has not.
>
> ### Contribution
>
> This paper proposes a **three-axis trust decomposition**:
>
> 1. **Epistemic status** (`FACTUAL` / `INTERPRETIVE` / `DEFERRED`) — what kind of claim is being made.
> 2. **Evidentiary strength** (`DOCUMENTED` / `INFERRED` / `CONJECTURED`) — quality of textual evidence backing the claim. DOCUMENTED: a peer-reviewed source explicitly identifies the textual evidence. INFERRED: the project has direct access to both witnesses and has made the inference itself. CONJECTURED: working hypothesis or research target.
> 3. **Verification status** (`VERIFIED` / `SECONDARY_ONLY` / `PRIMARY_PENDING` / `UNVERIFIED`) — whether project members have personally collated the primary witnesses (or critical editions).
>
> The cells `(INTERPRETIVE, DOCUMENTED, SECONDARY_ONLY)` — "we are reporting a scholarly inference made by someone whose critical edition we have not yet personally read" — and `(INTERPRETIVE, INFERRED, VERIFIED)` — "we have collated both primaries ourselves and are offering our own inference" — look identical when only one axis is rendered; they are very different epistemic acts. The third axis exposes the gap.
>
> ### Application: the TEPALIT hymn-pair dossier
>
> The framework is demonstrated on the TEPALIT hymn-pair dossier (APVV-24-0484, Slovak Research and Development Agency, 2025–2028). The dataset comprises six hymn-pair dossiers — paired textual / liturgical comparisons between the Slovak Lutheran *Cithara Sanctorum* (Levoča, 1636) and its Czech-Reformation source kancionáls and agendas (the Utraquist Kolínský kancionál 1517, the Brethren Ivančický kancionál 1564, the neo-Utraquist Agenda Česká 1581 with its manuscript Bystrická supplement 1585). Each pair is a self-contained scholarly record with bilingual (Slovak / English) prose argument, stable permalink, citation chain, "How to cite this pair" snippet (APA + BibTeX), and trust-axis state.
>
> As of dataset version 0.1.0 (2026-05): two pairs are `VERIFIED` (PAIR_004 *Otče Nebeský Bože* and PAIR_006 *AC↔BA Eucharistic stratification*), warranted by project-member collation of peer-reviewed critical editions (Benka 2024 — *Agenda Neosoliensia*; Grešová-Sekelská 2023 — *Cithara Sanctorum* hymns); one pair is `PRIMARY_PENDING` with documented unblockers (PAIR_005 *Neyswětegsij* — Czech-side facsimile lookup is the only outstanding step); one pair is `SECONDARY_ONLY` pending acquisition of a print critical edition (PAIR_001 *Ay Panna gest pozdravená* — needs Baťová 2011); one is transparently flagged as a working hypothesis (PAIR_002 *Pane náš nebeský*); one is a research-target manifest covering 34 remaining hymns (PAIR_003).
>
> The trust state is exposed simultaneously in three surfaces: the CSV data files (citable as a versioned dataset, CC BY 4.0); JSON-LD `Dataset` structured data with each pair as a `hasPart` `CreativeWork` (indexable by Google Scholar and academic crawlers); and a bilingual companion website with a four-axis interactive filter bar that lets a peer reviewer navigate to any cell of the trust matrix in one click.
>
> ### Schema, validation, and the dossier template
>
> The schema is build-time-validated: every taxonomy CSV is checked at `astro build` time for column-count parity, enum-value validity, and cross-file referential integrity (every locus code referenced in `hymn_pairs.csv` must exist in `loci_hierarchy.csv`; every text_id must exist in `hymnic_evidence.csv`; every synoptikon_id must exist in the comparison data). The build fails loudly on any deviation. Each `VERIFIED` upgrade is accompanied by a verification dossier (`Verification_PAIR_NNN.md`) that records the warrant, the cited source pages, what the upgrade does and does not establish, and the audit trail timestamps.
>
> ### Discussion
>
> The paper will argue that three axes are not overkill for confessional DH, given the specific peer-review demands of this subfield; will discuss the relationship between the trust-axis framework and FAIR data principles (complementary rather than competing); will sketch a future PROV-O mapping that would expose the trust state to machine-readable provenance pipelines; and will reflect on what `VERIFIED` should require in subfields where critical editions are scarce and primary witnesses are dispersed across multiple repositories.
>
> ### Take-aways for the audience
>
> Conference attendees will leave with: (a) a schema (taxonomy/SCHEMA.md, CC BY 4.0) they can adopt or adapt for adjacent subfields; (b) a build-time validation pipeline (TypeScript reference implementation, MIT) ready to be ported to other languages; (c) a dossier template that turns each pair-level claim into an atomically citable scholarly unit; and (d) a working demonstration site (companion website at github.com/michalvalco/apvv2026-hymnals) where the framework is live and inspectable.
>
> **Keywords:** epistemic transparency, *lex orandi lex credendi*, Reformation hymnology, *Cithara Sanctorum*, Tranovský, Czech Reformation, Unity of Brethren, Utraquism, dossier methodology, FAIR data, schema design, build-time validation.

---

## 4. Alternate framing — Reformation-history audience (~470 words)

Suitable for: 16th Century Studies Conference, BRRP (Bohemian Reformation and Religious Practice), Bohemia Society, Society for Reformation Research, IAH. Pivots from methods (DH audience) to substantive findings (history audience).

> **The Cithara Sanctorum (1636) Bound In: Intra-Codex Confessional Stratification in the Bratislava Lyceal Library Exemplar of *Agenda Česká* 1581 + *Bystrická agenda* 1585**
>
> The standard scholarly account of the Slovak Lutheran *Cithara Sanctorum* (1636) treats it as the receptor of a confessional sharpening that *Tranovský* performed on Czech-Reformation hymnody. Recent work (Grešová-Sekelská 2021; Benka 2024) has refined this account by quantifying the source mix — 49 % of the older Czech repertoire absorbed into CS is Utraquist in origin — and by mapping Tranovský's differential editorial strategy (hands-off in confessionally neutral rubrics; heavy intervention in Eucharistic, Marian, and ecclesiological sections).
>
> This paper offers a complementary finding at a smaller scale. The Bratislava Lyceal Library exemplar of *Agenda Česká* 1581 + *Bystrická agenda* 1585 (the only critically edited witness, Benka 2024) preserves both documents bound together. Within this single physical codex, the printed Czech *Agenda Česká* uses a moderate Eucharistic register — "tělo a krev" without the qualifying "pravý" or "substanciálny" adjectives that characterised hardcore Lutheran anti-Reformed polemic, and grounds worthy reception in faith in the words of institution. The manuscript Slovak supplement, written approximately four years later, sharpens the same theology with explicit Lutheran *manducatio impiorum*: the unworthy receive "ne k spasenij, ale k zatraczenij wěčnemu". The intensification operates not at the cross-confessional boundary (both witnesses are confessionally Lutheran-aligned; the *Agenda Česká*'s preface declares Augsburg Confession alignment) but *within the Lutheran orbit itself*, from a moderate Czech printed register with Utraquist liturgical residue to a sharper Hungarian-Lutheran manuscript register.
>
> The implication for the broader Lutheranisation thesis is that confessional sharpening is not exclusively a phenomenon of cross-confessional transfer (Brethren / Utraquist → Lutheran via CS) but also a phenomenon of intra-Lutheran register shift, observable at the granularity of a single physical codex bound together by its early users.
>
> The paper draws on the TEPALIT hymn-pair dossier (APVV-24-0484), an open dataset that records this finding as PAIR_006_AC_BA_EUCHARIST under a three-axis epistemic-transparency framework distinguishing the type of claim, the strength of textual evidence, and the project's own primary-witness verification status. The relevant pair is at the strongest available trust signature: FACTUAL / DOCUMENTED / VERIFIED. Verbatim citations from both witnesses are available in Benka 2024 pp. 78–79 and reproduced in the dossier.
>
> The presentation will (a) walk through the AC ↔ BA Eucharistic comparison with verbatim text, (b) situate the finding in the broader pattern of Tranovský's editorial method as documented by Grešová-Sekelská, and (c) reflect on what intra-codex stratification adds to the Lutheranisation thesis as a research programme.
>
> **Keywords:** Cithara Sanctorum, Tranovský, Agenda Česká, Bystrická agenda, Banská Bystrica, *manducatio impiorum*, Reformation hymnology, intra-codex stratification.

---

## 5. Venue strategy

Listed in priority order for the **methods abstract** (variants 1–3). Variant 4 has its own venue list at the end.

| Priority | Venue | Format / word budget | Likely fit | CFP timing (TBD: confirm) | Notes |
|---|---|---|---|---|---|
| 1 | **DH2027 (ADHO)** | Long paper / short paper / poster; abstracts typically 750–1,500 words for long papers | Strong methods-paper fit; broad DH readership | Call usually opens late summer 2026; deadline late autumn 2026 | Use Variant 3 (extended). The flagship DH venue for methodologies. |
| 2 | **CHR (Computational Humanities Research)** | Full paper / short paper; ~5–10 pp. proceedings | Excellent fit — methodologically sharp, peer-reviewed proceedings | Annual cycle; CFP usually mid-year for autumn conference | Use Variant 1 or 3 expanded into a 5-pp. proceedings paper. Strong landing for the framework. |
| 3 | **DH Benelux** | Long paper / short paper / poster; ~250–500 word abstracts | Smaller, accessible regional DH conference; ITSERR community presence | Spring CFP for autumn conference | Use Variant 1 or Variant 2 (short). |
| 4 | **TEI Conference** | Paper / poster; abstracts ~500 words | Schema-design fit; less *lex orandi*-adjacent | Annual; usually early summer CFP for late autumn conference | Use Variant 1, reframed slightly to emphasise schema/validation. Reasonable backup. |
| 5 | **EADH 2026/2027** | Variable; per-conference CFP | DH-broad European venue | Per cycle | Use Variant 1 if accepted by the regional cycle. |
| 6 | **DARIAH Annual Event** | Workshops + short presentations | Infrastructure-adjacent; less methods-heavy | Per cycle | Backup; less peer-reviewed. |
| 7 | **JOHD (data-paper companion)** | Journal not conference; data paper | Pair with the DHQ submission once Zenodo DOI exists | Rolling | Out of scope for "conference abstract" but worth noting for parallel publication. |

For the **alternate-framing abstract** (variant 4):

| Priority | Venue | Format / word budget | CFP timing |
|---|---|---|---|
| 1 | **16th Century Studies Conference** | Paper / panel; 250-word abstract | Spring 2026 deadline for fall 2026 conference; spring 2027 deadline for fall 2027 |
| 2 | **BRRP (Bohemian Reformation and Religious Practice)** | Paper; varies | Per cycle (every ~3 years; check next cycle) |
| 3 | **IAH (International Society for Hymnological Research)** | Paper / posters; varies | Per cycle |
| 4 | **AAR / SBL Annual Meetings** | Religion + DH program units; 250-word abstract | March deadlines for November conference |
| 5 | **Society for Reformation Research** | Per cycle | Per cycle |

---

## 6. Submission strategy

### Recommended pairing

- **Primary**: DH2027 (long paper, Variant 3) — methods-paper visibility in the flagship DH venue.
- **Parallel**: 16th Century Studies (Variant 4) — substantive-finding visibility in the Reformation-history community.
- **Backup**: CHR proceedings paper (expanded Variant 1) — peer-reviewed methods-paper venue with proceedings publication.

Doing two complementary submissions (methods and substantive) with non-overlapping content gets the project on two distinct conference circuits without duplicate publication concerns. Both abstracts cite the open dataset; the methods paper is the schema; the history paper is the finding.

### Open decisions for Michal

1. **Co-authorship.** Variant 3 is currently solo-framed. If Sekelská is willing to co-author the substantive variant 4, that strengthens its hymnological grounding. Klátik's co-authorship on either is optional.
2. **Slovak version.** A Slovak-language abstract (translation of variant 1 or 2) opens *Filozofia*, *Slavica Slovaca*, ETF UK Bratislava events, Slovak national DH conferences. Worth preparing once a primary venue is fixed.
3. **Conference vs. workshop balance.** A workshop paper (e.g., a religion-DH workshop at DH2027) has higher acceptance odds and faster timeline than a long paper; the trade-off is reach.
4. **Dataset DOI dependency.** ~~All four abstracts cite the open dataset. The Zenodo DOI for v0.1.0 should be minted *before* any abstract is submitted, so the citation in the abstract is dereferenceable on day one.~~ **Resolved 2026-05-08**: Zenodo concept DOI is `10.5281/zenodo.20081435` (always resolves to latest version). Cite the dataset in any abstract / paper / footnote as: *TEPALIT Digital Companion* (v0.1.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.20081435

---

## 7. Next concrete steps

1. ☑ ~~**Mint the v0.1.0 Zenodo DOI** (precondition for all four abstracts).~~ **Done 2026-05-08**: `10.5281/zenodo.20081435`.
2. ☐ **Identify the next concrete CFP** with a deadline within the next 6 months. Check: DH2027 CFP timeline; CHR 2026/2027 deadlines; 16th Century Studies fall-2026 deadlines.
3. ☐ **Decide co-authorship** for variant 4 (alternate framing) — discuss with Sekelská at next TEPALIT working meeting.
4. ☐ **Prepare a Slovak-language version** of variant 1 once a Slovak venue is identified.
5. ☐ **Adapt the chosen variant** to the specific CFP's word budget and required structure (e.g., DH2027 typically wants problem / approach / contribution / outputs / bibliography).
6. ☐ **Draft a 3-minute lightning-talk version** of variant 1 in case any of the above conferences offer that slot.

---

*These are abstract drafts, not final submissions. Each variant will need targeted adaptation to the specific CFP once a venue is selected. The dataset, methods paper outline, and verification dossiers are the underlying scholarly substance; these abstracts are the public-facing summaries that match each variant to an audience.*
