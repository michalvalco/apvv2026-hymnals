# Chapter Master Plan — TEPALIT Monograph Chapter

**Version:** v0.3 (2026-05-09 — Phase 2 source-note creation kick-off; first two Tier-1 notes complete: Csepregi 2003, Hroboň 2011)
**Last updated:** 2026-05-09
**Working language:** English (internal collaboration record); chapter itself is in Slovak.

---

## Overview

The chapter is one of the deliverables under APVV-24-0484 (TEPALIT, *Teologická paradigma liturgických a hymnologických prameňov v protestantskom prostredí strednej Európy*), 2025–2028. Michal Valčo is a participant on the grant (1,600 hours) and is responsible for the dogmatic-comparative dimension of the monograph; Adriana Sekelská is responsible for the musicological/hymnological reconstruction dimension; Miloš Klátik is the PI.

The chapter performs a four-*loci* comparative dogmatic study of Lutheranism, Utraquism, and the Unity of Brethren as seen through liturgical and hymnological sources, and includes a transfer-and-reception case study centred on the *Cithara Sanctorum* (1636) and its Czech-Reformation source materials.

A preliminary publication (the Theologos paper, derived from PAIR_006, sitting in `../Drafts/`) develops one specific sub-finding from the chapter's source base — the AC 1581 / BA 1585 intra-codex stratification — into a focused English-language journal article. The chapter incorporates that finding as a case study within §5 (Transfer a recepcia) but is otherwise much broader in scope.

### Definition of "done" for the chapter

A submittable Slovak-language chapter draft of approximately 50,000 – 70,000 characters (a typical Slovak academic monograph chapter length, equivalent to roughly 8,000 – 12,000 words in English), comprising:

- The six-section structure described in `Chapter_Outline.md` (Úvod → Konfesionálny kontext → Dogmatické profily → Komparatívna analýza → Transfer a recepcia → Záver)
- Comprehensive coverage of all four theological *loci* in §4
- The *Cithara Sanctorum* case study in §5 with PAIR_006 as a sub-component
- A bibliography in the conventions of the TEPALIT monograph editorial board
- The APVV-24-0484 funding acknowledgment

---

## Five-phase plan

The chapter follows the Research Paper Protocol's five-phase structure (per the project instructions and the Claude_Protocols system).

### Phase 1 — Literature reconnaissance

**Goal:** Map the existing scholarship landscape across all four *loci* and identify which sources are verified, which are scaffolding, and which gaps remain.

**Status:** Complete (per the 2026-05-09 audit pass on the Deep Research Literature-Gap Report; see Decision log v0.2 entry).

**Done:**
- v02 master annotation produced (Slovak, in Monografia archive)
- Compass artifact ecclesiology synthesis produced (AI-generated, scaffolding)
- Six AI-generated research reports across the three thematic clusters (Eucharist, ecclesiology, hymnological transfer)
- Comparative hymnological strategy document produced
- Detailed annotated bibliography compiled
- Theologos paper drafted as a preliminary publication on PAIR_006
- Deep Research Literature-Gap Report produced and audit-corrected (`Drafts/DeepResearch_Literature_Gap_Report.md`, audit pass 2026-05-09; pre-audit backup preserved as `Drafts/DeepResearch_Literature_Gap_Report_PreAudit_Backup.md`)

**Remaining (now folded into Phase 2 immediate-priority list):**
- AI-reports verification audit — newly tractable now that the audited Literature-Gap Report serves as comparative baseline

### Phase 2 — Source documentation per *locus*

**Goal:** Produce verified `Sources/` notes for the primary sources and key secondary scholarship, organised by *locus*. Each source note contains full bibliographic data, key arguments, quotes-with-page-numbers, and Michal's annotations.

**Status:** In progress.

