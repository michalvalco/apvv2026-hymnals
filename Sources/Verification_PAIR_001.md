# Verification Dossier — PAIR_001_AY_PANNA

**Status:** Phase 2 reconnaissance complete; in-person collation **not yet performed**.
**Last updated:** 2026-05-08
**Subject pair:** `PAIR_001_AY_PANNA` — Marian redaction *Zdrawa genž sy pozdrawena* (Kolínský kancionál 1517) → *Ay Panna gest pozdravená* (Cithara Sanctorum 1636).
**Current trust signature:** `FACTUAL` / `DOCUMENTED` / `SECONDARY_ONLY`.

This dossier documents the verification reconnaissance carried out on 2026-05-07, what was found, what remains pending, and the precise next steps required to upgrade `verification_status` from `SECONDARY_ONLY` through `PRIMARY_PENDING` to `VERIFIED`.

---

## 1. What is being verified

The PAIR_001 dossier rests on a single peer-reviewed claim:

> Tranovský altered the original Utraquist Marian text from the Kolínský kancionál (1517) "to prevent any allusions or hints of Catholicism" — Grešová-Sekelská, *Príspevok k vzniku a obsahu Cithary sanctorum (1636)*, *Clavibus unitis* 10/4 (2021), p. 9.

To upgrade the trust signature, the project needs to:

- (a) consult the **Kolínský kancionál 1517** for the source incipit *Zdrawa genž sy pozdrawena*,
- (b) consult the **Cithara Sanctorum 1636** for the receptor incipit *Ay Panna gest pozdravená*,
- (c) directly compare the two texts and document the modification typology with concrete line-level evidence.

Step (a) is the harder of the two — the manuscript is not open-access digitised; the canonical critical edition (Baťová 2011) is print-only.

---

## 2. Reconnaissance findings (2026-05-07)

### 2.1 Kolínský kancionál 1517

