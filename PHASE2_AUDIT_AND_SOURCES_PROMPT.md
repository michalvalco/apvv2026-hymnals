# Phase 2 Session: Audit of Existing Materials + Digital Source Hunt

**Paste this into a new conversation in the TEPALIT Claude Desktop Project.**

---

## Prompt

TEPALIT chapter, Phase 2 — Materials Audit and Digital Source Acquisition. Two tasks in sequence.

### TASK 1: Audit of Pre-Existing Materials

I have an original research folder at `C:\Users\valco\OneDrive\Documents\04 Projekty\2025 APVV Hymnals Klatik\Monografia\Resources\` containing:

**AI-generated research reports (UNVERIFIED — treat with extreme caution):**
- `Report 01 CHAT Eucharist Doctrines_ Comparative Study.docx` — ChatGPT report on Eucharistic comparison
- `Report 01 Claude - Protestant Eucharistic Theology in 16th-17th Century Central Europe.docx`
- `Report 01 GEM Eucharist Doctrines_ Comparative Study.docx` — Gemini report, same topic
- `Report 02 CHAT - The Body of Christ Divided.docx` — ChatGPT on ecclesiology
- `Report 02 Claude - Ecclesiological Convergence and Divergence.docx`
- `Report 02 GEM - The Body of Christ Divided.docx`
- `Report 03 CHAT - Hymnological Transfer_ Czech Reformation to Lutheranism.docx` — ChatGPT on hymn transfer
- `Report 03 Claude - Hymnographical Transmission from Unity of Brethren to Slovak Lutheranism.docx`
- `Report 03 GEM - Hymnological Transfer_ Czech Reformation to Lutheranism.docx`
- `Report General - GEM.docx` and `Report General - Sider.docx`

**Other existing materials:**
- `comparative hymnological study strategy and links.docx` — strategy document with database links and hymn identification methodology
- `compass_artifact_markdown.md` — extensive ecclesiology study covering all three traditions and Confessio Bohemica
- `Agenda Ceska a TEPALIT Detailed Annotated Bibliography.docx` — bibliography
- `Agenda Ceska - Find the text of Agenda Česká from 1581 Perp.pdf` — Perplexity search report
- `Agenda Ceska 1581 a Agenda 1615 - transcripts incomplete.docx` — partial transcriptions
- `agenda_ceska_tepalit_mapping csv.docx` and `Agenda Ceska summary csv.docx` — structural mapping

**Also:** The annotation/outline document at `C:\Users\valco\OneDrive\Documents\04 Projekty\2025 APVV Hymnals Klatik\Monografia\Valčo - Dogmatická komparácia luteranizmu a českých konfesií - Anotácia a osnova 02.docx` contains the master primary source list with URLs.

**What I need you to do:**

1. **Read the annotation document's source list** (Section B: "Kľúčové Zdroje") and cross-reference it against our current `Sources/Source_Index.md`. Identify any sources listed in the annotation that are NOT yet in the Source_Index, and add them.

2. **Scan each AI report** (Reports 01–03, all three engines + the General reports). For each:
   - Extract any **specific hymn identifications** (named hymns traced from Brethren/Utraquist sources to CS) — these are high-value leads even if the surrounding analysis is unreliable.
   - Extract any **specific citations to peer-reviewed scholarship** not already in our Source_Index — these need verification but are worth checking.
   - Extract any **analytical angles or arguments** that are genuinely useful for our chapter, noting which report they come from. Flag anything that looks fabricated or unsupported.
   - **Do NOT trust page numbers, direct quotations, or bibliographic details** from these reports without independent verification.

3. **Read the "comparative hymnological study strategy and links.docx"** and the **compass_artifact_markdown.md**. Extract any useful analytical material or source leads not already captured in our working repo.

4. **Write a synthesis report** to `resources/audit-legacy-materials-YYYY-MM-DD.md` with:
   - Sources to add to Source_Index
   - Hymn identifications to pursue (with provenance: which report, which engine)
   - Analytical angles worth developing
   - Material confirmed as superseded by our current work
   - Anything flagged as likely hallucinated

### TASK 2: Digital Source Hunt

Using the primary source list from the annotation document AND our current `Sources/Source_Index.md`, systematically search for **downloadable digital versions** of primary sources we don't yet have. Prioritise:

**Hymnals (highest priority for §5):**
- Šamotulský kancionál (1561) — check Kramerius NK ČR, Manuscriptorium, Biblioteka Raczyńskich Poznań
- Ivančický kancionál (1564) — verify the Kramerius MZK UUID and Manuscriptorium Polička link
- Prvý kancionál Jednoty (1501) — any digitised copy?
- Rohov kancionál (1541) — any digitised copy?
- Kunvaldského kancionál (1576) — Sekelská 2019 uses it extensively
- Závorkov kancionál (1602) — Sekelská 2019 uses it extensively
- Cithara Sanctorum — verify the Kramerius MZK UUID; check REAL-R for 1636 first edition fragments
- Any CS edition with accessible full-text scans (1653, 1674, 1684, 1696, or 1741)

**Confessional documents:**
- Confessio Bohemica 1575 — find a working English translation URL (Moravian Archives old URLs are dead)
- Confessio Fidei 1535 — we have this, but verify the Moravian Archives URL still works
- Just/Rothkegel 2012 critical edition of CB — any open-access excerpt or preview?
- Csepregi/Kónya *Tri lutherské vyznania viery z Uhorska* — check for digital access

**Liturgical sources:**
- Bratská agenda (Unity of Brethren liturgical order, 1580/1612) — annotation lists Kramerius VKOL link for 1585 edition
- Agenda Rambachiana (1637) — any digital access?
- Missale Pragense (Utraquist use) — any digitised exemplar?

**Databases to search:**
- Kramerius MZK (kramerius.mzk.cz) — federated search via digitalniknihovna.cz
- Kramerius NKP (kramerius.nkp.cz)
- Manuscriptorium (manuscriptorium.com)
- HTB (clavmon.cz/htb) — browse mode only (no programmatic access)
- Google Books
- Archive.org
- Bayerische Staatsbibliothek Digital (for Liber Concordiae 1580)

**Output:** Update `Sources/Source_Index.md` with verified URLs/access notes for every source where digital access was found. For sources confirmed as unavailable digitally, note this with a brief explanation.

### Context

Our working repo is at `C:\Users\valco\OneDrive\Documents\GitHub\apvv2026-hymnals\`. Refer to `CLAUDE.md` for project identity, `Source_Index.md` for current source registry, and `Revision_Notes.md` for standing issues. All new files go to the working repo, not the original Resources folder.

### Constraints
- Write outputs directly to the working repo using Desktop Commander or Filesystem tools — **never to the internal Linux container**.
- AI reports are heuristic guides only. Flag every claim that needs verification.
- Prefer peer-reviewed sources; note when a source is non-academic.
- Use my annotation document's URL list as a starting point but test every link — many may be broken.