**Done:**
- `Sources/Benka_2024.md` — primary source for AC 1581 / BA 1585 (used in Theologos paper; will be reused for chapter §4.1)
- `Sources/Verification_PAIR_006.md` — verification dossier for the AC/BA stratification finding
- `Sources/Analysis_Eucharistic_Rite_AgCeska.md` — close reading of the AC eucharistic rite
- `Sources/Analysis_Eucharistic_ThreeColumn.md` — three-column comparative analysis (AC/BA/CS)
- `Sources/Zurek_2016.md` — Žurek on the utraquist sanctoral in 16th-c. Czech graduals (was on the v0.1 immediate-priority list; now done)
- `Sources/Chalupsky_2024.md` — Chalupský on baptism per Agenda Česká (was on the v0.1 immediate-priority list; now done)
- `Sources/GresovaSek_2023.md` — *Georgius Tranoscius Teschiniensis* (critical edition of 8 CS hymns)
- `Sources/GresovaSek_Prispevok.md` — Grešová-Sekelská 2021 *Clavibus unitis* on CS origin and content
- `Sources/GresovaSek_2019.md` — Grešová-Sekelská 2019 *Testimonia Theologica* on *de cultu sanctorum* in CS hymnody
- `Sources/Vajda_1944.md` — Vajda's standard English-language CS history
- `Sources/Csepregi_2003.md` — Csepregi on *Confessio Pentapolitana* redating and *taktische Duldung* of Slovak Lutheranism under Ferdinand I; foundational for §3 and §4.1 (was on the Phase 2 v0.2 Tier 1 priority list; now done)
- `Sources/Hrobon_2011.md` — Hroboň on the Kralice Bible as the trans-confessional Slovak-Czech Protestant Scripture; accessible English-language anchor for §4.4 and §5 (was on the Phase 2 v0.2 Tier 1 priority list; now done)
- (additional Sources files per the existing `Source_Index.md`)

**Remaining (immediate priority — refreshed 2026-05-09 against the audited Literature-Gap Report):**

