# Source-Hunt Report: Late-Utraquist Primary Witnesses

**Date:** 2026-05-11
**Agent:** research-scout
**Scope:** 17 items from `Source_Index.md` Section IX.B
**Method:** WebSearch + WebFetch across Google Play Books, BSB-MDZ, Manuscriptorium, Encyklopedie knihy, Knihoveda.lib.cas.cz, Czech Wikipedia
**Total queries executed:** ~50

> **Provenance note.** Findings produced by the research-scout agent and returned inline; written to disk by the orchestrating agent for archival continuity.

## Executive summary

| Verdict | Count | Items |
|---|---|---|
| OPEN-ACCESS-CONFIRMED | **5** | Bilejovsky_Kron (BSB), Polon_Pomni_1589 (Google Play), Cykada_Hody_1607 (Google Play), Sturm_Ozvani_1584 (Google Play), Bruncvik_Idolorum_1613 (Google Play) |
| PARTIAL (different work by same author found) | **2** | Rvacovsky_Masopust_1580 (2008 print edition available), Bydzovsky_Detatka_1541 (different 1539 work on Google Play) |
| METADATA-ONLY (catalogue record only) | **1** | Koranda_Tractat_1493 (Národní muzeum 25 D 1, no scan surfaced) |
| NOT FOUND DIGITALLY | **9** | Bydzovsky_Biskupove_1543, Bydzovsky_Martyrum_1554, Stelcar_Kazani_1586, Stelcar_Cirkev_1589, Stelcar_Knezstvi_1592, Bruncvik_Ksaft_1613, Bruncvik_Zrcadlo_1614, Walkmberger_Advent_1596, Zatecky_Pocta_1593 |

(Verdict count = 17. Two items merit flagging as new issues for Michal — see Surprises.)

**Top-3 highest-leverage acquisitions:**

1. **Polon, *Pomni na mne* (1589)** — Google Play, 352 pp, full ebook download (`id=IxwYCS0lKjsC`). David's most-cited Utraquist primary source (six different fns. in `David_1999`). Directly serves §4.2 + §4.3.
2. **Šturm, *Krátké ozvání* (1584)** — Google Play, 199 pp, full ebook download (`id=uzFfAAAAcAAJ`). David's hostile-witness anchor for the Utraquist confessional profile in §3. Contains the verbatim "Čechové"/"Utraquists" synonymy quoted in David_1999 fn. 73.
3. **Bruncvík, *Idolorum pia suplantatio* (1613)** — Google Play, 48 pp, full ebook download (`id=lzRjAAAAcAAJ`). The Czech Lutheran anti-image polemic; key §4.4 comparator against Utraquist saints-veneration positions.

**Bonus discovery:** Bilejovský's *Kronyka cýrkevní* (Skalický ed., Prague 1816) is fully digitised at BSB Munich with IIIF — Section IX.B's "foundational" entry can be acquired *now* via `https://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb10023485-0`.

The hunt produced **5 immediately-acquirable open-access PDFs**, **2 partial wins**, and identified **2 title-citation discrepancies** for Štelcar Želetavský (1586 and 1592) that must be flagged for Michal before any provisional rename is applied — see "Surprises" section per Gotchas.md discipline.

---

## Item-by-item results

### 1. `Bilejovsky_Kron` — Bílejovský, *Kronyka cýrkevní* (ed. Skalický, Prague 1816)
- **Verdict:** OPEN-ACCESS-CONFIRMED
- **URL:** `https://mdz-nbn-resolving.de/urn:nbn:de:bvb:12-bsb10023485-0`
- **BSB ID:** `bsb10023485` (catalogue ID `BV001655027`)
- **IIIF endpoint:** `https://api.digitale-sammlungen.de/iiif/image/v2/bsb10023485_00001/full/200,/0/default.jpg` (IIIF v2 confirmed)
- **Access:** Free, no card; PDF download via MDZ
- **Notes:** Title page: "Kronyka Cýrkewnj, w njž se přjběhowé a přjhody církwe České od gegjho počátku až do léta Páně 1532 wyprawugj, sepsaná před třemi sty lety od Bohuslawa Bílegowského, kněze strany pod obogj; nynj pak wůbec wydaná... od Josefa Skalického. W Praze 1816." Confirms Source_Index entry. Imprint: Vetterl z Wildenbrunu (publisher of the 1816 edition). Holdings also recorded at Czech digital archives but BSB is the direct-access surrogate.

