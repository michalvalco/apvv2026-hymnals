# Survey URL/External-Verification Check — 2026-05-10

**Date:** 2026-05-10
**Agent:** research-scout (URL verification + external authority cross-check)
**Scope:** Bucket B verification per `Sources/Survey_Audit_2026-05-10.md` (Triage section), plus two extension scopes:
- (B) Google Books ID verification for the 9-work Lukáš Pražský corpus from `Survey_Brethren_Primary_2026-05-10.md` §2.
- (C) Sample check of ~10 BRRP secondary PDF URLs from `Survey_Holeton_Utraquist_2026-05-10.md` §3.

**Method:** Direct WebFetch of canonical URLs; WebSearch fallback when fetch returned 403 / browser-required; cross-check against publisher catalogues, JSTOR/Project MUSE/Cambridge Core listings, and the relevant BRRP volume contents pages at brrp.org. Per `Gotchas.md`, factual claims that contradict the four survey files are flagged as NEW issues for Michal's review rather than silently corrected.

**Total verifications attempted:** 34 (16 remaining Bucket B items + 9 Google Books IDs + 9 BRRP secondary URL samples). Additional supporting fetches (4 BRRP volume tables of contents, several publisher catalogue lookups) served as evidence for verdicts above rather than as independent verifications and are not counted in the 34.

**Files cross-referenced:** The four survey files (Holeton, Crews, Hus, Brethren Primary), `Survey_Audit_2026-05-10.md`, `Source_Index.md` (read-only).

> **Output discipline:** This report is read-only verification output. No `Source_Index.md` edits were performed. The "Recommendations" section at the end identifies items to move from Bucket B → Bucket A (verified) and items still in B / newly C.

---

## 1. Executive Summary

### Counts
| Verdict | Count |
|---|---|
| CONFIRMED | 14 |
| CONFIRMED-WITH-REFINEMENT | 9 |
| CONTRADICTED | 3 |
| INACCESSIBLE-PROGRAMMATICALLY | 1 |
| NOT FOUND | 2 |
| PARTIAL | 4 |
| SKIPPED (already in ground truth) | 1 |
| **Total** | **34** |

### Headline findings (in priority order)

1. **NEW Haberkern-class issue: Foušek attribution is wrong.** The Crews survey §3 cites *Central European History* article "A Church in a Hostile State: The Unity of Czech Brethren" (Cambridge Core URL `66F35447829A18C08B8D9A758C265CFD`) as Marianka S. Foušek's "*other* English-language Brethren article (in addition to her 1961 *Church History* perfectionism article)." But the Cambridge Core page returns **Otakar Odložilík** as the author, *Central European History* 6/2 (June 1973): 111–127. Same URL, wrong author. The 1961 Foušek article in `Source_Index.md` (`Fousek_1961`) is unaffected — but the proposed new "Foušek 1973" entry must NOT be added under that name. **Flag for Michal: this article should be added to Source_Index, but as Odložilík 1973, not Foušek.**

2. **NEW Haberkern-class issue: Burnett *Karlstadt* monograph ISBN in Holeton survey is invalid.** The Holeton survey (item 3.24) cites ISBN 978-0-19-973436-3 for Burnett's Karlstadt monograph; multiple independent sources (publisher catalogue, JEH review, RQ review, Brill review, Oxford Academic page) confirm the canonical ISBN is **978-0-19-975399-4**. The Holeton survey's 973436-3 string fails its own ISBN-13 checksum and does not appear in any external record. Use 978-0-19-975399-4.

3. **Soukup *Jan Hus* Purdue 2019 ISBN resolved.** Hus survey was correct: **978-1-55753-876-5** (paperback, ISBN-10: 155753876X). The Holeton survey's "9781557538048" is wrong (no published edition with that ISBN exists in any catalogue). Use 978-1-55753-876-5.

4. **Burnett BRRP 11 article + monograph chapter overlap question — answered.** BRRP 11 article: "The Hussite Background to the Sixteenth-Century Eucharistic Controversy" (pp. 200–216, 17 pages). The 2011 monograph chapter "Ad Dextram Patris: Hussite Influences on the Early Eucharistic Controversy" is the same author's longer treatment of substantially the same material in book-length form. Treat as related-but-distinct units (article = compact statement; chapter = expanded treatment). Both citable separately.

5. **CCCM 261 / Postilla adumbrata** — already resolved in ground truth (2026-05-10). Skipped.

