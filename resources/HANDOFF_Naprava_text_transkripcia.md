# HANDOFF — Transkripcia textu *Nápravy* (Halama 2003, Príloha)

**Cieľ:** čisté, citovateľné `.md` prepisy edovaného textu spisu *Náprava, čili Napomenutí* z Halamovej kritickej edície (Príloha ku knihe *Sociální učení českých bratří 1464–1618*, Brno: CDK 2003, text nasleduje za s. 226). Zdroj = 4 skenované segmenty.

## Vstupné súbory (v `resources/`)
- `Book 9 Jun 2026.pdf` — segment 1
- `Book 9 Jun 2026 (1).pdf` — segment 2
- `Book 9 Jun 2026 (2).pdf` — segment 3
- `Book 9 Jun 2026 (3).pdf` — segment 4
- (hotové, pre kontext) `Naprava_Napomenuti_uvodna_studia_transkript.md` (úvodná štúdia, s. 215–226), `Halama_2003_vybrana_bibliografia_transkript.md`, `Halama_2003_English_Summary_transkript.md`

## Prostredie (nutné)
Session musí mať **Filesystem MCP** (`list_allowed_directories`, `read_file`, `write_file`, `copy_file_user_to_claude`) + výpočtové prostredie s Pythonom (PyMuPDF, PIL, tesseract-ocr). Skeny sú **iba obrazové, bez textovej vrstvy** → text sa NEdá vytiahnuť cez `read_file`, treba vision-prepis. **Desktop Commander (`DC:read_file`, `DC:write_file`, `DC:edit_block`) je plnohodnotná alternatíva k Filesystem MCP** pre čítanie/zápis na disku — keď jeden timeoutuje, druhý zvyčajne funguje, takže ich pri prerušení skús prehodiť (v session segmentu 3 to potvrdené: DC fungoval, keď Filesystem padol, aj naopak).

> ⚠️ **PRERUŠENIE SESSION PRI ZÁPISE — diagnóza (revid. 2026-06-10):** Už **tri** session sa prerušili „pri zápise" cez MCP (timeout ~4 min). V session segmentu 3 (2026-06-10) padli **tri** MCP volania po 4-min timeoute — `Filesystem:read_file`, `Desktop Commander:read_file` aj finálny `Filesystem:write_file` push — pritom Desktop Commander na začiatku tej istej session bežal normálne, takže prerušenie prišlo v priebehu práce (konzistentné s výpadkom tunela, nie s mŕtvym serverom od štartu). **Príčina stále nie je s istotou určená,** ale VPN/sieťová hypotéza (a) ostáva najpravdepodobnejšia. **Praktický záver:** (1) **udržuj VPN pripojené** počas celej práce s MCP; (2) **minimalizuj počet dlhých MCP zápisov** — akumuluj lokálne a pushni raz (viď krok 5); (3) **vždy maj poistku** cez `/mnt/user-data/outputs` + `present_files` (viď krok 5), aby výsledok dobehol aj keď MCP padne.