### 2. `Bydzovsky_Detatka_1541` — Bydžovský, *Děťátka a neviňátka...* (Prague 1541)
- **Verdict:** NOT FOUND DIGITALLY (but see PARTIAL note)
- **Acquisition pathway:** Physical copy. Knihopis/critical-edition route via Czech library on-site.
- **Notes:** No digital surrogate located in Kramerius (NK ČR, MZK, VKOL, KNAV), Manuscriptorium, Google Books, BSB-MDZ, or Encyklopedie knihy. **PARTIAL:** Google Play does host a different Bydžovský Eucharist work — "**Knižky o přigijmánij Tiela a Krwe Pána nasseho Gežijsse Krysta, pod obogij spuosobau**" (124 pp), dated January 1539 on Google Play (id=-uZgAAAAcAAJ). This is a *different* 1539 work, not the 1541 *Děťátka* — but it is a sibling theological-Eucharistic text by the same author, also relevant to §4.1. Worth acquiring as a fallback Bydžovský witness if the 1541 *Děťátka* proves inaccessible.

### 3. `Bydzovsky_Biskupove_1543` — Bydžovský, *Tento spis ukazuje, že Biskupové Biskupa...* (n.p., 1543)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy. Indexed in Knihopis (no UUID surfaced). Encyklopedie knihy may have a record but Knihoveda.lib.cas.cz is currently Anubis-protected against automated fetch.
- **Notes:** Three repository checks negative. The work's anonymity ("n.p.") may explain digitisation lag.

### 4. `Bydzovsky_Martyrum_1554` — Bydžovský, *Historiae aliquot Anglorum martyrum...* (Prague 1554)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy via NK ČR or Czech ILL. **Critical scholarship available** — the MDPI *Religions* journal article "Utraquist Bohemia and the English Martyrs" (*Religions* 12/5/365, accessible at `https://www.mdpi.com/2077-1444/12/5/365`, but 403'd on my fetch; try interactive access) reportedly engages this text in detail and may cite a digital copy.
- **Notes:** Stanford SearchWorks confirms the work exists but the only "Historia aliquot martyrum Anglorum" digitised material that surfaced is Maurice Chauncy's separate Mainz 1550 Carthusian-martyrs work — easily confused with Bydžovský's 1554 Prague Latin imprint, which is a *distinct* work. **Flag for Michal:** verify on acquisition that the 1554 Bydžovský is not in part adapted from Chauncy's 1550 — the topical overlap is striking.

### 5. `Koranda_Tractat_1493` — Koranda, *Traktát o velebné a božské svátosti oltářní* (Prague: Tiskař Korandy, 1493)
- **Verdict:** METADATA-ONLY
- **Holdings:** National Museum Library, Prague — shelfmark **25 D 1** (single 176-leaf incunabulum containing *four* treatises by Koranda Jr.: "O velebné a božské svátosti oltářní," "O rozdávanie dietkám," "O lichvě," and "O zpievaní a čtení českém"). Putative Manuscriptorium UUID `AIPDIG-NMP___25_D__1_____2EKBLGS-cs` could not be confirmed — direct fetch returns generic Manuscriptorium homepage and search interfaces require JS.
- **Acquisition pathway:** Manuscriptorium browser navigation (5-10 min interactive session). The work's incunabulum status makes digitisation very likely — request through the Manuscriptorium full search UI at `https://www.manuscriptorium.com/`.
- **Notes:** Encyklopedie knihy article on "Tiskař Korandy – Praha" identifies this as "the oldest Czech book with a table of contents." The 1493 print is the *one* surviving impression of Koranda's Eucharistic *Traktát*.

### 6. `Polon_Pomni_1589` — Polon, *Pomni na mne* (Staré Město Pražské: Buryan Valda, 1589)
- **Verdict:** OPEN-ACCESS-CONFIRMED
- **URL:** `https://play.google.com/store/books/details?id=IxwYCS0lKjsC`
- **Google Play ID:** `IxwYCS0lKjsC`
- **Access:** Free, full ebook (352 pp); also viewable at `https://books.google.com/books?id=IxwYCS0lKjsC`
- **Notes:** Full title on Google Play matches Source_Index exactly: "Pomni na mne: Knijžka obsahugjcý w sobě kratičká spasytedlná Naučenij a sebránij, o duchownjm podstatném wyswětlenij křestianského včenj a prawé pobožnosti..." Publisher "v Buryana Waldy" confirmed. Also surfaced a **second Polon work** on Google Play: "**Zpjwanj Křestianská Starodáwnj Chwál Božských...**" (id=87ZdyT1EYWsC) — a Czech *hymnological* witness by Polon that is potentially highly relevant to the TEPALIT lex-orandi thesis but is not in Source_Index. **New finding to flag for Michal** (additive, not a correction).

