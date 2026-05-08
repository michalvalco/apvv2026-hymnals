# Verification Dossier — PAIR_004_OTCE_NEBESKY

**Status:** **VERIFIED** as of 2026-05-08.
**Subject pair:** `PAIR_004_OTCE_NEBESKY` — liturgical continuity *Otče Nebeský Bože* (BA 1585 four-part setting → CS 1636 solo intonation).
**Trust signature upgrade:** `FACTUAL` / `DOCUMENTED` / **`PRIMARY_PENDING` → `VERIFIED`**.

This dossier documents the verification trail. PAIR_004 is the **second VERIFIED pair in the dataset** (after PAIR_006).

---

## 1. What was verified

PAIR_004 has two evidence rows:

| Evidence row | Witness | Critical edition / coverage |
|---|---|---|
| `BA1585_OTCE_NEB` | Bystrická agenda 1585 (source side) | Benka 2024 (full critical edition, pp. 265–368 = BA section). |
| `CS1636_OTCE_NEB` | Cithara Sanctorum 1636 (receptor side) | **Grešová-Sekelská 2023** (Musicalia Istropolitana 4/2): bilingual (SK/EN) critical edition of 8 CS hymns whose melodies are attributed to Tranovský. **"Otče Nebeský Bože" is explicitly one of the 8 (per GresovaSek_2023.md, p. XVI).** Diplomatic transcription with modern notation: pp. 1–17. Editorial notes: pp. 18–19. Critical apparatus: pp. 20–22. |

The Grešová-Sekelská 2023 critical edition is the **first published modern transcription of the CS-side text** for any of our hymn-pair receptors, and it covers PAIR_004 directly.

---

## 2. Why this counts as VERIFIED

The schema's `VERIFIED` requirement (`taxonomy/SCHEMA.md`):

> Project members have personally collated the primary texts (or critical editions) of both witnesses.

For PAIR_004:

1. **BA side** — Benka 2024 critical edition. `Sources/Benka_2024.md` carries the verification checklist marked complete (cited claims verified against original; page numbers confirmed; full text extracted and analysed). Same warrant mechanism that supported the PAIR_006 upgrade.

2. **CS side** — Grešová-Sekelská 2023 critical edition. `Sources/GresovaSek_2023.md` carries the verification checklist marked complete:
   > [x] Cited claims verified against original — full text extracted and read
   > [x] Page numbers confirmed (using Roman numeral pagination of study: IX–XXI)
   > [x] No AI-fabricated content

3. **Both witnesses** are therefore covered by verified critical editions personally collated by a project member. The condition for VERIFIED is satisfied.

4. **The continuity claim** (BA 1585 four-part setting → CS 1636 solo intonation) is **Grešová-Sekelská's own analytical finding** at *GresovaSek_2023*, pp. XV–XVI, not a project inference. Therefore `evidentiary_strength` correctly stays `DOCUMENTED` (not `INFERRED`).

5. **The continuity is corroborated** by Vajda 1944 pp. 16–21, which lists *Otče Nebeský Bože* among the 36 hymns traced from BA into CS. Independent attestation from a different scholarly tradition.

---

## 3. What does NOT change

- `epistemic_status` stays `FACTUAL`. The continuity claim is verifiable from both critical editions.
- `evidentiary_strength` stays `DOCUMENTED`. Grešová-Sekelská's own analytical finding is the documenting evidence.
- `modification_typology` stays empty. As cleaned up in PR #17, the form change (4-part → solo) is a musical-form shift, not a textual modification typology.
- `transfer_direction` stays `LUTHERAN_REGIONAL_CONTINUITY`. Both witnesses are confessionally Lutheran; this is intra-tradition Hungarian-Lutheran → Slovak-Lutheran continuity.
- `primary_locus_code` stays `L4.5` (Lingua Liturgica). The pair witnesses liturgical-language continuity.

---

## 4. Limits of this verification

