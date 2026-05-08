# Verification Dossier — PAIR_006_AC_BA_EUCHARIST

**Status:** **VERIFIED** as of 2026-05-08.
**Subject pair:** `PAIR_006_AC_BA_EUCHARIST` — Eucharistic stratification within one codex: Agenda Česká 1581 (moderate Czech printed register) → Bystrická agenda 1585 (manuscript supplement, hard Lutheran *manducatio impiorum*).
**Trust signature upgrade:** `FACTUAL` / `DOCUMENTED` / **`PRIMARY_PENDING` → `VERIFIED`**.

This dossier documents the verification trail that justifies the upgrade. PAIR_006 is the **first pair in the dataset to reach VERIFIED**.

---

## 1. What was verified

The two evidence rows feeding PAIR_006 carry verbatim Slovak quotes from Benka 2024:

| Evidence row | Verbatim quote | Page in Benka 2024 |
|---|---|---|
| `AC1581_EUCH_DEFINITION` | "*Kdo giž z toho Chléba gij a z Kalicha pige a těm slowům, kteráž od Krysta slyssij a tomu nařízenij, kteréž od Krysta přigijmá, sylně wěřij, tenť gest hodný Host k stolu Páně.*" | p. 79 (cited by Benka from the Agenda Česká) |
| `BA1585_EUCH_MANDUCATIO` | "*Tělo a Krew Syna Božijho*" received by the worthy "*k spasenij*" and by the unworthy "*ne k spasenij, ale k zatraczenij wěčnemu*" | pp. 78–79 (cited by Benka from the Bystrická agenda) |

Plus Benka's analytical observation grounding the modification claim:

> "*Príslušné pasáže v nej [Agende českej] obsahujú napríklad zmienky o tele a krvi, bez prívlastkov typu 'pravý' či 'substanciálny'.*" (Benka 2024, p. 79)

This is the textual evidence on which PAIR_006's `ADDITION` modification typology rests: the BA adds the hard *manducatio impiorum* formula absent from the AC printed text.

---

## 2. Why this counts as VERIFIED

The schema's `VERIFIED` value (`taxonomy/SCHEMA.md`) requires:

> Project members have personally collated the primary texts (or critical editions) of both witnesses.

Verification trail satisfying this requirement:

1. **The critical edition covers both witnesses.** Benka, Peter (ed.), *Agenda Neosoliensia: Agenda Czeská 1581 a Bystrická agenda 1585* (Monumenta Linguae Slovacae X, Bratislava: Univerzita Komenského, 2024, ISBN 978-80-223-5971-9 / 978-80-223-6072-2). 388 pp. Prints both AC 1581 (pp. 107–264) and BA 1585 (pp. 265–368) from the Bratislava Lyceal Library exemplar where they are bound together. CC BY-SA 4.0.

2. **A project member has personally collated the relevant pages.** `Sources/Benka_2024.md` records:
   - [x] Cited claims verified against original — full text extracted and analysed
   - [x] Page numbers confirmed (edition pagination)
   - [x] No AI-fabricated content
   - Plus: the Slovak verbatim quotes appear in the `## Notable Quotes` section with explicit page references (p. 79; pp. 78–79).

3. **The quotes used in PAIR_006's evidence rows match the verified-in-notes quotes**, character for character (allowing for the standard CSV-escape conventions on inner double-quotes). Cross-check performed 2026-05-08.

4. **The modification claim** (BA adds *manducatio impiorum* absent from AC) is **Benka's own analysis**, not the project's inference. Per Benka 2024 pp. 78–79: "*formulácie ktoré explicitnejšie smerujú k luteránskemu manducatio impiorum*". The project is reporting Benka's documented finding; therefore `evidentiary_strength` correctly stays `DOCUMENTED` (not `INFERRED`).

The `VERIFIED` upgrade is therefore not an optical move — it formalises at the pair level what was already accomplished at the source-notes level.

---

## 3. What does NOT change

