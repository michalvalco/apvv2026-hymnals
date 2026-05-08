# Audit of Theologos Paper Draft v0.1, §§1–4

**Date:** 2026-05-08
**Auditor:** Claude (working with Michal)
**Document audited:** `Drafts/Theologos_Draft_v0.1_Sec1_Sec2.md` (current 168 lines, ~5,000 words body + 30 footnotes; covers §§1–4)
**Source materials cross-checked:**
- `Sources/Benka_2024.md` (Benka source notes with verbatim quotes and verification flags)
- `Sources/Verification_PAIR_006.md` (PAIR_006 verification dossier; the canonical source for AC + BA verbatim quotes)
- `Sources/Analysis_Eucharistic_Rite_AgCeska.md` (rich liturgical analysis)
- `Drafts/Theologos_Style_Guide.md` (house style reference)
- `Drafts/Theologos_Paper_Outline.md` (current outline)
- `Drafts/Source_Notes_Sec1_Sec2.md` (bibliographic notes)

---

## Executive summary

The draft is **structurally sound**. The argument is internally consistent, the verbatim quotes match the verified PAIR_006 dossier exactly, the central claim is articulated with appropriate progression, and the footnote format follows Theologos house style throughout. However, the audit identified:

- **3 substantive issues** that should be addressed before §§5–7 are drafted (one factual, one interpretive, one source-attribution)
- **5 minor inconsistencies** worth fixing in revision
- **2 stylistic items** to flag for Michal's judgment
- **0 errors of fact regarding Benka's verbatim quotes** — these match the verification dossier character-for-character

I recommend addressing the 3 substantive issues before continuing. The minor items can be folded into a later revision pass.

---

## A. Substantive issues (recommend addressing now)

### A.1. The Confiteor / Confession placement claim in §3 may be inaccurate

**Location:** §3, second paragraph (the one beginning "The Eucharistic rite of the *Agenda Česká* occupies pp. 131 – 150…").

**Claim:** I list the rite's components as "Confiteor, Absolution, Introit, Kyrie, Gloria, Collect, Epistle, Gospel, Credo, Sermon, General Prayer, Sursum Corda and Vere Dignum, Sanctus, Verba Institutionis, Distribution sub utraque, Thanksgiving, Aaronic Benediction".

**Issue:** The list is drawn from `Sources/Analysis_Eucharistic_Rite_AgCeska.md`, which gives the structure with page references in Benka 2024. That file is reliable as a working analysis. However, my list omits the **Admonition (Napomenutí)** between the Sanctus and the Verba Institutionis — a structural component I then go on to treat as the centrepiece of the section's analysis (the very next paragraph turns to "the rite's *Napomenutí* — the admonition to communicants placed between the Sanctus and the Words of Institution"). This is internally inconsistent: the structural list omits a component that the next paragraph foregrounds.

**Fix:** Insert "Admonition" (or "Napomenutí (Admonition)") after Sanctus and before Verba Institutionis in the list. Also add "Lord's Prayer" (sung, p. 144) and the communion hymn (sung by Žiáci, p. 145) which are likewise present in the rite per the analysis file. The full corrected list per `Analysis_Eucharistic_Rite_AgCeska.md` is: Confiteor, Absolution, Introit/Kyrie, Gloria, Salutation, Collect, Epistle, Gospel, Credo, Sermon, General Prayer, Preface (Sursum Corda / Vere Dignum), Sanctus, **Admonition (Napomenutí)**, **Lord's Prayer**, **Communion hymn**, Verba Institutionis, Distribution sub utraque, Thanksgiving, Aaronic Benediction, Closing hymn.

**Recommended fix as written:** Either insert the missing components into the existing list, or — preferably — replace the long list with a more compact phrasing that does not commit to enumerating every component. E.g.: "the rite preserves the framework of Luther's *Formula Missae* (1523) and *Deutsche Messe* (1526), with all the standard components — Confiteor and Absolution at the entrance, the Liturgy of the Word (Introit, Kyrie, Gloria, Collect, Epistle, Gospel, Credo, sermon), the General Prayer, the Preface and Sanctus, the Admonition to communicants, the Verba Institutionis, distribution sub utraque, the Thanksgiving, and the Aaronic Benediction." This keeps the structural inheritance argument intact without committing to a list whose every item must be checked.

