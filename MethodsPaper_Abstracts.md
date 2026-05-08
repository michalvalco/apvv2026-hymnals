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

## 4b. Variant 4-short — substantive abstract trimmed to ~245 words

Generic short-form trim of the variant 4 substantive abstract, fitting any CFP with a 250-word limit (e.g., AAR/SBL program units, IAH paper proposals, BRRP if applicable). Self-contained; uses no venue-specific framing.

> **The Cithara Sanctorum (1636) Bound In: Intra-Codex Confessional Stratification in the Bratislava Lyceal Library Exemplar of *Agenda Česká* 1581 + *Bystrická agenda* 1585**
>
> Recent work on the Slovak Lutheran *Cithara Sanctorum* (1636) refines the standard "Lutheranisation" account by quantifying the source mix (49 % of the older Czech repertoire absorbed into CS is Utraquist in origin; Grešová-Sekelská 2021) and mapping Tranovský's differential editorial strategy: hands-off in confessionally neutral rubrics, heavy intervention in Eucharistic, Marian, and ecclesiological sections.
>
> This paper offers a complementary finding at smaller scale. The Bratislava Lyceal Library exemplar of *Agenda Česká* 1581 + *Bystrická agenda* 1585 (critical edition: Benka 2024) preserves both documents bound together. Within this single physical codex, the printed Czech *Agenda* uses moderate Eucharistic phrasing — "tělo a krev" without "pravý" or "substanciálny" qualifiers — and grounds worthy reception in faith in the words of institution. The manuscript Slovak supplement, written four years later, sharpens the same theology with explicit Lutheran *manducatio impiorum*: the unworthy receive "ne k spasenij, ale k zatraczenij wěčnemu" (Benka 2024, pp. 78–79). The intensification operates not at the cross-confessional boundary — both witnesses are Lutheran-aligned — but *within the Lutheran orbit itself*, from a moderate Czech printed register with Utraquist liturgical residue to a sharper Hungarian-Lutheran manuscript register.
>
> The paper draws on the open *TEPALIT Digital Companion* dataset (https://doi.org/10.5281/zenodo.20081435, CC BY 4.0) where this finding is recorded as a VERIFIED hymn-pair dossier under a three-axis epistemic-transparency framework.

**Keywords:** *Cithara Sanctorum*, Tranovský, *Agenda Česká*, Bystrická agenda, Banská Bystrica, *manducatio impiorum*, Reformation hymnology, intra-codex stratification.

---

## 5. Venue strategy — concrete deadlines (researched 2026-05-08)

### For the **methods abstracts** (variants 1–3)

| Priority | Venue | Format / word budget | Deadline / status | Notes |
|---|---|---|---|---|
| 1 | **CHR 2027** (Computational Humanities Research) | Full paper / short paper; ~5–10 pp. peer-reviewed proceedings; conference Manchester, 5–8 January 2027 | **Submission deadline: 14 August 2026, 23:59:59 AoE** ([2027.computational-humanities-research.org/cfp/](https://2027.computational-humanities-research.org/cfp/)) | **Strongest landing for the framework.** ~14 weeks from the 2026-05-08 research date; comfortable timeline. Use Variant 1 or expand toward Variant 3 for the proceedings paper. Peer-reviewed proceedings publication is a meaningful citation surface. |
| 2 | **DH2026 (ADHO)** | Long / short paper / poster; Daejeon, 27–31 July 2026 | **MISSED** — deadline was 15 December 2025 | DH2027 host being selected; CFP expected late 2026 for ~December 2026 deadline. |
| 3 | **DH2027 (ADHO)** | Long / short paper / poster | CFP not yet open (Call for Hosts only as of 2026-05) | Watch for announcement late 2026. |
| 4 | **DH Benelux 2026** | Long / short paper / poster; ~250–500 word abstracts | Per cycle (check current call) | Smaller regional venue; faster turnaround; ITSERR community presence. |
| 5 | **TEI Conference 2026** | Paper / poster; abstracts ~500 words | Per cycle | Schema-design fit; reasonable backup. |
| 6 | **DARIAH Annual Event** | Workshops + short presentations | Per cycle | Backup; less peer-reviewed. |
| 7 | **JOHD (data-paper companion)** | Journal data paper | Rolling | Out of conference scope but worth noting — pair with whatever methods venue lands. |

### For the **substantive-finding abstract** (variant 4 / 4-short)

Note: SCSC 2026 (Chicago, 29–31 October 2026) was researched but is **not pursued by this project** — Michal's strategic decision; not a deadline-availability issue. Removed from this table.

| Priority | Venue | Format / word budget | CFP timing |
|---|---|---|---|
| 1 | **BRRP** (Bohemian Reformation and Religious Practice) | Paper; varies | Per cycle (~every 3 years; check next cycle status). The single best-fit venue for this finding given the BRRP series's existing engagement with Czech Reformation liturgy and *lex orandi* methodology. |
| 2 | **IAH** (International Society for Hymnological Research) | Paper / posters; varies | Per cycle |
| 3 | **AAR / SBL Annual Meetings** | Religion + DH program units; 250-word abstract | March deadlines for November conference. Use Variant 4-short (§4b). |
| 4 | **Society for Reformation Research** | Per cycle | Per cycle |

---

## 6. Submission strategy — concrete recommendation

### Primary committable submission

**CHR 2027 (Manchester, 5–8 January 2027)** with **Variant 1** (or expanded toward **Variant 3** for the long-paper / proceedings format). Deadline **14 August 2026, 23:59:59 AoE** ([2027.computational-humanities-research.org/cfp/](https://2027.computational-humanities-research.org/cfp/)) — ~14 weeks from the 2026-05-08 research date; comfortable timeline. Peer-reviewed proceedings publication. **Strongest landing for the methods paper.**

### Substantive-finding submission (deferred)

A substantive-finding submission to a Reformation-history venue (Variant 4 or 4-short) is desirable but **not currently locked to a specific CFP**. SCSC 2026 was researched and dismissed by the project as not relevant; the strongest remaining fits are BRRP and IAH (per §5 table), both with cycles to monitor rather than imminent deadlines. Variants 4 and 4-short stay drafted and ready for whichever Reformation-history CFP emerges first.

### Why two complementary submissions remain the strategy

- **CHR (methods)** = methodologically focused DH audience; the finding is the three-axis trust framework.
- **Variant 4 (substance)** = Reformation-history audience; the finding is PAIR_006's intra-codex Eucharistic stratification.

Both cite the same open dataset (concept DOI `10.5281/zenodo.20081435`) but argue for different audiences with different evidence — non-overlapping content for two distinct conference circuits.

### Open decisions for Michal

1. **Co-authorship.** Variant 3 is currently solo-framed. If Sekelská is willing to co-author the substantive variant 4, that strengthens its hymnological grounding. Klátik's co-authorship on either is optional.
2. **Slovak version.** A Slovak-language abstract (translation of variant 1 or 2) opens *Filozofia*, *Slavica Slovaca*, ETF UK Bratislava events, Slovak national DH conferences. Worth preparing once a primary venue is fixed.
3. **Conference vs. workshop balance.** A workshop paper (e.g., a religion-DH workshop at DH2027) has higher acceptance odds and faster timeline than a long paper; the trade-off is reach.
4. **Dataset DOI dependency.** ~~All four abstracts cite the open dataset. The Zenodo DOI for v0.1.0 should be minted *before* any abstract is submitted, so the citation in the abstract is dereferenceable on day one.~~ **Resolved 2026-05-08**: Zenodo concept DOI is `10.5281/zenodo.20081435` (always resolves to latest version). Cite the dataset in any abstract / paper / footnote as: *TEPALIT Digital Companion* (v0.1.0) [Dataset]. Zenodo. https://doi.org/10.5281/zenodo.20081435

---

## 7. Next concrete steps

1. ☑ ~~**Mint the v0.1.0 Zenodo DOI** (precondition for all four abstracts).~~ **Done 2026-05-08**: `10.5281/zenodo.20081435`.
2. ☑ ~~**Identify the next concrete CFP** with a deadline within the next 6 months.~~ **Done 2026-05-08**: see §5. **Primary committable submission is CHR 2027** (Manchester, January 2027; deadline **14 August 2026** — comfortable 3-month timeline). SCSC 2026 was researched but dismissed (not relevant to the project's strategic focus).
3. ☐ **For CHR 2027** (deadline 14 August 2026): expand Variant 1 toward Variant 3 (5–10 pp. proceedings paper). Comfortable timeline allows incorporation of v0.1.1 or v0.1.2 dataset state by submission time.
4. ☐ **Decide co-authorship** for variant 4 (substantive Reformation-history finding) — discuss with Sekelská at next TEPALIT working meeting. Not time-critical now that SCSC is off the table; venue for variant 4 is monitored rather than committed.
5. ☐ **Monitor BRRP / IAH cycles** for the next opportunity to submit Variant 4 (or Variant 4-short) to a Reformation-history venue.
6. ☐ **Prepare a Slovak-language version** of variant 1 once a Slovak venue is identified.
7. ☐ **Draft a 3-minute lightning-talk version** of variant 1 in case any conference offers that slot.

---

*These are abstract drafts, not final submissions. Each variant will need targeted adaptation to the specific CFP once a venue is selected. The dataset, methods paper outline, and verification dossiers are the underlying scholarly substance; these abstracts are the public-facing summaries that match each variant to an audience.*
