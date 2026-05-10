# Audit of Legacy Materials — TEPALIT Valčo Chapter

**Date:** 2026-03-24
**Phase:** 2 (Literature Reconnaissance → Source Documentation)
**Scope:** All materials in `Monografia/Resources/` plus annotation document (v02)

---

## 1. Sources to Add to Source_Index

### 1.1 Primary Sources (from annotation not yet in Source_Index)

| Source | Proposed Short ID | Confession | Notes |
|---|---|---|---|
| Missale Pragense (Utraquist use) | `MissalePrag` | Utraquist | Annotation [68–69]: Old Utraquists used pre-Tridentine Roman missals. Key for showing their conservative Eucharistic theology (retained Roman Canon). No known digital exemplar — check Manuscriptorium. |
| Prvý kancionál Jednoty (1501) | `KancPrvy_1501` | Unity | Annotation [87]: First Protestant hymnal ever published. Text-only (no notation). Extremely rare. Check Kramerius, Manuscriptorium. |
| Rohov kancionál (1541) | `KancRoh_1541` | Unity | Annotation [88]: Jan Roh editor. Check MUNI thesis (Mladějovská) for catalogue data. |
| Kunvaldský kancionál (1576) | `KancKunv_1576` | Unity | Not in annotation but Sekelská 2019 uses it extensively. Check HTB, Manuscriptorium. |
| Závorkov kancionál (1602) | `KancZav_1602` | Unity | Not in annotation but Sekelská 2019 uses it extensively. Check HTB, Manuscriptorium. |
| Bratská agenda (1580/1585/1612) | `AgBratska_1585` | Unity | Annotation [95–96]: Official Unity liturgical orders. Distinct from neo-Utraquist Agenda Česká 1581. Annotation gives Kramerius VKOL link for 1585 ed. |
| Lukáš Pražský: Jednoduchá zpráva o Večeři Páně | `LukasPr_Zprava` | Unity | Annotation [94]: Early Unity Lord's Supper rite + theological rationale. Likely undigitised. |
| Michael Weiße: Ein New Gesengbuchlein (1531) | `Weisse_1531` | Unity (DE) | From Claude Report 03. First German-language Brethren hymnal. 157 hymns. Luther knew and used it. Important for German→Czech→Slovak transmission chain. |

### 1.2 Secondary Literature (from annotation and AI reports, not yet in Source_Index)