---

### A.2. The footnote 27 reference to Kolb 2008 is not in our verified source list

**Location:** §4, footnote 27.

**Claim made in the footnote:** "For broader context on the Formula of Concord's disciplinary effects in the territorial Lutheran churches, see KOLB, R.: *Lutheran Ecclesiastical Culture, 1550 – 1675*. Brill's Companions to the Christian Tradition 11. Leiden: Brill, 2008, especially the editorial introduction and chapters on the Formula of Concord's reception."

**Issue:** Kolb 2008 is a real volume, and it is in fact present in Michal's local library (file path: `06 Resources/Dejiny/Reformacia/Robert Kolb - Lutheran Ecclesiastical Culture, 1550-1675, 2008.pdf` — confirmed earlier in the directory listing). However, I have not personally confirmed that the book contains chapters specifically on the Formula of Concord's disciplinary reception, and the citation as written ("editorial introduction and chapters on the Formula of Concord's reception") makes a content claim I cannot verify without opening the PDF and checking the table of contents.

**Risk:** Reviewer challenges the citation; the chapter titles do not match the description; embarrassment.

**Fix options:**
- (a) **Conservative:** Soften the citation. Change "especially the editorial introduction and chapters on the Formula of Concord's reception" to simply "for broader context on the post-Formula Lutheran disciplinary culture". This is a defensible citation regardless of the specific chapter titles.
- (b) **Verify:** Open the PDF, read the TOC, and tighten the citation to a specific chapter that does cover what the text claims. This is the correct scholarly move but adds time.

**My recommendation:** Option (a) for the v0.1 draft; flag for Michal's later verification before submission. The Theologos audience does not require the specific chapter-level citation; the general reference does the work the footnote needs.

---

### A.3. The Bodnárová 1540 datum in footnote 28 may be slightly mis-described

**Location:** §4, footnote 28.

**Claim made in the footnote:** "BODNÁROVÁ, M.: Reformácia v hornouhorských slobodných kráľovských mestách v 16. storočí. … here p. 142, fn. 63, where Bodnárová notes that Bardejov sought to recruit a German preacher from Banská Bystrica in 1540 — direct documentary evidence of clerical movement between the Pentapolitana and the central mining-town milieu."

**Issue:** The Bodnárová 2018 chapter at p. 142, fn. 63 (which I read directly during the targeted search) actually says: "Bardejovčania sa v roku 1540 dostali do konfliktu s mestskou radou Banskej Bystrice, keď jej chceli odlákať nemeckého kazateľa Bartolomeja Francka." Translation: "The people of Bardejov came into conflict with the town council of Banská Bystrica in 1540 when they wanted to lure away its German preacher Bartolomej Franck."

The substance of my citation is correct — there was indeed a personnel link between Bardejov and Banská Bystrica in 1540 — but the precise nature of the event was a *recruitment attempt that became a conflict*, not just a recruitment. The current footnote text reads as if the recruitment succeeded; the source says it caused a dispute. The named preacher (Bartolomej Franck) is also not in my footnote.

**Fix:** Tighten the footnote to: "BODNÁROVÁ, M.: Reformácia v hornouhorských slobodných kráľovských mestách v 16. storočí. In: KÓNYOVÁ, A. – KÓNYA, P. (eds.): *Reformácia v strednej Európe / Reformáció Közép-Európában / Reformation in Mittel-Europa I*. Prešov: Vydavateľstvo Prešovskej univerzity, 2018, pp. 132 – 153, here p. 142, fn. 63, documenting a 1540 dispute between Bardejov and the town council of Banská Bystrica when Bardejov attempted to recruit Banská Bystrica's German preacher Bartolomej Franck — concrete documentary evidence of clerical mobility (and competition for it) between the Pentapolitana and the central mining-town milieu."

This is more accurate to what Bodnárová actually says, names the preacher, and is more interesting as scholarly evidence (the conflict implies that clerical mobility was contested precisely because the network was active enough to make poaching worthwhile).

---

## B. Minor inconsistencies (fold into revision pass)

### B.1. "Banská Bystrica and its surroundings" vs. "Banská Bystrica mining-town milieu"

