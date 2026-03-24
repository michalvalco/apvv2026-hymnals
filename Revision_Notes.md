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
| 2026-03-24 | §4.1 | Need FC VII text (especially SD VII) for side-by-side comparison with Agenda Česká formulations | High | Open |
| 2026-03-24 | §4.1 | Need Confessio Fidei 1535 Eucharistic articles for Unity comparison | High | Open |
| 2026-03-24 | §4.1 | Need Confessio Bohemica 1575 Eucharistic articles — does it show the same broad register? | High | Open |
| 2026-03-24 | §4.1/§5 | CS "O Wečeří Páně" hymns need reading — does Tranovský's hymnodic language show confessional sharpening vs. Agenda Česká? | High | Open |
| 2026-03-24 | §5 | GresovaSek_2023 is musicological, not theological — we need to do the textual-theological analysis of CS hymns ourselves. Her dissertation (2020) may have more source identifications. | Medium | Open |
| 2026-03-24 | §5 | Třanovský used Calvinist metric melodies (French psalm tunes) for his new texts — interesting tension: confessionally "foreign" melodies with Lutheran texts. Worth a paragraph in §5. | Low | Open |
| 2026-03-24 | General | Grešová-Sekelská's dissertation (FiF UK 2020) — full CS hymn inventory with ~30 Bohemian melodic source identifications. Try to acquire via UK Bratislava library or request from author. | Medium | Open |
| 2026-03-24 | General | ~~Benka 2024 is CC BY-SA 4.0 — freely citable. Confirm licence status for all other sources.~~ | ~~Low~~ | **Resolved** — CC BY-SA 4.0 confirmed in `Benka_2024.md`. Licence review for other sources remains a standing task. |

---

## Source Acquisition Strategy (Phase 2)

Sources currently lacking access/location info — prioritised by section relevance:

### High Priority (needed for §3–§4 core analysis)
| Source | Short ID | Acquisition Path |
|---|---|---|
| Confessio Heptapolitana (1559) | `ConfHeptapol_1559` | Check ECAV archives; Ribini's *Memorabilia* may contain text; Slovak National Library (SNK) |
| Confessio Scepusiana (1569) | `ConfScepus_1569` | Levoča/Kežmarok archives; SNK; possible edition in *Monumenta evangelicorum* |
| Jan Hus: De ecclesia (1413) | `Hus_DeEccl_1413` | S. Harrison Thomson critical ed. (1956); check Archive.org and Kramerius NKP |
| Jakoubek ze Stříbra: Eucharistic writings | `Jakoubek_Euch` | Manuscriptorium for MSS; Bartoš bibliographies for printed editions |
| Lukáš Pražský: Sacramental writings | `LukasPrazsky_Sviat` | Müller's *Geschichte der böhm. Brüder* (vol. 1); Říčan references; MZK Kramerius |
| Acta Unitatis Fratrum | `ActaUF` | Herrnhut Moravian Archives (Unitätsarchiv); Müller editions; Manuscriptorium |

### Medium Priority (needed for §2 context, §5 transfer)
| Source | Short ID | Acquisition Path |
|---|---|---|
| Four Articles of Prague (1420) | `ArtPrag_1420` | Frequently published in secondary literature (Kaminsky, Šmahel); check Documenta Mag. Joannis Hus |
| Slovak Lutheran Agendas | `AgendySlov` | Bardejov archive (ŠA Prešov — Bardejov); Levoča archive; Rambachiana 1637 possibly at SNK |

### Database Verification (tested 2026-03-24)

**Hymnorum Thesaurus Bohemicus** (http://www.clavmon.cz/htb/)
- [x] Accessible via browser (blocks automated/programmatic requests — 403)
- **Content:** Metadata database (not full-text scans) — **21,227 catalogue entries** covering all printed Czech kancionál production 1501–late 18th c. Converted from Antonín Škarka's handwritten catalogue cards.
- **Search:** Two modes: (1) by textual incipit, (2) browse full contents of individual kancionáls. Cross-referencing concordances across hymnbooks.
- **Metadata fields (10):** Incipit, Source (kancionál + year + page), Title/designation, Melody, Theme/section, Number of stanzas, Strophic form, Acrostic, Original/translation/arrangement, Author/translator
- **Relevance:** HIGHEST — directly covers our period and sources. Use for tracing concordances across confessional boundaries (Brethren → CS). Administered by Jiří Žurek (zurek@ics.cas.cz).
- **Limitations:** No full hymn texts (incipits + metadata only). No page scans (except Jesličky 1658 facsimile). Czech-only interface.

**Manuscriptorium** (https://www.manuscriptorium.com/)
- [x] Accessible via browser (new version since October 2025; old links redirect)
- **Content:** 400,000 descriptive records, 110,000 digitised documents (manuscripts, incunabula, early prints to c. 1800). 139 content partners across 24 countries.
- **Search:** Keyword search, advanced filters, personal digital library (save searches, create collections, annotations). Czech + English interface.
- **Specific finds:** Jistebnický kancionál has dedicated page with digitised virtual document (MS Praha, KNM, II C 7, c. 1430). Also found: Utraquist gradual + kancionál from Teplice (1560/1566) — relevant to §4; Kancionál printed in Ivančice 1572 (Brethren press).
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

**Practical note:** All four databases block programmatic access (403). All research must be done manually via browser. If based in Slovakia, consider whether your institution participates in Czech library network, or plan research visits to MZK Brno / NKP Prague.

### Notes
- Luther WA volumes: available via Archive.org (scanned Weimar Ausgabe) and Luther Seminary digital collections
- `GresovaSek_2020` dissertation: Michal to acquire via UK Bratislava library or request from author directly

---

*Updated during revision passes (Pass A: argument, Pass B: citations, Pass C: prose/voice, Pass D: structure).*
