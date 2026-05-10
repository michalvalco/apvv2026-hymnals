# Revision Notes — TEPALIT Valčo Chapter

**Created:** 2026-03-24

Track issues discovered during work that need attention in later revision passes.

---

## Standing Issues

### Citation Verification Required
- All AI-generated research reports (ChatGPT Reports 01–03, Gemini reports, Claude reports) in the admin resources folder contain potentially fabricated citations. **Every citation must be verified against primary or reputable secondary sources before use.** Treat as heuristic guides, not citable material.

### Scope Boundaries (to confirm with PI)
- Depth of musical/melodic analysis — Michal's focus is dogmatic/textual; Sekelská covers musicological dimension
- Language of final chapter (Slovak vs. English)
- Relationship to other team members' chapters — avoid overlap, ensure complementarity

---

## Issues Log

*Add entries as they arise during work:*

| Date | Section | Issue | Priority | Status |
|---|---|---|---|---|
| 2026-03-24 | General | AI report citations need full verification | High | Open |
| 2026-03-24 | §5 | Need concrete hymn pairs (Brethren → CS) identified via HTB | High | Open |
| 2026-03-24 | §4.1 | ~~Agenda Česká 1581 scans need transcription for Eucharistic rite analysis~~ | ~~Medium~~ | **Resolved** — Benka 2024 (MLS X) provides full critical edition with apparatus. Mass rite: ed. pp. 131–150. |
| 2026-03-24 | §4.1 | Benka 2024 observes moderate Eucharistic language in Ag. Česká vs. harder formulations in Bystrická agenda — exploit this spectrum for *lex orandi* argument | High | **In progress** — detailed analysis completed, see `Analysis_Eucharistic_Rite_AgCeska.md` |
| 2026-03-24 | §4.1 | **Central finding:** Agenda Česká admonition glosses "this is my body" in functional-testimonial terms ("for certain proof and testimony"), not metaphysical-ontological. Compatible with Lutheran real presence but does not require it. Absence of FC VII distinctives (manducatio impiorum, "in/with/under") documented. | High | Open — needs comparative verification against FC VII, Confessio Fidei 1535, and Confessio Bohemica |
| 2026-03-24 | §4.1 | ~~Need FC VII text (especially SD VII) for side-by-side comparison with Agenda Česká formulations~~ | ~~High~~ | **Resolved** — FC SD VII freely available at [bookofconcord.org](https://bookofconcord.org/formula-of-concord-solid-declaration/article-vii/) (Triglot: EN+DE+LA). BSELK 1930 on Archive.org for critical text. |
| 2026-03-24 | §4.1 | ~~Need Confessio Fidei 1535 Eucharistic articles for Unity comparison~~ | ~~High~~ | **Resolved** — [EN trans. PDF (Moravian Archives)](https://moravianarchives.org/wp-content/uploads/2025/07/Confession-1535-1st-ed.pdf) freely available. LA 1564 ed. on Archive.org. |
| 2026-03-24 | §4.1 | ~~Need Confessio Bohemica 1575 Eucharistic articles — does it show the same broad register?~~ | ~~High~~ | **Resolved** — [EN trans. PDF (Moravian Archives)](https://www.moravianarchives.org/images/pdfs/Bohemian%20Confession,%201575.pdf) freely available. CZ original digitised at Kramerius AV ČR. |
| 2026-03-24 | §4.1/§5 | CS "O Wečeří Páně" hymns need reading — does Tranovský's hymnodic language show confessional sharpening vs. Agenda Česká? | High | Open |
| 2026-03-24 | §5 | GresovaSek_2023 is musicological, not theological — we need to do the textual-theological analysis of CS hymns ourselves. Her dissertation (2020) may have more source identifications. | Medium | Open |
| 2026-03-24 | §5 | Třanovský used Calvinist metric melodies (French psalm tunes) for his new texts — interesting tension: confessionally "foreign" melodies with Lutheran texts. Worth a paragraph in §5. | Low | Open |
| 2026-03-24 | General | Grešová-Sekelská's dissertation (FiF UK 2020) — full CS hymn inventory with ~30 Bohemian melodic source identifications. Try to acquire via UK Bratislava library or request from author. | Medium | Open |
| 2026-03-24 | General | ~~Benka 2024 is CC BY-SA 4.0 — freely citable. Confirm licence status for all other sources.~~ | ~~Low~~ | **Resolved** — CC BY-SA 4.0 confirmed in `Benka_2024.md`. Licence review for other sources remains a standing task. |

---

## Source Acquisition Strategy (Phase 2)

Sources currently lacking access/location info — prioritised by section relevance:

### High Priority (needed for §3–§4 core analysis)
| Source | Short ID | Acquisition Path | Status |
|---|---|---|---|
| Confessio Heptapolitana (1559) | `ConfHeptapol_1559` | **Critical ed.: Csepregi & Kónya, [*Tri lutherské vyznania*](https://docplayer.hu/46716880-Tri-lutherske-vyznania-viery-z-uhorska-harom-lutheri-hitvallas-magyarorszagon-drei-lutherische-glaubensbekenntnisse-aus-ungarn.html)** (ETF UK BA); also Reu (1930) on Archive.org; MSS at OSzK Budapest | **Located** (critical ed.) |
| Confessio Scepusiana (1569) | `ConfScepus_1569` | **Same critical ed.** ([*Tri lutherské vyznania*](https://docplayer.hu/46716880-Tri-lutherske-vyznania-viery-z-uhorska-harom-lutheri-hitvallas-magyarorszagon-drei-lutherische-glaubensbekenntnisse-aus-ungarn.html)); also Reu (1930); Spišský archív Levoča | **Located** (critical ed.) |
| Jan Hus: De ecclesia (1413) | `Hus_DeEccl_1413` | [Latin critical ed.](https://archive.org/details/tractatusdeeccle0000husj) + [EN trans.](https://archive.org/details/deecclesiachurch00husjuoft) on Archive.org; [Wikisource EN](https://en.wikisource.org/wiki/De_Ecclesia._The_Church) | **Fully accessible** |
| Jakoubek ze Stříbra: Eucharistic writings | `Jakoubek_Euch` | [Manuscriptorium author page](https://www.manuscriptorium.com/cs/taxonomy/term/81); MS Wrocław BU I Q 278; BRRP open-access proceedings: [Holeton](http://brrp.org/proceedings/brrp1/holeton.pdf), [Burnett](https://brrp.org/proceedings/brrp11/burnett.pdf) | **Located** (MSS + secondary) |
| Lukáš Pražský: Sacramental writings | `LukasPrazsky_Sviat` | [*O obnovení* digitised on Manuscriptorium](https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-NKCR__XVII_E_31___4CB2T51-cs); sacramental treatises undigitised; cf. Crews, *JMH* 18/1 (2018) | **Partial** (one MS digitised) |
| Acta Unitatis Fratrum | `ActaUF` | 14 vols **digitised since 2017** at [badatelna.eu/fond/1014](http://www.badatelna.eu/fond/1014/inventar/); [Unitätsarchiv Herrnhut](https://www.unitaetsarchiv.de/en/research-1/manuscripts-and-library); critical edition in progress at [hiu.cas.cz](https://www.hiu.cas.cz/aktuality/mezinarodni-edicni-projekt-acta-unitatis-fratrum-akta-jednoty-bratrske) | **Fully digitised** |

### Medium Priority (needed for §2 context, §5 transfer)
| Source | Short ID | Acquisition Path | Status |
|---|---|---|---|
| Four Articles of Prague (1420) | `ArtPrag_1420` | Czech/Latin text in [Palacký, *Archiv český* III (1844)](https://ndk.cz/view/uuid:94221e80-8dd3-11e8-9588-5ef3fc9bb22f); EN: Veverková & Franklin (2021) | **Located** |
| Slovak Lutheran Agendas | `AgendySlov` | [Cantus.sk — Bardejov](https://cantus.sk/archive/5); ŠA Prešov — Archív Bardejov; ECAV ústredný archív; Lyceálna knižnica BA | **Archival** (undigitised) |

### Database Verification (tested 2026-03-24)

**Hymnorum Thesaurus Bohemicus** (http://www.clavmon.cz/htb/)
- [x] Accessible via browser (blocks automated/programmatic requests — 403)
- **Content:** Metadata database (not full-text scans) — **21,227 catalogue entries** covering all printed Czech kancionál production 1501–late 18th c. Converted from Antonín Škarka's handwritten catalogue cards.
- **Search:** Two modes: (1) by textual incipit, (2) browse full contents of individual kancionáls. Cross-referencing concordances across hymnbooks.
- **Metadata fields (10):** Incipit, Source (kancionál + year + page), Title/designation, Melody, Theme/section, Number of stanzas, Strophic form, Acrostic, Original/translation/arrangement, Author/translator
- **Relevance:** HIGHEST — directly covers our period and sources. Use for tracing concordances across confessional boundaries (Brethren → CS). Administered by Jiří Žurek (see official contact information on the database website).
- **Limitations:** No full hymn texts (incipits + metadata only). No page scans (except Jesličky 1658 facsimile). Czech-only interface.

**Manuscriptorium** (https://www.manuscriptorium.com/)
- [x] Accessible via browser (new version since October 2025; old links redirect)
- **Content:** 400,000 descriptive records, 110,000 digitised documents (manuscripts, incunabula, early prints to c. 1800). 139 content partners across 24 countries.
- **Search:** Keyword search, advanced filters, personal digital library (save searches, create collections, annotations). Czech + English interface.
- **Specific finds:** Jistebnický kancionál has dedicated page with digitised virtual document (MS Praha, KNM, II C 7, c. 1430). Also found: Utraquist gradual + kancionál from Teplice (1560/1566) — relevant to §4; [*Písně duchovní evangelistské* (1572, Ivančice Brethren press)](https://www.manuscriptorium.com/en/node/5216) at Městské muzeum Polička — illuminated, relevant to §3.3/§5.
- **Relevance:** HIGH — essential for manuscript sources. Jistebnický kancionál directly accessible.
- **Limitations:** October 2025 version transition may break older links in scholarship. Registration required for some features.

**Kramerius MZK** (https://kramerius.mzk.cz/)
- [x] Accessible via browser. 50M+ scanned pages, 199,000+ documents.
- **Content:** Digitised page scans with OCR full text. Books, newspapers, archival docs, manuscripts, maps, music.
- **Search:** Main search with autocomplete, filters (type, author, keywords, geography, collections, language), full-text search *within* documents, sorting by relevance/date.
- **Specific finds:** Cithara Sanctorum digitised copy exists (UUID: 48fe9d67-5625-11e1-1726-001143e3f55c). Access to full scans may require Czech library registration.
- **Relevance:** MODERATE-HIGH — CS scans for §5; in-document full-text search useful for theological terms.
- **Limitations:** Out-of-commerce works require library registration; remote registration only for Czech residents/students. On-premises access at participating libraries otherwise.

**Kramerius NKP** (https://kramerius.nkp.cz/)
- [x] Accessible via browser. 8M+ scanned pages. Two interfaces: v.3 (frozen 2012, periodicals/monographs 19th–20th c.) and v.5 (modern, National Digital Library).
- **Content:** Primarily post-1800 bohemical production. Pre-1800 materials routed to Manuscriptorium.
- **Specific finds:** Confessio Bohemica (1579/1609) catalogued in NKP collections but direct Kramerius links not confirmed — check Manuscriptorium instead.
- **Relevance:** MODERATE — mainly 19th c. secondary literature and later reprints.
- **Limitations:** Same access restrictions as MZK. v.3/v.5 split can be confusing.

**Practical note:** All four databases block programmatic access (403). All research must be done manually via browser. If based in Slovakia, consider whether your institution participates in Czech library network, or plan research visits to MZK Brno / NKP Prague. **Tip:** Use [digitalniknihovna.cz](https://www.digitalniknihovna.cz/) as a federated search across all Czech Kramerius instances simultaneously — better discoverability than searching MZK/NKP individually (Kramerius internal pages are poorly indexed by external search engines).

### Notes
- Luther WA volumes: [external master index with links to Archive.org scans of all volumes](http://www.lutherdansk.dk/WA/D.%20Martin%20Luthers%20Werke,%20Weimarer%20Ausgabe%20-%20WA.htm). Formula Missae = WA 12, Deutsche Messe = WA 19, De captivitate = WA 6. Also: [Project Wittenberg](https://www.projectwittenberg.org/pub/resources/text/wittenberg/wittenberg-luther.html) for selected EN translations.
- `GresovaSek_2020` dissertation: Michal to acquire via UK Bratislava library or request from author directly

---

*Updated during revision passes (Pass A: argument, Pass B: citations, Pass C: prose/voice, Pass D: structure).*


---

## Literature Search Results (2026-03-24, Claude Desktop session)

Full report: `resources/literature-search-2026-03-24.md` — 37 sources across 5 categories.

### Key additions to secondary literature
| Source | Priority | Status |
|---|---|---|
| Schoen 2022 (*QuFRG 100*) — Utraquist Konfessionsbildung | **CRITICAL** | Identified; €168; **must acquire** |
| Brown 2005 (*Singing the Gospel*) — methodological model | HIGH | Available (Harvard UP, widely in print) |
| Wandel 2014 (*Companion to Eucharist*) — Eucharistic framework | HIGH | Check institutional Brill access |
| Kouba 2017 (*Slovník staročeských hymnografů*) — hymn provenance | HIGH | Etnologický ústav AV ČR; check availability |
| GresovaSek 2016 ("Inšpiračné zdroje") | HIGH | Acquire from Muzikologické fórum |
| GresovaSek 2019 ("De Cultu Sanctorum") | DONE | PDF acquired, processed, notes written |
| Graham 2006 (Utraquist Mass evolution) | HIGH | JSTOR |
| Malura 2019 (German Ref. & Czech hymnbooks) | HIGH | De Gruyter (DOI available) |
| Haberkern 2023 (Confessio Bohemica archaeology) | HIGH | Taylor & Francis |
| Just/Rothkegel 2012 (CB critical edition) | HIGH | Paywalled (Neukirchener) |

### Challenges to thesis identified in literature search
See `resources/literature-search-2026-03-24.md` §"Synthesis: Challenges to the Thesis" for full analysis. Three counter-pressures:
1. **Irenic counter-narrative** (Haberkern, David): CB 1575 as genuine compromise, not Lutheran takeover
2. **Liturgical persistence** (Graham, Holeton): No Lutheran influence on Utraquist Mass even into 17th c.
3. **Schoen's confessionalisation model**: Utraquism as active agent, not passive recipient

### Schoen 2022 — repositioning effect
Detailed reference file: `resources/notes-Schoen-2022-Utraquismus.md`. Key implication: David becomes one strand, not the whole story. Schoen's periodisation (Vorphase → Phase I → Phase II → 1609) provides the conceptual grid for our §2 and §3.2.


### File organisation note
The `resources/notes-*.md` files (Schoen, Sekelská 2019) use a briefing-document format, while `Sources/*.md` files use the project source-note template. Both are functional. The `resources/` notes serve as detailed reference files; `Sources/` entries are the canonical documentation. When time allows, key data from `resources/notes-*` should be migrated into `Sources/` template entries. Not urgent — the information is captured and cross-referenced in Source_Index.


---

## Session Log: 2026-03-24 (Claude Desktop, afternoon session)

### Completed
1. **Sekelská 2019 ("De Cultu Sanctorum") — processed.** Full text extracted, structured note written at `resources/notes-Sekelska-2019-DeCultuSanctorum.md`. Key finding: named Utraquist + Brethren hymn sources entering CS; Tranovský's theological filtering visible in Christocentric redirection (SYN in majuscule) and preface argumentation.

2. **Schoen 2022 (*Der böhmische Utraquismus als Konfession*) — detailed reference file.** At `resources/notes-Schoen-2022-Utraquismus.md`. Integrates publisher data, TOC, five core theses, historiographical repositioning of David/Haberkern/older Czech scholarship, deployment guide for §§2–5, critical questions. **Book not yet acquired — €168, QuFRG Bd. 100, Gütersloher Verlagshaus.**

3. **Three-column Eucharistic comparison — MAJOR ANALYTICAL OUTPUT.** At `Sources/Analysis_Eucharistic_ThreeColumn.md`. Compared FC SD VII (1577), ConfFidei 1535 Art. 13, and CB 1575 Art. XV (from Czech PDF uploaded by Michal).
   - **Bombshell finding:** CB 1575 uses formula "duchovně i podstatně, věrou i také ústy" = "spiritually AND substantially, by faith AND ALSO by mouth." This is NOT the "Calvinist interpretation" (contra Britannica). It's a deliberate bridging formula closer to FC SD VII than to Calvin.
   - **Sharpest divergence:** Manducatio impiorum — affirmed in FC SD VII, absent from both ConfFidei 1535 and CB 1575. This is the confessional fault line.
   - **Testable hypothesis for §5:** Do CS Eucharistic hymns stay in the CB's irenic register or sharpen toward FC SD VII's precision? If sharpened, that IS the "Lutheranisation."

4. **Brown 2005 (*Singing the Gospel*) — detailed reference file.** At `resources/notes-Brown-2005-SingingTheGospel.md`. Confirmed as closest methodological precedent. Key finding: Brown has NOT been cited in Czech/Slovak hymnological scholarship — our chapter genuinely bridges two independent scholarly conversations.

5. **Source_Index.md updated** with 9 new secondary sources from literature search.
6. **Revision_Notes.md updated** with literature search results summary and Schoen repositioning note.

### New files created this session
- `resources/notes-Sekelska-2019-DeCultuSanctorum.md` (6.6 KB)
- `resources/notes-Schoen-2022-Utraquismus.md` (13.6 KB)
- `resources/notes-Brown-2005-SingingTheGospel.md` (~12 KB)
- `Sources/Analysis_Eucharistic_ThreeColumn.md` (~10 KB)
- `resources/literature-search-2026-03-24.md` (23.9 KB) [from earlier in session]

### Next session priorities
1. **Digital source hunt:** Open the annotation document (`Valčo - Dogmatická komparácia... - Anotácia a osnova 02.docx`) and systematically search for downloadable primary sources (hymnals, agendas, devotional material). Start with Kramerius, Manuscriptorium, HTB.
2. **Acquire Schoen 2022** (€168) — interlibrary loan or institutional purchase.
3. **First hymn-pair comparison:** Pick one hymn Sekelská identified as Brethren-origin in CS and compare the two versions. This is the make-or-break evidence for the thesis.
4. **Complete CB 1575 column** in the three-column analysis — verify "duchovně i podstatně" against Just/Rothkegel 2012 if acquired.


---

## Session Log: 2026-03-24 (Claude Desktop, Phase 2 Audit + Source Hunt)

### Completed

1. **Legacy materials audit** — full report at `resources/audit-legacy-materials-2026-03-24.md`. Read and processed:
   - All 9 AI reports (ChatGPT/Claude/Gemini × 3 topics + 2 generals)
   - Annotation document (v02) with complete source list
   - Comparative hymnological strategy document
   - Compass artifact (ecclesiology)
   
   **Key findings:**
   - 8 new primary sources identified for Source_Index (§VI)
   - 4 high-priority secondary sources identified (Daniel, Haan, Mocko, Basicova)
   - 4 specific hymn leads extracted for verification (incl. "Jezu Kriste, jenž zajisté" as potential Eucharistic test case)
   - 10 analytical angles catalogued from AI reports, with reliability assessments
   - ChatGPT Report 03's fabricated "Table 1" and Gemini Report 03's "reconstructed" stanza texts flagged as hallucinated
   - "Brabcová (2016)" flagged as likely non-existent scholar

2. **Digital source hunt** — full report at `resources/digital-source-hunt-2026-03-24.md`. Searched Kramerius, Manuscriptorium, Archive.org, Google Books, e-rara, REAL-R.
   
   **Confirmed accessible:**
   - Weiße 1531/1544 on e-rara.ch (German Brethren hymnal)
   - Ivančický kancionál 1572 ed. on Manuscriptorium (Polička)
   - Mladějovská 2008 dissertation (745-song catalogue) on MUNI
   - Daniel (Slovak Reformation) and Mocko (Slovak hymn history) — free PDFs
   - All previously confirmed sources remain accessible (Moravian Archives EN translations, Book of Concord, WA, etc.)
   
   **Confirmed NOT digitised:**
   - Šamotulský kancionál 1561 (HTB metadata only)
   - Prvý kancionál 1501 (possibly lost entirely)
   - Rohov kancionál 1541
   - Agenda Rambachiana 1637
   - Haan 1873 (Google Books metadata only)
   
   **Needs browser verification:**
   - Kramerius MZK CS UUID and REAL-R CS entry
   - Kramerius VKOL Bratská agenda 1585
   - Kramerius MZK Ivančický kancionál 1564

3. **Source_Index.md updated** with 8 new primary sources (§VI) and 4 new secondary sources (§VII), plus digital access notes.

### New files created this session
- `resources/audit-legacy-materials-2026-03-24.md` (~8 KB)
- `resources/digital-source-hunt-2026-03-24.md` (~7 KB)

### Next session priorities
1. **Browser verification** of Kramerius/REAL-R/Manuscriptorium links (Michal must do this manually)
2. **HTB concordance work:** Begin matching CS incipits against Brethren kancionál entries via HTB browser interface
3. **First hymn-pair comparison:** Use "Jezu Kriste, jenž zajisté" lead from ChatGPT R03 — verify in HTB, locate in 1572 Polička digitisation
4. **Acquire** Schoen 2022 (€168), GresovaSek 2016, GresovaSek 2020 dissertation
5. **Download** Mladějovská 2008 dissertation for concordance reference


---

## Session Log: 2026-05-10 (Claude Desktop, David Corpus Integration + §IX.D Source Hunt)

### Completed

1. **David BRRP trilogy integrated as `David_Corpus.md`.** Three full PDFs in `resources/` (Cohabitation, Roman Curia/RCC, Integrity) plus the 1999 *Church History* article (apparatus only) treated as integrated corpus. Created `Sources/David_Corpus.md` (~290 lines): Citation, Summary, Key Arguments (5 subsections), Notable Quotes (10 verified), Relation to TEPALIT (per locus), Cross-References, Verification Status, Methodological Note. **Major thesis impact:** the corpus REVERSES the Phase 1 framing of David as "potential challenge to Lutheranisation thesis" — full corpus actually STRENGTHENS the thesis by hardening the confessional boundary that hymn transfer crosses (denial of "Neo-Utraquism" makes the boundary real rather than gradient).

2. **BRRP citation verification completed via brrp.org TOCs.**
   - "A Cohabitation of Convenience": BRRP 3 (1998 conf., pub. 2000), pp. 173–214 ✓
   - "The Utraquists and the Roman Catholic Church, 1575–1609: Institutional Aspects": BRRP 4 (2000 conf., pub. 2002), pp. 225–260 ✓ (note: local PDF carries the offprint title "Roman Curia"; published title is "Roman Catholic Church")
   - "The Integrity of the Utraquist Church and Neo-Utraquism": BRRP 5/2 (2002 conf., pub. 2005), pp. 329–352 ✓

3. **Source_Index.md §IX merge — full audit-trail integration.** Added Section IX (~92 lines): IX.A (4 cross-referenced David works); IX.B (16 late-Utraquist printed witnesses surfaced from David's apparatus); IX.C (3 trans-confessional documents); IX.D (9 foundational Czech historiography items); IX.E (cross-refs to existing entries); IX.F (pending decisions). Two existing `David_1999` and `David_MiddleWay` stubs in §V upgraded to full citations.

4. **Audit pass with 5 corrections applied** (~23 spot-checks against PDFs, all confirmed):
   - `David_Welcome_2001` page range corrected: 74–104 → 74–84 (per Integrity p. 4 fn. 11)
   - Title-correction note in `David_Corpus.md` reframed: removed unverified claim that "Cohabitation fn. 93" calls the BRRP 4 article "Roman Curia"; the related Notre Dame conference paper "The Coming Tragedy of Confessionalisation" (cited in Integrity p. 6 fn. 20 as forthcoming 2002) may be a separate piece — flagged for follow-up at §IX.F item 6
   - `David_Bydzovsky_1996` entry now flags page-range variance (42–53 in 1999 fn. 124 vs 59–63 in Cohabitation fn. 21)
   - §IX.F item 4 short-ID corrected: `David_StrangeFate_1995_JEH` → `David_1995_JEH` (matches existing §VIII.C entry)
   - §IX.F item 1 verified: Zdeněk Václav David's death confirmed via [Dignity Memorial obituary](https://www.dignitymemorial.com/obituaries/alexandria-va/zdenek-david-12668596) — born 4 May 1931 Blatná; died 15 December 2025 Alexandria, VA; 50 years at Wilson Center; Palacký Medal Czech Academy of Sciences 2009; deeply religious Roman Catholic.

5. **§IX.D digital-source-hunt — access confirmed.** Both Matoušek 1931 (ČČH 37) and Hrubý 1939 (ČČH 45) confirmed open-access at KNAV Kramerius — periodical UUID `9da3b368-45b9-11e1-a671-005056a60003`. Per rukovet.cms.flu.cas.cz/detail/13/: "volně dostupných je v Digitální knihovně prvních 50 [ročníků]" — both target volumes within the open-access range. Direct article-level URLs require browser navigation through the JS-rendered Kramerius interface (5–10 min each); programmatic extraction not possible. Hrubý 1939 also indexed at biblio.hiu.cas.cz record `34529fff-df2e-45de-89e4-cb352dd6efc1`.

6. **Major biographical discoveries — both authors are scholar-victims of the Nazi era.**
   - **Josef Matoušek** (13 Jan 1906, Hořice – 17 Nov 1939, Prague): student of Josef Šusta, specialist in Reformation/Counter-Reformation; *executed by the Gestapo without trial on 17 November 1939* during the post-Opletal arrests at Charles University, where he was a docent. Wrote the 1931 article at age 25.
   - **František Hrubý** (21 Aug 1887, Strukov – 10 Feb 1943, Brno): Pekař's assistant 1912–1915; Director Moravian Land Archive 1927–1937; Professor Masaryk University 1937–1943; *editor of ČČH from 1936*. The 1939 article appeared in the journal Hrubý himself was editing. Died in occupied Brno 1943; posthumous *Étudiants tchèques aux écoles protestantes...* edition published 1970 by daughter Libuše Urbánková-Hrubá.
   
   That the foundational Czech-language apparatus on the late-Utraquist question is the work of two scholars who paid for their scholarly independence with their lives is itself a fact worth marking in the chapter's framing.

7. **Two source notes drafted:**
   - `Sources/Hruby_1939.md` (75 lines) — based on PDF in `resources/` (image-only, no OCR text layer; manual transcription required for direct quotation), David's three apparatus citations in `David_Integrity_2005`, and verified biographical context.
   - `Sources/Matousek_1931.md` (89 lines) — scaffolded entirely from David's apparatus (>20 citations across the four BRRP articles) and biographical context. PDF not yet acquired; all article-content claims explicitly flagged as reconstructed from David's apparatus until primary verification.
   
   Both notes follow `_Source_Template.md` structure with explicit Verification Status sections and Next Steps blocks.

### New files created this session

- `Sources/David_Corpus.md` (~290 lines)
- `Sources/Hruby_1939.md` (75 lines)
- `Sources/Matousek_1931.md` (89 lines)

### Files updated this session

- `Sources/Source_Index.md` — header updated, two §V David stubs upgraded to full citations, Section IX appended (~92 lines), 5 audit corrections applied, §IX.D Matoušek + Hrubý entries upgraded with biographical context and access info, both flagged 📝 with source-note links

### Issues / open items added to backlog

| Date | Section | Issue | Priority | Status |
|---|---|---|---|---|
| 2026-05-10 | §IX.F.1 | Acquire `David_1999` (Church History) via ILL — David's surviving collaborators no longer reachable (Z. V. David died 15 Dec 2025) | Medium | Open |
| 2026-05-10 | §IX.D | Browser session at kramerius.lib.cas.cz to capture article-level URLs for Matoušek 1931 (vol. 37) and Hrubý 1939 (vol. 45) | High | Open |
| 2026-05-10 | §IX.D | OCR or manual transcription of `resources/Frantisek Hruby - Luterství a novoutrakvismus...pdf` (image-only); use Tesseract `ces` model or ABBYY FineReader | High | Open |
| 2026-05-10 | §IX.D | Acquire Matoušek 1931 PDF from KNAV Kramerius and update `Sources/Matousek_1931.md` with verified content (move status 📝 → 📖) | High | Open |
| 2026-05-10 | §IX.B | 16 late-Utraquist printed witnesses (Bydžovský 1541, Štelcar Želetavský 1592, Bruncvík 1613, Šturm 1584, Polon 1589, etc.) — digital-source-hunt session needed (Kramerius NK ČR + Manuscriptorium + Google Books) | Medium | Open |
| 2026-05-10 | §IX.F.6 | BRRP 4 article title puzzle: relationship between published BRRP 4 piece ("Institutional Aspects") and the Notre Dame conference paper "The Coming Tragedy of Confessionalisation" (Integrity p. 6 fn. 20) | Low | Open |

### Next session priorities

1. **Browser session at kramerius.lib.cas.cz** (10–15 min): capture article-level URLs for ČČH vols 37 (1931) and 45 (1939). Both freely accessible — the only blocker is the JS-rendered interface.
2. **OCR or manual transcription** of `resources/Frantisek Hruby - Luterství a novoutrakvismus...pdf`. Once readable, populate the "Notable Quotes" section of `Sources/Hruby_1939.md` and verify the three David-cited locations.
3. **Acquire Matoušek 1931 PDF** from the same Kramerius browser session and update `Sources/Matousek_1931.md` with verified content. First-reading priorities flagged in the source note.
4. **§IX.B late-Utraquist printed witnesses hunt** (high-priority items: Bydžovský 1541, Štelcar Želetavský 1592, Bruncvík 1613, Šturm 1584, Polon 1589). Same kind of session as today, different repositories.
5. **Integration of David's contribution into §3.2 (Utraquist profile) chapter draft** — David's denial of "Neo-Utraquism" hardens the confessional boundary that the chapter's *lex orandi* argument crosses. With Matoušek and Hrubý now scaffolded, §3.2 can be drafted with proper Czech-language scholarly anchoring rather than reliance on David alone.
6. **`David_1999` ILL request** through ETF UK Bratislava library — direct contact with David is no longer possible.