**Locations:** §1, the long sentence about the manuscript supplement uses "the mining-town environment of Banská Bystrica and its surroundings"; §2 uses "the central Slovak mining towns" and "mining-town centres"; §4 uses "Hungarian mining towns" and "mining-town milieu".

**Issue:** Mild terminological drift. The most precise designation is **central Slovak mining towns** (the seven towns are all in central Slovakia geographically; "mining-town" without qualification is ambiguous; "Hungarian mining towns" is historically correct since they were in the Kingdom of Hungary, but in a Slovak-published English-language paper readers will expect the geographic designation).

**Fix:** Pick one terminology and use it consistently. Recommendation: **central Slovak mining towns** (geographically explicit) for the first introduction, then **the mining-town milieu** as the shortened form. "Hungarian mining towns" can be retained when the political-juridical fact (Kingdom of Hungary, royal mining privileges) is what matters.

---

### B.2. The phrase "Hungarian-Lutheran" appears twice and is potentially misleading

**Locations:** §1 abstract: "from a moderate Czech printed register with Utraquist liturgical residue toward a sharper Hungarian-Lutheran manuscript register"; §1 main text: "to a sharper Hungarian-Lutheran manuscript register four years later".

**Issue:** "Hungarian-Lutheran" is potentially misleading because the BA is in Slovak, not Hungarian. The compound "Hungarian-Lutheran" usually denotes ethnic-Hungarian Lutheranism (the Magyar-language tradition associated with Mátyás Dévai Bíró et al.). The Bystrická agenda is a Slovak-language manuscript from the Kingdom of Hungary. The political designation (Hungarian = subject of the Kingdom of Hungary) is correct; the ethno-linguistic designation (Hungarian = Magyar-speaking) is wrong.