| Aspect | Finding |
|---|---|
| Repository | **Regionální muzeum v Kolíně** (no shelfmark located online; 2026 contact may be needed). |
| Bibliographic identity | First preserved Czech independent handwritten kancionál; key source for early-16th-c. Utraquist liturgy and for the Brethren-singing tradition. |
| Index entry | **Hymnorum Thesaurus Bohemicus (HTB)** — http://www.clavmon.cz/htb/ — confirmed as the master index. The HTB search interface (`vyhledIncip.asp?meno=...`) accepts incipit queries; was not reachable from the verification sandbox (anti-bot 403). |
| Critical edition | **Baťová, Eliška. *Kolínský kancionál z roku 1517 a bratrský zpěv na počátku 16. století.* Praha: Koniasch Latin Press, 2011 (Primitiae sv. 4), 190 pp. ISBN 978-80-86791-84-5.** Includes index of Czech and Latin incipits, name index, English summary. **Print only — confirmed as the canonical reference for incipit verification.** Now registered as `Batova_2011` in `Sources/Source_Index.md`. |
| Adjacent secondary | Grešová-Sekelská 2021 (`GresovaSek_Prispevok`) identifies Kolínský 1517 as the single largest melodic source for older Czech repertoire absorbed into CS (p. 6). |
| Adjacent thesis | Charles University thesis [DPTX_2008_1_11210](https://dspace.cuni.cz/bitstream/handle/20.500.11956/25031/) (Brünner; FFUK Music Studies, 2008) may contain related cataloguing — not yet inspected. |

### 2.2 Cithara Sanctorum 1636

| Aspect | Finding |
|---|---|
| Surviving exemplars | No complete first-edition copy survives. Defective fragments at: EČCB Praha (II.T.31), Széchényi National Library Budapest (RMK II.505b), Liptovský Mikuláš (microfilm), Martin, Prague, Valašské Meziříčí. (Per Grešová-Sekelská 2021, p. 4.) |
| Open-access digital edition (text) | **Zlatý fond SME** — https://zlatyfond.sme.sk/dielo/980/Tranovsky_Cithara-sanctorum-Dil-1-Pisne-duchovni-k-casum-zasvecenym-cirkevniho-roku/1 — page-1 landing of an electronic text edition of CS Part I. **Anti-bot blocked from this sandbox.** Worth opening in a browser to test whether the BVM rubric is included. |
| Facsimile repositories | REAL-R (Hungarian Academy) — http://real-r.mtak.hu/; Kramerius MZK — https://kramerius.mzk.cz/ . Both blocked from this sandbox. |
| Index entry | Hymnary.org has Tranovský texts indexed but no `Ay Panna` hit returned in this sandbox's search. |
| Reconstruction project | Grešová-Sekelská's *Perspectives of the Reconstruction of the Cithara Sanctorum (1636)* — http://www.musicologica.eu/perspektivy-rekonstrukcie-cithary-sanctorum-1636-a-edicie-piesni-juraja-tranovskeho/ . Blocked from this sandbox. |

### 2.3 What was *not* obtainable from the sandbox

WebFetch returned HTTP 403 from every academic site attempted (Zlatý fond SME, Wikipedia CS, Hymnary.org, Musicologica.eu, fhv.uniza.sk, archive.org full-text streams, books.google.com, koniasch.cz, cupress.cuni.cz). The pattern is consistent with anti-bot UA filtering — **not a genuine access barrier for a human researcher**, but a hard one for headless-fetch verification. Conclusion: **all primary collation requires either an interactive browser session or in-person library access**.

---

## 3. Why `verification_status` cannot be upgraded today

Per `taxonomy/SCHEMA.md`:

| Value | Means |
|---|---|
| `VERIFIED` | Project members have personally collated the primary texts (or critical edition) of both witnesses. |
| `PRIMARY_PENDING` | Primary witnesses are available to us (digitised, accessible) but have not been collated into the data model yet. |
| `SECONDARY_ONLY` | Relying entirely on a secondary source's transcription/description. |
| `UNVERIFIED` | Neither secondary documentation nor primary access has been obtained. |

Today's reconnaissance:
- **Identified** the canonical critical edition (Baťová 2011) but did not **obtain** it.
- **Mapped** the open-access digital paths for CS 1636 (Zlatý fond SME, REAL-R, Kramerius MZK) but did not **retrieve** any text from them.
- **Confirmed** that the secondary source (Grešová-Sekelská 2021) on which PAIR_001 already rests is the strongest documented attestation publicly available.

Therefore: **`verification_status` stays `SECONDARY_ONLY`**. The condition for `PRIMARY_PENDING` is "primaries are available to us"; reconnaissance establishes the existence of access paths, but the project does not yet *have* primary access in the operational sense.

---

## 4. Roadmap to `VERIFIED`

In strict order of cost and certainty:

### Step 1 — Open-access browser collation (cost: ~30 min; expected outcome: `SECONDARY_ONLY` → `PRIMARY_PENDING` if successful, or stays `SECONDARY_ONLY` if access still blocked)

1. Open https://zlatyfond.sme.sk/dielo/980/... in a browser.
2. Navigate to the Marian rubric (likely "O Panně Marii" / "Pjsně o Panně Marii") in CS Part I.
3. Locate the incipit *Ay Panna gest pozdravená* (or its modernised form *Aj Panna jest pozdravena*).
4. Transcribe the first 4–8 lines.
5. Paste the transcription into a new evidence row supplement; upgrade `CS1636_BVM_01.text_snippet` from the placeholder.

### Step 2 — Acquire Baťová 2011 (cost: ~€20–25; expected outcome: enables Kolínský verification)

1. Order from Koniasch Latin Press (https://www.koniasch.cz/) or Karolinum (https://www.cupress.cuni.cz/) — both list the title as available.
2. On receipt, consult the incipit index for *Zdrawa genž sy pozdrawena* (or near-spelling).
3. Note the folio/page reference in Kolínský 1517 if Baťová's apparatus carries the original folio numbers.
4. Transcribe the source incipit and the first stanza if Baťová reproduces it.

### Step 3 — Direct collation (cost: ~1–2 hours; expected outcome: `PRIMARY_PENDING` → `VERIFIED`)

1. Place the two transcribed incipits side by side.
2. Document the specific lexical and syntactic differences.
3. Update `theological_modification` on both `KK1517_BVM_01` and `CS1636_BVM_01` evidence rows with the verbatim text and the documented modification.
4. If the modification is structural/substantive, split PAIR_001 into two records (per the existing notes_sk/notes_en plan): one FACTUAL/DOCUMENTED for the editorial-intent claim attested by Grešová-Sekelská, one FACTUAL/INFERRED for the textual modification documented by our own collation.
5. Upgrade `verification_status` on both evidence rows and on the PAIR_001 record to `VERIFIED`.
6. Update `evidentiary_strength` to `INFERRED` on the textual-modification claim if it is now own-analysis (rather than relying on Baťová's editorial commentary).

### Step 4 (optional, only if Baťová 2011 is unavailable) — Visit Regionální muzeum v Kolíně

If Baťová 2011 cannot be obtained quickly, contact the museum at advance notice. The manuscript's reading-room access policy is unknown; expect a researcher application process. This is the most expensive route and should be reserved for cases where the published critical edition does not resolve the verification (e.g., disputed reading, interpolated stanza).

---

## 5. What this dossier *does* improve right now

Even without primary collation, this reconnaissance:

1. **Documents the access paths** — future verifiers (Michal, Sekelská, future students) start with a complete map.
2. **Identifies Baťová 2011** as the canonical reference. Previously the project lacked a known print critical edition for the Kolínský side.
3. **Confirms the Regionální muzeum v Kolíně** as the manuscript's repository — relevant for Phase 3 archive trips.
4. **Documents the sandbox limitation** — every public scholarly site for early Czech hymnology is anti-bot-protected; remote machine-led verification is not viable. In-person or interactive-browser work is non-negotiable.

The PAIR_001 evidence rows (`KK1517_BVM_01`, `CS1636_BVM_01`) are updated to point readers to this dossier and to Baťová 2011, but their `verification_status` correctly stays `SECONDARY_ONLY` — no primary text has been read by the project yet.

---

## 6. Companion dossiers needed (future)

The same reconnaissance pattern should be applied to:

- **PAIR_002_PANE_NAS** — currently `CONJECTURED/UNVERIFIED`. Verification path: HTB lookup of *Chléb náš nebeský* in Ivančický 1564, plus CS 1636 facsimile lookup. If pair is real, promote to `FACTUAL`.
- **PAIR_004_OTCE_NEBESKY** + **PAIR_005_NEYSWETEGSIJ** — currently `PRIMARY_PENDING`. Verification path: Benka 2024 critical edition for BA side (already in `resources/`); CS 1636 facsimile for receptor side.
- **PAIR_006_AC_BA_EUCHARIST** — currently `PRIMARY_PENDING`. Verification path: Benka 2024 critical edition (both witnesses bound together, already in `resources/`). This is the lowest-cost upgrade — Benka has done the philological work; the project just needs to do the collation.

PAIR_006 should be the **next** to upgrade to `VERIFIED`. It requires only paginated reading of an edition we already own.

---

*This dossier is the output of the 2026-05-07 verification sprint. It does not change the trust state of any pair; it documents the reconnaissance and the operational roadmap.*
