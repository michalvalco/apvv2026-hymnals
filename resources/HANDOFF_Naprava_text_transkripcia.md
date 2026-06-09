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

> ⚠️ **DIAGNÓZA ZAMŔZANIA (2026-06-09):** `Desktop Commander:write_file` **zamŕza** (timeout ~4 min, lokálny DC server nereaguje) — práve toto zmrazilo dve session „pri zápise". **Filesystem MCP funguje spoľahlivo.** Pozri upravený krok 5 nižšie.

## Pipeline (overený postup, revidovaný 2026-06-09)
1. `Filesystem:copy_file_user_to_claude` — skopíruj segment do výpočtového prostredia.
2. Render strán na PNG (PyMuPDF, ~200–220 dpi). Pri hustom aparáte spraviť prekrývajúce sa polovice (horná 0–54 %, dolná 46–100 %) pre čitateľnosť.
3. Auto-orientácia: `tesseract … --psm 0` (OSD) na každú stranu — skeny **môžu** mať striedavo strany otočené o 180° (v segmente 1 boli všetky upright; v ďalších segmentoch overiť!); podľa „Rotate: N" rotuj PIL-om na výšku.
4. `view` každú stranu (resp. polovice) → prepíš zrakom (presnejšie než OCR pri češtine so spřežkami).
5. **ZÁPIS — freeze-odolný postup (NIE Desktop Commander):**
   - Prepis **akumuluj lokálne** vo výpočtovom prostredí cez bash quoted-heredoc: `cat >> seg1.md << 'TXTEOF' … TXTEOF` (zachová unicode ᵃ ⚠ aj diakritiku). Žiadne MCP zápisy počas práce → nemôže zamrznúť.
   - Na koniec **pushni kompletný súbor jediným `Filesystem:write_file`** do `resources/`.
   - ⚠️ **Pozor na unicode pri heredocu:** slovo „Též" sa pri zápise cez heredoc sporadicky poškodilo (vypadol vodiaci bajt `C3` z „é" → samostatný `A9`, nevalidné UTF-8). Pred pushom **vždy** spustiť kontrolu validity (`python3 -c "open('seg1.md',encoding='utf-8').read()"`) a opraviť bare-bajty (`A9` bez vodiaceho `C3` → vlož `C3`).

## Konvencie prepisu
- Verný český text Halamovej edície; nemodernizovať nad rámec toho, čo edícia sama urobila (porov. „Ke způsobu přepisu textů", úvodná štúdia s. 225–226).
- Zachovať členenie na kapitolky (předmluva, 1–27, závěrka) ako nadpisy.
- Hranice strán originálu (1584 = rímske I–CLIX) značiť `[s. NNN]` tak, ako ich edícia uvádza.
- Marginálne kódy fóliácie/signatúry vkladať pozične pri zlome ako `` `‹A8b›` `` / `` `‹XX›` `` (za celé slovo obsahujúce zlomový znak `|`); marginálne biblické odkazy ako `‹marg. Žalm 5.›`.
- Textovo-kritický aparát / poznámky prepisovať verne; číslovanie zachovať. Každá strana = blok `**Aparát [s. NNN]:**` (príp. `**Editorské poznámky [s. NNN]:**` pre číslované editorove identifikácie).
- Neisté čítania (sigly, čísla, dobové tvary) označiť `⚠`.
- V hlavičke krížový odkaz na úvodnú štúdiu + **kalibračnú poznámku**: *Náprava* = lived/eticko-sociálna theológia, nie konfesijný normatív (Locus 3, okrajovo Locus 1).

## Výstup (názvy)
- `Naprava_text_segment1_transkript.md` … `_segment4_transkript.md`; po dokončení možno zlúčiť do `Naprava_text_uplny_transkript.md`.

## Status
- [x] **Segment 1** (`Book 9 Jun 2026.pdf`) — **HOTOVÉ 2026-06-09.** 15 strán = edičné s. **227–241** (fol. A1a–B5a, rím. I–XXXVII). Výstup: `Naprava_text_segment1_transkript.md` (valid UTF-8, 15 strán, 17 blokov aparátu/poznámok). Segment končí uprostred vety na s. 241 („…a nepotlačování[k]…") — pokračuje v segmente 2 na s. 242.
- [ ] Segment 2 (`Book 9 Jun 2026 (1).pdf`) — začať na edičnej s. 242, nadviazať na „…a nepotlačování".
- [ ] Segment 3 (`Book 9 Jun 2026 (2).pdf`)
- [ ] Segment 4 (`Book 9 Jun 2026 (3).pdf`)