**Fix:** Replace "Hungarian-Lutheran manuscript register" with one of:
- "Slovak Lutheran manuscript register" (most accurate to the document's language)
- "Upper-Hungarian Lutheran manuscript register" (politically accurate, geographically precise)
- "central Slovak Lutheran manuscript register" (linguistically and geographically precise)

Recommendation: **Upper-Hungarian Lutheran manuscript register** — politically accurate, geographically precise (Upper Hungary = horné Uhorsko = the historical northern part of the Kingdom of Hungary, which is roughly today's Slovakia), and consistent with the specialist literature (Csepregi, Bodnárová, Schwarz all use "Upper-Hungarian / Oberungarn / Felső-Magyarország" as the standard designation).

---

### B.3. The CS 1636 trajectory claim in §1 quietly assumes the reader will follow

**Location:** §1, last substantive paragraph: "Read as a continuum, the AC 1581 → BA 1585 → CS 1636 trajectory traces a single direction of confessional consolidation."

**Issue:** This is the first time the AC → BA → CS triple appears. The reader has been told §§3–4 will treat the AC and BA. The CS jump to 1636 is a half-century forward, into a different geographical milieu (Tešín / Liptovský Mikuláš, not Banská Bystrica), produced by a different editor (Tranovský), in a different format (hymnal, not agenda). Calling it a "trajectory" within "the same liturgical-geographical milieu" overstates the continuity. The CS was not produced in Banská Bystrica; it was produced in Levoča and used Tranovský's own materials assembled in Cieszyn.

**Fix:** Soften the claim. Either:
- (a) Drop "in the same liturgical-geographical milieu" and let the trajectory claim stand on confessional/regional rather than geographic continuity; or
- (b) Replace "in the same liturgical-geographical milieu" with "in the same broader Slovak Lutheran liturgical landscape", which is true at the regional but not the local level.

**Recommendation:** Option (b). The Slovak Lutheran liturgical landscape did include both the Banská Bystrica milieu and the Tešín-Levoča milieu; the trajectory through the three documents traces a regional confessional consolidation across those settings, not a local one within a single town.

---

### B.4. The "approximately 49 %" figure for Utraquist content in CS 1636

**Location:** §1, footnote 3 (Grešová-Sekelská 2021).

**Issue:** The figure "approximately 49 %" is specific. I should verify that this exact figure is in Grešová-Sekelská 2021. From my earlier reading, the 49 % figure does come from her work, but the verification trail is in `Sources/GresovaSek_2021.md` or similar — I have not opened that source notes file in this audit pass.

**Risk:** If the actual figure is, say, 47 % or "nearly half", the citation as written ("approximately 49 %") is misleadingly precise.

**Fix:** Open `Sources/GresovaSek_2021.md` (if it exists) and verify the figure before submission. If unverifiable, soften to "approximately half" or "a substantial portion (close to half)".

---

### B.5. Footnote 4's reference to Grešová-Sekelská 2023 critical edition

**Location:** §1, footnote 4.

**Claim:** "GREŠOVÁ-SEKELSKÁ, A.: *Georgius Tranoscius Teschiniensis / Jiří Třanovský (1592–1637): Hymns from the Cithara Sanctorum (1636) – Selection*. Musicalia Istropolitana 4/2. Bratislava: Stimul, 2023, pp. XIII – XV. The differential strategy is discussed at greater length in Grešová-Sekelská 2021 (above, n. 3)."

**Issue:** I cited the differential editorial strategy as discussed at "pp. XIII – XV" of the Grešová-Sekelská 2023 critical edition's introductory study. Without the Source_Notes file open, I cannot independently verify these specific page numbers. The Verification_PAIR_004.md dossier mentions Grešová-Sekelská 2023 as the verified critical edition for one PAIR_004 hymn but does not record whether the differential strategy is at pp. XIII–XV specifically.

**Risk:** Same as B.4 — overly precise citation that may be off by a page or two.

**Fix:** Verify in source notes; if unverifiable, soften to "in her introductory study to the 2023 critical edition" without committing to specific pages.

---

## C. Stylistic items (Michal's judgment)

### C.1. The abstract's tone

The abstract has a slightly clinical, reportorial tone — appropriate for an Anglo-American journal abstract, and fully acceptable. But Theologos' sample article (the Stöckel 2022 piece used for the style guide) had an abstract that opened with a more contextualising phrase rather than diving directly into "Recent scholarship…". Compare with the Theologos house pattern: a Slovak-academic-English abstract tends to open with one orienting sentence about the topic, then state what the paper does.

This is not an error. It is a tonal choice. The current abstract is fine; if Michal prefers, it could open with a single orienting sentence such as: "The Slovak Lutheran *Cithara Sanctorum* (1636) has long been read as the moment of confessional sharpening in which Tranovský filtered Czech-Reformation hymnody into Lutheran orthodoxy. Recent scholarship refines this reading…"

**My judgment:** the current abstract does the job; a softer opening could be substituted but is not necessary.

---

### C.2. The "It does not say what the contemporary Formula of Concord (1577) had just made the polemical test of 'real' Lutheranism" sentence in §3

**Location:** §3, the paragraph after the verbatim Czech quote with the testimonial gloss.

**Issue:** The sentence opens "It does not say what the contemporary Formula of Concord (1577) had just made…". The temporal logic ("had just made") is correct — the FC was promulgated 1577, the AC was printed 1581, four years separates them, "just made" is fair within scholarly margins. But "the polemical test of 'real' Lutheranism" puts "real" in scare quotes, which carries a faint edge of authorial editorialising about the FC's confessional-disciplinary work. This may or may not be a tonal register Michal wants in a Theologos piece, where the readership is Greek-Catholic and may be sensitive to anything that reads as Lutheran self-criticism or anti-Concordia ironising.

**Fix options:**
- (a) Drop the scare quotes: "the polemical test of confessional Lutheranism" or "the polemical test of orthodox Lutheranism".
- (b) Rephrase entirely: "what the contemporary Formula of Concord (1577) had just made the boundary marker of Lutheran Eucharistic theology against Reformed alternatives".

**My judgment:** Option (b) reads as more scholarly and less editorial. The scare quotes around "real" might be parsed by some readers as an authorial wink at the FC's anti-Reformed polemic, which is not the move the paper wants to make.

---

## D. What was checked and confirmed clean

### D.1. Verbatim quote accuracy — ALL VERIFIED

I cross-checked every Slovak/Czech verbatim quote in §§1–4 against the verified PAIR_006 dossier and the Benka source notes:

| Quote in draft | Located in | Match |
|---|---|---|
| "ne k spasenij, ale k zatraczenij wěčnemu" (§1 abstract) | PAIR_006 verification dossier | EXACT |
| "ani naymenssijho Artykule" (§2, footnote 8) | Benka source notes | EXACT |
| "Tělo a Krew Syna Božijho" (§1 main text + §4) | PAIR_006 verification dossier | EXACT |
| "k spasenij" / "ne k spasenij, ale k zatraczenij wěčnemu" (§4) | PAIR_006 verification dossier | EXACT |
| "Wezměte a gezte / to gest Tělo mé / kteréž se za wás dáwá / To gest…" (§3) | Analysis_Eucharistic_Rite_AgCeska.md, p. 142–143 | EXACT |
| "Toho na gisté dokázanij a swědomij / dáwám wám mau Krew k nápogi" (§3 fn 17) | Analysis file p. 143 | EXACT |
| "Kdo giž z toho Chléba gij a z Kalicha pige a těm slowům, kteráž od Krysta slyssij a tomu nařízenij, kteréž od Krysta přigijmá, sylně wěřij, tenť gest hodný Host k stolu Páně." (§3) | PAIR_006 verification dossier | EXACT |
| "Príslušné pasáže v nej [Agende českej] obsahujú napríklad zmienky o tele a krvi, bez prívlastkov typu 'pravý' či 'substanciálny'." (§3) | PAIR_006 verification dossier (also Benka source notes p. 79) | EXACT |
| "ta přeswatá Swátost gest k obzwlásstnijmu potěssenij a posylněnij dána / bijdným a zarmauceným swědomijm" (§3 footnote 20) | Analysis file p. 142 | EXACT |
| "že gsy skrze Syna swého milého / tu welebnau Swátost vstanowiti ráčil / w nijžto Tělo geho Swaté gijme / a Krew geho Swatau pigeme" (§3 footnote 21) | Analysis file pp. 149–150 | EXACT |
| "formulácie ktoré explicitnejšie smerujú k luteránskemu manducatio impiorum" (§4) | PAIR_006 verification dossier | EXACT |
| FC SD VII §16 Latin: "Veracissime non solum vere credentes…" (§4 footnote 25) | Standard Triglot text | EXACT |

Conclusion on quote accuracy: **all verbatim Slovak/Czech/Latin quotes are correct character-for-character against verified sources**. PAIR_006's VERIFIED status holds for the draft as well.

---

### D.2. Page references — clean

Page references to Benka 2024 in the draft:
- pp. 10–90 (Benka's introduction, footnote 7) — matches Benka_2024.md
- pp. 14–17 (preface summary, footnote 8) — matches Benka_2024.md
- pp. 50–60 (1558 synod, footnote 13) — matches Benka_2024.md
- pp. 60–70 (structural homology, footnote 15) — matches Benka_2024.md
- pp. 73–77 (private confession, footnotes 13, 30) — matches Benka_2024.md
- pp. 77–78 (Creutzer's handbook, footnote 10) — matches Benka_2024.md
- pp. 73–78 (Formula's disciplinary reception, footnote 27) — matches Benka_2024.md
- pp. 78–79 (the AC/BA stratification, multiple footnotes) — matches PAIR_006 dossier
- p. 79 (Benka's analytical observation, footnote 19) — matches PAIR_006 dossier
- p. 105 (BA structural layout, footnotes 9, 22) — matches Benka_2024.md
- pp. 108–112 (preface, footnote 8) — matches Benka_2024.md
- pp. 131–150 (AC Mass rite, footnotes 14, 15) — matches Benka_2024.md (Analysis file confirms)
- pp. 142–144 (Napomenutí, §3 main text) — matches Analysis file
- pp. 142–143 (Eucharistic gloss, footnote 17) — matches Analysis file
- p. 143 (worthy reception, footnote 18) — matches PAIR_006 dossier (also matches Analysis file p. 143)
- p. 142 (consolatio conscientiae, footnote 20) — matches Analysis file
- pp. 149–150 (Form 2 of Thanksgiving, footnote 21) — matches Analysis file
- pp. 265–368 (BA full text, footnote 9, 22) — matches Benka_2024.md
- pp. 265–302 (BA confession material, footnotes 9, 22, 29) — matches Benka_2024.md
- pp. 302–340 (BA marriage, footnote 9) — matches Benka_2024.md
- pp. 340–368 (BA funerals, footnote 9) — matches Benka_2024.md

**Conclusion:** Every page reference in the draft is verifiable against project source notes. No fabricated pages, no off-by-one errors detected.

---

### D.3. Footnote format consistency

All 30 footnotes follow the same template:
> SURNAME, Initial.: *Title in italics*. In: editor (ed.) (if applicable). *Volume in italics*. Place: Publisher, Year, p. PAGE.

This matches the Theologos house style as extracted from the Stöckel 2022 sample article. No variations, no slip into op. cit. or ibid., no inconsistent abbreviations. **Clean.**

---

### D.4. British English consistency

I scanned for the most common American/British English drift points:

- "-ise/-ize" forms: I count "characterised" (×3), "recognised" (×3), "standardise" (×0 — I used "to standardise" but it appears as "to standardise" in §2 — clean), "summarise/summarises" (×2, both spelled with -s-). No -ize forms slipped in.
- Single quotes vs. double quotes for inner quotation: Slovak quotes are in italics with single quotes for inner items ('pravý', 'substanciálny'); standard English quotes are double. This is consistent within the draft and matches British convention (the inner-single, outer-double convention is American; the inner-double, outer-single is British proper, but the convention has loosened — what matters is internal consistency, which the draft has).
- "Toward" vs. "Towards": The draft uses "toward" (×2, in §1 and §4) and "towards" (×0). British English prefers "towards"; American prefers "toward". **Minor inconsistency — change "toward" to "towards" throughout.**
- Em-dashes vs. en-dashes: Spaced en-dashes ( – ) are used consistently throughout; no em-dashes appear. This matches British convention. Clean.
- "While" vs. "whilst": draft uses "while" (×4), no instances of "whilst". Either is acceptable in British academic English; consistency is what matters. Clean.

**Conclusion:** Largely clean, with the single minor exception of "toward" (×2) which should be "towards" for British consistency. (See D.4 fix below.)

---

### D.5. Internal logical consistency

The argument's spine (§1 setting up the central claim, §2 contextualising the codex, §3 reading the AC, §4 reading the BA) is internally consistent. The central claim — confessional sharpening as register shift, observable at codex granularity — is articulated three times in §1 (abstract, mid-introduction, and end-of-introduction roadmap) with appropriate rhetorical building, then demonstrated through close reading in §§3–4, with §4's concluding paragraph synthesising the stratification before bridging to §§5–7.

No logical contradictions detected between sections. The §3 claim that the AC "does not commit the rite to either side of the boundary the Formula of Concord had drawn" is consistent with §4's reading that the BA does precisely commit the rite to the Lutheran side; the contrast is the paper's central analytical move.

**Clean.**

---

## E. Summary of recommended fixes (in priority order)

| Priority | Fix | Section / Location |
|---|---|---|
| HIGH | A.1 — Add Admonition (and Lord's Prayer, communion hymn) to the structural list, OR replace list with compact phrasing | §3, second paragraph |
| HIGH | A.2 — Soften Kolb 2008 footnote citation; defer chapter-specific verification | §4, footnote 27 |
| HIGH | A.3 — Tighten Bodnárová footnote to reflect actual Bodnárová text (1540 dispute, name Bartolomej Franck) | §4, footnote 28 |
| MEDIUM | B.1 — Standardise mining-town designation (recommend "central Slovak mining towns" first, then "mining-town milieu") | §§1, 2, 4 |
| MEDIUM | B.2 — Replace "Hungarian-Lutheran" with "Upper-Hungarian Lutheran" | §1 abstract; §1 main text |
| MEDIUM | B.3 — Soften "in the same liturgical-geographical milieu" | §1, last main paragraph |
| LOW | B.4 — Verify the 49 % figure for Utraquist content in CS 1636 | §1, footnote 3 |
| LOW | B.5 — Verify Grešová-Sekelská 2023 page numbers (XIII–XV) | §1, footnote 4 |
| LOW | C.2 — Drop scare quotes around "real" Lutheranism | §3 |
| LOW | D.4 — Replace "toward" with "towards" for British consistency | §1 (×2 instances) |

C.1 (abstract opening) is left to Michal's judgment. I have no recommendation either way.

---

*All verbatim Slovak/Czech/Latin quotes verified against PAIR_006 dossier; all page references verified against Benka source notes; footnote format and overall structure clean. The draft is in good shape — the audit's flags are refinements, not red flags.*