### 7. `Stelcar_Kazani_1586` — Štelcar Želetavský, *Kázání dvoje* (Prague 1586)
- **Verdict:** NOT FOUND DIGITALLY — **TITLE FLAGGED FOR REVIEW**
- **Acquisition pathway:** Physical copy.
- **⚠ NEW ISSUE FOR MICHAL'S REVIEW:** Knihoveda.lib.cas.cz record K15989 lists a 1586 Štelcar Želetavský work titled "**O marnosti žen a panen**" (Prague [no printer]), NOT "Kázání dvoje." The Source_Index title comes from David_1999 fns. 21, 83, 112 + David_Integrity_2005 p. 9 fn. 37 — David may have used a short-title abbreviation, or the title may differ between bibliographic editions. **Do NOT silently rename** — verify David's footnote against the Knihoveda record before any propagation. Per Gotchas.md discipline.

### 8. `Stelcar_Cirkev_1589` — Štelcar Želetavský, *Knížka o pravé a falešné církvi* (Prague: Buryán Valda, 1589)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy via Czech library / ILL.
- **Notes:** Title is confirmed in Czech Wikipedia article (Literature section) and Novák 1902 listy filologické. **NB:** Czech Wikipedia mentions a different 1588 Štelcar work ("Kniha duchovní") with a critical engagement with witchcraft, available on Google Books — distinct from the 1589 *Knížka o pravé a falešné církvi*. Three repository checks negative.

### 9. `Stelcar_Knezstvi_1592` — Štelcar Želetavský, *Kniha nová o púvodu kněžství Krista Pána* (Prague: Daniel Sedlčanský, 1592)
- **Verdict:** NOT FOUND DIGITALLY — **TITLE FLAGGED FOR REVIEW**
- **Acquisition pathway:** Physical copy.
- **⚠ NEW ISSUE FOR MICHAL'S REVIEW:** Knihoveda.lib.cas.cz record K15993 lists a 1592 Štelcar Želetavský Prague work titled "**Rytjřský Staw Manželský**" (Knightly Estate Marital). The Source_Index title "Kniha nová o púvodu kněžství Krista Pána" comes from David_1999 fn. 105. There is corroborating evidence for the *Kniha o púvodu kněžství* title in a separate academia.edu paper on Koranda Jr. ("O zpievaní a čtení českém tractat"), which cites Štelcar Želetavský "in his **New Book on the Origin of the Priesthood of Christ the Lord**" — confirming the Source_Index title against the secondary literature. **The most likely resolution:** Štelcar published *both* works in 1592 — one on marriage (the Knihoveda K15993 record) and one on priesthood (David's citation). **Do NOT rename**, but flag the bibliographic ambiguity for Michal. The Knihoveda record may not be the David-cited work; both may exist.

### 10. `Bruncvik_Ksaft_1613` — Bruncvík, *Testamenti nostri Iesu Christi pia et fida assertio. Kšaftu Večeře Páně...* (Prague: Matěj Pardubský, 1613)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy; check NK ČR online catalogue + Knihopis.
- **Notes:** Surprising negative result — given that *four other* Bruncvík works from 1613 are on Google Play (see Surprises section), the absence of the *Kšaftu Večeře Páně* is conspicuous. May indicate it was deposited at a different library or has not yet been digitised by the Google-BSB pipeline. Title is confirmed in `David_1999` fn. 81 + `David_Cohabitation_2000` p. 12 fn. 45.

### 11. `Bruncvik_Idolorum_1613` — Bruncvík, *Idolorum pia suplantatio. Kázání o tom, že obrazové* (Prague: Matěj Pardubský, 1613)
- **Verdict:** OPEN-ACCESS-CONFIRMED
- **URL:** `https://play.google.com/store/books/details?id=lzRjAAAAcAAJ`
- **Google Play ID:** `lzRjAAAAcAAJ`
- **Access:** Free, full ebook (48 pp)
- **Notes:** Full title verified: "Syn Tó Theó. IDoLorVM PIa SVPLantatIo. Kázanj o tom že Obrazowé gakož swaté Trogjce Boha w podstatě gediného newiditedlného a neobsáhlého tak y ginssý Swatých a Swětic, na něž poklona, wzýwánj a čest Božj se přenássij w Cýrkwi Páně trpjni býti nemagi: Obrazowé pak Hystoryčsstj že k samé Politij přináležj." Publisher "v Matěge Pardubského" confirmed. Source_Index entry is correct. The Latin chronogram in the title yields 1613 — Bruncvík's signature device.

