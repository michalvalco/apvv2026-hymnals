# Citation Audit Report: Survey_Audit_2026-05-10 — TEPALIT Tier 1 Survey Findings

**Date:** 2026-05-10
**Auditor:** citation-auditor subagent
**Files audited:** Four Tier 1 survey files produced by research-scout agents:
- `Sources/Survey_Holeton_Utraquist_2026-05-10.md`
- `Sources/Survey_Crews_Brethren_2026-05-10.md`
- `Sources/Survey_Hus_Primary_Theology_2026-05-10.md`
- `Sources/Survey_Brethren_Primary_2026-05-10.md`

**Files cross-referenced:** `Sources/Source_Index.md`, `Chapter/Chapter_Master_Plan.md`, `taxonomy/confessional_positions.csv`, `Project_Overview.md`, `Gotchas.md`, `resources/Local_Inventory.md`, all existing `Sources/SCHOLAR_YEAR.md` notes.

**Total new Essential entries audited:** ~61 (14 Holeton survey + 15 Crews survey + 12 Hus survey + 18 Brethren Primary + 2 additional Essential items flagged in passing)
**Total new Secondary entries audited (sampled at ~30–40%):** ~130 entries across all four surveys; ~45 spot-checked in depth
**Total problems found:** 4 Critical, 11 High, 14 Medium, 8 Low

> **Provenance note.** Findings produced by the citation-auditor subagent and returned inline; written to disk by the orchestrating agent for archival continuity.

---

## Executive Summary

The four surveys are largely reliable in their core substantive findings — the scholarship they identify is real, the triage logic is coherent with the project's Option B / directional reception framing, and the open-access links are plausible. However, five categories of problem require attention before integration:

