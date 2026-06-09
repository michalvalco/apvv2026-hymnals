# HANDOFF — Transkripcia textu *Nápravy* (Halama 2003, Príloha)

**Cieľ:** čisté, citovateľné `.md` prepisy edovaného textu spisu *Náprava, čili Napomenutí* z Halamovej kritickej edície (Príloha ku knihe *Sociální učení českých bratří 1464–1618*, Brno: CDK 2003, text nasleduje za s. 226). Zdroj = 4 skenované segmenty.

## Vstupné súbory (v `resources/`)
- `Book 9 Jun 2026.pdf` — segment 1
- `Book 9 Jun 2026 (1).pdf` — segment 2
- `Book 9 Jun 2026 (2).pdf` — segment 3
- `Book 9 Jun 2026 (3).pdf` — segment 4
- (hotové, pre kontext) `Naprava_Napomenuti_uvodna_studia_transkript.md` (úvodná štúdia, s. 215–226), `Halama_2003_vybrana_bibliografia_transkript.md`, `Halama_2003_English_Summary_transkript.md`

## Prostredie (nutné)
Session musí mať **Desktop Commander** (čítanie/zápis do repa na Windows) + **Filesystem MCP** (`copy_file_user_to_claude`) + výpočtové prostredie s Pythonom (PyMuPDF, PIL, tesseract-ocr). Skeny sú **iba obrazové, bez textovej vrstvy** → text sa NEdá vytiahnuť cez `read_file`, treba vision-prepis.

## Pipeline (overený postup)
1. `Filesystem:copy_file_user_to_claude` — skopíruj segment do výpočtového prostredia.
2. Render strán na PNG (PyMuPDF, ~220 dpi).
3. Auto-orientácia: `tesseract … --psm 0` (OSD) na každú stranu — skeny majú striedavo strany otočené o 180°; podľa „Rotate: N" rotuj PIL-om na výšku.
4. `view` každú stranu → prepíš zrakom (presnejšie než OCR pri češtine so spřežkami).
5. Zápis čistého `.md` priamo do `resources/` cez `Desktop Commander:write_file` — `mode='rewrite'` pre prvý blok, potom `mode='append'` po ~25–35 riadkoch. **Nikdy** `Filesystem:write_file` (ticho prepisuje).

## Konvencie prepisu
- Verný český text Halamovej edície; nemodernizovať nad rámec toho, čo edícia sama urobila (porov. „Ke způsobu přepisu textů", úvodná štúdia s. 225–226).
- Zachovať členenie na kapitolky (předmluva, 1–27, závěrka) ako nadpisy.
- Hranice strán originálu (1584 = rímske I–CLIX) značiť `[s. NNN]` tak, ako ich edícia uvádza.
- Textovo-kritický aparát / poznámky prepisovať verne; číslovanie zachovať.
- Neisté čítania (sigly, čísla, dobové tvary) označiť `⚠`.
- V hlavičke krížový odkaz na úvodnú štúdiu + **kalibračnú poznámku**: *Náprava* = lived/eticko-sociálna theológia, nie konfesijný normatív (Locus 3, okrajovo Locus 1).

## Výstup (názvy)
- `Naprava_text_segment1_transkript.md` … `_segment4_transkript.md`; po dokončení možno zlúčiť do `Naprava_text_uplny_transkript.md`.

## Status
- [~] Segment 1 (`Book 9 Jun 2026.pdf`) — ROZPRACOVANÉ (začaté 2026-06-09)
- [ ] Segment 2 (`Book 9 Jun 2026 (1).pdf`)
- [ ] Segment 3 (`Book 9 Jun 2026 (2).pdf`)
- [ ] Segment 4 (`Book 9 Jun 2026 (3).pdf`)
