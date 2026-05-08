# Verification Dossier — PAIR_005_NEYSWETEGSIJ

**Status:** Reconnaissance attempted 2026-05-08; **upgrade blocked**, status stays `PRIMARY_PENDING`.
**Subject pair:** `PAIR_005_NEYSWETEGSIJ` — introit *Neyswětegsij* (BA 1585 → CS 1636 liturgical continuity).
**Trust signature:** `FACTUAL` / `DOCUMENTED` / `PRIMARY_PENDING` (unchanged).

This dossier documents the verification attempt and the reasons the upgrade did not happen. Pattern parallels `Verification_PAIR_001.md` and §5 of `Verification_PAIR_004.md`.

---

## 1. Why this pair is not yet VERIFIED

The asymmetry first identified in `Verification_PAIR_004.md` §5:

| Side | Warrant | Status |
|---|---|---|
| BA 1585 (source) | Benka 2024 critical edition | ✅ Verified (same warrant as PAIR_004 + PAIR_006) |
| CS 1636 (receptor) | *Neyswětegsij* is **not** among the 8 hymns transcribed in Grešová-Sekelská 2023's critical edition. Only mentioned in her introductory study at pp. XV–XVI ("textual precedent in the 1585 agenda") and in Grešová-Sekelská 2021 p. 6 (introits as the only surviving Mass-proper element in CS) | ❌ No verbatim CS-side transcription in any source-notes-verified critical edition |

The continuity claim itself is FACTUAL/DOCUMENTED (Grešová-Sekelská documents it). What is missing for VERIFIED is the project's own collation of the CS-side text against a primary witness.

---

## 2. 2026-05-08 reconnaissance

### Searches attempted

- WebSearch for `"Neyswětegsij" OR "Neyswětegssij" Cithara Sanctorum 1636 introit text` — **0 results**. The orthography may be unindexed in modern web corpora; or no public scholarly source has quoted the verbatim incipit at that exact spelling.
- WebSearch for the pair in broader terms (Cithara Sanctorum 1636 introit Bystrická agenda continuity) — returned general CS background but no incipit-level citation.

### Access paths confirmed (still blocked from sandbox)

The four candidate routes for CS-side text identified in `Verification_PAIR_001.md` §2.2 remain blocked from this sandbox via WebFetch (anti-bot 403, network-policy `host_not_allowed`):

1. **Zlatý fond SME** — https://zlatyfond.sme.sk/dielo/980/ (CS Part I, Part II, Part III all available as e-text editions; the "Předzpěvy" / introit section in Part I is the most likely location). Confirmed reachable to a human browser; not from this sandbox.
2. **Kramerius MZK** — https://kramerius.mzk.cz/ (CS facsimile, may require CZ library card).
3. **REAL-R (Hungarian Academy)** — http://real-r.mtak.hu/ (CS facsimile).
4. **Hymnary.org** — https://hymnary.org/person/Tranovsky_J?tab=texts (Tranovský texts indexed; the Hymnary search is rate-limited but human-accessible).

### Conclusion

Today's reconnaissance does not change the verification status. The earlier dossier finding — *Neyswětegsij* is the asymmetric case where the BA side is documented in a critical edition (Benka 2024) but the CS side is not — is reconfirmed by today's failed search. The 0-result for the verbatim incipit string is itself a small finding: this hymn's transcribed text is not yet in the public web corpus at any easily-searchable orthography.

---

## 3. Roadmap to VERIFIED

In strict cost order:

### Step 1 — Open Zlatý fond SME in a browser (~15 minutes)

1. Navigate to https://zlatyfond.sme.sk/dielo/980/Tranovsky_Cithara-sanctorum-Dil-1-Pisne-duchovni-k-casum-zasvecenym-cirkevniho-roku/1
2. Use the site's table of contents to locate the introit / Mass-proper section. CS Part I is "Písně duchovní k časům zasvěceným církevního roku" (hymns for festival days), which contains the introits.
3. Find the introit beginning with *Neyswětegsij* (or *Najsvětěji-* / *Najsvětejší-* in modernised orthography — the actual modern Czech form is uncertain and is itself part of what needs verifying).
4. Transcribe the first 4–8 lines verbatim, preserving the early-Czech orthography.

### Step 2 — Update the data layer (~10 minutes)

1. Replace the placeholder in `CS1636_NEYSV.text_snippet` with the verified transcription.
2. If the transcribed text reveals modification relative to BA 1585 (Benka 2024 has the BA side), document the modification in `theological_modification` and add a `modification_type`.
3. Re-evaluate `all_locus_codes`: if the introit is positioned in a Mass-with-Eucharist context per the CS rubric, L1.4 (Pietas Eucharistica) can be added back as a secondary locus (it was removed in PR #15 pending exactly this verification).

### Step 3 — Promote to VERIFIED (~5 minutes)

1. Flip `PAIR_005.verification_status` from `PRIMARY_PENDING` to `VERIFIED`.
2. Update `PAIR_005.notes` to record the upgrade and the new verbatim text.
3. Add a brief Verification dossier section here: "Verified 2026-MM-DD against Zlatý fond SME, CS Part I, [page reference]."

### Step 4 — Tag v0.1.1 (~5 minutes)

A trip from 2 to 3 of 5 active pairs being VERIFIED is a meaningful trust-profile improvement worth a versioned release. The Zenodo↔GitHub integration is now wired; tagging v0.1.1 mints a new version-DOI automatically. The concept DOI continues to resolve to the latest version.

---

## 4. Why this dossier exists despite no upgrade

The same logic as `Verification_PAIR_001.md`: the project's epistemic-transparency commitment requires documenting *what was attempted*, *why it didn't succeed*, and *the precise next steps* — not just the upgrades that did. Future verifiers (the user; Sekelská; future collaborators) start with a complete map of the access paths and the unblock plan.

The reconnaissance also surfaced that the verbatim incipit string `Neyswětegsij` is not currently web-indexed at that orthography — a small but interesting finding. If a future scholar needs to discover this hymn through web search, modernised forms (*Najsvětějšímu*?) or a different incipit segment may be necessary.

---

*This dossier supplements `Verification_PAIR_004.md` §5 with today's failed-attempt audit trail and a step-by-step browser-based unblock plan. PAIR_005 stays PRIMARY_PENDING; the path to VERIFIED is now under 30 minutes of in-person work.*