- **What is verified:** the existence of *Otče Nebeský Bože* in BA 1585 (four-part setting) and in CS 1636 (solo intonation), and the documented continuity between them.
- **What is not verified by this dossier:** verbatim line-level textual comparison between BA and CS forms. Grešová-Sekelská 2023 documents the *liturgical and melodic* continuity but does not (per source notes) provide a side-by-side textual collation of the BA and CS incipits. If the CS incipit text differs from the BA incipit text in any specific way, that would require a separate `INFERRED`-level pair (per the existing notes_sk roadmap on PAIR_004).
- **What is therefore guaranteed by VERIFIED here:** the **fact of continuity** between the two witnesses, not any specific textual modification claim. The pair's `theological_argument` already correctly frames this: "Documented liturgical continuity ... the same melody ... appears in four-part setting in the Bystrická agenda (1585) and as a solo intonation in the Cithara Sanctorum (1636)."
- The text-level-modification question is a **future-work item**, properly recorded in the existing notes on PAIR_004: *"Without full textual collation we cannot assess whether the incipit text changed — we anchor on the documented melodic continuity and metadata."*

---

## 5. Implications for PAIR_005_NEYSWETEGSIJ

**PAIR_005 cannot be upgraded by this dossier.** The asymmetry:

| Pair | BA side warrant | CS side warrant | VERIFIED? |
|---|---|---|---|
| PAIR_004 | Benka 2024 ✅ | Grešová-Sekelská 2023 critical edition (pp. 1–17) ✅ | **YES** |
| PAIR_005 | Benka 2024 ✅ | *no critical edition; only mentioned at pp. XV–XVI of GresovaSek_2023's introductory study and in GresovaSek_2021 p. 6* | **NO — stays PRIMARY_PENDING** |

*Neyswětegsij* is **not** among the 8 hymns transcribed in Grešová-Sekelská 2023's critical edition. The published scholarly record affirms *that* the introit has "textual precedent in the 1585 agenda" (Grešová-Sekelská 2023, pp. XV–XVI) and notes that introits are the only Mass-proper element CS preserves (Grešová-Sekelská 2021, p. 6) — both of which support the *factual claim of continuity* (epistemic_status FACTUAL is correct), but neither provides the **verbatim CS-side text** that VERIFIED requires.

To upgrade PAIR_005:

1. Locate the CS 1636 introit *Neyswětegsij* in a facsimile or text edition. Candidate paths: Zlatý fond SME (https://zlatyfond.sme.sk/dielo/980/), REAL-R (Hungarian Academy facsimile), Kramerius MZK. The dossier `Verification_PAIR_001.md` documents that all three are blocked from this sandbox; an interactive browser session is required.
2. Transcribe the incipit and (if possible) the first stanza or the relevant rubric.
3. Update `CS1636_NEYSV.text_snippet` with the verified text.
4. Confirm or revise the locus tagging (the existing PAIR_005 notes flag that L1.4 was previously tagged but removed, and could only be re-added with confidence after seeing the CS rite context).

PAIR_005's `notes_sk` and `notes_en` are being updated in this same commit to record the upgrade-blocked status and to point readers to this dossier's §5 for the rationale.

---

## 6. Audit trail

- **2026-05-08, 06:15 UTC** — PAIR_006 verification trail formalised (`Verification_PAIR_006.md`); strategic table identifies PAIR_004 + PAIR_005 as next-priority.
- **2026-05-08, 06:30 UTC** — re-read `Sources/GresovaSek_2023.md` to confirm scope of the critical edition. Discovered the asymmetry: Grešová-Sekelská 2023's 8 hymns include *Otče Nebeský Bože* but not *Neyswětegsij*.
- **2026-05-08, 06:35 UTC** — this dossier drafted; PAIR_004 prepared for VERIFIED upgrade; PAIR_005 stays PRIMARY_PENDING with explicit blocker documentation.

The asymmetry is the kind of nuance the three-axis trust framework is designed to capture: optimistically upgrading both pairs would have collapsed a real evidential difference. The VERIFIED upgrade for PAIR_004 is honest because the warrant is in hand; PAIR_005's parallel upgrade has to wait for the CS-side facsimile lookup the dossier identifies as the next step.

---

*This dossier ratifies the second `VERIFIED` upgrade in the TEPALIT hymn-pair dossier. Two of six pair records are now VERIFIED (PAIR_004, PAIR_006); one is PRIMARY_PENDING with a clear unblock path (PAIR_005); one is SECONDARY_ONLY pending Baťová 2011 acquisition (PAIR_001); one is INTERPRETIVE/CONJECTURED working hypothesis (PAIR_002); one is the BA→CS target manifest (PAIR_003).*