*Tier 1 — accessible without acquisition / ILL; can be drafted as proper Tier-2 source notes in upcoming sessions:*
- ~~`Sources/Crews_2018.md`~~ — **RECLASSIFIED to Tier 2 on 2026-05-09**: JSTOR returns blank for scraping, ResearchGate returns 403, Project MUSE and the Penn State Scholarly Publishing Collective give only the abstract. Pull via Comenius University library JSTOR proxy or ILL. C. Daniel Crews, "Luke of Prague: Theologian of the Unity," *JMH* 18/1 (2018), pp. 1–46. Foundational for §4.3 (Brethren scriptural authority) and §4.1 (Lukáš's spiritual-presence Eucharistic position).
- `Sources/Ruscin_2019.md` — Peter Ruščin, "Nové nápevy levočských vydaní Cithary Sanctorum v 17. storočí," *Musicologica Slovaca* 10(36)/1 (2019), pp. 46–81. Open access at sav.sk; complements Grešová-Sekelská on Levoča editions.
- ✅ `Sources/Csepregi_2003.md` — **DONE 2026-05-09**. Csepregi, "Konfessionsbildung und Einheitsbestrebungen…", *ARG* 94 (2003), pp. 243–275. Foundational for §3 (Pentapolitana redating) and §4.1 (Upper-Hungarian Lutheran Eucharistic articles). academia.edu mirror.
- `Sources/Csepregi_2004.md` — Csepregi, "A Confessio Pentapolitana újabb datálási kísérletei," *Lelkipásztor* 79 (2004), pp. 300–303. Hungarian-language vector of the same dating debate. REAL repository.
- ✅ `Sources/Hrobon_2011.md` — **DONE 2026-05-09**. Hroboň, "The Kralice Bible: Czech-mate to the KJV," *Word & World* 31/3 (2011). Open access. The accessible English-language anchor for §4.1 Kralice argument.
- `Sources/Puff_2018.md` — Helmut Puff, "Belief in the Reformation Era," *CEH* 51/1 (2018), pp. 46–52. Cambridge Core; orienting essay for §2 confessionalisation framing.
- ~~`Sources/Hrejsa_1912.md`~~ — **RECLASSIFIED to Tier 2 on 2026-05-09**: monograph not digitised in NDK ČR, Archive.org, or Google Books. Page-specific quotes traceable through David 1999, Halama, and the recent ETF UK Praha *Česká konfese 550 let* conference proceedings — but original-text reading requires print copy from Comenius University library or ILL through ETF UK Praha. *Česká konfesse, její vznik, podstata a dějiny* (Praha 1912). Foundational for §4.1 CB-1575 refutation.
- `Sources/David_1999.md` — Z. V. David, "Utraquists, Lutherans, and the Bohemian Confession of 1575," *Church History* 68/2 (1999), pp. 294–337. Foundational for §4.1 and §3 utraquist profile. JSTOR.

*Tier 2 — requires acquisition, ILL, or collegial coordination; track as a parallel acquisitions queue:*
- `Sources/Just_Rothkegel_2012.md` — Mühling/Opitz volume (€150+, ILL preferred). **The cornerstone item for §4.1 CB-1575 refutation.**
- `Sources/Haberkern_2016.md` — *Patron Saint and Prophet* (OUP). Bridges §4.2 (utraquist self-understanding via Hus commemoration) and §4.4 (Hus as authority).
- `Sources/Haberkern_2023.md` — R&RR 25/2–3 (2023). T&F paywall; the recent anglophone irenic statement; needed for §4.1 + §5.
- `Sources/Augustinova_2011.md` — *Cithara sanctorum bibliografia* (SNK Martin). Foundational for §6 / §5 reception narrative.
- `Sources/Leaver_2024.md` — *A New Song We Now Begin* (Fortress 2024). The methodological parallel for §7-style framing.
- `Sources/Csepregi_2009.md` — Csepregi, "Die Confessio Pentapolitana," Acta Collegii Evangelici Prešoviensis 10 (2009). Prešov university press; ILL.
- `Sources/GresovaSekelska_2016.md` — Grešová-Sekelská, *Slovenská hudba* 42/3 (2016), pp. 261–274. **Best obtained collegially from Adriana directly; she is a TEPALIT collaborator.**
- `Sources/Soucek_1933.md` — J. B. Souček, *Theologie výkladů kralické šestidílky* (Praha: Královská česká společnost nauk, 1933). **§4.4 prerequisite (added 2026-05-09).** The 1933 monograph that analyses the KB's marginal notes and concludes the Brethren were "more Calvinist than Lutheran in their theology." Surfaced from `Hrobon_2011.md` fn. 18. Required before any chapter claim about KB-and-Brethren-Reformed-theology can be made — exactly the kind of reception-history claim the chapter must scrutinise rather than absorb. Acquisition: check Kramerius NDK ČR / Národní knihovna Praha / ETF UK Praha library.

*Tier 3 — Phase 1 carry-over, newly tractable:*
- `Drafts/Reports_Verification_Audit.md` — verification audit of the six AI-generated research reports against the audited Literature-Gap Report as comparative baseline.

**Remaining (medium-term, by *locus*):**
- *Locus* 1 (sviatosti): Lukáš Pražský, Jakoubek ze Stříbra, Confessio Fratrum 1535
- *Locus* 2 (ekleziológia): Hus *De ecclesia*, Acta Unitatis Fratrum, Bazilejské kompaktáta
- *Locus* 3 (soteriológia): early- vs. late-Brethren writings, Augustana Apology
- *Locus* 4 (Písmo a tradícia): patristic reception in Slovak Lutheran sources

### Phase 3 — *Locus*-by-*locus* comparative drafting

**Goal:** Draft §§3 and 4 of the chapter, working *locus* by *locus*. For each *locus*, produce: (a) normative-document comparison, (b) liturgical/hymnological illustration, (c) convergence/divergence/hybrid identification, (d) developmental analysis.

**Status:** Not yet started.

**Sequence:** §4.1 (Eucharistia) → §4.2 (Ekleziológia) → §4.3 (Soteriológia) → §4.4 (Písmo a tradícia). Eucharistia goes first because the source base is most developed (PAIR_006, Benka 2024, Theologos paper); ecclesiology second because compass artifact provides scaffolding; soteriology and scripture/tradition last because their source bases are least developed.

**Output per *locus*:** ~12,000 – 15,000 characters per locus in the chapter draft.

### Phase 4 — Transfer-and-reception synthesis (§5)

**Goal:** Draft §5 (Transfer a recepcia), the case-study chapter that integrates PAIR_006 within the broader *Cithara Sanctorum* reception narrative.

**Status:** Not yet started; will benefit from the Theologos paper as anchoring scaffolding.

**Components:**
- Tranovský's editorial method (per Grešová-Sekelská 2021, 2023)
- PAIR_006 as a sub-finding (intra-codex stratification AC 1581 / BA 1585)
- Selected hymn-pair case studies from the Theologos paper's broader source base
- Receptive convergence and divergence patterns in Slovak Lutheran reception of Czech Reformation hymnody

### Phase 5 — Revision and finalisation

**Goal:** Revise the integrated chapter draft for argument flow, voice consistency, terminology consistency, citation completeness, and editorial requirements of the TEPALIT monograph.

**Status:** Not yet started.

**Components:**
- Integration pass (read all sections together)
- Terminological consistency pass (Slovak academic register; coordinate with Klátik / Hanus on monograph-wide terminology decisions)
- Citation completeness pass
- Bibliography assembly (per TEPALIT monograph editorial conventions, TBD)
- Internal review (Klátik, Sekelská, Hanus)
- Final revisions
- Submission to monograph editor

---

## Source-base inventory

The chapter operates on a three-tier source-base discipline derived from the project instructions and the Citation Discipline directive.

### Tier 1 — Primary sources (evidentiary base)

These are the documents the chapter cites for textual evidence. They include:

- *Confessio Augustana* 1530 (Latin/German critical editions; Kolb–Wengert 2000; Bente–Dau 1921 Triglot)
- Formula of Concord 1577 (same)
- Confessio Bohemica 1575 (per Hrejsa 1912 and per the 1609 Kramerius reprint)
- Štyri pražské artikuly 1420 (in standard Czech editions)
- Bazilejské kompaktáta 1436 (in standard Czech edition)
- Confessio Fratrum 1535 (German Wittenberg 1538 edition + Czech original)
- Hus, *De ecclesia* 1413 (Czech-Latin standard editions)
- Lukáš Pražský writings (Czech standard editions)
- Petr Chelčický, *Síť viery* (Citarny.cz Czech transcription + standard scholarly editions)
- Jan Blahoslav, *Musica* 1558/1569 (Kramerius MZK)
- Luther, *Formula Missae* 1523 + *Deutsche Messe* 1526 (WA 12 + WA 19)
- AC 1581 + BA 1585 (Benka 2024 critical edition + 229 PNG scans of AC 1581 in Monografia archive)
- Brethren kancionáls — Šamotulský 1561 (Kramerius NK ČR), Ivančický 1564 (Kramerius MZK), where digitised
- Cithara Sanctorum 1636 first edition (REAL-R, Budapest)
- Selected hymn texts from HTB (Hymnorum Thesaurus Bohemicus, clavmon.cz)

### Tier 2 — Verified peer-reviewed scholarship

These are recorded in `../Sources/` with full bibliographic data, key arguments, quotes-with-page-numbers, and Michal's annotations. They include the works listed in the Theologos bibliography plus the additional sources that the chapter requires (Žurek, Chalupský, David, Hrejsa, Mladějovská, Kowalská, Csepregi, etc.).

### Tier 3 — Scaffolding only

These provide structural orientation but are not citable. They include:

- The compass artifact ecclesiology synthesis (`compass_artifact_markdown.md`)
- The six AI-generated research reports (Claude/Gemini/ChatGPT versions of Eucharist, ecclesiology, hymnological transfer themes)
- The Perplexity Agenda Česká 1581 detailed research report
- The comparative hymnological strategy and links document

**Discipline rule:** Every claim used in the chapter draft must be traceable to a Tier 1 or Tier 2 source. Tier 3 documents may be consulted for orientation; their claims may be useful as starting hypotheses; but a Tier 3 claim does not enter the draft until it has been verified against a Tier 1 or Tier 2 source.

**Documented Tier-3 errors to refute in the chapter:**
- The compass artifact and the comparative hymnological strategy doc both characterise *Confessio Bohemica* 1575 as adopting "a Calvinist interpretation of the Eucharist". This is the older anglophone reading propagated through, e.g., older editions of *Encyclopaedia Britannica*; it does not survive a careful reading of the Czech text. The CB's *duchovně i podstatně, věrou i také ústy* formula is deliberate both/and irenicism, not Calvinism. The chapter §4.1 will refute this characterisation as one of its substantive contributions. (The Theologos paper §6 already gestures toward this refutation; the chapter develops it fully.)

---

## Dependencies and external coordination

### Sekelská — musicological/hymnological reconstruction

Adriana Sekelská is responsible for the musicological/hymnological reconstruction dimension of TEPALIT, including the critical edition work on the *Cithara Sanctorum*. The chapter's §5 (Transfer a recepcia) draws on her published findings (Grešová-Sekelská 2021, 2023). The chapter will not duplicate her source-attribution and editorial-method work; it will cite her findings and ask the dogmatic question that her musicological work makes possible.

**Coordination point:** Before §5 is drafted, check with Sekelská whether any new findings from her ongoing work (post-2023) should be incorporated.

### Klátik — PI and systematic-theology lead

Miloš Klátik leads the project and the monograph. The chapter coordinates with the broader monograph in:
- Terminological consistency (Slovak academic register; specific terminological choices to be coordinated)
- Citation conventions for the published volume (TBD by editorial board)
- Chapter scope and length (TBD)

**Coordination point:** Before Phase 4 begins, confirm the chapter's target length and editorial conventions with Klátik.

### Hanus — team member

Radoslav Hanus is a team member with ongoing contributions to the broader project (including the parallel Jakub Glatz Jubileum paper for ZKG). Internal-review pass in Phase 5 includes Hanus.

### Debnár — IT / database infrastructure

Ivan Debnár handles IT/database infrastructure for TEPALIT. The chapter's reference to PAIR_006 (recorded in the *TEPALIT Digital Companion* dataset) depends on Debnár's infrastructure being operational.

---

## Workspace conventions

These conventions are inherited from the Theologos paper workflow and adapted for the chapter context.

### File-writing discipline

- Files are written directly to the Windows working directory (`C:\Users\valco\OneDrive\Documents\GitHub\apvv2026-hymnals\Chapter\...`), never to the internal Linux container.
- Incremental file building uses `Desktop Commander:write_file` with `mode='append'`. Never `Filesystem:write_file` for incremental work, since it silently overwrites.
- Targeted edits use `Desktop Commander:edit_block`.
- Each chunk in append-mode writes is kept to ~25–30 lines for performance.

### Citation discipline

- Page numbers for all direct quotes — no exceptions.
- Primary sources in their original languages where possible (Czech, Slovak, Latin, German); translations in square brackets immediately following.
- AI-generated research reports require full primary-source verification before any claim from them enters the chapter draft (see Tier 3 above).
- All citations to AI-generated reports in working-document footnotes are explicitly marked as "Tier 3 / unverified" until verified.

### Voice and style

- Chapter language: Slovak academic register.
- Match Michal's distinctive style as documented in the Claude_Protocols Quality Standards.
- Avoid the AI-cliché vocabulary documented in the user preferences.
- Match Slovak academic conventions for the TEPALIT monograph (specific conventions TBD by editorial board).

### Audit and verification

- Each major drafting milestone (per *locus* in §4; whole §5; integrated draft) gets a dedicated audit document in `Drafts/` (e.g., `Audit_Locus1_Eucharistia.md`).
- Audits identify substantive issues, minor inconsistencies, and stylistic items, with priority labels (HIGH / MEDIUM / LOW / AWARENESS).
- Audit fixes are tracked and applied in dedicated revision passes.

### Versioning

- Chapter drafts are versioned: `Chapter_Draft_v0.1_[scope].md`, `Chapter_Draft_v0.2_[scope].md`, etc.
- The integrated draft, when complete, becomes `Chapter_Draft_v1.0_Full.md`.
- Bibliography is maintained as a separate file: `Chapter_Bibliography.md`.
- Major revisions create new version numbers; small fixes are folded into the same version.

---

## Current state and immediate next steps

**Current phase status:** Phase 1 complete (audit pass 2026-05-09); Phase 2 in progress, with two Tier-1 source notes complete (Csepregi_2003, Hrobon_2011) and the priority list re-sequenced against in-session accessibility findings.

**Immediate priorities (next 2–3 sessions):**

1. **Tier-1 source-note creation, continued.** Two of the eight v0.2 Tier-1 items are done (Csepregi_2003, Hrobon_2011). Two have been reclassified to Tier 2 because their online-only access is blocked (Crews_2018 needs Comenius JSTOR proxy or ILL; Hrejsa_1912 needs ETF UK Praha library or ILL). The remaining four Tier-1 items are open-access and tractable in upcoming sessions: Ruščin_2019 (sav.sk), Csepregi_2004 (Hungarian-language *Lelkipásztor*), Puff_2018 (Cambridge Core *CEH*), David_1999 (JSTOR — to be re-tested for in-session access; if blocked, also reclassify to Tier 2). Recommended sequence: Ruščin_2019 first (open-access, complements Grešová-Sekelská on Levoča editions for §5), then Puff_2018 (orienting essay for §2 confessionalisation framing), then Csepregi_2004 (Hungarian-language vector of the same Pentapolitana redating debate Csepregi_2003 makes in German).

2. **Tier-2 acquisitions decisions** — Michal's call (still pending from session-opening). The cornerstone item is Just/Rothkegel 2012; secondary cornerstones are Haberkern 2016 (monograph) and Haberkern 2023 (R&RR article). Augustínová 2011 needs SNK Martin collegial route. Grešová-Sekelská 2016 *Slovenská hudba* is best obtained collegially from Adriana at the next TEPALIT meeting. Newly added to the Tier-2 queue: Souček 1933 (KB notes monograph) as a §4.4 prerequisite. Crews 2018 and Hrejsa 1912 have moved into this queue too — Crews via JSTOR institutional access, Hrejsa via print or ILL.

3. **AI-reports verification audit** (`Drafts/Reports_Verification_Audit.md`) — newly tractable now that the audited Literature-Gap Report serves as comparative baseline. Tests which claims in the six AI-generated research reports survive against the audit-confirmed scholarly consensus.

4. **Coordinate with Klátik and Sekelská** on (a) chapter target length and editorial conventions; (b) any post-2023 Sekelská findings to incorporate into §5.

**Medium-term priorities (next 4–6 sessions):**

5. **Begin §4.1 (Locus 1 — Eucharistia) drafting** *after* the CB-1575-refutation source notes (Hrejsa 1912 + Just/Rothkegel 2012 + Haberkern 2023) are in place. This is the *locus* with the most developed source base, the clearest argument structure (Theologos paper provides scaffolding), and the most consequential refutation. Expected output: ~12,000 – 15,000 characters of chapter draft.

6. **Continue source-note creation for Phase 2 medium-term entries** — Lukáš Pražský, Jakoubek ze Stříbra, Confessio Fratrum 1535, Hus *De ecclesia*, Acta Unitatis Fratrum.

**Longer-term priorities:**

7. Phases 3, 4, 5 per the schedule above. Ordering and pacing TBD by Michal's other commitments (Algorithmic Psyche series, CePOZiR proceedings, Glatz Jubileum, teaching platforms, mentoring program, Skopje conference paper).

---

## Decision log

Significant decisions about the chapter's scope, approach, or conventions get logged here as they happen.

**v0.1 (workspace creation):**
- Decision: Use a single alphabetical bibliography per the Theologos paper's convention, until/unless Klátik specifies a split-list convention for the TEPALIT monograph.
- Decision: Treat the six AI-generated reports as Tier-3 scaffolding only; conduct a verification audit before any of their claims enter the chapter draft.
- Decision: PAIR_006 enters the chapter as a sub-component of §5, not as a stand-alone section. The Theologos paper handles the focused PAIR_006 argument; the chapter's §5 nests it within the broader *Cithara Sanctorum* reception narrative.
- Decision: The Confessio Bohemica 1575 refutation (against the Calvinist-Eucharistic mis-reading) becomes one of the chapter's substantive contributions, primarily located in §4.1.

**v0.2 (2026-05-09 — audit pass on Deep Research Literature-Gap Report):**
- Event: Phase 1 closed with the production and audit of the Deep Research Literature-Gap Report (`Drafts/DeepResearch_Literature_Gap_Report.md`). Audit identified roughly 20% bibliographic-error rate in the original AI-generated reconnaissance — including two outright author misattributions in the prioritisation top-10 (Crews wrongly cited as Atwood for "Luke of Prague"; Ruščin 2019 wrongly cited as Grešová-Sekelská) and one wrong ISBN (Just/Rothkegel 2012). All errors corrected in place; pre-audit version preserved as `Drafts/DeepResearch_Literature_Gap_Report_PreAudit_Backup.md`. Substantive scholarly findings (CB irenic consensus, Slovak hymnological cluster, Hungarian Csepregi corpus, Saxon hymnological confessionalisation cluster) hold up.
- Decision: Methodological discipline tightened. No citation surfaced by AI-generated reconnaissance enters `Sources/*.md` without an independent verification step against the publisher catalogue, journal index, DOI, or repository entry. The verification step belongs in the source-notes pipeline; reconnaissance reports are Phase 1 orientation material only.
- Decision: Phase 2 immediate-priority list refreshed against the audited Report. Two of the four v0.1 immediate-priority items (Žurek and Chalupský) are already done; David_1999 and Hrejsa_1912 carry forward; eight new items from the audited Report's top-10 are added, split between Tier 1 (immediately accessible) and Tier 2 (acquisition / ILL / collegial coordination required).
- Decision: The CB-1575 Calvinist mis-reading refutation is now strongly supported. The audit confirmed that no peer-reviewed post-2010 anglophone or German-language venue defends the older Calvinist characterisation; its persistence is a phenomenon of tertiary reference works (Britannica, encyclopedia.com, derivative AI synthesis), not of current scholarship. The chapter §4.1 refutation can therefore be framed as one of *reference-work persistence versus scholarly consensus*, not as an ongoing scholarly disagreement — a stronger and more defensible framing.

**v0.3 (2026-05-09 — Phase 2 source-note creation kick-off):**
- Event: First two Tier-1 source notes from the v0.2 priority list documented to the Žurek/Benka quality bar — `Sources/Csepregi_2003.md` (33-pp. *ARG* article on Pentapolitana redating, fully accessed via academia.edu mirror) and `Sources/Hrobon_2011.md` (8-pp. *Word & World* article on the Kralice Bible, open-access via Luther Seminary). Both notes follow the established structure (citation, multi-paragraph summary, key arguments with page numbers, notable quotes with page numbers, *locus*-by-*locus* relevance, cross-references, verification status, notes).
- Event: Six new entries added to `Sources/Source_Index.md` Section V — four surfaced from `Csepregi_2003.md` cross-references (`Suda_2001`, `Kohnle_2001`, `Solyom_1999`, `Schwarz_2000`), two from `Hrobon_2011.md` (`Kyas_1997`, `Rice_2006`).
- Decision: Phase 2 access-discipline tightened. Online accessibility was tested before drafting each source note; items that returned blank or paywalled (Crews 2018 on JSTOR/ResearchGate/Project MUSE; Hrejsa 1912 not in NDK ČR / Archive.org / Google Books) were not drafted as metadata stubs but reclassified to Tier 2, on the principle that a "proper Tier-2 source note" requires the source to have been actually read in-session — not pieced together from secondary citation. The Tier 1 list now reflects this discipline: Crews_2018 and Hrejsa_1912 require institutional access (Comenius JSTOR proxy and ETF UK Praha library / Comenius print or ILL respectively).
- Decision: Souček 1933 (*Theologie výkladů kralické šestidílky*) added to the Tier 2 acquisitions queue as a §4.4 prerequisite. Surfaced from `Hrobon_2011.md` fn. 18, where its conclusion that the Brethren KB notes are "more Calvinist than Lutheran in their theology" is reported flatly and without scrutiny. The chapter cannot accept Souček's reading uncritically — it is structurally identical to the CB-1575 Calvinist mis-reading the chapter is committed to refuting, and may itself be a reception-history artefact that needs independent verification against the original KB notes. The acquisition is a §4.4 prerequisite in the same sense that Just/Rothkegel 2012 is a §4.1 cornerstone prerequisite.
- Pending Michal-side decisions (carried over from session opening, still open): (a) Tier-2 acquisitions strategy across Just/Rothkegel 2012, the two Haberkerns, Augustínová 2011, Leaver 2024 — recommended split is ILL for Just/Rothkegel and Haberkern 2023, purchase for Haberkern 2016 and Leaver 2024, collegial via SNK Martin for Augustínová; (b) Slovak email to Adriana Sekelská requesting her 2016 *Slovenská hudba* article — Claude-drafted version available on confirmation.

---

*This master plan is a living document. Update as the chapter progresses through phases and as decisions accumulate.*
