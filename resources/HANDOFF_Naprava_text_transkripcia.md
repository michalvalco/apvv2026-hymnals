# HANDOFF — Transkripcia textu *Nápravy* (Halama 2003, Príloha)

**Cieľ:** čisté, citovateľné `.md` prepisy edovaného textu spisu *Náprava, čili Napomenutí* z Halamovej kritickej edície (Príloha ku knihe *Sociální učení českých bratří 1464–1618*, Brno: CDK 2003, text nasleduje za s. 226). Zdroj = 4 skenované segmenty.

## Vstupné súbory (v `resources/`)
- `Book 9 Jun 2026.pdf` — segment 1
- `Book 9 Jun 2026 (1).pdf` — segment 2
- `Book 9 Jun 2026 (2).pdf` — segment 3
- `Book 9 Jun 2026 (3).pdf` — segment 4
- (hotové, pre kontext) `Naprava_Napomenuti_uvodna_studia_transkript.md` (úvodná štúdia, s. 215–226), `Halama_2003_vybrana_bibliografia_transkript.md`, `Halama_2003_English_Summary_transkript.md`

## Prostredie (nutné)
Session musí mať **Filesystem MCP** (`list_allowed_directories`, `read_file`, `write_file`, `copy_file_user_to_claude`) + výpočtové prostredie s Pythonom (PyMuPDF, PIL, tesseract-ocr). Skeny sú **iba obrazové, bez textovej vrstvy** → text sa NEdá vytiahnuť cez `read_file`, treba vision-prepis.

> ⚠️ **PRERUŠENIE SESSION PRI ZÁPISE — diagnóza (revid. 2026-06-09):** Dve session sa prerušili „pri zápise" cez MCP (timeout ~4 min). **Príčina nie je s istotou určená.** Dve hypotézy: (a) **výpadok sieťového spojenia** — napr. vypnutie/odpojenie VPN počas procesu (Michalova hypotéza; sedí na symptóm: spadnutý tunel → prerušené MCP → klient po ~4 min ohlási timeout, vyzerá to ako zamrznutý zápis); (b) nereagujúci lokálny Desktop Commander server. Odlíšiť ich zvnútra session nevieme. **Praktický záver bez ohľadu na príčinu:** (1) **udržuj VPN pripojené** počas celej práce s MCP; (2) **minimalizuj počet dlhých MCP zápisov** — radšej akumuluj lokálne a pushni raz (viď krok 5). Menej dlhých MCP operácií = menšia plocha na prerušenie akéhokoľvek pôvodu.

