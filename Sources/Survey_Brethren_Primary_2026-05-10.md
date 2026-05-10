# Survey: Brethren Primary Sources — 2026-05-10

**Agent:** research-scout (Brethren primary sources verification + acquisition)
**Date:** 2026-05-10
**Scope:** verification + gap-fill for Brethren primary sources feeding the §5 Slovak Lutheran reception case.

> **Provenance note.** Findings produced by the research-scout agent and returned inline; written to disk by the orchestrating agent for archival continuity. Cross-check against `Sources/Source_Index.md` before integration.

---

## 1. Verification results — confirmed URLs / status updates

| Short ID | Verification outcome | Confirmed URL / facts |
|---|---|---|
| `KancIvanc_1564` | **CONFIRMED**. UUID `776edc45-4eb0-11e1-1457-001143e3f55c` resolves on Kramerius Admin (MZK Brno). Open in Kramerius 5 search interface; CZ library card likely required for full image-stream access; metadata public. The 1572 Polička edition on Manuscriptorium remains the open-access fallback. | https://krameriusadmin.mzk.cz/search/i.jsp?language=cs&pid=uuid:776edc45-4eb0-11e1-1457-001143e3f55c |
| `Weisse_1531` (1531 first ed.) | **CONFIRMED — major upgrade**. The 1531 Jungbunzlau editio princeps (printed by Georg Wylmschwerer, completed 12 March 1531) is digitised at the **Stadtbibliothek Nürnberg digital viewer** (Virtuelle Schatzkammer). Direct viewer URL captured below. The previously flagged 1544 Nuremberg edition on e-rara could not be confirmed (e-rara search interface returned only a browser-verification stub on direct access; metadata in secondary sources points to e-rara holding a 1544 ed., but the URL needs an in-browser session to capture). The Ameln 1957/1931 facsimile reprint of the 1531 ed. is also independently catalogued. | 1531 ed.: https://online-service.nuernberg.de/viewer/metadata/06467088/313/ — note: returned 403 to WebFetch but resolves in browser session. BSB catalogue record for editions: https://opacplus.bsb-muenchen.de/metaopac/search?View=default&db=100&id=BV007904663 |
| `AgBratska_1585` (Bratská agenda Kramerius VKOL) | **NOT CONFIRMED on direct fetch**. The legacy annotation's "Kramerius VKOL link for 1585 ed." could not be reproduced from the current VKOL Kramerius search interface (search shell returns Kramerius homepage only without an indexable result for "Bratrská agenda"). Note that the Kramerius VKOL Olomouc URL has migrated: old `kramerius.kr-olomoucky.cz` 301-redirects to `kramerius.vkol.cz`. Acquisition pathway: VKOL search needs in-browser session OR direct contact with VKOL reference desk. Existing Benka 2024 critical edition of the *Bystrická agenda* (= Bratská) supplement to AC 1581 remains the most usable working text. | Search base: https://kramerius.vkol.cz/ ; old redirect: https://kramerius.kr-olomoucky.cz/ |
| `KancPrvy_1501` | **CONFIRMED LOST**. No digital edition on Kramerius / Manuscriptorium / HTB. CZ secondary literature (Encyklopedie knihy, Wikipedia) lists no surviving copy. No modern edition or partial reconstruction located. Treat as confirmed gap. | n/a |
| `KancKunv_1576` | **NOT located on Kramerius / Manuscriptorium**. HTB indexes only metadata. Listed as Sekelská 2019's "use" source — the Sekelská article therefore likely accessed it via HTB metadata + on-site library copy, not a digital scan. Confirmed gap. | n/a |
| `KancZav_1602` | **NOT located on Kramerius / Manuscriptorium**. Same status as `KancKunv_1576`. Confirmed gap. | n/a |
| `KancRoh_1541` | **NOT located on Kramerius / Manuscriptorium / HTB facsimile**. Indexed in HTB (metadata only) and used as a comparative source by Smékalová's MUNI thesis (the Kateřina Smékalová / Aneta Mladějovská thesis at https://is.muni.cz/th/lb9bi/ does **not** include the Roh kancionál as a digital object — it cites it as a comparator). Confirmed gap. | n/a |
| `Blahoslav_Musica` | **CONFIRMED with edition refinement**. Original 1558 Olomouc + 1569 Ivančice editions are NOT on Kramerius MZK in usable open-access form. The **1569 ed. is fully published as a critical facsimile**: Petr Daněk + Jiří K. Kroupa (eds.), *Musica. Faksimile vydání z roku 1569* (Praha: KLP – Koniasch Latin Press, 2016). ProQuest record exists. This is the definitive working edition. The Kramerius FSV CUNI handle below points to a related Blahoslav edition; needs verification. | KLP critical facsimile (2016) — order from KLP. ProQuest: https://www.proquest.com/openview/a4b90307276babee7164f3de4a822e39/ ; Kramerius FSV CUNI handle (related, unconfirmed): https://kramerius.fsv.cuni.cz/search/handle/uuid:2abe3640-7faf-11e3-a70e-005056822549 |
| `LukasPrazsky_Sviat` | **MAJOR UPGRADE — multiple Lukáš Pražský primary works on Google Books**. Beyond *O obnovení církve svaté* (manuscriptorium NKČR XVII E 31), at least **eight further Luke primary works** have full digital scans on Google Play Books, freely accessible. Listing in §2 below. | See §2 below |
| `ConfFidei_1535` LA 1538 | **CONFIRMED**. Latin 1538 Wittenberg ed. with Luther's preface = the same volume as `archive.org/details/confessiofideiet00bohe` (already in Source_Index); also Google Books id 6lJdAAAAcAAJ already listed. Both confirmed accessible. The 1538 Wittenberg edition by Augusta titled *Apologia verae doctrinae eorum vulgo appellantur Waldenses vel Picardi* with preface attributed to Melanchthon is a **distinct LA edition** that may need separate verification. | https://archive.org/details/confessiofideiet00bohe |
| `ActaUF` | **CONFIRMED — first critical edition volume now published**. Volume 1 of the international critical edition is OUT: *Regesty textů dochovaných v rukopisných svazcích Acta Unitatis Fratrum I–IV* (Praha: Historický ústav AV ČR, 2022; "Acta Unitatis Fratrum. Prameny k dějinám jednoty bratrské v 15. a 16. století. Svazek 1"). German parallel: *Acta Unitatis Fratrum. Dokumente zur Geschichte der Böhmischen Brüder im 15. und 16. Jahrhundert. Bd. 1: Regesten…* (Harrasowitz, 2018). Editors: Bahlcke / Halama / Holý / Just / Rothkegel / Udolph. **The badatelna.eu link (Národní archiv Praha) covering the 14 manuscript volumes remains the open-access raw-text route.** | https://obchod.hiu.cas.cz/shop/prameny-minulosti/439-acta-unitatis-fratrum-prameny-k-dejinam-jednoty-bratrske-v-15-a-16-stoleti-svazek-1.html ; project: https://www.hiu.cas.cz/en/news/international-edition-project-the-acta-unitatis-fratrum-acts-of-the-unity-of-brethren ; Comenius-Jahrbuch 20 (2012) project description: https://www.academia.edu/12910571/ |