### 12. `Bruncvik_Zrcadlo_1614` — Bruncvík, *Pravitatis et impletatis haereticae pia et fida ostensio. Zrcadlo kacířství* (Prague 1614)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy.
- **Notes:** Negative across repositories. **Important distinction:** Google Play *does* host a Bruncvík work with "Zrcadlo" in the title — "**Zrcadlo přehrozné... zkázy města Geruzaléma**" (id=F7tiAAAAcAAJ) — but this is a *Tenth-Sunday-after-Trinity* sermon on the destruction of Jerusalem, **not** the *Zrcadlo kacířství* anti-heresy treatise. Do NOT confuse these. Title for the target work is confirmed in `David_Integrity_2005` p. 8 fn. 28.

### 13. `Cykada_Hody_1607` — Cykáda, *Hody křesťanské* (Prague: Impressí Šumanská, 1607)
- **Verdict:** OPEN-ACCESS-CONFIRMED
- **URL:** `https://play.google.com/store/books/details?id=5jNfAAAAcAAJ`
- **Google Play ID:** `5jNfAAAAcAAJ`
- **Access:** Free, full ebook (255 pp)
- **Notes:** Full title verified: "Hody Křestianské na které Bůh Otec skrze Syna swého zuwe..." Publisher "w Jmpressý Ssumanské" confirmed against Source_Index "Impressí Šumanská" (orthographic variant only — Source_Index entry is correct). Page count of 255 indicates a substantial late-Utraquist liturgical-pastoral treatise.

### 14. `Rvacovsky_Masopust_1580` — Rvačovský, *Masopust* (Prague: Jiří Melantrich, 1580)
- **Verdict:** PARTIAL
- **Acquisition pathways:**
  - **Modern critical-format edition available:** *Massopust* (Vavřinec Leander Rvačovský ze Rvačova), ed. Dušan Šlosar, Nakladatelství Lidové noviny, Praha 2008, 572 pp, ISBN 9788071063445, Česká knižnice series. Antiquarian: `https://muj-antikvariat.cz/kniha/massopust-rvacovsky-ze-rvacova-vavrinec-leander-2008`. Contains Czech and Latin. Not described as full critical edition with apparatus but is a scholarly reprint.
  - **A different Rvačovský work** is freely accessible on Google Play: "**Wýklád na Modlitbu Páně welmi vtěssený**" (id=QehgAAAAcAAJ) — Rvačovský's commentary on the Lord's Prayer, a separate work from *Masopust*. Useful as a fallback Rvačovský witness if the 1580 original or the 2008 edition prove inaccessible.
  - **Physical 1580 imprint** held at Muzeum Komenského v Přerově (mentioned via Přerovský deník article 2026-02-12 on restoration work).

### 15. `Sturm_Ozvani_1584` — Šturm, *Krátké ozvání ... proti kratičkému ohlášení Jednoty Valdenské neb Boleslavské* (Prague: Jiřík Dačický, 1584)
- **Verdict:** OPEN-ACCESS-CONFIRMED
- **URL:** `https://play.google.com/store/books/details?id=uzFfAAAAcAAJ`
- **Google Play ID:** `uzFfAAAAcAAJ`
- **Access:** Free, full ebook (199 pp)
- **Notes:** Full title verified: "Krátké ozwánij Doktora Wácslawa Ssturma, proti kratičkému ohlássenij Gednoty Waldenské neb Boleslawské." Publisher "Jiří Jakubův Dačický" (= Source_Index "Jiřík Dačický" with full first name expanded) confirmed. The David-cited witness on Utraquist confessional identity in 1584 is now directly accessible.

### 16. `Walkmberger_Advent_1596` — Walkmberger, *Advent a Štědrý den* (Prague: Buryán Valda, 1596)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy.
- **Notes:** Three repository checks negative. Author name spelling variants (Walkmberger, Walkmberg, Walkmbergk, Sofian, Soffian) tried — no hits. This and Žatecký (item 17) are the two most obscure of the 17, with no surfaced digital trace. Source_Index citation comes from `David_1999` fn. 92.