## Pipeline (overený postup, revidovaný 2026-06-09)
1. `Filesystem:copy_file_user_to_claude` — skopíruj segment do výpočtového prostredia.
2. Render strán na PNG (PyMuPDF, ~200–220 dpi). Pri hustom aparáte spraviť prekrývajúce sa polovice (horná 0–54 %, dolná 46–100 %) pre čitateľnosť.
3. Auto-orientácia: `tesseract … --psm 0` (OSD) na každú stranu — skeny **môžu** mať striedavo strany otočené o 180° (v segmente 1 boli všetky upright; v ďalších segmentoch overiť!); podľa „Rotate: N" rotuj PIL-om na výšku.
4. `view` každú stranu (resp. polovice) → prepíš zrakom (presnejšie než OCR pri češtine so spřežkami).
5. **ZÁPIS — postup odolný voči prerušeniu:**
   - Prepis **akumuluj lokálne** vo výpočtovom prostredí cez bash quoted-heredoc: `cat >> seg1.md << 'TXTEOF' … TXTEOF` (zachová unicode ᵃ ⚠ aj diakritiku). Počas práce žiadne MCP zápisy → nič sa neprerušuje.
   - Na koniec **pushni kompletný súbor jediným `Filesystem:write_file`** do `resources/`. (Funguje spoľahlivo; `Filesystem:write_file` korektne zapísal aj 38 kB súbor s plnou diakritikou a hornými indexmi a spätné čítanie ho potvrdilo byte-for-byte.)
   - ⚠️ **Pozor na unicode pri heredocu:** slovo „Též" sa pri zápise cez heredoc sporadicky poškodilo (vypadol vodiaci bajt `C3` z „é" → samostatný `A9`, nevalidné UTF-8). Pred pushom **vždy** spustiť kontrolu validity (`python3 -c "open('seg1.md',encoding='utf-8').read()"`) a opraviť bare-bajty (`A9` bez vodiaceho `C3` → vlož `C3`; `9B` bez `C4` → vlož `C4` pre „ě"). V segmente 2 sa takto self-healnulo niekoľko výskytov „Též".

## Konvencie prepisu
- Verný český text Halamovej edície; nemodernizovať nad rámec toho, čo edícia sama urobila (porov. „Ke způsobu přepisu textů", úvodná štúdia s. 225–226).
- Zachovať členenie na kapitolky (předmluva, 1–27, závěrka) ako nadpisy.
- Hranice strán originálu (1584 = rímske I–CLIX) značiť `[s. NNN]` tak, ako ich edícia uvádza.
- Marginálne kódy fóliácie/signatúry vkladať pozične pri zlome ako `` `‹A8b›` `` / `` `‹XX›` `` (najlepšie tesne za slovo obsahujúce zlomový znak `|`); marginálne biblické odkazy ako `‹marg. Žalm 5.›`.
- Textovo-kritický aparát / poznámky prepisovať verne; číslovanie zachovať. Každá strana = blok `**Aparát [s. NNN]:**` (príp. `**Editorské poznámky [s. NNN]:**` pre číslované editorove identifikácie).
- Neisté čítania (sigly, čísla, dobové tvary) označiť `⚠`.
- V hlavičke krížový odkaz na úvodnú štúdiu + **kalibračnú poznámku**: *Náprava* = lived/eticko-sociálna theológia, nie konfesijný normatív (Locus 3, okrajovo Locus 1).
- **Konzistencia (z auditu segmentu 1):** držať jednotný formát značiek naprieč celým spisom (segment 1 mal na s. 227–228 kombinovaný formát `[A1b / II]`, od s. 229 `‹kód›`/`‹marg.…›` — pre ďalšie segmenty použiť dôsledne ten druhý). Fóliový kód umiestňovať čo najbližšie k `|`. Edičné deliace spojovníky (napr. „k či-nění") pri prepise zatvárať na celé slovo.

## Výstup (názvy)
- `Naprava_text_segment1_transkript.md` … `_segment4_transkript.md`; po dokončení možno zlúčiť do `Naprava_text_uplny_transkript.md`.

## Status
- [x] **Segment 1** (`Book 9 Jun 2026.pdf`) — **HOTOVÉ + AUDITOVANÉ 2026-06-09; drobnosti uzavreté 2026-06-09.** 15 strán = edičné s. **227–241** (fol. A1a–B5a, rím. I–XXXVII). Výstup: `Naprava_text_segment1_transkript.md` (valid UTF-8, 15 strán, 17 blokov aparátu/poznámok). Vizuálny audit oproti skenom: vecne presné na všetkých 15 stranách. Uzavreté drobnosti z auditu: (1) s. 237 hlavný text — overené oproti skenu, číta sa správne „vyučiliᵇ" (bežné „i" + horný index ᵇ; žiaden chybný horný index ⁱ), bez zásahu; (2) s. 235 aparát ᵃ — overené oproti tlačenej edícii: W-variant je naozaj „vaších" (dlhé í), základ/1553 „vašich"; ⚠ odstránené. Segment končí uprostred vety na s. 241 („…a nepotlačování[k]…") — pokračuje v segmente 2 na s. 242.
- [x] **Segment 2** (`Book 9 Jun 2026 (1).pdf`) — **HOTOVÉ + OVERENÉ 2026-06-09.** 16 strán = edičné s. **242–257** (fol. XXXVIII–LXXXIIII, sign. B5b–D3a). Výstup: `Naprava_text_segment2_transkript.md` (38 030 B, valid UTF-8, 0 náhradných znakov, 0 bare-bajtov; 16 blokov aparátu + 6 editorských poznámok; 7×`###` kapitola, 2×`####` podkapitola). Spätné čítanie z disku: **byte-for-byte zhodné** s overeným originálom (special chars ᵃ–ᵏ, ‹›, „", –, —, ⚠, → prešli neporušené). Nadviazalo plynulo na s. 241 („…a nepotlačování" → „ani odsuzování žádného…"). Otvorená drobnosť: s. 257 okrajové odkazy „Efez. 6, 1" / „Tim. 6" — pri prepise interpretované ako Ef 6 + 1 Tim 6 (podľa pozn. ¹⁸ = Ef 6,6; 1 Tm 6,1), s ⚠ poznámkou v súbore. Text končí uprostred spisu na s. 257 (kapitolka „Zase napravení čeledi nájemné") — pokračuje v segmente 3.
- [ ] Segment 3 (`Book 9 Jun 2026 (2).pdf`) — začať na edičnej s. 258, nadviazať na koniec kapitolky „Zase napravení čeledi nájemné".
- [ ] Segment 4 (`Book 9 Jun 2026 (3).pdf`)