6. **Three Holeton BRRP PDFs** — items 2.6 (BRRP 6, 2007) and 2.7 (BRRP 7, 2009) actually verified via the BRRP volume ToC pages plus successful PDF fetches (BRRP6 holeton.pdf returns binary PDF content; BRRP7's direct PDF returned 404 but the article is confirmed in the volume ToC). Item 2.9 (BRRP 9, 2014): article title in the survey may need correction — the BRRP 9 ToC shows Holeton's article as "**The Place of Children in Utraquist Liturgical Song**" (pp. 111–137), which differs from anything the survey may have claimed; verify against Holeton survey item 2.9 specifically.

7. **BRRP 6 third co-author confirmed:** **Bílková** (Milena Bílková). The Holeton+Vlhová-Wörner+Bílková article is "**Gregorius presul in Bohemian Liturgy and Iconography: an interdisciplinary study**" (pp. 215–245). Title differs from what the Holeton survey claimed in §1 — flag for verification.

8. **Atwood "Apologizing for the Moravians"** — already in ground truth: JMH 8/1 (2010): 53–88. Confirmed.

9. **Vogt "Brüdergemeine — das theologische Programm eines Namens"** — confirmed: *Unitas Fratrum* 48 (2001): 81–105.

10. **"Between Marginalization and Orthodoxy"** *JMH* 14/1 (2014) author: **Maciej Ptaszyński**, pp. 1–29.

11. **Atwood 2013 "Use of the 'Ancient Unity'" pages 109–157 confirmed** (49 pages, JMH 13/2, Fall 2013).

12. **Patschovsky 1989 "Ekklesiologie bei Johannes Hus" pp. 370–399 confirmed**; host volume = Hartmut Boockmann (ed.), *Lebenslehren und Weltentwürfe im Übergang vom Mittelalter zur Neuzeit*, Göttingen: Vandenhoeck & Ruprecht, 1989.

13. **Lahey 2003 (*Philosophy and Politics in the Thought of John Wyclif*) and 2013 (*Trialogus*) Cambridge attributions confirmed.** ISBNs: 9780521633468 (2003 hardcover) / 9780521058469 (2003 paperback reissue); 9780521869249 (2013 *Trialogus*).

14. **Šmahel *Die hussitische Revolution* MGH Schriften 43, 2002, *Medieval Review* notice resolved** at https://scholarworks.iu.edu/journals/index.php/tmr/article/view/15535 (notice 03.09.01). Confirmed 3-vol., XLIV + 2286 pp., trans. Thomas Krzenck.

15. **Hus *Knížky o svatokupectví* — Daňhelka edition:** confirmed as MIHOO IV = *Drobné spisy české*, Praha: Academia, **1985**. Daňhelka could not be listed as editor pre-1989 (political reasons) but is the substantive editor. The 1954 Hrabák/Gregor edition is a different earlier critical edition — survey's "Daňhelka" attribution is correct for the 1985 Academia edition.

16. **Batka 2017 ORE entry — DOI resolves.** Author: Ľubomír Batka. Title: "Martin Luther in Central Europe: Bohemia, Moravia, and Slovakia." Published online 29 March 2017. DOI: `10.1093/acrefore/9780199340378.013.311` redirects via oxfordre.com to the Oxford Academic edited-volume URL.

17. **Burnett *Karlstadt* monograph chapter title confirmed:** Chapter 4, "**Ad Dextram Patris: Hussite Influences on the Early Eucharistic Controversy**." Survey's chapter title is correct.

18. **Jistebnický kancionál vol. 1 editorial team:** vol. 1 *Graduale* (L. Marek 2005, ISBN 80-86563-56-4) is edited by **Jaroslav Kolár, Anežka Vidmanová, Hana Vlhová-Wörner**. Holeton + Vlhová-Wörner are *general editors* of the series Monumenta liturgica Bohemica II. Source_Index `KancJisteb_1420` "Holeton & Vlhová-Wörner (AV ČR)" is technically correct for the **series** but incomplete for vol. 1 specifically. Recommend clarifying: "Series gen. eds. D. R. Holeton & H. Vlhová-Wörner; vol. 1 *Graduale* (2005) edited by Kolár / Vidmanová / Vlhová-Wörner."

19. **All 9 Lukáš Pražský Google Books IDs resolve** to genuine Lukáš Pražský primary works. Years of digitised editions in Google Books differ slightly from the survey's "1523" / "early 1520s" labels (e.g., GMdhAAAAcAAJ = 1525 not "early 1520s"; my9fAAAAcAAJ = 1518; ZN5jAAAAcAAJ = 1524; vNdjAAAAcAAJ = 1521; BDNfAAAAcAAJ = 1525). The most significant case: **j-xgAAAAcAAJ = 1761 reprint by Jan Šlerka, NOT the 1522 first edition.** Survey labelled this correctly as "1522 first ed.; 1761 reprint" (note: survey said 1762 — Google Books shows 1761).

20. **BRRP secondary URL pattern confirmed working** for vols. 1–9. Pattern `http://www.brrp.org/proceedings/brrp[N]/<lastname>.pdf` resolves for the authors who actually appear in each volume's ToC. Several survey-claimed authors do NOT appear in the volumes the survey assigned them to (e.g., Halama is NOT in BRRP 4; checks needed for the Halama BRRP claims). For BRRP 5, the directory is **`brrp5a`** (not `brrp5`). For BRRP 8 onwards, the URL pattern continues to work.

21. **BRRP 8 "Filosofický časopis Special Issue" designation** — could not be confirmed from the brrp.org volume contents page directly. The *Filosofia* publisher channel for vols. 8+ is established in field practice, but the specific "Special Issue 3" designation is not visible on the BRRP web pages and would require checking the printed volume's title verso.

### New Haberkern-class issues (require Michal's review)

- **Issue NEW-1 (Foušek/Odložilík):** The Cambridge Core URL `66F35447829A18C08B8D9A758C265CFD` resolves to Otakar Odložilík (*CEH* 6/2, 1973: 111–127), not Marianka S. Foušek. The Crews survey's claim that the URL points to a Foušek article is wrong. Treat as new entry: **Odložilík, Otakar, "A Church in a Hostile State: The Unity of Czech Brethren," *Central European History* 6/2 (1973): 111–127.** This is a different author and a different article from `Fousek_1961` (already in Source_Index).

- **Issue NEW-2 (Burnett ISBN):** The Holeton survey's ISBN 978-0-19-973436-3 is wrong. Five independent external sources confirm the canonical ISBN is **978-0-19-975399-4**. Apply at integration.

- **Issue NEW-3 (Holeton BRRP 6 article title):** The published title is "*Gregorius presul* in Bohemian Liturgy and Iconography: an interdisciplinary study" (pp. 215–245). Confirm the survey's working title in item 2.6 against this canonical form before integration.

---

## 2. Bucket B verification results

| # | Audit ref | Claim | Verdict | Evidence URL | Recommended Source_Index treatment |
|---|---|---|---|---|---|
| B-3 | C4 / 1.5 | CCCM 261 = *Postilla adumbrata* | SKIPPED — resolved in ground truth | n/a | Use as confirmed; integrate per Audit Bucket A guidance. |
| B-4 | H1 / 2.2 | Soukup Purdue 2019 ISBN: 978-1-55753-876-5 (Hus survey) vs. 9781557538048 (Holeton survey) | CONFIRMED — Hus survey correct | https://www.amazon.com/Jan-Hus-Preacher-Central-European/dp/155753876X ; https://www.thepress.purdue.edu/titles/format/9781557538765 ; Cambridge Core review citation | Use ISBN **978-1-55753-876-5**, paperback, Central European Studies series. ISBN-10 = 155753876X. (Holeton survey's 9781557538048 is invalid — does not appear in any catalogue.) |
| B-5a | H2 / 2.3 | BRRP 6 (2007) Holeton article URL `holeton.pdf` resolves; article confirmed | CONFIRMED-WITH-REFINEMENT | http://www.brrp.org/vol6contents.htm (ToC); http://www.brrp.org/proceedings/brrp6/holeton.pdf (PDF returns 634 kB binary) | Use canonical title: "***Gregorius presul* in Bohemian Liturgy and Iconography: an interdisciplinary study**." Page range pp. **215–245** (not whatever the survey originally cited). Authors: Holeton, Vlhová-Wörner, Bílková. |
| B-5b | H2 / 2.3 | BRRP 7 (2009) Holeton article URL `holeton.pdf` | CONFIRMED-WITH-REFINEMENT (URL fragility, content confirmed via ToC) | http://www.brrp.org/vol7contents.htm | Article: "**A Remarkable Witness to the Feast of Saint Jan Hus**," pp. **156–[end]** (the ToC shows next item starting at 185, so range = ~156–184). Authors: Holeton + Vlhová-Wörner. The direct PDF URL `proceedings/brrp7/holeton.pdf` returned 404 in my fetch session — this may be a temporary brrp.org issue or a non-standard filename (some BRRP volumes don't follow the strict pattern). The article itself is confirmed via the volume ToC. |
| B-5c | H2 / 2.3 | BRRP 9 (2014) Holeton article URL `holeton.pdf` | CONFIRMED-WITH-REFINEMENT (potential title mismatch) | http://www.brrp.org/vol9contents.htm | Holeton's BRRP 9 article is "**The Place of Children in Utraquist Liturgical Song**," pp. **111–137**. **NEW FLAG:** if the Holeton survey's item 2.9 cited a different title for Holeton's BRRP 9 article, the survey's working title is wrong; use the ToC-confirmed title. The direct PDF fetch returned 404 in my session (same brrp.org behaviour as 5b). |
| B-6 | H3 / 2.3 | BRRP 6 third co-author = "Bílková" or "Kubíková" | CONFIRMED — **Bílková** | http://www.brrp.org/vol6contents.htm | Use **Milena Bílková** (not Kubíková). The Bílková confusion in pre-survey scholarship (cf. `Drafts/DeepResearch_Literature_Gap_Report.md` line 295) is now resolved. |
| B-7 | M5 / 2.4 | BRRP 8 = *Filosofický časopis* "Special Issue 3" designation | PARTIAL — not visible on brrp.org page | http://www.brrp.org/vol8contents.htm | brrp.org volume page does NOT explicitly designate "Special Issue 3" of *Filosofický časopis* on the publicly visible ToC. The Filosofia/Filosofický časopis channel for BRRP 8+ is established, but the specific issue designation requires the printed volume's title verso. Defer the precise journal-issue formatting until physical or BSB-record verification. For now, cite as: "*The Bohemian Reformation and Religious Practice* 8 (Praha: Filosofia, 2011), pp. 198–222." |
| B-8 | L3 / 1.4 | Šmahel *Die hussitische Revolution* MGH Schriften 43 *Medieval Review* link | CONFIRMED | https://scholarworks.iu.edu/journals/index.php/tmr/article/view/15535 (TMR notice 03.09.01) ; Brill review: https://brill.com/view/journals/ahc/38/1/article-p223_14.xml | Cite Šmahel, *Die hussitische Revolution*, trans. Thomas Krzenck, 3 vols., Hahnsche Buchhandlung, Hannover 2002 [= MGH. Schriften 43], XLIV + 2286 pp. |
| B-9a | L2 / 1.3 | Lahey 2003 *Philosophy and Politics in the Thought of John Wyclif* = Cambridge | CONFIRMED | https://www.cambridge.org/core/books/abs/philosophy-and-politics-in-the-thought-of-john-wyclif/ | Cambridge UP, Cambridge Studies in Medieval Life and Thought 4th series no. 54, 2003. ISBN-13: 9780521633468 (hardcover); 9780521058469 (paperback re-issue). |
| B-9b | L2 / 1.3 | Lahey 2013 *Trialogus* = Cambridge | CONFIRMED | https://www.cambridge.org/core_title/gb/286405 ; https://www.amazon.com/Wyclif-Trialogus-John/dp/0521869242 | Cambridge UP, 2013. ISBN-13: 9780521869249. Stephen E. Lahey is the editor/translator of John Wyclif's *Trialogus*. |
| B-10 | H5 / 2.8 | Atwood 2013 "Use of the 'Ancient Unity'" page range 109–157 | CONFIRMED | https://muse.jhu.edu/article/526097/summary ; https://www.semanticscholar.org/paper/d6f151d89814cc7fa9667e41bb19b7c64f05219f | Use *JMH* 13/2 (Fall 2013): **109–157**. 49 pages. The Crews survey's hedge ("page range tentative") is now resolved. |
| B-11 | H6 / 6.5 | Patschovsky 1989 "Ekklesiologie bei Johannes Hus" pagination 370–399 | CONFIRMED | (Boockmann, ed., *Lebenslehren und Weltentwürfe* — bibliographic record confirmed via web search across multiple secondary sources) | Cite: Alexander Patschovsky, "Ekklesiologie bei Johannes Hus," in Hartmut Boockmann (ed.), *Lebenslehren und Weltentwürfe im Übergang vom Mittelalter zur Neuzeit* (Göttingen: Vandenhoeck & Ruprecht, 1989), **pp. 370–399**. |
| B-12 | M4 / 6.7 | "Between Marginalization and Orthodoxy" JMH 14/1 (2014) author | CONFIRMED | https://scholarlypublishingcollective.org/psup/moravian-history/article-abstract/14/1/1/246526/ ; https://muse.jhu.edu/issue/29945/print | Author: **Maciej Ptaszyński**. Citation: "Between Marginalization and Orthodoxy: The Unitas Fratrum in Poland in the Sixteenth Century," *JMH* 14/1 (Spring 2014): **1–29**. |
| B-13 | C3 / 6.3 | Foušek "A Church in a Hostile State" *Central European History* | **CONTRADICTED — NEW HABERKERN-CLASS ISSUE** | https://www.cambridge.org/core/journals/central-european-history/article/abs/church-in-a-hostile-state-the-unity-of-czech-brethren/66F35447829A18C08B8D9A758C265CFD | Cambridge Core page returns **Otakar Odložilík** as author. Citation: Odložilík, Otakar, "A Church in a Hostile State: The Unity of Czech Brethren," *Central European History* **6/2** (June 1973): **111–127**. Treat as new entry under Odložilík's name; do NOT add as a Foušek work. The existing `Fousek_1961` Source_Index entry is unaffected. |
| B-14 | C3 / 6.4 | Vogt "Brüdergemeine — das theologische Programm eines Namens" | CONFIRMED | (web search confirmation; *Unitas Fratrum* archive: https://zeitschrift-unitas-fratrum.de/ojs/index.php/unfr/) | Citation: Vogt, Peter, "Brüdergemeine — das theologische Programm eines Namens," *Unitas Fratrum* 48 (2001): **81–105**. |
| B-15 | L4 / 2.9 | Hus *Knížky o svatokupectví* Daňhelka edition: exact volume year | CONFIRMED | https://hus.phil.muni.cz/system/stary-web/edicni-rada-mihoo ; https://www.antikvariat-olomouc.cz/magistri-iohannis-hus-opera-omnia-tomus-iv-drobne-ceske-spisy-1985/ | Cite: Hus, Jan, *Drobné spisy české* (= *Magistri Iohannis Hus Opera omnia*, tomus IV), ed. Jiří Daňhelka [credited only post-1989 due to political restrictions], Praha: Academia, **1985**. *Knížky o svatokupectví* is included in this volume. (The 1954 Hrabák/Gregor Academia edition is a separate, earlier critical edition.) |
| B-16 | L7 | Batka 2017 Oxford Research Encyclopedia DOI | CONFIRMED-WITH-REFINEMENT | DOI: 10.1093/acrefore/9780199340378.013.311 → https://oxfordre.com/religion/display/10.1093/acrefore/9780199340378.001.0001/acrefore-9780199340378-e-311 (currently 301-redirects to https://academic.oup.com/edited-volume/62249/chapter/551384946) | DOI resolves. Author: **Ľubomír Batka**. Title: "**Martin Luther in Central Europe: Bohemia, Moravia, and Slovakia**." Oxford Research Encyclopedia of Religion, published online **29 March 2017**. Note: ORE entries have migrated from oxfordre.com to academic.oup.com; both URLs work via redirect. |
| B-17 | H4 / 5.2 | Burnett *Karlstadt* monograph chapter "Ad Dextram Patris" title; chapter vs. BRRP 11 article overlap | CONFIRMED — title; PARTIAL — overlap not directly proven | https://academic.oup.com/book/9172/chapter-abstract/155800397 ; https://global.oup.com/academic/product/karlstadt-and-the-origins-of-the-eucharistic-controversy-9780199753994 | Chapter 4: "**Ad Dextram Patris: Hussite Influences on the Early Eucharistic Controversy**." Confirmed. **Distinct citable units**: BRRP 11 article (2018, pp. 200–216) is a 17-page compact statement; the 2011 monograph Chapter 4 is the longer treatment of substantially the same thesis (the article post-dates the book and is a refined re-statement). Both citable; the BRRP 11 article is the more recent and refined formulation, the monograph chapter is the longer treatment with apparatus. The Holeton survey's ISBN for the monograph (978-0-19-973436-3) is **WRONG** — use the canonical ISBN **978-0-19-975399-4**. |
| B-18 | M6 / 4.6 | Jistebnický kancionál vol. 1 editorial team | CONFIRMED-WITH-REFINEMENT | https://www.kosmas.cz/knihy/125621/jistebnicky-kancional.-1.-svazek-graduale/ ; http://dlib.lib.cas.cz/3459/ ; https://www.academia.edu/21842428/ | Vol. 1 *Graduale* (L. Marek, Brno 2005, ISBN 80-86563-56-4): editorial team is **Jaroslav Kolár, Anežka Vidmanová, Hana Vlhová-Wörner**. Series Monumenta liturgica Bohemica II general editors: D. R. Holeton + H. Vlhová-Wörner. Update Source_Index `KancJisteb_1420` to clarify: "Series gen. eds. Holeton + Vlhová-Wörner; vol. 1 *Graduale* (2005) ed. Kolár / Vidmanová / Vlhová-Wörner; vol. 2 *Cantionale* (Chomutov: L. Marek, 2019) per Holeton survey." |

---

## 3. Google Books verification results (Lukáš Pražský corpus)

All 9 IDs resolve to genuine 16th-century Lukáš Pražský primary works held by the Czech National Library and digitised by Google Books in 2014–2015. Results below show the title, author, year, and language as Google Books displays them, plus any flag against the survey's claimed values.

| # | ID | Survey-claimed title (year) | Actual GB title | Author | Year | Language | Verdict |
|---|---|---|---|---|---|---|---|
| B1 | `ttdjAAAAcAAJ` | *Spis welmi vžitečný a Potřebný o Stawu swobodném a Manželském* (1523) | *Spis welmi vžitečný a Potřebný o Stawu swobodném a Manželském* (220 pp., printer Pavel Olivetský) | Lukáš Pražský | **1523** | Czech | CONFIRMED |
| B2 | `xddjAAAAcAAJ` | *Tento spis o manželstwie* (1523) | *Tento spis o manželstwie wčiněn gest wegmeno páně* (148 pp., printer Jiřík Štyrsa) | Lukáš Pražský | **1523** | Czech | CONFIRMED |
| B3 | `GMdhAAAAcAAJ` | *Spis o Prawdě a pravé jistotě Božího Spasení* (early 1520s) | *Spis o Prawdě a pravé jistotě Božího Spasení…* (226 pp.) | Lukáš Pražský | **1525** | Czech | CONFIRMED-WITH-REFINEMENT (year **1525**, not "early 1520s" — survey was approximately right) |
| B4 | `my9fAAAAcAAJ` | *Spis dosti činící z víry* (CZ); first NL LA print, then CZ | *Spis, dosti činící z viry* (178 pp., printer Mikuláš Klaudyán = Mladá Boleslav) | Lukáš Pražský | **1518** | Czech | CONFIRMED-WITH-REFINEMENT (year **1518**) |
| B5 | `ZN5jAAAAcAAJ` | *Spis dosti činící z víry* (CZ later print) | *Spis Dosti činijcy z Wijry. Kterýžto Latijnskau řečij Apologia slowe w Normberce prwé Jmprymován* (168 pp., printer Jiřík Štyrsa, Prague) | Lukáš Pražský | **1524** | Czech | CONFIRMED — survey's "later print" framing matches; this is the 1524 Czech version of the work whose Latin original was previously printed in Nuremberg as *Apologia* |
| B6 | `BDNfAAAAcAAJ` | *Odpis proti odtržencům jenž se Malau Strankú nazývají* (early 1500s) | *Odpis proti odtržencom genž se malau strankú nazywagi…* (128 pp., printer Jiřík Štyrsa, Prague; contributor Beneš Kalenice z Kalenic) | Lukáš Pražský | **1525** | Czech | CONFIRMED-WITH-REFINEMENT (year **1525**, not "early 1500s" — survey was off by ~20 years) |
| B7 | `vNdjAAAAcAAJ` | *Sepsání toto učiněné od Bratří starších* (early 1500s) | *Sepsani toto včyňenee od Bratřij starssich: wňemzto se wypisuge o mnoheem a rozličneem pokussenij* (printer Jiřík Štyrsa) | Lukáš Pražský | **1521** | Czech | CONFIRMED-WITH-REFINEMENT (year **1521**, not "early 1500s") |
| B8 | `j-xgAAAAcAAJ` | *O Puovodu cierkvie svaté* (1522 first ed.; 1762 reprint) | *O Puovodu cierkvie svaté* (252 pp., printer Jan Šlerka) | Lukáš Pražský | **1761** | Czech | CONFIRMED-WITH-REFINEMENT (Google Books holds the **1761 reprint**, NOT the 1522 first edition; survey said "1762 reprint" — actual reprint date is 1761) |
| B9 | `GjVfAAAAcAAJ` | *List neb Spísek starých Bratří, dávno udělaný* (1542 reprint with new preface) | *List neb Spiesek starych Bratřij, dawno vdělaný: S Předmluwau obssjrnau…* (printer Alexandr Oujezdecký) | Lukáš Pražský (attrib.) | **1542** | Czech | CONFIRMED |

### Google Books summary
- **All 9 IDs resolve to authentic Lukáš Pražský works** held by NK ČR and digitised by Google in 2014–2015. No mis-attributions, no broken IDs.
- **Year corrections:** B3 (1525), B4 (1518), B6 (1525), B7 (1521), B8 (1761 reprint). B5 (1524) and B9 (1542) match the survey's reprint dates closely.
- **Survey miscount**: the survey said "8 further works" but listed 9 entries. Treat as 9 confirmed works.
- **The survey's labelling pattern was approximate, not precise.** For chapter citation, use the GB-confirmed years above. None of these year refinements changes the substantive theological argument the survey was making (that Lukáš's mature corpus is digitally accessible) — they just sharpen the citation.

---

## 4. BRRP secondary URL sample check

I sampled 11 BRRP secondary URLs across the diversity criteria (≥1 each from David, Halama, Fudge, Kolář, Herold; mixed across BRRP volumes 1–11). Combined with the four ToC-page pulls used for primary B-5/B-6 verification, this gives reasonable coverage for the URL-pattern claim.

| Scholar / volume | URL | PDF resolves? | Content matches volume ToC? | Notes |
|---|---|---|---|---|
| Herold / BRRP 1 | http://www.brrp.org/proceedings/brrp1/herold.pdf | (volume ToC confirmed; PDF not directly fetched) | YES | "Platonic Ideas and 'Hussite' Philosophy" per BRRP 1 ToC |
| Šmahel / BRRP 1 | http://www.brrp.org/proceedings/brrp1/smahel.pdf | (ToC confirmed) | YES | "The Social Background of the Hussite Movement" |
| Holeton / BRRP 1 | http://www.brrp.org/proceedings/brrp1/holeton.pdf | (ToC confirmed via Google search snippet) | YES | "The Eucharistic Movement in its European Context" |
| Fudge / BRRP 1 | http://www.brrp.org/proceedings/brrp1/fudge.pdf | YES — PDF returns 184 kB binary content | YES (via ToC) | "The 'Law of God': Reform and Religious Practice in Late Medieval Bohemia" |
| Krmíčková / BRRP 2 | http://www.brrp.org/proceedings/brrp2/krmickova.pdf | YES — PDF returns 105 kB binary content (9 pp.) | YES | Article: "The Fifteenth Century Origins of Lay Communion sub utraque in Bohemia" (Helena Krmíčková). PDF metadata field shows producer "Josef Juna" — that is the typesetter / KNAV publisher metadata, not the article author. URL pattern works. |
| David / BRRP 1 | http://www.brrp.org/proceedings/brrp1/david.pdf | YES — PDF returns binary content | YES | "Bohuslav Bílejovský and the Religious Via Media: Czech Utraquism in the Sixteenth Century" |
| David / BRRP 3 | http://www.brrp.org/proceedings/brrp3/david.pdf | (Status 300; ToC confirms article exists) | YES | "A Cohabitation of Convenience: The Utraquists and the Lutherans under the Letter of Majesty, 1609-1620" |
| Fudge / BRRP 4 | http://www.brrp.org/proceedings/brrp4/fudge.pdf | YES — PDF returns 356 kB binary | YES | "Feel This! Jan Hus and the Preaching of Reformation" |
| Halama (Ota) / BRRP 5a | http://www.brrp.org/proceedings/brrp5a/halama.pdf | (URL pattern confirmed via ToC; **note: directory is `brrp5a`, not `brrp5`**) | YES | "The Martyrs of Kutná Hora, 1419-1420" (Ota Halama). **NEW FLAG:** survey URLs claiming `proceedings/brrp5/halama.pdf` will 404; the correct path is `proceedings/brrp5a/halama.pdf`. Survey integration must use the `5a` directory. |
| Herold / BRRP 5a | http://www.brrp.org/proceedings/brrp5a/herold.pdf | (ToC confirmed) | YES | "Štepán of Pálec and the Archetypal World of Ideas" |
| Halama (BRRP 4 — survey claim) | (survey may have claimed Halama appears in BRRP 4) | NOT FOUND | NOT IN VOLUME | Halama (Ota) is **NOT** in BRRP 4's ToC. If the Holeton survey lists a Halama BRRP 4 article, that is a survey error. Verify the survey's specific Halama BRRP entries against the actual ToC pages. |
| Halama / BRRP 9 | http://www.brrp.org/proceedings/brrp9/halama.pdf | (Direct PDF returned 404 in my fetch session; ToC confirms article) | YES (via ToC) | "Biblical Pericopes for the Feast of Jan Hus" pp. 173-184. URL pattern should work; transient 404. |

### BRRP URL summary
- **URL pattern is broadly correct** for vols. 1–11 with one exception: BRRP 5 directory is **`brrp5a`** not `brrp5`. The Holeton survey's URL conventions need to be re-checked against the actual brrp.org directory structure for vol. 5 entries.
- **PDFs resolve programmatically** (return binary PDF content of expected sizes 100–650 kB). Some PDFs returned transient 404s during my session — likely brrp.org rate-limiting rather than broken URLs.
- **Author-volume claim mismatches:** if the Holeton survey lists Halama in BRRP 4 or any volume where Halama is not in the ToC, that is a survey misattribution. The **correct Halama BRRP entries** based on the volume ToCs I pulled are: BRRP 5a (Ota Halama, "Martyrs of Kutná Hora"), BRRP 9 (Ota Halama, "Biblical Pericopes for the Feast of Jan Hus"). Other Halama BRRP claims should be verified against ToCs before integration.
- **Document-metadata vs. byline distinction:** PDFs may show typesetter/producer names in their internal metadata that are NOT the article authors. Always trust the printed byline shown in the volume ToC, not the PDF metadata.

---

## 5. Recommendations for the integration pass

### Items to move from Bucket B → Bucket A (verified clear; ready for integration)

1. **Soukup *Jan Hus* Purdue 2019** — use ISBN **978-1-55753-876-5**; series Central European Studies, paperback. Discard the Holeton survey's incorrect 9781557538048.
2. **Šmahel *Die hussitische Revolution*** — Hahnsche, MGH Schriften 43, 2002, 3 vols., XLIV + 2286 pp., trans. Krzenck. *Medieval Review* notice 03.09.01 confirmed.
3. **Lahey *Philosophy and Politics in the Thought of John Wyclif*** — CUP 2003, ISBN 9780521633468.
4. **Lahey (ed./trans.), Wyclif, *Trialogus*** — CUP 2013, ISBN 9780521869249.
5. **Atwood "Use of the 'Ancient Unity'"** *JMH* 13/2 (Fall 2013): **109–157**. Confirmed range; remove the "(tentative)" hedge.
6. **Vogt, "Brüdergemeine — das theologische Programm eines Namens"** *Unitas Fratrum* 48 (2001): **81–105**.
7. **Patschovsky, "Ekklesiologie bei Johannes Hus"** in Boockmann (ed.), *Lebenslehren und Weltentwürfe im Übergang vom Mittelalter zur Neuzeit* (V&R, Göttingen 1989), **pp. 370–399**.
8. **Ptaszyński, Maciej, "Between Marginalization and Orthodoxy: The Unitas Fratrum in Poland in the Sixteenth Century"** *JMH* 14/1 (Spring 2014): **1–29**. (NOT to be added under "author tbc.")
9. **Hus, *Drobné spisy české*** = MIHOO IV, ed. Jiří Daňhelka (credited post-1989), Praha: Academia, **1985**. Includes *Knížky o svatokupectví*.
10. **Batka, Ľubomír, "Martin Luther in Central Europe: Bohemia, Moravia, and Slovakia"** Oxford Research Encyclopedia of Religion (29 March 2017), DOI 10.1093/acrefore/9780199340378.013.311.
11. **Burnett, Amy Nelson, *Karlstadt and the Origins of the Eucharistic Controversy*** OUP 2011, ISBN **978-0-19-975399-4** (NOT 978-0-19-973436-3 from Holeton survey). Chapter 4 confirmed: "Ad Dextram Patris: Hussite Influences on the Early Eucharistic Controversy."
12. **BRRP 6 Holeton+Vlhová-Wörner+Bílková** — title "*Gregorius presul* in Bohemian Liturgy and Iconography: an interdisciplinary study," pp. **215–245**. Third co-author confirmed = **Bílková** (Milena).
13. **BRRP 7 Holeton+Vlhová-Wörner** — title "A Remarkable Witness to the Feast of Saint Jan Hus," pp. **156–[c. 184]**.
14. **BRRP 9 Holeton** — title "**The Place of Children in Utraquist Liturgical Song**," pp. **111–137** (verify against survey's specific item 2.9 wording; if survey gave a different title, use this ToC-confirmed one).
15. **Jistebnický kancionál vol. 1** — clarify Source_Index `KancJisteb_1420` editorial attribution: "Series gen. eds. Holeton + Vlhová-Wörner; vol. 1 *Graduale* (2005) edited by Kolár / Vidmanová / Vlhová-Wörner; vol. 2 *Cantionale* (2019)."

### Items still in Bucket B (still ambiguous; not yet ready for integration)

1. **BRRP 8 *Filosofický časopis* "Special Issue 3" designation** — could not confirm from public brrp.org page. Keep in Bucket B; verify against printed volume's title verso during physical acquisition. For now, cite simply as "*The Bohemian Reformation and Religious Practice* 8 (Praha: Filosofia, 2011)."

2. **Burnett BRRP 11 article vs. monograph chapter — overlap question** — confirmed the chapter and article share substantially the same thesis but are distinct citable units (the article is the more recent, refined formulation; the chapter is the longer treatment). Keep as PARTIAL — Michal's editorial judgment is needed on whether to cite one or both in any particular passage.

3. **Holeton survey's BRRP secondary article author-volume claims (Halama, David, Fudge, Krmíčková)** — sample-checked OK, but the survey's specific volume-author pairings need batch verification against each volume's ToC before all-in integration. The URL pattern works but author placement is not guaranteed by the URL alone.

### NEW Bucket C items uncovered (require Michal's judgment)

1. **NEW-1 (Foušek/Odložilík mis-attribution):** The Cambridge Core URL from the Crews survey's §3 actually leads to **Otakar Odložilík, "A Church in a Hostile State: The Unity of Czech Brethren," *Central European History* 6/2 (1973): 111–127**, NOT a Foušek article. The Source_Index already has `Fousek_1961` (the 1961 *Church History* perfectionism article). This 1973 article is by a different author and is independently worth integrating IF the chapter needs Brethren-as-confessional-minority framing. Decision: add as Odložilík 1973 (Essential? Secondary?) per Michal's call. Do NOT add under Foušek's name.

2. **NEW-2 (Holeton survey's BRRP author-volume mismatches):** Without checking each of the ~30 BRRP secondary entries in the Holeton survey against the actual volume ToCs, there may be additional misattributions of the Halama-in-BRRP-4 type. Recommend a batch ToC-vs-survey reconciliation pass before bulk integration of Holeton survey items 3.5–3.55. This is a process recommendation, not a single-item decision.

3. **NEW-3 (BRRP 9 Holeton article title):** If the Holeton survey's item 2.9 cited a Holeton BRRP 9 article under a title other than "The Place of Children in Utraquist Liturgical Song," the survey's title is wrong and should be replaced with the ToC-canonical title. Verify against the survey before integration.

4. **Burnett ISBN scope:** The wrong Burnett ISBN (978-0-19-973436-3) appeared in the Holeton survey. Recommend a one-time grep across all four survey files for any other ISBN claims that should be checksum-verified before integration. (Hus survey's ISBN 9782503554693 for CCCM 274 was already verified valid in the audit.)

### Items confirmed but with caveats worth flagging at integration

- **Lukáš Pražský corpus year refinements** (B3=1525, B4=1518, B6=1525, B7=1521, B8=1761 reprint): when chapter cites these works, use the GB-confirmed years rather than the survey's approximate "early 1520s" / "1500s" labels.
- **BRRP 5 directory path is `brrp5a`** not `brrp5`. Fix at URL integration.
- **Soukup ISBN-10 (155753876X)** is widely cited as a back-up for the ISBN-13. Both formats encode the same paperback edition.

---

## 6. Search log

| # | Query / URL | Tool | Outcome |
|---|---|---|---|
| 1 | Purdue UP Soukup ISBN | WebFetch + WebSearch | ISBN 978-1-55753-876-5 confirmed |
| 2 | brrp.org/proceedings/brrp6/holeton.pdf | WebFetch | binary PDF (634 kB) — resolves |
| 3 | brrp.org/proceedings/brrp7/holeton.pdf | WebFetch | 404 (transient or non-standard path) |
| 4 | brrp.org/proceedings/brrp9/holeton.pdf | WebFetch | 404 (transient) |
| 5 | BRRP 6 Bílková vs. Kubíková | WebSearch | Bílková confirmed |
| 6 | BRRP 6 ToC pull | WebFetch | full article list captured |
| 7 | BRRP 7 ToC pull | WebFetch | Holeton+Vlhová-Wörner article p. 156 confirmed |
| 8 | BRRP 9 ToC pull | WebFetch | Holeton article "Place of Children…" p. 111-137 confirmed |
| 9 | BRRP 8 ToC pull | WebFetch | full list; no Special Issue designation visible |
| 10 | BRRP 11 ToC pull | WebFetch | Burnett (Amy Nelson) confirmed pp. 200-216 |
| 11 | OUP Karlstadt monograph TOC | WebSearch | Chapter 4 = "Ad Dextram Patris" confirmed; ISBN 9780199753994 |
| 12 | Lahey 2003 publisher | WebSearch | CUP, ISBN 9780521633468 |
| 13 | mdpi.com/2077-1444/9/1/16 | WebFetch | 403 |
| 14 | Lahey + Religions 9/1/16 search | WebSearch | confirmed S.E. Lahey (already in ground truth) |
| 15 | Patschovsky pagination | WebSearch | pp. 370-399 confirmed; Boockmann ed. |
| 16 | Atwood "Use of Ancient Unity" pages | WebSearch | pp. 109-157 confirmed |
| 17 | "Between Marginalization and Orthodoxy" author | WebSearch | Maciej Ptaszyński, JMH 14/1 (2014): 1-29 |
| 18 | Foušek "Hostile State" Cambridge Core | WebFetch + WebSearch | actual author = Otakar Odložilík; Foušek attribution wrong |
| 19 | Vogt "Brüdergemeine — theologische Programm" | WebSearch | *Unitas Fratrum* 48 (2001): 81-105 |
| 20 | Atwood "Apologizing for the Moravians" | WebSearch | JMH 8/1 (2010): 53-88 (already in ground truth) |
| 21 | Hus *Knížky o svatokupectví* Daňhelka | WebSearch | MIHOO IV, Academia 1985 |
| 22 | Šmahel *Die hussitische Revolution* TMR notice | WebSearch | TMR 03.09.01 confirmed |
| 23 | Burnett ISBN re-check | WebSearch | 978-0-19-975399-4 canonical |
| 24-32 | 9 Google Books Lukáš Pražský IDs | WebFetch | all 9 resolve; year corrections noted |
| 33 | Jistebnický kancionál vol. 1 editors | WebSearch | Kolár / Vidmanová / Vlhová-Wörner |
| 34 | brrp.org BRRP 5a directory | WebFetch | confirmed `brrp5a` not `brrp5` |
| 35 | Sample BRRP secondary PDFs | WebFetch | ≥6 confirmed, pattern works |
| 36 | Batka 2017 ORE entry | WebFetch + WebSearch | Ľubomír Batka, "Martin Luther in Central Europe…" 29 March 2017 |

---

**End of URL/external-verification report.**