### 17. `Zatecky_Pocta_1593` — Žatecký, *Knížka proti ošemetné poctě a pokryté Svatých*, ed. Štelcar Želetavský, 2nd ed. (Prague 1593)
- **Verdict:** NOT FOUND DIGITALLY
- **Acquisition pathway:** Physical copy.
- **Notes:** Three repository checks negative. The "Štelcar Želetavský as editor of Žatecký, 2nd ed." formulation is unusual and may complicate catalogue lookups (the work appears at the intersection of two author authority records). Source_Index citation from `David_1999` fns. 108, 109, 113.

---

## Surprises and new findings

### A. Two title discrepancies for Štelcar Želetavský — FLAGGED FOR MICHAL'S REVIEW

Per Gotchas.md (2026-05-10 entry on the Haberkern survey-correction), the agent did NOT silently apply any rename. These are flagged for human review:

1. **`Stelcar_Kazani_1586`** ("Kázání dvoje," Prague 1586) — Knihoveda record K15989 lists a 1586 Štelcar work titled "O marnosti žen a panen" instead. Source_Index title is from David's apparatus (4 footnote references in `David_1999` + 1 in `David_Integrity_2005`). Possibilities: (a) Štelcar published both in 1586; (b) David used a short-title abbreviation; (c) David's citation is to a different edition. **Resolution path:** Cross-check the David footnotes against Knihopis Online (the Czech national bibliography) before any propagation.

2. **`Stelcar_Knezstvi_1592`** ("Kniha nová o púvodu kněžství Krista Pána," Prague: Daniel Sedlčanský, 1592) — Knihoveda record K15993 lists a 1592 Štelcar Prague work titled "Rytjřský Staw Manželský" instead. However, the *Kniha o púvodu kněžství* title is corroborated by an independent academia.edu paper on Koranda Jr. by Holeton (citing Štelcar). **Likely resolution:** Štelcar published *both* works in 1592 (one on marriage, one on priesthood) and Knihoveda has indexed only the marriage one so far. **Do NOT rename.** Confirm both exist via Knihopis when access is available.

### B. Bruncvík has more digitised material than David cites

Google Play hosts at least **six** Bruncvík works (BSB digitisation pipeline), of which only ONE (Idolorum) matches Source_Index IX.B. The others are theologically adjacent and would significantly strengthen the §3 (Czech Lutheran profile) and §4.x source base:

