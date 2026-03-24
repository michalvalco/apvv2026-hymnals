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