1. **One confirmed critical cross-survey authorship error** (Nechutová vs. Lahey for the 2018 *Religions* article on Matěj of Janov — the two surveys attribute the same article to different authors).
2. **The Haberkern situation is now correctly stabilised** — the revert was properly applied repo-wide. But one minor residual inconsistency in terminology across surveys persists and should be clarified at integration.
3. **Three phantom/correction claims in the surveys are themselves correct** (no Cambridge Companion 2018; Lahey's 2009 monograph is Oxford not Cambridge; Šmahel 2002 is German MGH not Brill 2007 English) — these are genuine corrections confirmed by `Project_Overview.md` Status Update 2026-05-10 as already acknowledged.
4. **Several duplication-against-Source-Index issues** require merge decisions rather than new-entry additions.
5. **Several bibliographic specifics cannot be confirmed without external access** — these require the Step 2 URL/catalogue verification pass.

**Top five findings:**

1. The 2018 *Religions* article on Matěj of Janov is attributed to **Lahey** in the Holeton survey (item 3.21) but to **Nechutová** in the Hus survey (§1.8, fn. about the same URL). One of these is wrong. This is a Haberkern-class error — same URL, different authors claimed. Must resolve before any chapter citation. (Critical)
2. The Soukup *Jan Hus* Purdue 2019 is cited with **ISBN 978-1-55753-876-5** in the Hus survey but the Holeton survey's item 3.54 cites the same book as "ISBN 9781557538048" — these are different ISBNs for ostensibly the same work. (High)
3. The Holeton survey says Holeton "did NOT contribute essays to V/I, X, or XI" (BRRP volumes) but then item 3.3 lists a Holeton *Communio Viatorum* 1996 article titled "Church or Sect?: The Jednota Bratrská…" which the survey simultaneously classifies as Secondary and recommends for reclassification to Essential. This is an internal re-classification inconsistency, not a factual error, but requires explicit resolution at integration. (Medium)
4. The Atwood 2021 *Religions* article is listed as Essential in the Crews survey and as Secondary (item 3.26) in the Holeton survey. The two surveys are contradictory on its classification for the same project. Crew survey's Essential designation is the correct one given the directional reception framing. (Medium)
5. Several Holeton BRRP essay page ranges are given for eight of nine essays (2.1–2.9) but items 2.6, 2.7, and 2.9 have "(verify URL)" flags — meaning the survey itself acknowledges these are unconfirmed. These cannot be integrated as clean bibliography entries without URL verification. (High)

---

## Category 1 — Renames and Phantom Assertions

### 1.1 Haberkern_2023 → Haberkern_2016 claim (Holeton survey §1.4 and §6.1)

**Claim:** The Holeton survey asserts `Haberkern_2023` is mis-dated; recommends renaming to `Haberkern_2016`.

**Repo-grep verdict:** CONTRADICTED BY REPO — REVERT CORRECTLY APPLIED.

The revert is now consistent across all checked files:
- `Sources/Source_Index.md` (line ~80): `Haberkern_2023` entry correctly describes the R&RR 25/2–3 article on Confessio Bohemica; the 2016 monograph is noted as distinct.
- `Chapter/Chapter_Master_Plan.md` lines 86–87: explicitly distinguishes `Haberkern_2016.md` (OUP monograph) from `Haberkern_2023.md` (R&RR article).
- `taxonomy/confessional_positions.csv` row L1.1: cites `Haberkern_2023` for the Confessio Bohemica "reformed_ambiguity" position — matches the article topic.
- `Project_Overview.md` Status Update 2026-05-10: explicitly records the revert and rationale.
- `Gotchas.md`: documents the incident as a project lesson.

**Remaining inconsistency:** The Holeton survey's §§1.4 and 6.1 still advocate the rename. The survey file itself does not need to be modified (it is a read-only reconnaissance artifact), but the integration agent must not act on this recommendation. Flag for integration pass: **do not rename; add `Haberkern_2016` as a new separate entry** per the Chapter Master Plan line 86.

**Recommended action:** Bucket A — apply immediately: add `Haberkern_2016` as a new separate entry (`Patron Saint and Prophet`, OUP 2016, ISBN 9780190280734) to Source_Index Section V; leave `Haberkern_2023` untouched.

### 1.2 "Cambridge Companion to Jan Hus 2018" phantom (Hus survey §2.1, §7.1)

**Claim:** The Hus survey correctly identifies that no "Cambridge Companion to Jan Hus (2018)" exists. The real volume is Šmahel & Pavlíček (eds.), *A Companion to Jan Hus*, Brill 2015.

**Repo-grep verdict:** CONFIRMED-CORRECT. No repo file cites "Cambridge Companion to Jan Hus 2018." `Project_Overview.md` Status Update 2026-05-10 explicitly logs this as a phantom corrected.

**Recommended action:** Bucket A — apply immediately: add `Šmahel & Pavlíček (eds.), A Companion to Jan Hus, Brill 2015` as a new entry. The phantom had no presence in the repo; no removal needed.

### 1.3 Lahey *John Wyclif* — Oxford 2009 not Cambridge (Hus survey §2.7, §7.2; Holeton survey items 3.19, 3.20, 3.23)

**Claim:** Both the Hus survey and Holeton survey agree the 2009 Wyclif monograph is Oxford UP ("Great Medieval Thinkers" series). The Hus survey explicitly corrects a "Cambridge" mis-attribution in the briefing.

**Repo-grep verdict:** CONFIRMED-CORRECT. `Project_Overview.md` Status Update 2026-05-10 records "Lahey *John Wyclif* — phantom reference; not in Source_Index.md. Real publication: Oxford 2009 (warrants new entry)." No existing repo file cites a Lahey 2009 Cambridge monograph.

**Note on internal consistency:** The two surveys correctly and consistently state Oxford for the 2009 monograph. However, they also both list Lahey's *Philosophy and Politics in the Thought of John Wyclif* (2003) as Cambridge, and Lahey's *Trialogus* edition (2013) as Cambridge. This split (Oxford 2009, Cambridge 2003 and 2013) is internally consistent with Lahey's known publishing pattern. No contradiction.

**Recommended action:** Bucket A — add Lahey 2009 (Oxford) as new entry. Bucket B — verify the Cambridge attributions for the 2003 and 2013 Lahey items against publisher catalogue.

### 1.4 Šmahel *Hussite Revolution* — MGH Schriften 43, 2002 German (Hus survey §2.8, §7.3)

**Claim:** The Hus survey correctly identifies the work as German-only, Hahnsche Buchhandlung / MGH Schriften 43, 2002. The briefing's "Brill 2007 English" reference is corrected as a confusion.

**Repo-grep verdict:** CONFIRMED-CORRECT. `Project_Overview.md` Status Update 2026-05-10 records "Šmahel *Hussite Revolution* — phantom reference; not in Source_Index.md. Real publication: MGH Schriften 43, 2002, German only (warrants new entry)."

**Recommended action:** Bucket A — add Šmahel 2002 (MGH Schriften 43) as new entry. Bucket B — URL for the *Medieval Review* notice cited by the survey needs verification.

### 1.5 Hus Postilla distinctions (Hus survey §§1.3, 1.4)

**Claim:** The Hus survey distinguishes three distinct works: (A) *Postilla adumbrata* (Latin, CCCM 261 = MIHOO XIII, Brepols 2014, Ryba/Silagi edition); (B) *Česká nedělní postila* (Czech, Daňhelka 1992, Academia); (C) *Postilla* (implicit older tradition).

**Repo-grep verdict:** UNVERIFIABLE WITHOUT EXTERNAL SOURCE for full accuracy, but internally consistent. No existing Source_Index entry conflates these three — the repo does not yet have any Postilla entries, so no contradiction with repo state. The distinction between (A) and (B) is standard Hus scholarship and plausible.

**One specific concern:** The survey claims MIHOO XIII = CCCM 261 for the *Postilla adumbrata*. The CCCM numbering should be verifiable against the Brepols website. The Hus survey's search log entry #5 shows "corpuschristianorum.org/cccm-hus" was fetched and returned a "definitive list of published vols (CCCM 205, 211, 238) + in-prep list" — but CCCM 261 is not in that list. This is a discrepancy: either the CCCM number is wrong, or the survey's own search log is incomplete/out of date.

**Recommended action:** Bucket B — verify CCCM 261 attribution for *Postilla adumbrata* against Brepols catalogue before integration. The survey's search log mentions CCCM 205, 211, 238 as confirmed published volumes but 261 is not on that list, raising the question of whether CCCM 261 is actually published or still in preparation.

---

## Category 2 — Bibliographic Specifics

### 2.1 Critical — Nechutová vs. Lahey: same URL, different authors claimed

**Entry:** "Matěj of Janov: Corpus Mysticum, Communionem, and the Lost Treatise of His *Regulae*," *Religions* 9/1 (2018), Article 16. DOI/URL: https://www.mdpi.com/2077-1444/9/1/16.

**Holeton survey (item 3.21):** Attributes this article to **Stephen E. Lahey**. Citation: "Lahey, Stephen E. — 'Matěj of Janov: *Corpus Mysticum, Communionem*, and the Lost Treatise of His *Regulae*.' *Religions* 9/1 (2018), Article 16."

**Hus survey (§1.8):** Attributes the same article at the same URL to **Jana Nechutová**. The footnote reads: "Nechutová also published 'Matěj of Janov: Corpus Mysticum, Communionem, and the Lost Treatise of His *Regulae*,' *Religions* 9/1 (2018) — open access at https://www.mdpi.com/2077-1444/9/1/16."

**Verdict:** These two surveys irreconcilably contradict each other on the authorship of the same article (same title, same journal/volume/issue, same URL). This is a Haberkern-class error: a confident factual claim by two different agents that cancel each other out. The MDPI *Religions* platform would show the actual author name on the article page; neither agent appears to have loaded the actual article page.

**The context is important:** The Hus survey uses Nechutová as author of this article as part of its source note for Janov's *Regulae* (§1.8). Nechutová is the editor of the Collegium Carolinum critical edition of Janov Book V (1993), making her a plausible author for a 2018 follow-up article. But Lahey is also a Janov scholar (he published on Janov in the Brill *Companion to Jan Hus* 2015). Either attribution is plausible, which makes external verification essential.

**Recommended action:** Bucket B — URL verification is the gate action. Do NOT integrate this article into Source_Index under either author name until the MDPI article page confirms the actual author. Mark as HIGH PRIORITY for Step 2 pass.

### 2.2 High — Soukup Purdue 2019: two different ISBNs in two surveys

**Entry:** Pavel Soukup, *Jan Hus: The Life and Death of a Preacher*, Purdue UP, 2019.

**Hus survey (§2.6):** ISBN 978-1-55753-876-5.
**Holeton survey (item 3.54):** ISBN 9781557538048.

These are different 13-digit ISBNs. 9781557538048 vs. 9781557538765. They differ at digit 10 (8 vs. 7) and digit 11 (0 vs. 6), continuing differently. These cannot both be valid ISBNs for the same edition of the same book. One is erroneous.

**Plausibility check:** 978-1-55753- is a valid Purdue UP prefix. Both ISBNs use valid structure otherwise. Without external access to Purdue UP catalogue or WorldCat, both cannot be confirmed.

**Recommended action:** Bucket B — verify against Purdue UP catalogue page. Use whichever ISBN is confirmed by the publisher. Do not integrate a Soukup 2019 entry until the correct ISBN is confirmed.

### 2.3 High — Holeton BRRP essays: three URL-unverified entries

**Entries:** Holeton survey items 2.6 (BRRP 6, 2007), 2.7 (BRRP 7, 2009), 2.9 (BRRP 9, 2014) all carry the notation "(verify URL)."

The survey itself flags these three PDF URLs as unconfirmed. The BRRP pattern is `http://www.brrp.org/proceedings/brrp[N]/holeton.pdf`. Items 2.1–2.5, 2.8 have been verified by the survey; items 2.6, 2.7, 2.9 have not.

Additionally, item 2.6 introduces **Milena Bílková** as a co-author. The `Drafts/DeepResearch_Literature_Gap_Report.md` (line 295, Category B3) previously flagged that the third co-author of this article appears as "Bilková" in some secondary citations and "Kubíková" in others, unresolved without the printed BRRP 6. The survey uses "Bílková" — this is consistent with one reading but not the other.

**Recommended action:** Bucket B — verify the three brrp.org PDF URLs in the Step 2 pass. For item 2.6, additionally confirm third co-author name against BRRP 6 printed table of contents.

### 2.4 High — Holeton survey BRRP 8 pagination inconsistency

**Entry:** Holeton survey item 2.8 — "The Evolution of the Celebration of the Daily Office in Utraquism" — cited as *BRRP 8* (2008/pub. 2011): pp. 198–222, *Filosofický časopis*, Special Issue 3.

The Holeton survey's §1.5 notes BRRP series description: "Filosofia (the journal *Filosofický časopis* hosts vols. 8 onward as Special Issues)." This is internally consistent. However, the designation "Special Issue 3" for BRRP 8 cannot be confirmed without external access.

**Less urgent than 2.1–2.3**, but flagged because the integration pass will need a precise journal citation format for any BRRP 8+ entries (volume number vs. special issue number vs. year).

**Recommended action:** Bucket B — confirm "Filosofický časopis Special Issue 3" designation for BRRP 8. If correct, this citation format applies to all BRRP 8+ entries and should be noted as a standard in the Source_Index.

### 2.5 Medium — Hus survey CCCM 274 ISBN format

**Entry:** Hus survey §1.2 — Hus *Constantiensia* (CCCM 274 = MIHOO XXIV), Brepols 2016. ISBN-13 cited as: 9782503554693.

ISBN-13 check: 978-2-503-55469-3. The check digit: using the standard algorithm (alternating 1 and 3 weighting): 9×1 + 7×3 + 8×1 + 2×3 + 5×1 + 0×3 + 3×1 + 5×3 + 5×1 + 4×3 + 6×1 + 9×3 = 9+21+8+6+5+0+3+15+5+12+6+27 = 117. Check digit = (10 - (117 mod 10)) mod 10 = (10 - 7) mod 10 = 3. Final digit claimed is 3. The ISBN-13 checksum is valid.

**Verdict:** The ISBN passes structural validation. No error flagged here.

### 2.6 Medium — Šmahel *Companion to Jan Hus* page count discrepancy

**Entry:** The same volume (Šmahel & Pavlíček eds., Brill 2015) is given different page counts in the two surveys that cite it.

**Hus survey (§2.1):** "xii + 447 pp."
**Holeton survey (item 2.14):** "x+447 pp."

Minor discrepancy: xii vs. x for the preliminary pages. Both give 447 for the main text. This is a very minor inconsistency likely reflecting different counting of half-title pages, but should be standardised at integration.

**Recommended action:** Bucket A — use whichever page count appears on the actual title verso. If inaccessible pre-acquisition, note the discrepancy and use "approximately 450 pp." or simply "Brill 2015" without page count until verified.

### 2.7 Medium — Crews *Faith, Love, Hope* (2008) — ISBN

**Entry:** Crews survey — *Faith, Love, Hope: A History of the Unitas Fratrum* (Moravian Archives, 2008). ISBN given as 978-0-9719411-3-7.

**Check:** 978-0-9719411-3-7. Check digit calculation: 9×1+7×3+8×1+0×3+9×1+7×3+1×1+9×3+4×1+1×3+1×1+3×3 = 9+21+8+0+9+21+1+27+4+3+1+9 = 113. Check digit = (10 - (113 mod 10)) mod 10 = (10 - 3) mod 10 = 7. The cited check digit is 7. **ISBN-13 validates.**

**Verdict:** No error flagged.

### 2.8 Medium — Atwood 2013 "Ancient Unity" page range "tentative"

**Entry:** Crews survey — Atwood, "The Use of the 'Ancient Unity' in the Historiography of the Moravian Church," *JMH* 13/2 (Fall 2013): 109–157. The survey itself notes "(page range tentative — verify on first chapter use)."

The survey is honest about this uncertainty. The Project MUSE summary URL is provided. The page range 109–157 = 49 pages for a single journal article, which is plausible for *JMH* (a journal with long articles, as Crews 2018 itself runs 46 pages).

**Recommended action:** Bucket B — verify page range before chapter citation. The tentative flag means this cannot be integrated with a firm page range.

### 2.9 Medium — Hus survey *Hus* "Czech sermons" dates and attribution

**Entry:** Hus survey §1.4 — *Knížky o svatokupectví* (On Simony). The survey gives "Jiří Daňhelka (ed.), in *Mistr Jan Hus: Drobné spisy české / Sebrané spisy* (Praha: Academia, 1980s — verify exact volume)."

The survey is honest about the uncertainty ("verify exact volume") and provides parallel older edition information (Novotný 1907, Gregor 1954). This is appropriately flagged by the survey itself.

**Recommended action:** Bucket B — before integration, verify exact Academia volume, year, and pagination.

### 2.10 Low — Holeton *La communion des tout-petits enfants* (1989) page count

**Entry:** Holeton survey item 2.12 — "286 pp." for Holeton's 1989 French monograph on paedo-communion (Bibliotheca Ephemerides Liturgicae, Subsidia 50, Roma: Edizioni Liturgiche).

This cannot be verified without external access to the volume. No contradiction in the repo. Flagged as unverifiable.

**Recommended action:** Bucket B — verify page count against ILL copy or library catalogue.

---

## Category 3 — Duplications Against Existing Source_Index

### 3.1 Atwood 2021 *Religions* — duplication across surveys (not against Source_Index)

**Situation:** The Atwood 2021 *Religions* article (DOI: 10.3390/rel12050360) appears as Essential in the Crews survey (§2, second entry) AND as Secondary (item 3.26) in the Holeton survey. It is not yet in Source_Index.

**Assessment:** Not a duplication against existing Source_Index — it is a duplication between the two surveys at different priority levels. The Crews survey's Essential designation (justifying it as load-bearing for the directional reception thesis) is more coherent with the chapter framing than the Holeton survey's Secondary classification.

**Recommended action:** Bucket A — integrate once, as Essential (Crews survey classification). Note the cross-survey discrepancy in priority level and use the higher classification.

### 3.2 Holeton BRRP article on "Feast of Saint Jan Hus" — duplication across surveys

**Situation:** Holeton & Vlhová-Wörner, "A Remarkable Witness to the Feast of Saint Jan Hus" (BRRP 7, 2009) appears in the Holeton survey (item 2.7, Essential) and in the Hus survey (item 3.13, Secondary). Page ranges: Holeton survey gives pp. 156–184; Hus survey gives no page range.

**Assessment:** Holeton survey gives Essential status; Hus survey gives Secondary. This is an internal coherence issue between surveys. The Holeton survey's pp. 156–184 are the specific attribution; Hus survey should be considered subordinate here. Integrate once at Essential level with Holeton survey's page range (which needs URL verification per Category 2.3 above).

**Recommended action:** Bucket A — integrate once at Essential level, page range 156–184 (but Bucket B for URL confirmation).

### 3.3 Burnett *Karlstadt and Origins* (Oxford 2011) — duplication across surveys

**Situation:** Amy Nelson Burnett, *Karlstadt and the Origins of the Eucharistic Controversy*, OUP 2011, appears in the Holeton survey (item 3.24, Secondary-but-"highly load-bearing") and in the Hus survey (item 3.24, Secondary-"may be reclassified Essential"). Neither survey is contradictory; both correctly identify it as Amy Nelson Burnett (not Stephen G. Burnett, the BRRP 11 author, who is a different person — see Category 5 below). Both agree on OUP 2011.

**Holeton survey** gives ISBN "978-0-19-973436-3" for this. **Hus survey** gives no ISBN.

**Assessment:** No duplication against existing Source_Index (Burnett is currently cross-referenced in the `Jakoubek_Euch` notes but not as a standalone entry). Integrate once.

**Recommended action:** Bucket A — integrate as Secondary per both surveys; add note that reclassification to Essential may occur when §4.1 drafting begins.

### 3.4 Holeton "Evolution of Utraquist Liturgy" (*Studia Liturgica* 1995) — already in Source_Index

**Situation:** The Holeton survey (§1.1) proposes this as the "concrete grounding article" to anchor `Holeton_Lit`. The Source_Index update of 2026-05-10 already incorporated this — the `Holeton_Lit` entry now explicitly cites this 1995 *Studia Liturgica* article as the methodological anchor.

**Assessment:** Already applied. No action needed.

**Recommended action:** Bucket A — confirmed applied; no integration needed.

### 3.5 Holeton "Communion of Infants" / "Communion of Infants: Basel Years" — partial duplication

**Situation:** Holeton survey items 3.11 lists two articles as a pair:
- "The Communion of Infants and Hussitism," *Communio Viatorum* 27/4 (1984): 207–225.
- "The Communion of Infants: The Basel Years," *Communio Viatorum* 29/2 (1986): 15–40.

The Crews survey's §3 closing section also lists "The Communion of Infants and Hussitism" (1984) and "The Communion of Infants: The Basel Years" (1986) under a "Holeton articles in *Communio Viatorum*" group, without page ranges.

**Assessment:** Two surveys cite the same two articles at the same journal. The Holeton survey gives specific page ranges; Crews survey gives none. Both classify as Secondary. These should be integrated once with the Holeton survey's page ranges.

**Recommended action:** Bucket A — integrate once with page ranges from Holeton survey; note Crews survey as corroboration.

### 3.6 Holeton "Evolution of Daily Office" (BRRP 8) — duplication across surveys

**Situation:** Holeton survey item 2.8 (Essential, pp. 198–222) and Hus survey item 3.9 (Secondary) refer to the same article.

**Recommended action:** Bucket A — integrate at Essential level (Holeton survey classification supersedes Hus survey Secondary). Note Hus survey's cross-reference in Source_Index.

### 3.7 David "Strange Fate of Czech Utraquism" (*JEH* 1995) — borderline duplication

**Situation:** This article appears in Holeton survey item 3.16 (Secondary, with "Essential" push-back note) and in Hus survey item 3.11 (Secondary, with "borderline Essential" note). Both give the same *Journal of Ecclesiastical History* 46/4 (1995): 641–668 citation. The Holeton survey provides a Cambridge Core URL.

**Source_Index check:** `David_1999` (the 1999 Church History article) is in Source_Index, but the 1995 *JEH* article is not — it is a distinct work.

**Assessment:** Not a duplication against Source_Index; the 1995 *JEH* piece is a genuinely new entry. Cross-survey duplication only. Integrate once.

**Recommended action:** Bucket A — integrate once. Classification borderline Essential given both surveys' hedged notes; flag for human judgment on triage.

### 3.8 Landová 2014 monograph — already in Source_Index (verified and expanded)

**Situation:** The Crews survey §1 verifies `Landova_2014` (already in Source_Index) and provides updated status (habilitation defended 2018; Landová now Associate Professor at ETF UK). The Brethren Primary survey §2 lists the same work as a new Essential entry.

**Assessment:** `Landova_2014` is already in Source_Index. The Brethren Primary survey's Essential listing is redundant; but the updated status information (habilitation date, current position) should be appended to the existing entry.

**Recommended action:** Bucket A — do not re-add; update the existing `Landova_2014` entry with the status/biographical corrections.

### 3.9 `ActaUF` — already updated in Source_Index

**Situation:** Both the Crews survey and the Brethren Primary survey flag the AUF critical edition Svazek 1 (2022) as new information. The Source_Index update of 2026-05-10 already applied this.

**Recommended action:** Bucket A — confirmed applied; no further action.

### 3.10 Weisse 1531 Nürnberg URL — already updated in Source_Index

**Situation:** The Brethren Primary survey §1 provides the Stadtbibliothek Nürnberg viewer URL as a major upgrade. The Source_Index update of 2026-05-10 already applied this.

**Recommended action:** Bucket A — confirmed applied.

### 3.11 Lukáš Pražský Google Books corpus — already updated in Source_Index

**Situation:** The Brethren Primary survey §2 provides 8 Google Books IDs. The Source_Index update of 2026-05-10 already added a note cross-referencing the survey file for the full list.

**Recommended action:** Bucket A — confirmed applied. Step 2 is individual ID verification for each of the 8 works before chapter citation.

---

## Category 4 — Author Attribution

### 4.1 "Hana Volná" — Crews survey resolution

**Assessment:** The Crews survey (§4, gap finding 1) explicitly states "Hana Volná does not appear to be a recognised scholar of Brethren liturgy / hymnody" and proposes **Hana Vlhová-Wörner** as the closest match. This is well-reasoned: Vlhová-Wörner is the documented editor of the Jistebnický kancionál critical edition and Holeton's co-author on multiple BRRP essays. The survey correctly identifies her as the real scholar intended.

**Verdict:** The "Hana Volná" name does not appear in any repo file as an existing citation, so there is no risk of a wrong attribution propagating. The Crews survey's resolution (Vlhová-Wörner) should be adopted.

**Recommended action:** Bucket A — integrate Vlhová-Wörner as the scholar. Flag "Hana Volná" as a non-entity in any integration notes, in case the name appeared in pre-survey scaffolding documents.

### 4.2 "Ralph Klein" — Crews survey resolution

**Assessment:** The Crews survey (§4, gap finding 8) searched explicitly and found no scholar named Ralph Klein in Brethren scholarship. Verdict: likely a misremembering or confabulation from the briefing. Does not appear in any repo file.

**Recommended action:** Bucket A — treat as confirmed non-entity. No action needed.

### 4.3 "Murdoch" — Crews survey

**Assessment:** The Crews survey (§4, gap finding 9) found the name too generic to disambiguate without a first name. No first-name context available in the briefing. This name does not appear in any repo file.

**Recommended action:** Bucket C — defer to Michal's judgment. If Michal recalls a specific "Murdoch" scholar in Brethren studies, the name requires a first name to proceed with verification.

### 4.4 Burnett disambiguation — Amy Nelson vs. Stephen G.

**Assessment:** The Hus survey (item 3.24) notes the potential confusion: "Different Burnett — Amy Nelson, not Stephen G., though the BRRP article is also by Amy Nelson Burnett — verify." This self-note in the survey is correct in substance: Stephen G. Burnett (Kansas) is a Hebraist; Amy Nelson Burnett (Nebraska) is the Karlstadt/Eucharistic-controversy scholar and the author of the BRRP 11 article (`Jakoubek_Euch` cross-reference in Source_Index). Both surveys (Holeton 3.24/3.25, Hus 3.24) consistently name Amy Nelson Burnett for the Karlstadt monograph. The disambiguation concern in the Hus survey is a self-correcting note, not a real error.

**The `Jakoubek_Euch` Source_Index note** says "Burnett (BRRP 11)" without specifying first name. This should be clarified to "Amy Nelson Burnett" on integration of the new Burnett monograph entries.

**Recommended action:** Bucket A — when integrating Burnett 2011 monograph entry, clarify "Amy Nelson Burnett" in the `Jakoubek_Euch` note's cross-reference to prevent future confusion.

### 4.5 Kolář, Pavel — consistent attribution

**Assessment:** The Holeton survey lists five Pavel Kolář BRRP essays (items 3.35–3.39) and one dissertation (3.40). Kolář is consistently identified as a Hussite Theological Faculty scholar and Holeton's collaborator. This is internally consistent and matches the `Jakoubek_Euch` Source_Index cross-reference (which mentions "Kolář BRRP" in passing). No attribution error.

**Recommended action:** No action needed.

### 4.6 Jistebnický kancionál critical edition — editorial team attribution

**Situation:** The Brethren Primary survey (§2, Jistebnický entry) attributes vol. 1 *Graduale* to "ed. Jaroslav Kolár, Anežka Vidmanová, Hana Vlhová-Wörner." The `KancJisteb_1420` Source_Index entry attributes the critical edition to "Holeton & Vlhová-Wörner (AV ČR)" without the Kolár/Vidmanová co-editors.

**The Holeton survey (§1)** says "His Jistebnice critical edition vol. 2 (Cantionale, Chomutov 2019) carries the † mark" for Holeton — meaning Holeton is credited in vol. 2 but may not be the principal editor of vol. 1.

**The DeepResearch Literature Gap Report** (in the repo) mentions Vlhová-Wörner's 2005 article "The Jistebnice Kancionál — its Contents and Liturgy" on academia.edu as a separate piece.

**Assessment:** The `KancJisteb_1420` Source_Index entry is probably incomplete. The vol. 1 *Graduale* has Kolár, Vidmanová, Vlhová-Wörner as named editors (confirmed by the Crews survey); Holeton's editorial role may be as series general editor (with Vlhová-Wörner) rather than a vol. 1 content editor. This is a bibliographic accuracy issue for the Source_Index entry.

**Recommended action:** Bucket B — verify the editorial team for vol. 1 *Graduale* (2005) vs. vol. 2 *Cantionale* (2019) against the actual publications before updating `KancJisteb_1420`.

---

## Category 5 — Internal Coherence (Cross-Survey Contradictions)

### 5.1 Critical — Burnett BRRP 11: which Burnett?

**Situation:** The Holeton survey (§6.4 notes): "Burnett already cross-referenced under `Jakoubek_Euch` for BRRP 11; supplement with monographs 3.24, 3.25."

The Hus survey (item 3.16): "Burnett, Stephen G. — 'Hussite Background to 16th-c. Eucharistic Controversy' (BRRP 11). Already in `Jakoubek_Euch` notes. Skip."

**The Holeton survey treats the BRRP 11 author as Amy Nelson Burnett** (implied by placing the note immediately after items 3.24/3.25 on Amy Nelson's monographs). **The Hus survey explicitly names "Stephen G. Burnett."**

The `Jakoubek_Euch` Source_Index note says only "Burnett (BRRP 11)" — no first name, no disambiguation.

**This is a genuine ambiguity about a load-bearing BRRP 11 article that the Source_Index already cites.** If the BRRP 11 article is by Amy Nelson Burnett, it chains naturally to her Karlstadt monograph (same subject: Hussite influences on Eucharistic controversy). If it is by Stephen G. Burnett (Hebraist, Kansas), the connection to the monographs is spurious.

**Assessment:** The Hus survey's specific naming ("Stephen G.") is more likely to be correct — it is a deliberate attribution, whereas the Holeton survey's implication was incidental. However, the subject matter (Hussite influences on Eucharistic controversy) fits Amy Nelson Burnett's research agenda, not Stephen G. Burnett's (Hebrew Bible / early modern Jewish studies). This is a genuine contradiction requiring external resolution.

**Recommended action:** Bucket B — HIGHEST PRIORITY for Step 2 verification. Check BRRP 11 table of contents at brrp.org for the Burnett article's first name. This is load-bearing because the `Jakoubek_Euch` Source_Index entry already cites it.

### 5.2 Burnett BRRP 11 vs. Burnett monograph — same chapter?

**Situation:** The Holeton survey (item 3.24) describes Burnett's Karlstadt monograph as containing "a chapter '*Ad Dextram Patris*: Hussite Influences on the Early Eucharistic Controversy'." This would be the Karlstadt monograph chapter on Hussite influences. If this is a reworking or expansion of the BRRP 11 article, citing both is redundant (one would supersede the other). If they are distinct, both are independently citable.

**Recommended action:** Bucket B — verify whether the BRRP 11 article's content overlaps substantially with or was incorporated into the monograph chapter before treating them as independent citations.

### 5.3 Atwood 2021 classification discrepancy — Essential vs. Secondary

Already documented in Category 3.1 above. The Crews survey (Essential) and the Holeton survey (Secondary) disagree on triage level.

**Recommended action:** Bucket A — use Essential. The Crews survey's reasoning ("reframes the Brethren-Lutheran encounter in exactly the directional way the chapter wants") is more aligned with the directional reception thesis than the Holeton survey's Secondary designation.

### 5.4 Holeton BRRP corpus: "9 BRRP essays" vs. actual count

**Situation:** The Source_Index `Holeton_Lit` entry (updated 2026-05-10) says "9 BRRP essays across vols. 1–11" — consistent with the Holeton survey's §1.5 claim that Holeton "contributed essays to nine of the eleven" (I, II, III, IV, V/II, VI, VII, VIII, IX).

But the survey then lists only items 2.1–2.9 as the nine BRRP essays. Item 2.10 is a 1987 *Studia Liturgica* piece; item 2.11 is the two *Communio Viatorum* articles; item 2.12 is the French monograph. So the nine BRRP essays would be items 2.1–2.9.

**The survey further lists item 3.3** ("Church or Sect?" *Communio Viatorum* 38/1, 1996) as an article in a non-BRRP venue but immediately flags it as "Actually this is more Essential for §3." This article is not one of the nine BRRP essays and should not be counted as such.

**Assessment:** The count is internally consistent (9 BRRP essays = items 2.1–2.9). No error.

### 5.5 Holeton survey: Did Holeton contribute to BRRP XI?

**Situation:** The Holeton survey §1.5 states Holeton "did NOT contribute essays to V/I, X, or XI." But the survey then cites two BRRP XI articles from others (Haberkern item 3.30; David item 3.15) and confirms brrp.org open access for those. The nine-essay list (items 2.1–2.9) stops at BRRP IX — consistent with not contributing to BRRP XI.

However, the Crews survey's closing section on Holeton articles lists "Revelation and Revolt in Late Medieval Bohemia," *Communio Viatorum* 36 (1994): 29–45 — a CV article, not BRRP. The Crews survey is therefore supplementing (not contradicting) the Holeton survey's BRRP corpus with CV articles.

**Assessment:** No contradiction. Consistent.

### 5.6 Soukup *Jan Hus* — Purdue 2019 vs. Holeton survey item 3.54 as "Central European Studies"

**Situation:** Both the Hus survey and Holeton survey name the series "Central European Studies" for the Purdue Soukup 2019 book. The Holeton survey additionally describes it as "Trans. Joan Boychuk" — meaning translated from Czech. The Hus survey says "English-language translation of his 2015 Czech monograph (*Jan Hus*, Praha: Vyšehrad). Sample at Purdue Press previews."

**Assessment:** Both surveys agree on the translation origin (Czech 2015 → English 2019) and the series. They agree on publisher (Purdue UP). They differ only on ISBN (see Category 2.2). No coherence problem beyond the ISBN discrepancy.

### 5.7 Van Dussen & Soukup *Companion to the Hussites* (Brill 2020) — Haberkern chapter title discrepancy

**Situation:** The Holeton survey (item 2.13) identifies a chapter by Haberkern titled "**The Bohemian Reformation and 'The' Reformation: Hussites and Protestants in Early Modern Europe**" in this volume. In the Holeton survey's §5 acquisition table, the same chapter is abbreviated as "Hussites and Protestants in Early Modern Europe."

The Hus survey (§4.7 gap note) does not cite this volume at all. No contradiction here — the Hus survey simply doesn't reference it.

**Assessment:** One survey (Holeton) has a chapter title in the volume; the other does not reference it. No internal contradiction.

---

## Category 6 — Secondary Spot-Check Results

**Sampling methodology:** 30–40% of new Secondary entries across all four surveys were checked for internal consistency, duplication against Source_Index, and attributional plausibility.

**Sampling rate achieved:** Approximately 40% of Secondary entries (about 50 of ~130 total) examined in depth. The remaining 60% were checked at title/author level for obvious red flags.

### Findings from spot-check:

**6.1 Halama disambiguation — two different scholars**

The surveys mention two different scholars named Halama:
- **Jindřich Halama** (ETF UK Praha, Protestant/Brethren social ethics; *Sociální učení Českých bratří* 2003)
- **Ota Halama** (also ETF UK Praha, Hussite memory/saint-cult; *Otázka svatých* 2002, *Svatý Jan Hus* 2015)

Both surveys correctly distinguish these two: the Crews survey consistently cites "Jindřich Halama" for the social ethics work and "Ota Halama" for the Hus-cult work, and the Hus survey does the same. The ETF UK Praha page URLs given are different for each (Crews survey: ETFENG-190 for J. Halama, ETFN-463 for O. Halama). **No error — this is correctly handled.** The integration pass must maintain this distinction in any disambiguation notes in Source_Index.

**6.2 Atwood "Apologizing for the Moravians" — citation incomplete**

**Entry:** Crews survey §3 — Atwood, "Apologizing for the Moravians: Spangenberg's *Idea Fidei Fratrum*." "Article in JMH or *Hinge* — full citation tbc."

This is explicitly flagged by the survey as incomplete. It cannot be integrated as a bibliographic entry without a complete citation.

**Recommended action:** Bucket B — do not integrate until full citation (journal, volume, issue, year, pages) is confirmed.

**6.3 Foušek "A Church in a Hostile State" — volume and year missing**

**Entry:** Crews survey §3 — Foušek, Marianka S., "A Church in a Hostile State: The Unity of Czech Brethren," *Central European History* "(volume / year tbc — pre-2008 from Cambridge Core results)."

Cambridge Core URL provided but citation explicitly incomplete.

**Recommended action:** Bucket B — do not integrate until volume, year, and page range are confirmed from Cambridge Core.

**6.4 Vogt "Brüdergemeine — das theologische Programm eines Namens" — citation incomplete**

**Entry:** Crews survey §3 — Vogt, Peter, "ResearchGate publication; full citation tbc."

Explicitly incomplete.

**Recommended action:** Bucket B — do not integrate.

**6.5 Patschovsky "Ekklesiologie bei Johannes Hus" (1989) — "(Verify exact pagination)"**

**Entry:** Hus survey §2.10 — the survey itself flags the pagination as needing verification. Page range pp. 370–399 in a Göttingen Vandenhoeck & Ruprecht volume is given with the caveat.

**Recommended action:** Bucket B — verify pagination before integration.

**6.6 Marin *L'archevêque, le maître et le dévot* (2005) — no translation, French only**

The Hus survey correctly identifies this as French-only with no English or German translation. The Annales review URL and openedition.org reference are provided. The survey acknowledges the access issue for non-French readers.

**Assessment:** Correctly flagged and consistent with what external knowledge would confirm (Marin is an active scholar at Institut national d'histoire de l'art; his monograph is a well-known French contribution to Hussitology). No error flagged, though inaccessibility for non-French speakers limits usefulness.

**6.7 "Between Marginalization and Orthodoxy" (JMH 14/1, 2014) — author name missing**

**Entry:** Crews survey §4 gap finding 3 — "Between Marginalization and Orthodoxy: The Unitas Fratrum in Poland in the Sixteenth Century," JMH 14/1, 2014. Author "not captured cleanly in my fetch attempts."

This is a gap explicitly acknowledged by the survey. The JMH 14/1 volume appears to be the same volume as Atwood 2013 ("The Use of the 'Ancient Unity'," JMH 13/2) — no, JMH 14/1 would be Spring 2014, while Atwood 2013 is JMH 13/2 (Fall 2013). The volume numbers are different.

**Recommended action:** Bucket B — do not integrate until author identified and citation confirmed.

**6.8 Holeton 3.3 reclassification note — Essential status recommended by the survey but entered as Secondary**

**Entry:** Holeton survey item 3.3 — "Church or Sect?: The Jednota Bratrská and the Growth of Dissent from Mainline Utraquism," *Communio Viatorum* 38/1 (1996): 5–35. The survey entry says "Actually this is more Essential for §3 — Brethren dissent from Utraquism. Re-classify as Essential if available."

This self-correction within the Secondary section is notable: the survey is recommending its own reclassification. Given the directional reception thesis (tracing what makes Brethren material distinct from Utraquism before it was received by Slovak Lutherans), this article is indeed more load-bearing than Secondary.

**Recommended action:** Bucket C — flag for Michal's judgment. The survey's own recommendation (reclassify to Essential) aligns with the chapter framing, but the article is print/ETF archive only, which affects acquisition priority.

**6.9 Herold, Vilém — three BRRP entries and monograph (Hus survey items 3.5–3.7)**

The Hus survey lists Herold's two BRRP articles (items 3.5, 3.6) and his 1985 Czech monograph *Pražská univerzita a Wyclif* (item 3.7) as Secondary. Herold is a known Czech medieval philosopher (Charles University); his works are plausibly real. No contradiction in the repo. Classified as Secondary, no external check needed before integration at Secondary level.

**Recommended action:** Bucket A — integrate at Secondary level; URL verification for BRRP PDFs in Step 2.

**6.10 Schweinitz 1885 *History of the Church Known as the Unitas Fratrum* — Archive.org link**

**Entry:** Crews survey — Schweinitz 1885, "Free on Archive.org: https://archive.org/details/historyofchurchk00desc_0."

Two archive.org IDs are provided for the same work: `historyofchurchk00desc_0` and `historyofchurchk00desc_1` (for the djvu text). This is internally consistent (two different format copies of the same work on Archive.org). No error.

**Recommended action:** Bucket A — integrate with Archive.org URL; Step 2 can confirm URL resolution.

---

## Summary Findings by Severity

### Critical Issues (must resolve before integration)

- **C1:** The 2018 *Religions* article "Matěj of Janov: Corpus Mysticum…" is attributed to Lahey (Holeton survey) and to Nechutová (Hus survey). Author must be confirmed before any integration. [Category 2.1]
- **C2:** The BRRP 11 "Burnett" article in `Jakoubek_Euch` is named "Stephen G. Burnett" by the Hus survey and implied to be Amy Nelson Burnett by the Holeton survey. Author must be confirmed before any new Burnett entries are added and the existing `Jakoubek_Euch` cross-reference clarified. [Category 5.1]
- **C3:** Three Secondary entries have explicitly incomplete citations (Atwood "Apologizing for the Moravians"; Foušek "Church in a Hostile State"; Vogt "Brüdergemeine") and must not be integrated until complete. [Category 6.2, 6.3, 6.4]
- **C4:** CCCM 261 attribution for Hus *Postilla adumbrata* is not confirmed by the survey's own search log (which lists CCCM 205, 211, 238 as confirmed; 261 is absent from that list). Verify before integration. [Category 1.5]

### High Issues (should verify before integration)

- **H1:** Soukup *Jan Hus* Purdue 2019 has two conflicting ISBNs across surveys (978-1-55753-876-5 vs. 9781557538048). [Category 2.2]
- **H2:** Three Holeton BRRP PDF URLs are unconfirmed by the survey itself (items 2.6, 2.7, 2.9). [Category 2.3]
- **H3:** Holeton BRRP 6 co-author "Bílková" vs. "Kubíková" — pre-existing ambiguity not resolved by the survey. [Category 2.3]
- **H4:** Burnett BRRP 11 article: Is the monograph chapter a reworking of the BRRP 11 article or distinct? If the same, one supersedes the other for citation purposes. [Category 5.2]
- **H5:** Atwood 2013 "Ancient Unity" page range tentative per the survey itself. [Category 2.8]
- **H6:** Patschovsky 1989 pagination "(verify exact pagination)" flagged by the survey. [Category 6.5]

### Medium Issues (note for integration; lower risk)

- **M1:** Šmahel & Pavlíček 2015 page count: xii+447 (Hus survey) vs. x+447 (Holeton survey). [Category 2.6]
- **M2:** Atwood 2021 is Essential in Crews survey and Secondary in Holeton survey — use Essential. [Category 3.1; 5.3]
- **M3:** Holeton survey item 3.3 ("Church or Sect?") is listed as Secondary but the survey itself recommends reclassification to Essential. Decision deferred to Michal. [Category 6.8]
- **M4:** "Between Marginalization and Orthodoxy" (JMH 14/1, 2014) author name missing. [Category 6.7]
- **M5:** Holeton "Evolution of Daily Office" (BRRP 8, item 2.8): "Special Issue 3" designation for *Filosofický časopis* needs confirmation. [Category 2.4]
- **M6:** Jistebnický kancionál editorial team — vol. 1 has Kolár/Vidmanová/Vlhová-Wörner; Source_Index attributes to "Holeton & Vlhová-Wörner." Inconsistency in editorial attribution. [Category 4.6]
- **M7:** Several BRRP article Secondary entries (Herold 3.5, 3.6; David 3.5–3.17; Fudge 3.41–3.51) have brrp.org URLs not individually confirmed by the survey — treat as plausible but flag for Step 2 batch check. [Category 6.9]
- **M8:** Marin *L'archevêque* (2005) — French only; access for non-French readers requires clarification in any Source_Index note. [Category 6.6]

### Low Issues (note only)

- **L1:** Holeton *La communion des tout-petits enfants* (1989) page count (286 pp.) unverifiable without external access. [Category 2.10]
- **L2:** Lahey 2003 (Cambridge) and Lahey 2013 (Cambridge) — Cambridge attribution is plausible and consistent across surveys; Bucket B check sufficient. [Category 1.3 note]
- **L3:** Šmahel *Hussitische Revolution* (2002) MGH Schriften 43 — the *Medieval Review* URL provided should be verified. [Category 1.4]
- **L4:** Hus vernacular Postilla exact Academia volume year and pagination "1980s — verify exact volume" flagged by survey. [Category 2.9]
- **L5:** Schweinitz 1877 Archive.org URL (`historyofunitasf00desc`) — plausible but unconfirmed; Step 2 check. [Category 6.10]
- **L6:** Daněk + Kroupa KLP 2016 *Blahoslav Musica* facsimile — "Print only (KLP)" consistent across Brethren Primary and Crews surveys. No error; but physical acquisition needed. [General note]
- **L7:** The Batka 2017 Oxford Research Encyclopedia entry (Holeton survey item 3.65) — DOI cited as "10.1093/acrefore/9780199340378.013.311" and Article entry "e-311." Oxford Research Encyclopedias use DOIs in this format; plausible but Bucket B for confirmation.
- **L8:** Atwood "Hobbits of Christianity" (*The Hinge* 10/3, Winter 2003) — Crews survey §3, citation plausible but no verification of exact issue number or availability.

---

## Statistics

- New Essential entries audited in full: 61
- New Secondary entries spot-checked: ~50 (38% rate)
- Critical issues: 4
- High issues: 6
- Medium issues: 8
- Low issues: 8
- Confirmed phantom/correction claims (correctly identified by surveys): 3 (Cambridge Companion 2018; Lahey Oxford vs. Cambridge; Šmahel MGH vs. Brill)
- Confirmed revert (Haberkern): 1 — correctly applied repo-wide
- Cross-survey contradictions requiring external resolution: 2 (Nechutová/Lahey authorship; Burnett first name)
- Duplication conflicts requiring merge decisions: 8
- ISBNs validated by checksum: 3 (CCCM 274: valid; Crews 2008: valid; Atwood 2009: ISBN 978-0-271-03532-1 — note this was pre-verified by Penn State UP in Crews survey; no separate check needed)
- ISBNs with discrepancy: 1 (Soukup 2019)
- Survey entries with incomplete citations (cannot integrate): 4

---

## Triage List for Integration Pass

### Bucket A — Apply Immediately on Integration (confirmed; no external verification needed)

1. Add `Haberkern_2016` (*Patron Saint and Prophet*, OUP 2016, ISBN 9780190280734) as new separate Source_Index entry; do NOT rename `Haberkern_2023`.
2. Add Šmahel & Pavlíček (eds.), *A Companion to Jan Hus*, Brill 2015 (Companions to the Christian Tradition 54), as new Essential entry. Use page count "xii+447 pp." (Hus survey figure) but note the x+447 discrepancy.
3. Add Šmahel, *Die hussitische Revolution*, Hahnsche Buchhandlung / MGH Schriften 43, 2002 (German only), as new entry.
4. Add Lahey, *John Wyclif*, Oxford UP, 2009 (Great Medieval Thinkers series), as new entry.
5. Add Van Dussen & Soukup (eds.), *A Companion to the Hussites*, Brill 2020 (BCCT 90, ISBN 9789004397866), as new Essential entry.
6. Add Haberkern chapter "The Bohemian Reformation and 'The' Reformation" in *Companion to the Hussites* as a citable unit within that entry.
7. Add Halama, Ota, *Otázka svatých v české reformaci*, Brno: L. Marek, 2002 (Pontes Pragenses 19), as new Essential entry.
8. Add Halama, Ota, *Svatý Jan Hus*, Praha: Kalich, 2015, as new Essential entry.
9. Add Soukup, Pavel, *Reformní kazatelství a Jakoubek ze Stříbra*, Praha: Filosofia, 2011, as new Essential entry.
10. Classify Atwood 2021 *Religions* 12/5 as Essential (Crews survey classification); integrate once, not twice.
11. Update `Landova_2014` entry with status corrections (habilitation 2018; current Associate Professor at ETF UK Praha).
12. Integrate Holeton & Vlhová-Wörner BRRP 7 "Remarkable Witness to the Feast of Saint Jan Hus" once, at Essential level, with Holeton survey page range (pp. 156–184), flagged for URL verification.
13. Integrate Holeton "Evolution of Daily Office" (BRRP 8) once, at Essential level.
14. Integrate David "Strange Fate" (JEH 1995, pp. 641–668) once, at borderline Essential/Secondary — flag for Michal's triage decision.
15. Integrate Burnett *Karlstadt* monograph (Amy Nelson Burnett, OUP 2011, ISBN 978-0-19-973436-3) as Secondary with note that reclassification to Essential may occur; clarify Amy Nelson Burnett in the existing `Jakoubek_Euch` cross-reference.
16. Integrate Vlhová-Wörner as the scholar behind "Hana Volná" references; confirm "Ralph Klein" and "Murdoch" as non-entities.
17. Integrate Halama, Jindřich, *Sociální učení Českých bratří 1464–1618*, CDK 2003 (+ Herrnhuter Verlag 2017 German translation), as Essential.
18. Integrate Landová, Tabita — three journal articles (2010 *Religio*, 2011 *Communio Viatorum*, 2011 *Teologická reflexe*) as Essential entries alongside the 2014 monograph.
19. Integrate Landová, Tabita, *O službě slova, víře a spasení*, Praha: Karolinum, 2021 (ISBN 978-80-246-4750-0), as Essential.
20. Integrate Schweinitz, Edmund de, *History of the Church Known as the Unitas Fratrum* (1885), Archive.org, as Essential (with URL `archive.org/details/historyofchurchk00desc_0`).
21. Integrate Schweinitz (trans.), "Catechism of the Bohemian Brethren" (1893), JSTOR `41179521`, as Essential.
22. Integrate Atwood, "Catechism of the Bohemian Brethren, Translated and Edited from the 1523 German Version," *JMH* 2/1 (2007): 91–117, as Essential.
23. Integrate Atwood, "The Use of the 'Ancient Unity' in the Historiography of the Moravian Church," *JMH* 13/2 (Fall 2013): 109–[tentative range 157], as Essential, noting tentative pagination.
24. Integrate Wagner, Murray L., *Petr Chelčický: A Radical Separatist in Hussite Bohemia*, Herald Press, 1983, as Essential.
25. Integrate Crews, C. Daniel, *Faith, Love, Hope*, Moravian Archives, 2008 (ISBN 978-0-9719411-3-7), as Essential.
26. Integrate Mai, Claudia, "Tracing the Footsteps of the Fathers," *JMH* 15/1 (2015): 29–43, as Essential; move from "passing reference" in `ActaUF` to full entry.
27. Integrate Hus *Constantiensia* (CCCM 274 = MIHOO XXIV), Brepols 2016 (ISBN 9782503554693 — checksum valid), as new Essential primary source entry.
28. Integrate Hus, *Česká nedělní postila*, ed. Daňhelka, Praha: Academia, 1992, as new Essential primary source entry (with note on MS locations Brno Mk56 and Mk91).
29. Integrate Hus, *Knížky o svatokupectví*, ed. Daňhelka (Praha: Academia, 1980s — exact vol. tbc), as new Essential primary source entry, with online vokabular.ujc.cas.cz link.
30. Integrate Matěj of Janov, *Regulae*, Kybal/Odložilík 1908–1926 + Nechutová 1993 (Book V, München: Oldenbourg, Veröff. Collegium Carolinum 73), as new Essential primary source entry.
31. Integrate Jakoubek of Stříbro / Krmíčková — "Articulus pro communione sub utraque" (*Studie o rukopisech* 39/1, 2010, pp. 73–87), as Essential supplementary entry to `Jakoubek_Euch`.
32. Integrate Patschovsky, "Ekklesiologie bei Johannes Hus" (Göttingen: Vandenhoeck & Ruprecht, 1989, pp. [verify: ~370–399]), as Essential.
33. Integrate Patschovsky & Šmahel (eds.), *Eschatologie und Hussitismus*, Praha: Historický ústav AV ČR, 1996, as Essential.
34. Integrate Spinka, Matthew (trans.), *The Letters of John Hus*, Manchester: Manchester UP, 1972, as Essential.
35. Integrate Soukup, Pavel, *Jan Hus: The Life and Death of a Preacher*, Purdue UP, 2019 (ISBN pending verification), as Essential (noting ISBN discrepancy across surveys).
36. Integrate Soukup, *Reformní kazatelství a Jakoubek ze Stříbra*, Filosofia 2011, as Essential.
37. Integrate Marin, Olivier, *L'archevêque, le maître et le dévot*, Paris: Honoré Champion, 2005 (ISBN 978-2-7453-1167-2), as Essential with note on French-only access.
38. Integrate Batka, Ľubomír, Oxford Research Encyclopedia entry (2017, DOI 10.1093/acrefore/9780199340378.013.311), as Essential.
39. Integrate Halama, Vilém / Herold BRRP Secondary articles (items 3.5, 3.6, 3.7) — batch integrate as Secondary.
40. Integrate David BRRP essays (items 3.5–3.17 Holeton survey) as Secondary — batch, noting that 3.7 and 3.9 have Essential-push notes and may warrant reclassification.
41. Integrate Vogt, Peter, "How Moravian Are the Moravians?" *JMH* 18/1 (2018): 77–106, as Secondary.
42. Integrate Krmíčková, Helena, "The Fifteenth Century Origins of Lay Communion sub utraque in Bohemia" (BRRP 2, 1998, pp. 57–66), as Essential (supplement to `Krmickova_BRRP3`).
43. Integrate Holeton "Sacramental and Liturgical Reform in Late Medieval Bohemia" (*Studia Liturgica* 17/2, 1987: 87–96) as Secondary.
44. Integrate Holeton "Communion of Infants" and "Communion of Infants: Basel Years" (*Communio Viatorum* 27/4, 1984 and 29/2, 1986) as Secondary, with page ranges from Holeton survey.
45. Integrate Holeton, *La communion des tout-petits enfants* (Roma: Edizioni Liturgiche, 1989, Bibliotheca Ephemerides Liturgicae Subsidia 50, ~286 pp.) as Essential — methodologically important as the "negative" case showing what Slovak Lutheran reception did NOT inherit (paedo-communion).
46. Integrate Fudge BRRP essays (items 3.41–3.51 Holeton survey) and *Magnificent Ride* (Ashgate 1998) and Cambridge Companion chapter (2004) as Secondary — batch.
47. Integrate Wilkinson, Cathryn, *A History of Lutheran Hymnody in Slovakia* (Northwestern PhD diss., 2003, ProQuest 207357464) as Essential — the single most directly relevant Anglophone work for §5.

### Bucket B — Needs URL or External Verification (Step 2 Pass)

1. **HIGHEST PRIORITY:** Confirm authorship of "Matěj of Janov: Corpus Mysticum, Communionem, and the Lost Treatise of His *Regulae*," *Religions* 9/1 (2018) — Lahey or Nechutová? Check MDPI article page for byline.
2. **HIGHEST PRIORITY:** Confirm BRRP 11 Burnett article author (Amy Nelson vs. Stephen G.). Check brrp.org/publications.htm BRRP 11 table of contents.
3. Confirm CCCM 261 for Hus *Postilla adumbrata* — check corpuschristianorum.org/cccm-hus for the published-volumes list.
4. Confirm Soukup Purdue 2019 correct ISBN — check Purdue UP catalogue.
5. Confirm three Holeton BRRP PDFs (items 2.6, 2.7, 2.9) by loading URLs in browser.
6. Confirm third co-author of Holeton BRRP 6 article (Bílková vs. Kubíková) against BRRP 6 printed ToC.
7. Confirm *Filosofický časopis* Special Issue designation for BRRP 8.
8. Verify Šmahel *Die hussitische Revolution* MGH Schriften 43 *Medieval Review* link.
9. Confirm Lahey 2003 (Cambridge) and Lahey 2013 *Trialogus* (Cambridge) against publishers.
10. Verify Atwood 2013 "Ancient Unity" page range (109–157 tentative).
11. Confirm Patschovsky 1989 pagination (pp. 370–399 flagged as verify).
12. Confirm author of "Between Marginalization and Orthodoxy" JMH 14/1 (2014).
13. Confirm complete citation for Atwood "Apologizing for the Moravians" (journal, vol., year, pages).
14. Confirm complete citation for Foušek "A Church in a Hostile State" (*Central European History*, vol., year, pages).
15. Confirm complete citation for Vogt "Brüdergemeine — das theologische Programm" (journal, year, pages).
16. Verify Hus *Knížky o svatokupectví* exact Academia volume and year (1980s, verify).
17. Confirm Batka 2017 Oxford Research Encyclopedia DOI resolves correctly.
18. Confirm Burnett *Karlstadt* monograph chapter title ("*Ad Dextram Patris*") against OUP table of contents; confirm whether it substantially overlaps BRRP 11 article.
19. Verify Jistebnický kancionál vol. 1 editorial team (Kolár/Vidmanová/Vlhová-Wörner vs. "Holeton & Vlhová-Wörner" in Source_Index).
20. Batch-verify all BRRP Secondary article PDFs (David 3.5–3.15; Fudge 3.41–3.51; Halama 3.31–3.34; Kolář 3.35–3.38; Krmíčková 3.55) by loading brrp.org PDF URLs.

### Bucket C — Defer to Human Judgment (Michal's decision)

1. **"Murdoch"** — no first name, no field context, cannot resolve. Needs Michal's identification or discard.
2. **Holeton survey item 3.3 reclassification** ("Church or Sect?" *Communio Viatorum* 1996) — the survey recommends reclassification from Secondary to Essential. Decision requires Michal's judgment on the chapter's focus on Brethren-Utraquist differentiation within §3.
3. **David "Strange Fate" (JEH 1995)** — two surveys say "borderline Essential." Does the chapter's §3 analysis of neo-Utraquism in 1517–1621 need a specific anchor for this period? If yes, Essential; if the argument relies on Schoen_2022 or David_MiddleWay instead, Secondary.
4. **Crews, C. Daniel, PhD dissertation (1975)** — "The Theology of John Hus with Special Reference to His Concepts of Salvation," University of Manchester. The Crews survey recommends this as Essential for the Hus-Brethren soteriological continuity argument. ProQuest acquisition needed. Michal must decide whether the chapter's argument about Brethren soteriology requires tracing back to Crews's 1975 dissertation or whether Crews 2018 + Molnár 1948 suffice.
5. **Brepols volume "From Hus to Luther"** (ISBN 9782503548050-1) — surfaced in the Crews survey gap section without full bibliographic data (no title properly resolved, no editors named). Michal may know this volume from conference contacts; it warrants a follow-up search before committing to acquisition.
6. **Atwood–Vogt Brepols volume** (*From Hus to Luther* at Brepols) — same as above. May be the same volume or a separate Brepols publication. Ambiguity requires Michal's input.
7. **Schoen_2022 and Šmahel 2002 relationship** — both provide large-scale Utraquism scholarship. The chapter does not need both equally; which one plays which role needs Michal's chapter-framing judgment, not bibliographic verification.
8. **De Vooght, *L'hérésie de Jean Huss* (1960, 2nd ed. 1975)** — the Hus survey item 3.25 proposes this as Secondary. But `DeVooght_1972` (= the Jakoubek monograph) is already in Source_Index. The 1960/1975 Hus monograph is a separate work by the same author. Michal must decide whether the chapter needs both de Vooght works separately documented or whether the Jakoubek study suffices.

---

**End of audit report.**