| Scholar | Work | Proposed Short ID | Priority | Notes |
|---|---|---|---|---|
| Daniel, David P. | "Highlights of the Lutheran Reformation in Slovakia" | `Daniel_HLR` | HIGH | [ctsfw.net PDF](https://ctsfw.net/media/pdfs/danielreformationinslovakia.pdf). Free access. Annotation [116] lists him for confessionalisation. Gemini Report 03 cites extensively. |
| Haan, Ľudovít | *Cithara Sanctorum, její historia, její původce a spolupracovníci* (1873) | `Haan_1873` | HIGH | ChatGPT Report 03 [23]: "first systematically identified sources and authors" of CS. Foundational 19th-c. study. Check Google Books, Archive.org. |
| Mocko, [?] | *Historia posvätnej piesne slovenskej a historia kancionálu* | `Mocko_Hist` | MEDIUM | ChatGPT Report 03 cites [zlatyfond.sme.sk](https://zlatyfond.sme.sk/dielo/1812/Mocko_Historia-posvatnej-piesne-slovenskej-a-historia-kancionalu/10). Slovak hymn history. Free online. |
| Basicova, Susanne | *Juraj Tranovský und sein Kantional Cithara Sanctorum* (diss., Univ. Vienna, 2009) | `Basicova_2009` | MEDIUM | Claude Report 03 [13]. German-language dissertation. Check Univ. Vienna repository. |
| Atwood, Craig D. | "Bohemian Brethren and the Protestant Reformation" (*Religions* 12/5, 2021) | `Atwood_2021` | LOW | [MDPI open access](https://www.mdpi.com/2077-1444/12/5/360). Overview article; we already have his monograph. |
| Kvačala, Ján | [various studies] | `Kvacala` | LOW | Annotation [116]. Classic Slovak Reformation historian. Identify specific works as needed. |
| Kowalská, Eva | [various studies] | `Kowalska` | LOW | Annotation [116]. Slovak Reformation. Identify specific works as needed. |
| Ďurovič, Ján | [various studies on hymnology] | `Durovic` | LOW | Annotation [117]. Slovak hymnologist. Identify specific works as needed. |
| Augustínová, Eva | [various studies on hymnology] | `Augustinova` | LOW | Annotation [117]. Slovak hymnologist. Identify specific works as needed. |
| Dremel & Wissemann-Garbe | "Literaturbericht Hymnologie" (*JFLH* 62, 2023) | `Dremel_2023` | LOW | [JSTOR](https://www.jstor.org/stable/27272912). German-language literature review covering 2020–21 publications. Useful for completeness check. |


---

## 2. Hymn Identifications to Pursue

These specific hymn leads were extracted from AI reports. **All require verification against HTB, Sekelská's work, or direct kancionál examination.** Provenance noted for each.

### 2.1 High-confidence leads (named hymns with plausible attributions)

| Hymn Incipit | Claimed Source | Claimed CS Location | Report | Verification Status |
|---|---|---|---|---|
| "Jezu Kriste, jenž zajisté stal se člověk z Panny čisté…" | Ivančice 1564 (Lord's Supper section) | CS hymn 355 (later eds.) | ChatGPT R03 | **UNVERIFIED.** Specific page refs (pp. 219–236) and stanza texts need checking against Ivančice 1564 via HTB or Polička digitisation. High priority — this would be a perfect test case for the "Lutheranisation" thesis if real. |
| "Soudce všeho světa, Bože" | Attributed to Jan Hus; transmitted via Unity hymnals | Claimed in CS | ChatGPT R03 | **UNVERIFIED.** Plausible attribution. Check HTB for incipits. |
| "Ejhle, Hospodin přijde" | Hussite-era Advent song, transmitted via Unity hymnals | Claimed in CS | ChatGPT R03 | **UNVERIFIED.** Check HTB. |
| "Jezu Kriste, štědrý kněže" | Jistebnický kancionál (c. 1420) | Cross-confessional | Annotation [66] | **ANNOTATION-SOURCED.** Annotation explicitly names it as a Eucharistic hymn adopted across all traditions. HTB verification needed. |


### 2.2 Lower-confidence leads (vague or likely confabulated)

| Hymn Incipit | Report | Assessment |
|---|---|---|
| "Radujme se vždy společně" | ChatGPT R03 | Vague. Report conflates with "Radujme se v Pánu Bohu" and an English version. Needs independent verification. |
| "Ach Bože, k jakému věku…?" | ChatGPT R03 | Report itself admits "it's not clear if this exact incipit appears" in CS. Low confidence. |
| "Hosanna, sláva, moc, vladařství, čest…" | ChatGPT R03 | Claimed as CS hymn 355, stanza 1. Stanza text may be fabricated. Needs primary source check. |

### 2.3 Quantitative claims to verify

- **76 songs from Brethren hymnals** in CS (ChatGPT R03, citing Český hudební slovník) — VERIFY against Český hudební slovník entry for CS.
- **29 Luther hymns translated** in CS (Gemini R03) — cross-check with Vajda 1944.
- **~150 Tranovský originals** (Gemini R03) — cross-check with Vajda 1944 and GresovaSek.
- **412 songs total** in CS 1636 first edition (all reports) — standard claim, appears reliable.
- **215+ editions** of CS through modern times (strategy doc, citing musicologica.eu) — appears reliable.

---

## 3. Analytical Angles Worth Developing

### 3.1 From ChatGPT Report 03 (strongest analytical content of the three)

1. **Five-fold typology of textual alteration:** (a) Omission of problematic stanzas, (b) Rewording of individual lines, (c) Person-shift (3rd→1st/2nd person), (d) Addition of explicitly Lutheran phrases, (e) Length reduction. This is a useful heuristic framework for organising our §5 analysis, even though the specific examples given are unverified.

2. **Tone shift from "academic/didactic" to "devotional/prayerful"** in adapted hymns. The observation that Unity hymns tend to teach *about* the sacrament while Lutheran versions tend to *pray to* Christ in the sacrament is analytically suggestive and worth testing against real hymn pairs.

3. **The adoration problem:** Unity hymns explicitly warn against worshipping the elements ("Neníť Kristem ani Bohem, ale chléb jest jeho tělem…"); Lutheran versions remove this and instead encourage reverence toward Christ present in the sacrament. This is a concrete *lex orandi* divergence that maps directly onto the dogmatic difference.


### 3.2 From Gemini Report 03 (strongest conceptual framing)

4. **Shared *bibličtina* as double-edged sword:** The common literary language (Kralice Czech) enabled seamless hymn transmission but simultaneously carried "embedded" Brethren theology. This framing — linguistic accessibility as both enabler and theological danger — is excellent for the §5 introduction.

5. **"Theological policing" / "confessional gatekeeper" framing:** Tranovský as a deliberate theological editor, not passive compiler. The Gemini report's language about "appropriating the artistic shell while replacing the theological core" is analytically sharp. Worth developing with our own evidence.

6. **Three-fold Eucharistic adaptation pattern:** memorial → substantial presence; sign → means of grace; faith-reception → oral reception. This is a clean taxonomy even though the Gemini report's "Table 1" illustrating it is entirely fabricated.

7. **Brethren "essentials/ministerials/incidentals" framework** and its implications for hymnic flexibility. The Brethren's categorisation of sacraments as "ministerials" (means, not ends) gave them theological permission to adapt hymnic language more freely. This helps explain why Unity hymnody was "adaptable" in ways that strictly confessional Lutheran hymnody would not be.

### 3.3 From Claude Report 03 (most cautious, but useful details)

8. **Lukáš Pražský's four modes of Christ's existence:** substantial/physical (heaven only), powerful/regal (on earth as king), spiritual (in hearts), sacramental (in sacraments as sensual signs). This is a precise theological framework for mapping Brethren Christology against Lutheran ubiquity doctrine. Needs verification against Atwood 2009 or Crews 2018.

9. **1768 Jesuit censorship of CS (17th edition):** "A section and 12 hymns were removed and replaced by others of similar length." Counter-Reformation editing of an already-Lutheran-edited hymnal — layer upon layer of theological adaptation. Worth a footnote in §5.

10. **Michael Weiße's 1531 German Brethren hymnal** as intermediary. If Luther knew and used Weiße's hymnal (which is documented), the transfer chain is Czech Brethren → German Brethren → German Lutheran → Czech/Slovak Lutheran, not just Czech→Slovak. This complicates the narrative usefully.


---

## 4. Material Confirmed as Superseded

| Material | Superseded By | Notes |
|---|---|---|
| `compass_artifact_markdown.md` (ecclesiology study) | `Sources/Analysis_Eucharistic_ThreeColumn.md` + primary source entries | The compass artifact is an unverified AI overview. Our three-column analysis and source-documented entries (Benka, ConfFidei, ConfBohem) supersede it for Eucharistic theology. Ecclesiological material may still have useful leads but needs verification. |
| Report 01 series (Eucharist, all 3 engines) | Our `Analysis_Eucharistic_ThreeColumn.md` + `Analysis_Eucharistic_Rite_AgCeska.md` | Our primary-source-based analysis (FC SD VII, ConfFidei 1535, CB 1575, Agenda Česká via Benka) supersedes these reports entirely. |
| Report 02 series (Ecclesiology, all 3 engines) | Partially superseded by Source_Index entries | We haven't yet done systematic ecclesiology analysis, so some material from these reports may be worth mining later. But any claims need verification. |
| Strategy document methodology | Implemented in current workflow | The HTB/Manuscriptorium/Kramerius strategy is already operational. The hymn-identification methodology (incipit matching via HTB) is exactly what we'll execute in Phase 2. |
| `Agenda Ceska 1581` raw page scans (229 images) | `Benka_2024` (MLS X) critical edition | Benka provides full scholarly transcription with apparatus. The raw scans are backup only. |
| Incomplete transcripts (`Agenda Ceska 1581 a Agenda 1615 - transcripts incomplete.docx`) | `Benka_2024` | Benka's critical edition supersedes all partial transcriptions. |

---

## 5. Likely Hallucinated or Fabricated Material (RED FLAGS)

### 5.1 ChatGPT Report 03
- **Specific Czech stanza texts** attributed to "Ivančice 1564, stanza 6/7" and "CS hymn 355, stanza 3" — these look plausible but the stanza numbering, page references, and actual Czech text need primary source verification. High risk of fabrication.
- **"Brabcová (2016)"** cited as doing "comparative research" — cannot verify this scholar or publication. Likely hallucinated.
- **"Jiří Sehnal"** cited as a music historian noting CS's "anthological character" — Sehnal is a real Czech music historian, but the specific quote may be fabricated.
- **Footnote numbers [50]–[96]** in the report reference a mix of Wikipedia, Czech Wikipedia, and a few real scholarly URLs. The footnote numbering system itself is unreliable.


### 5.2 Gemini Report 03
- **Table 1 ("Comparative Analysis of Theologically Adapted Hymn Texts")** — entirely fabricated. The "Reconstructed Original Czech Stanza" column contains synthetic Czech text. The page references are placeholder brackets "[XX]", "[YY]", "[ZZ]". This table is a *model* of what a real comparison would look like, not actual data.
- **The three-fold adaptation pattern** (memorial→presence; sign→means; faith-reception→oral) is analytically sound as a framework but has NO primary-source evidence behind it in this report. Treat as hypothesis, not finding.
- Source list is heavily Wikipedia/Encyclopedia-based. Real scholarly citations (Atwood, Vajda, Daniel) are mixed with non-academic sources (Reddit, Mission of St. Clare).

### 5.3 Claude Report 03
- Most cautious of the three. Repeatedly acknowledges that "complete textual analysis requires manuscript access currently unavailable."
- **Lukáš Pražský's four modes of Christ's existence** — this framework appears genuine (consistent with Atwood 2009) but the precise formulation needs cross-checking.
- **"Basicova, Susanne (2009)" dissertation** — likely real (Univ. Vienna) but needs verification.
- Reference list heavily padded with Wikipedia entries and Manuscriptorium browsing pages.

### 5.4 Compass artifact (ecclesiology)
- Extensive quotations attributed to Augsburg Confession, Hus's *De ecclesia*, etc. The *framework* (three traditions compared across ecclesiological themes) is sound, but **all direct quotes need verification against critical editions**. This is a heuristic overview, not a citable source.

### 5.5 General reports (Gemini, Sider)
- Not audited in detail. These appear to be broad project overviews. Low priority for mining.

---

## 6. Summary of Actions Required

### Immediate (this session)
- [ ] Add primary sources from §1.1 to Source_Index.md
- [ ] Add secondary literature from §1.2 to Source_Index.md (HIGH priority items only)
- [ ] Begin Digital Source Hunt (TASK 2)

### Next session
- [ ] HTB browser search for hymn incipits from §2.1
- [ ] Verify "76 Brethren songs" claim via Český hudební slovník
- [ ] Verify "Brabcová (2016)" — likely fabricated scholar

### Ongoing
- [ ] Every claim from AI reports must be verified before use in chapter
- [ ] Analytical frameworks from §3 can be adopted as heuristics but need primary-source grounding

---

*This audit was completed by Claude (Opus 4.6) in collaboration with Michal Valčo as part of TEPALIT Phase 2. All findings are preliminary and require human verification.*