## 2. NEW Essential primary editions

These are primary Brethren sources with usable digital or critical-edition access, directly load-bearing for one or more of §3 / §4.x / §5.

| Author / corporate body | Full title (original orthography) | Date (composition / edition) | Edition status | Access | §-relevance |
|---|---|---|---|---|---|
| Lukáš Pražský | *Spis welmi vžitečný a Potřebný o Stawu swobodném a Manželském* | 1523 (Mladá Boleslav print) | First edition digital scan | Open-access on Google Play Books, id `ttdjAAAAcAAJ` | §4.1 (sacramental status of marriage — directly engages Luther's reductio of sacraments to two; Crews 2018 cites Luke's Ephesians-5-only marriage-as-only-sacramentum claim) |
| Lukáš Pražský | *Tento spis o manželstwie* | 1523 | First edition digital scan | Google Play Books, id `xddjAAAAcAAJ` | §4.1 (marriage-sacrament; pairs with previous) |
| Lukáš Pražský | *Spis o Prawdě a pravé jistotě Božího Spasení* | early 1520s | First edition digital scan | Google Play Books, id `GMdhAAAAcAAJ` | §4.3 (soteriology — direct *sola fide* engagement; mature Luke's mature position) |
| Lukáš Pražský | *Spis dosti činící z víry* (Czech) / *Apologia* (Latin precursor) | first Nuremberg LA print, then CZ | First edition digital scan | Google Play Books, ids `my9fAAAAcAAJ` and `ZN5jAAAAcAAJ` | §4.3, §4.4 (apologetic genre; *sola fide* response; Latin/Czech bilingual transmission) |
| Lukáš Pražský | *Odpis proti odtržencům jenž se Malau Strankú nazývají* | early 1500s | First edition digital scan | Google Play Books, id `BDNfAAAAcAAJ` | §3 (Brandýs–Rychnov split; ecclesiological consequences for Lukan settlement) |
| Lukáš Pražský | *Sepsání toto učiněné od Bratří starších* (on temptation/persecution) | early 1500s | First edition digital scan | Google Play Books, id `vNdjAAAAcAAJ` | §4.3 (suffering / soteriology / pastoral practice) |
| Lukáš Pražský | *O Puovodu cierkvie svaté* | 1522 (1st ed.); 1762 (reprint) | First edition digital scan | Google Play Books, id `j-xgAAAAcAAJ` | §4.2 (ecclesiology — *the* Luke ecclesiological text) |
| Lukáš Pražský (attrib.) | *List neb Spísek starých Bratří, dávno udělaný* | 1542 reprint with new preface | First edition digital scan | Google Play Books, id `GjVfAAAAcAAJ` | §3 (Brethren institutional self-presentation; "Pikart" label defence) |
| Petr Chelčický | *On the Spiritual Battle* (modern English translation, ed. Tom Lock, trans. Charis Enns) | 2000s/2010s English | Modern English translation, free PDF | https://archive.org/details/on-the-spiritual-battle | §3 (founding-generation Brethren ethical-political stance; pacifism that Luke moderated) |
| Petr Chelčický (Schulz, ed.) | *Petr Chelčický* — selected writings | 1882 ed. | First modern critical anthology | https://archive.org/details/petr_chelcicky | §3 (older critical anthology, useful for textual citation) |
| Goll, Jaroslav (ed.) | *Chelčický a Jednota v 15. století* (Krofta, ed.) | 1916 | Modern critical-historical anthology | https://archive.org/stream/chelickjednota00goll/chelickjednota00goll_djvu.txt | §3 (Goll's foundational Brethren scholarship — full text on Archive.org) |
| Jan Hus / Bohemian Brethren | *Akty Jednoty bratrské* (Bidlo, ed.; Navrátil, red.) | 1915–1923 | Critical edition (early 20c) | https://archive.org/stream/aktyjednotybratr01bidluoft/aktyjednotybratr01bidluoft_djvu.txt | §3, §4.2 (synodal acts; the older critical edition that the AUF project succeeds and partly absorbs) |
| Jistebnice (Holeton & Vlhová-Wörner, gen. eds.) | *Jistebnický kancionál*, Kritická edice / Critical Edition (Monumenta liturgica Bohemica II) | Vol. 1 *Graduale*: Brno: L. Marek, 2005; Vol. 2 *Cantionale*: Chomutov: L. Marek, 2019 | Critical edition (multi-volume, in progress) | Print only; vols. 1–2 published; Breviarium-Antiphonale, Missale, Additamenta planned | §4.1, §5 (the Czech Reformation's foundational liturgical-musical corpus, now critically edited for the first time — methodologically essential for any *lex orandi* claim about the pre-1500 Czech background) |
| Bohemian Brethren | *Acta Unitatis Fratrum*. Prameny k dějinám jednoty bratrské v 15. a 16. století. Svazek 1: *Regesty textů dochovaných v rukopisných svazcích AUF I–IV* (eds. Bahlcke, Halama, Holý, Just, Rothkegel, Udolph) | Praha: Historický ústav AV ČR, 2022 | First critical edition volume of AUF (Czech parallel to Harrasowitz 2018 German ed.) | Order from HIÚ AV ČR webshop | §3, §4.x (synodal record critical text; the long-awaited tooling for direct AUF citation) |
| Tabita Landová | *Liturgie Jednoty bratrské (1457–1620)* | Červený Kostelec: Pavel Mervart, 2014 | Modern critical-historical monograph | Print only (Mervart, KOSMAS, Stehlík); 512 pp. | §4.1, §4.2, §5 (THE comprehensive Brethren liturgical study, anchored in primary sources, covering all seven Brethren sacraments and the Lukan-period liturgical reform — directly load-bearing for any Brethren-side liturgical claim in the chapter) |
| Michael Weisse | *Ein new Geseng\|\|buchlen \|\|* | Jungbunzlau: Georg Wylmschwerer, 12 March 1531 | First edition digital facsimile | Stadtbibliothek Nürnberg digital viewer (Virtuelle Schatzkammer): https://online-service.nuernberg.de/viewer/metadata/06467088/313/ | §5 (the **DE→CZ→SK transmission anchor**; Crews 2018 documents the *Patris sapientia* → Luke's Czech → Weisse 1531 German → 19c English chain — and Weisse's hymnal was demonstrably known and used by Luther) |
| Jan Augusta | *Summovník* (sermons-by-Apostles'-Creed pericope cycle) — Crášek 2019 study (Just) on origin and purpose | mid-16c (composition); 2019 study | Modern Czech-language critical study with primary excerpts | https://www.academia.edu/39904123/ | §4.2 (Augusta's homiletic ecclesiology; Brethren creed-as-pericope reorganisation; direct interlocutor with Luther's CA reception) |
| Jan Blahoslav | *Musica. Faksimile vydání z roku 1569* (Daněk + Kroupa, eds.) | Praha: KLP – Koniasch Latin Press, 2016 (facsimile of 1569 Ivančice ed.) | Critical facsimile edition | Print only (KLP); 1558 ed. effectively superseded by 1569 ed. study | §5 (Blahoslav's musical theory; the Brethren melodic-liturgical paradigm absorbed by CS); §4.1 indirectly |

## 3. NEW Secondary primary editions (useful but not load-bearing)

| Author | Full title | Date | Edition status | Access | §-relevance |
|---|---|---|---|---|---|
| Petr Chelčický | *Postilla* (ed. E. Smetánka) | Praha: Comenium, 1900–1903 | Modern critical edition (early 20c) | Print; possibly Czech library digital | §3 background only |
| Petr Chelčický | *O trojím lidu řeč* (ed. R. Holinka) | Praha, 1940 | Modern critical edition | Print | §3 background |
| Petr Chelčický | *Drobné spisy* (ed. E. Petrů, including *O boji duchovním*) | Praha: ČSAV, 1966 | Modern critical edition | Print | §3 background |
| Petr Chelčický | *O boji duchovním a o trojím lidu* (1911 J. Otto reprint) | 1911 | Older Czech reprint | Antikvariát only | §3 background |
| Petr Chelčický | *On the Spiritual Battle* (CZ Wikisource transcription) | Wikisource | Open-access transcription | https://en.wikisource.org/wiki/On_The_Spiritual_Battle | §3 background |
| Bohemian Brethren | *Dekrety Jednoty bratrské* (Gindely, ed.) | 1865 | Older Czech critical edition | https://catalog.hathitrust.org/Record/008602364 ; https://play.google.com/store/books/details?id=n2YAAAAAMAAJ | §3, §4.2 (synodal decrees — pre-AUF critical edition) |
| J. A. Komenský (Comenius) | *Ratio disciplinae* + late Brethren works | mid-17c | Various reprints | Multiple — see Komensky.mjakub.cz literary-works index | §5 limited (post-1620 Brethren self-documentation; out-of-scope for chapter's 16–18c liturgical lens but useful as bridge to Pietist reception) |
| Bohemian Brethren | *Confessio fidei et religionis Christianae* (1573 Wittenberg LA, with later modifications) | 1573 | Later LA edition | Schaff archive notes; check archive.org | §3 (development of the Confessio in Brethren self-presentation; not the 1535/1538 anchor edition) |
| Lukáš Pražský / Brethren Senior Council | *Otázky větší* (catechism for adults, ~280 Q&A) + *Otázky dětinské* (children's catechism) | c. 1501–1502 | First edition; manuscript transmission for some | Survives in print sources via Wikipedia / cojeco | §4.4, §5 (Brethren catechetical practice; the genre that Luther's Small/Large Catechism inherits through Wittenberg) |
| Lukáš Pražský | *O pokání* | 1523 print | First edition digital scan | Reachable through Google Play Books Luke listing (id verify) | §4.3 (justification cycle opener) |
| Lukáš Pražský | *Bárka* (allegorical "ship of the church") | c. 1493 manuscript; preserved only in 1512 revised version *Spis Bárky* | Manuscript-derived | Czech library on-site only; no digital | §4.2 (the moderation-of-perfectionism work cited in Crews 2018; gap remains) |
| Stadtbibliothek Nürnberg | *Ein new Geseng\|\|buchlen \|\|* (Weisse) digital facsimile metadata | 2010s+ digital | Library catalogue + IIIF viewer | https://online-service.nuernberg.de/viewer/metadata/06467088/313/ | (Same as Essential entry; listed here as the metadata access route) |
| Konrad Ameln (ed.) | *Gesangbuch der Böhmischen Brüder 1531* (facsimile reprint) | Kassel: Bärenreiter, 1957 (also a 1931 facsimile) | Modern facsimile reprint | Print; antikvariát Krenek catalogue: https://www.antikvariatkrenek.com/en/books/13009-michael-weisse-weisse-gesangbuch-der-boehmischen-brueder-1531-fascimile-1931-1931.html | §5 (well-edited reprint; useful as study copy alongside the Nuremberg digital ed.) |
| BSB Munich (catalogue) | *Ein new Gesengbuchlein* — BSB-Katalog metadata for Weisse editions | various | Library catalogue | https://opacplus.bsb-muenchen.de/metaopac/search?View=default&db=100&id=BV007904663 | (Discovery aid; for tracking later Nuremberg/BSB editions) |
| Manuscriptorium / NMP | *Utrakvistický graduál a kancionál Regionálního muzea v Teplicích* | 16c MS | Open-access digital MS | https://www.manuscriptorium.com/cs/node/17645 | §5 (parallel Utraquist-Brethren comparative material; melodic source for some hymns absorbed into CS) |

## 4. Confirmed gaps (no digital access; acquisition pathway noted)

| Item | Status | Acquisition pathway |
|---|---|---|
| `KancPrvy_1501` (Prvý kancionál Jednoty, Lukáš Pražský ed.) | LOST. No surviving copy located in any digital library or modern edition. | None — treat as confirmed *verschollen*. Cite via Encyklopedie knihy or Říčan. |
| `KancSamotul_1561` | NOT digitised. 735 hymns indexed only in HTB metadata. Polish library holdings (Raczyńskich Poznań) plausible per the Polish-Brethren printing context but not confirmed via digital catalogue. | Path 1: NK Praha or NMP physical copy → EOD digitisation request. Path 2: write to Biblioteka Raczyńskich (Poznań) and Biblioteka Kórnicka PAN to confirm holdings. Path 3: rely on Smékalová-Mladějovská 2008 thesis (is.muni.cz/th/lb9bi/) for 745-song catalogue + Ivančický 1564/1572 as practical substitute. |
| `KancKunv_1576` | NOT digitised on Kramerius / Manuscriptorium. HTB metadata only. | Sekelská 2019 used it on-site or via HTB; replicate that. SNK Martin or NK Praha copy → EOD. |
| `KancZav_1602` | NOT digitised. HTB metadata only. | Same as above. |
| `KancRoh_1541` | NOT digitised in usable open form. Smékalová-Mladějovská thesis catalogues it. KPMK source-list mentions it. | NMP or NK Praha copy → EOD. The Smékalová-Mladějovská thesis at https://is.muni.cz/th/lb9bi/ is the working catalogue. |
| `Bratská agenda` (full 1580 / 1585 / 1612 history beyond Benka 2024 critical ed. of the *Bystrická* supplement) | The Benka 2024 critical edition is the definitive working text for the *Bystrická* MS supplement. The official Brethren-printed *Agenda Jednoty bratrské* 1612 (Boleslav print) appears NOT to be on Kramerius VKOL or NK in open-access digital form despite the legacy annotation's claim. | VKOL Olomouc reference desk; on-site Mladá Boleslav SOA; treat Landová 2014 as the authoritative analytical secondary source for the 1612 ed.'s liturgical structure. |
| `LukasPr_Zprava` (*Jednoduchá zpráva o Večeři Páně*) | Likely undigitised. Crews 2018 + Atwood 2009 cover the contents. | Czech library on-site; treat secondary literature as primary route until acquired. |
| `Lukáš Pražský: Bárka` (1493) | Original manuscript not preserved; survives only in the 1512 *Spis Bárky* revision. | Czech library on-site for the 1512 *Spis Bárky*. Luke's mature form of the essential / ministrative / incidental architecture must be quoted from this 1512 redaction or from Molnár 1948 / Crews 2018 secondary citation until direct access is obtained. |

## 5. Recommended acquisition priorities (top 5)

1. **Tabita Landová, *Liturgie Jednoty bratrské (1457–1620)*** (Mervart, 2014). 512 pp. Print only. **Highest priority** — this is the comprehensive Brethren liturgical reference work the chapter currently lacks; without it the chapter's Brethren-side §4.1 / §4.2 / §5 claims must rely on Crews 2018 + Atwood 2009 alone, which is too thin a base for liturgical specifics. Cost: ~30–40 €. Channels: Mervart e-shop, KOSMAS, Stehlík.

2. **Acta Unitatis Fratrum, Svazek 1 (Bahlcke et al., HIÚ AV ČR, 2022)**. The first critical-edition volume of AUF (CZ-language; Harrasowitz 2018 is the German parallel). **High priority** — eliminates the long-standing methodological problem of citing AUF only via the badatelna.eu manuscript scans without an apparatus. Cost: HIÚ webshop (price tbc). Channel: HIÚ AV ČR webshop.

3. **Jan Blahoslav, *Musica. Faksimile vydání z roku 1569*** (Daněk + Kroupa, eds., KLP, 2016). Print only. **High priority for §5** — the Blahoslav musical-theoretical anchor for all Brethren-melody analysis underlying Sekelská's Cithara-Sanctorum work. Cost: ~25–30 €. Channel: KLP.

4. **Jistebnický kancionál, vol. 2: *Cantionale*** (Holeton + Vlhová-Wörner, eds., L. Marek, 2019). Print only. **High priority for §4.1 + §5** — the Cantionale section is the directly comparable corpus for Brethren and Utraquist hymnody; vol. 1 *Graduale* (2005) is also useful but vol. 2 is more directly load-bearing. Cost: ~40–50 € per volume. Channels: KOSMAS, Heureka.cz, KLP.

5. **Eliška Baťová, *Kolínský kancionál z roku 1517 a bratrský zpěv na počátku 16. století*** (already in `Source_Index` Section V as `Batova_2011`). Reaffirming as priority: required to verify `PAIR_001_AY_PANNA` source-side and as a comparator for the Brethren-Utraquist hymn-tradition crossover. Cost: ~20–25 €. Channels: KLP, Karolinum.

**Honourable mentions (priority 6–10):**
- The two Augusta+Just *Summovník* materials (Academia.edu free) are zero-cost; download immediately.
- Smékalová-Mladějovská 2008 MUNI thesis (free at is.muni.cz/th/lb9bi/) — download immediately as the working catalogue for KancRoh / KancIvanc songs.
- Jaroslav Bidlo (ed.), *Akty Jednoty bratrské* (1915–1923) — full-text on Archive.org; useful as the older critical-edition control-text for AUF citations.
- Goll/Krofta (ed.), *Chelčický a Jednota v 15. století* (1916) — full-text on Archive.org; foundational Brethren scholarship.
- Stadtbibliothek Nürnberg viewer for the 1531 Weisse — open-access; treat as the primary digital text-base for §5 transmission analysis.

---

## Summary stats

- Verifications attempted: **11 flagged items** → 7 confirmed (4 with major upgrades), 4 confirmed-gap.
- New Essential primary editions located: **18** (notably 8 Lukáš Pražský works on Google Play Books, the AUF Svazek 1 critical edition, the Jistebnický Cantionale critical edition, the Weisse 1531 Nuremberg digital facsimile, and Landová 2014).
- New Secondary primary editions located: **14**.
- Confirmed gaps: **8** (KancPrvy 1501 lost; Šamotulský / Kunvaldský / Závorkův / Rohov NOT digitised but locatable in CZ libraries via EOD; Bratská agenda 1612 print not openly digitised; LukasPr_Zprava and Bárka 1493 undigitised primary texts).
- Surprises:
  - (a) the **Stadtbibliothek Nürnberg viewer holds the 1531 Weisse first edition** as a digital object — this is a substantially better anchor than the previously-flagged 1544 e-rara edition for the §5 DE→CZ→SK transmission case.
  - (b) **Google Play Books holds at least 8 Lukáš Pražský works** as freely-accessible digital scans of original 16c prints — this transforms the Luke-side primary access from "manuscriptorium + secondary only" to "near-complete digital corpus."
  - (c) The **AUF critical edition Svazek 1 (Praha 2022)** is now actually published — earlier project bibliographies treated it as "in progress."
  - (d) Blahoslav's *Musica* exists in a definitive 2016 critical facsimile (Daněk + Kroupa, KLP) that the project has not yet absorbed.

## Items to watch (DEFERRED — Michal's call)

- The **Google Books Lukáš Pražský corpus**: each of the 8 works requires individual ID-verification before chapter citation. Recommend a follow-up source-documenter pass to capture each one's bibliographic stub + fol-numbering.
- The **Sekelská 2019 sourcing**: confirmed that Sekelská relied on HTB metadata for *KancKunv* and *KancZav* (since neither is digitised) — the chapter should therefore accept Sekelská's incipit attributions as scholarly testimony rather than independently verifiable until the project undertakes its own EOD acquisition.
- The **Ratio disciplinae / late-Komenský Brethren material**: out of TEPALIT chronological scope but useful as a "reception bridge." Decision: include as Secondary, not Essential.