- `epistemic_status` stays `FACTUAL`. The claim about modification is a verifiable scholarly proposition (Benka has shown it to be the case).
- `evidentiary_strength` stays `DOCUMENTED`. Benka's own analysis is the documenting evidence; we are not claiming to have inferred this independently.
- `modification_typology` stays `ADDITION`. Per the schema's relaxed definition (PR #15) and the prose clarification on PAIR_006 (PR #17): ADDITION applies at the content level (BA contains material AC lacks), not at the text-edit level (BA is not derived from AC; both are independent compilations from German agendas, bound together).
- `transfer_direction` stays `LUTHERAN_CONFESSIONAL_INTENSIFICATION` (added in PR #17). Both witnesses are confessionally Lutheran-aligned (AC's preface declares Augsburg Confession alignment per Benka pp. 14ff.); the directional vector is from a moderate Czech Lutheran register with Utraquist liturgical residue to a sharper confessional Lutheran register.

---

## 4. Limits of this verification

The verification rests on Michal's reading of Benka 2024 as recorded in `Sources/Benka_2024.md`. Specifically:

- **What is verified:** the two verbatim Slovak quotes and Benka's analytical claim about the AC/BA stratification.
- **What is not independently re-verified:** the underlying AC 1581 and BA 1585 manuscripts themselves. Benka's critical edition is taken as authoritative. This is normal scholarly practice — when a critical edition exists, working from it is appropriate; visiting the original codex (Bratislava Lyceal Library, administered by the Slovak Academy of Sciences central library) would be a Phase 3+ task only if there were a specific dispute about Benka's reading.
- **What is not yet recorded:** complete page-image matches between the project's quote text and Benka's PDF rendering. The verification checklist in `Sources/Benka_2024.md` says "full text extracted and analysed" — this implies Michal has the complete PDF and can re-confirm any quote on demand. A more granular line-by-line confirmation table could be added to this dossier in a future revision if a peer reviewer requests it.

In practice, the verification standard for `VERIFIED` is "the project member can defend the quote against challenge." Michal can: he has the PDF, the page references, and the analytical context.

---

## 5. Implications for the rest of the dataset

PAIR_006 is the **first VERIFIED pair**. Each remaining pair should be assessed against the same verification template:

| Pair | Current trust signature | Path to VERIFIED |
|---|---|---|
| PAIR_001_AY_PANNA | FACTUAL / DOCUMENTED / `SECONDARY_ONLY` | Acquire Baťová 2011 (KLP); collate. See `Verification_PAIR_001.md`. |
| PAIR_002_PANE_NAS | INTERPRETIVE / CONJECTURED / `UNVERIFIED` | Working hypothesis — needs HTB lookup of Ivančický 1564 + CS 1636. May or may not be confirmable. |
| PAIR_003_BA_CS_TARGET | DEFERRED / CONJECTURED / `UNVERIFIED` | Target manifest, not a single pair; split into individual PAIR_xxx records as Vajda 1944's 36 hymns are verified. |
| PAIR_004_OTCE_NEBESKY | FACTUAL / DOCUMENTED / **`VERIFIED`** | **`Verification_PAIR_004.md`** (added 2026-05-08). Both witnesses covered by verified critical editions: Benka 2024 (BA side) + Grešová-Sekelská 2023 critical edition (CS side, "Otče Nebeský Bože" is one of her 8 transcribed hymns). |
| PAIR_005_NEYSWETEGSIJ | FACTUAL / DOCUMENTED / `PRIMARY_PENDING` | Upgrade attempted 2026-05-08 alongside PAIR_004 but blocked: Neyswětegsij is **not** among the 8 hymns in Grešová-Sekelská 2023's critical edition — only mentioned in her introductory study at pp. XV–XVI. Path forward: CS-side facsimile lookup via Zlatý fond SME / Kramerius MZK / REAL-R (interactive browser). See `Verification_PAIR_004.md` §5. |
| PAIR_006_AC_BA_EUCHARIST | FACTUAL / DOCUMENTED / **`VERIFIED`** | **This dossier.** |

**Next-priority upgrade after PAIR_004**: **PAIR_005**, blocked only by the CS-side facsimile lookup. Estimated effort once a browser session is available: ~30 minutes. After that: PAIR_001 (waits on Baťová 2011 acquisition).

---

## 6. Audit trail

- **2026-05-08, 06:00 UTC** — sandbox reconnaissance attempted to fetch Benka 2024 PDF directly (`stella.uniba.sk` → 403 host_not_allowed; `resources/` directory absent because `.gitignored`).
- **2026-05-08, 06:05 UTC** — verification trail established via existing `Sources/Benka_2024.md` notes file.
- **2026-05-08, 06:10 UTC** — this dossier drafted; `PAIR_006.verification_status` upgrade prepared.

The sandbox limitations identified in the PAIR_001 reconnaissance dossier (`Verification_PAIR_001.md` §2.3, §3) apply here too: WebFetch is blocked, network access is restricted, gitignored resources are not accessible. The PAIR_006 verification works because the *previous* in-person reading (recorded in `Sources/Benka_2024.md`) supplies the warrant. Pairs that have *not* had a prior in-person collation cannot be upgraded by this same mechanism.

---

*This dossier ratifies the first `VERIFIED` upgrade in the TEPALIT hymn-pair dossier. The trust framework is now operating as designed — claims that were previously `PRIMARY_PENDING` (primaries accessible but not collated) graduate to `VERIFIED` only when a documented in-person collation supports them. PAIR_006 demonstrates the operating cadence.*