| Title | Year | Google Play ID | TEPALIT relevance |
|---|---|---|---|
| *Ecclesia Catholica Christiani Agminis* (Kázání o Církvi Svaté Katholické) | 1607 | `HclhAAAAcAAJ` | **§4.2 directly** — Czech Lutheran ecclesiology |
| *Syn Tó Theó. Agonis Domini nostri Iesu Christi assertio* | 1613 | `LuxgAAAAcAAJ` | §4.1 (Christ's redemptive struggle) |
| *Syn tó theó. Michaelis Archangeli atque Hierarchiae Caelestis plena assertio* | 1613 | `KOxgAAAAcAAJ` | §4.4 (angelology, Czech Lutheran tradition) |
| *Idolorum pia suplantatio* | 1613 | `lzRjAAAAcAAJ` | **§4.4** — Source_Index IX.B match |
| *Zrcadlo přehrozné... zkázy města Jeruzaléma* | (Tenth Sun after Trinity sermon) | `F7tiAAAAcAAJ` | §4.x (eschatology) |
| *Limodis Epidemitica* (with Cykáda, 1606) | 1606 | `4O9gAAAAcAAJ` | **HIGHLY UNUSUAL** — co-authored Czech Lutheran + Utraquist plague sermon |

**The Limodis Epidemitica is the most striking discovery.** A 1606 plague sermon co-authored by **Cykáda (Utraquist) and Bruncvík (Czech Lutheran)** is direct evidence of *inter-confessional liturgical cooperation* between named Utraquist and Czech Lutheran theologians in the very period David argues they remained dogmatically distinct. This may complicate or reinforce David's argument depending on close reading — recommended **new entry** for Source_Index IX.B as `CykadaBruncvik_Limodis_1606`.

### C. Polon hymnological work not in Source_Index

Google Play hosts a **Czech-language hymnological work by Polon** — "**Zpjwanj Křestianská Starodáwnj Chwál Božských, kteráž se w shromážděnj Cýrkewnjm zpjwagij**" (id=`87ZdyT1EYWsC`). For a chapter centred on *lex orandi* and Czech-to-Slovak hymnological transfer, a hymn collection by a David-named late-Utraquist theologian (Polon) is a **first-tier acquisition**, possibly more valuable for §5 than several Source_Index IX.B items currently flagged HIGH. **Recommended new entry** `Polon_Zpivani` (year/printer to verify on first read).

### D. BSB-MDZ digitised the Bilejovský 1816 edition

This is foundational. The 1816 Skalický edition is the standard scholarly text of Bilejovský for all of 19th-, 20th-, and 21st-century citation (David, Holeton, Schoen all use it). It can be acquired now, gratis, with full IIIF — no Czech library card needed.

### E. Repository quirks encountered

- **Knihoveda.lib.cas.cz** is now protected by Anubis (DDoS mitigation software from TecharoHQ). Direct WebFetch returns access-denied. Use Google Search to surface specific record URLs, then access via browser.
- **Manuscriptorium** requires JS-rendered interactive search; direct UUID URLs work *if* you know the UUID a priori.
- **Google Books** redirects to `consent.google.com` for EU IPs, breaking automated fetches. Workaround: use Google Play Books URLs (`play.google.com/store/books/...`) which serve direct details pages.
- **MDPI Religions** (relevant Bydžovský 1554 article) returned 403 on automated fetch — interactive access likely fine.

### F. Bucket B (still 📋 after this hunt)

After this hunt, the following items remain unresolved digitally and require Michal's decision on acquisition route:

| Item | Bucket status | Recommended next step |
|---|---|---|
| `Bydzovsky_Detatka_1541` | 📋 (physical only) | NK ČR research-room consultation or ILL; consider 1539 Eucharist work (Google Play) as fallback |
| `Bydzovsky_Biskupove_1543` | 📋 | Knihopis Online lookup once Anubis is bypassed; physical NK ČR |
| `Bydzovsky_Martyrum_1554` | 📋 | MDPI Religions article (interactive access) for cited digital surrogate; physical NK ČR |
| `Koranda_Tractat_1493` | 📋 (very likely Manuscriptorium-digitised) | Manuscriptorium interactive search session (5–10 min) |
| `Stelcar_Kazani_1586` | 📋 + title flag | Knihopis Online; resolve Knihoveda K15989 vs. David citation |
| `Stelcar_Cirkev_1589` | 📋 | Knihopis Online; physical NK ČR |
| `Stelcar_Knezstvi_1592` | 📋 + title flag | Knihopis Online; resolve Knihoveda K15993 vs. David citation |
| `Bruncvik_Ksaft_1613` | 📋 | Check NK ČR online; conspicuous absence from Google Play given other Bruncvík digitisations |
| `Bruncvik_Zrcadlo_1614` | 📋 | NK ČR online; physical |
| `Walkmberger_Advent_1596` | 📋 | Knihopis Online; physical (very obscure) |
| `Zatecky_Pocta_1593` | 📋 | Knihopis Online; physical (very obscure) |

**Recommended next hunt:** A 30-minute Knihopis Online session (after Anubis access is solved or a different access route is found) targeting these eleven items. Knihopis is the Czech-Slovak national bibliography of 16-18c prints — every one of these works has a Knihopis number, and many Knihopis records now link directly to digitisation surrogates that aren't surfaced by general web search.

---

## Discipline notes (per Gotchas.md)

- No silent renames or "doesn't exist" claims applied. The two Štelcar title flags (items 7 and 9) are surfaced **as flags for Michal's review**, not as recommended corrections. The Knihoveda records show *different* Štelcar 1586/1592 titles, which may indicate (a) David's short-title abbreviation, (b) multiple Štelcar works per year, or (c) Knihoveda indexing gaps. Resolution requires Knihopis Online + close re-reading of David's footnotes.
- No additions to Source_Index applied. Three discoveries (Polon hymn-book, Cykáda+Bruncvík 1606 *Limodis*, four extra Bruncvík works) are surfaced as **recommended additions for Michal**, not as merge-ready entries.
- All URLs are verbatim, copy-paste-ready, with verified IDs.
- The "PARTIAL" verdict for Bydžovský 1541 and Rvačovský 1580 reflects honest uncertainty: a sibling work is available, but the target work itself is not.