## Pipeline (overený postup, revidovaný 2026-06-10)
1. `Filesystem:copy_file_user_to_claude` — skopíruj segment do výpočtového prostredia.
2. Render strán na PNG (PyMuPDF, ~200–220 dpi). Pri hustom aparáte spraviť prekrývajúce sa polovice (horná 0–54 %, dolná 46–100 %) pre čitateľnosť.
3. Auto-orientácia: `tesseract … --psm 0` (OSD) na každú stranu — skeny **môžu** mať striedavo strany otočené o 180° (v segmente 1 boli všetky upright; v ďalších segmentoch overiť!); podľa „Rotate: N" rotuj PIL-om na výšku.
4. `view` každú stranu (resp. polovice) → prepíš zrakom (presnejšie než OCR pri češtine so spřežkami).
5. **ZÁPIS — postup odolný voči prerušeniu (REVIDOVANÉ 2026-06-10 po session segmentu 3):**
   - ⛔ **NEPOUŽÍVAJ bash heredoc na zápis českého textu.** Sekvencia „Též" (a všeobecne „é"/„ě" na začiatku riadku) sa pri `cat >> seg.md << 'TXTEOF' … TXTEOF` **deterministicky** poškodzuje — vypadáva vodiaci bajt UTF-8 (`C3` pred `A9` v „é", `C4` pred `9B` v „ě"). V session segmentu 3 to udrelo **3×**, raz dokonca priamo v stdin pipeline Pythonu (`SyntaxError: Non-UTF-8 code`). Self-healing z predošlých session bol klamlivý — nespoliehaj sa naň.
   - ✅ **SPRÁVNY POSTUP — `create_file` + Python-append (overené, žiadna korupcia):**
     - Každú stranu napíš ako samostatný chunk cez **`create_file`** tool (obchádza shell úplne → žiadne byte-mangling): `create_file(path="/home/claude/segN/chunk_NNN.md", file_text="…")`.
     - Hneď appenduj do hlavného súboru cez **Python** (NIE cez `>>`) a rovno validuj:
       ```
       python3 -c "
       c = open('/home/claude/segN/chunk_NNN.md',encoding='utf-8').read()
       open('/home/claude/segN/segN.md','a',encoding='utf-8').write(c)
       open('/home/claude/segN/segN.md',encoding='utf-8').read()  # validácia
       print('total chars:', len(open('/home/claude/segN/segN.md',encoding='utf-8').read()))"
       ```
     - Každý zápis je tým okamžite validovaný a nič sa nekorumpuje.
   - **Finálny push do `resources/`:** pushni kompletný súbor jediným **`Filesystem:write_file`** do `resources/Naprava_text_segmentN_transkript.md`. (Keď MCP beží, funguje spoľahlivo — pri segmentoch 1–2 zapísal aj 38 kB súbor s plnou diakritikou a hornými indexmi byte-for-byte.)
   - 🛟 **POISTKA (povinná) pre prípad, že MCP padne:** súbor zároveň skopíruj cez bash do `/mnt/user-data/outputs/Naprava_text_segmentN_transkript.md` a daj `present_files`. V session segmentu 3 finálny `Filesystem:write_file` vytimeoutoval (4 min) a Michal nahral súbor ručne práve z outputs — takto to spoľahlivo dobehne aj pri spadnutom tuneli.
   - Pred odovzdaním **vždy** kontrola validity: `python3 -c "t=open('…segN.md',encoding='utf-8').read(); print('OK', len(t), 'chars; replacement:', t.count(chr(0xfffd)))"`. Ak by sa predsa objavili bare-bajty z minulosti (`A9` bez `C3`, `9B` bez `C4`), oprav ich vložením vodiaceho bajtu.

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
- [x] **Segment 3** (`Book 9 Jun 2026 (2).pdf`) — **HOTOVÉ + AUDITOVANÉ 2026-06-10.** 16 strán = edičné s. **258–273** (fol. LXXXV–CXXX, sign. D3b–E8b). Výstup: `Naprava_text_segment3_transkript.md` (35 394 B, valid UTF-8, 0 náhradných znakov, 0 control-chars; 16 blokov aparátu + 9 editorských poznámok ¹⁹–³⁰; 5×`###` kapitola, 8×`####` podkapitola). Obsah: dokončenie „Zase napravení čeledi nájemné", potom *Napravení při živnostech a obchodích*, *Napravení řemeslníků*, *Náprava při užívání pokrmů a nápojů*, *Náprava při užívání roucha*, *Napravení v bytí společném s jinými* (s podkapitolkami V sousedství / V cechu / Na rathauze / Soudcové po Zbořích / Ku pánům a vrchnostem / K ouředníkům / K úřadům / Ouředníci pak a služebníci). Nadviazalo plynulo na s. 257→258. Žiadne ⚠ — čítania čisté na všetkých 16 stranách; skeny všetky upright (Rotate: 0). Pekný kúsok pre Locus 3: pozn. 28 (identifikácia bratského spisu *O soudu* cez Říčana a Dekrety 1557). **Pozn. k MCP:** finálny `Filesystem:write_file` push vytimeoutoval (4 min, spadnutý tunel); súbor odovzdaný cez `/mnt/user-data/outputs` + `present_files` a nahraný do `resources/` ručne — preto bol vynútený revidovaný postup zápisu v kroku 5. Text končí uprostred vety na s. 273 („…Pánů zlých, hanebných ožralců a jiných hříšníků nestydatých…") vnútri kapitolky „Ouředníci pak a služebníci k svým pánům" — pokračuje v segmente 4 na s. 274.
- [ ] **Segment 4** (`Book 9 Jun 2026 (3).pdf`) — **POSLEDNÝ segment.** Začať na edičnej s. **274**, nadviazať dokončením vety z konca segmentu 3 („…Pánů zlých, hanebných ožralců a jiných hříšníků nestydatých…") vnútri kapitolky „Ouředníci pak a služebníci k svým pánům". Posledná pagina tlače 1584 v segmente 3 = ‹CXXX› (sign. E8b) → pokračuj v rímskej paginácii od CXXXI a v číslovaní editorských poznámok od ³¹. Obsahuje záver spisu (závěrka) a textovo-kritický záver edície. Po dokončení: spustiť integrity audit, navrhnúť zlúčenie segmentov 1–4 do `Naprava_text_uplny_transkript.md`.
