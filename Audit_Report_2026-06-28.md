# Audit Report: *Agenda Česká a Bystrická* (HE journal article)

**Date:** 2026-06-28
**Scope:** Citations / bibliography (per request)
**Document audited:** `Drafts/Valco - Agenda ceska a bystricka - Final for HE.docx`
**Target venue:** *Historia Ecclesiastica* (Scopus); "HE" in filename = Historia Ecclesiastica (per `Project_Overview.md` line 179)
**Method:** Full text extracted via pandoc; every in-text footnote cross-referenced against the Bibliography and against `Sources/Source_Index.md`; all 28 bibliography entries independently web-verified for existence and accuracy (8-agent verification workflow + manual cross-check).

---

## Summary

- **Overall readiness:** Near submission-ready — needs one focused citation-fix pass.
- **Fabrication risk:** **None.** Every externally-checkable source (28/28 bibliography entries + the orphaned Daniel 2010) resolves to a real, correctly-identified work. No phantom citations.
- **Critical issues:** 4
- **Moderate issues:** 5
- **Minor issues:** 8

The apparatus is genuinely clean for a Scopus submission: all 41 footnotes resolve to bibliography entries, all 28 bibliography entries are cited, there are no duplicate entries, and the structural mechanics are sound. The fixes below are specific and bounded.

**One notable reversal:** two of the page ranges that disagree between this draft and the project's `Source_Index.md` were checked against the publishers — and the **draft is right, the registry is wrong** in both cases (David 1999, Graham 2006). Those are registry bugs to fix elsewhere, not problems with this paper.

---

## 1. Citation Integrity

**Counts:** 28 Bibliography entries; 41 footnotes (`[^1]`–`[^41]`), sequential, none missing or duplicated. Every footnote citation resolves to a Bibliography entry **except** the orphan below.

### Audit table — issues only (clean citations omitted)

| # | Reference | Location | In Bib? | Real? | Issue |
|---|-----------|----------|---------|-------|-------|
| 1 | Daniel, *K problému konfesionalizácie na Slovensku* (2010) | fn `[^36]` | ✗ | ✓ (verified) | **ORPHANED** — cited but not in Bibliography. **Also**: the series number "Acta Collegii Evangelici Prešoviensis IX" is **wrong** — the volume is a stand-alone monograph (Kónya a kol., Prešov 2010, ISBN 978-80-555-0288-5) with no ACEP number; ACEP IX is a different book (*Miscellanea Anno 2000*, 2001). |
| 2 | FC SD VII Latin quote, "Veracissime non solum vere credentes…" | fn `[^27]` | n/a (in Bente–Dau) | edition real | **Locator likely wrong + quote likely not verbatim.** Standard Book of Concord numbering puts the *manducatio indignorum* statement at **SD VII §60** (≈ Triglotta pp. 983–985), not §16/p. 990 (§16 is on the efficacy of the institution). The Latin as printed reads as a paraphrase/composite, not a transcription. Re-verify both against the printed Triglotta. |
| 3 | Confessio Bohemica formula "*duchovně i podstatně, věrou i také ústy*" | fn `[^38]` | Hrejsa 1912 ✓ | ✓ | **Direct quote with no pinpoint page** — cited to Hrejsa 1912 ("818 pp.") with no page. Violates the project rule "page numbers for all direct quotes, no exceptions." (Hrejsa text runs pp. 695–717 per `Source_Index`.) |
| 4 | Valčo, *TEPALIT Digital Companion* (Zenodo) | fn `[^40]` + Bib | DOI resolves ✓ | ✓ | **Title mismatch.** DOI `10.5281/zenodo.20081435` is real (pub. 2026-05-07, v0.1.0) but the actual deposit title is *"TEPALIT Digital Companion: Theological Taxonomy and Hymn-Pair Dossier for the Lutheranisation Thesis"*, not the draft's "*AC 1581 / BA 1585 / Cithara Sanctorum 1636 hymn-pair dossier*". |
| 5 | English FC SD VII block quote ("Not only the true believers…") | fn `[^27]` | Kolb–Wengert ✓ | ✓ | **No pinpoint page for the English wording** — only the Latin is pinned; the English is given as broad ranges (KW pp. 591–615; Triglot pp. 971–1015). |
| 6 | Kolb, *Lutheran Ecclesiastical Culture 1550–1675* (2008) | Bib | ✓ | ✓ | Robert Kolb is the **editor**; entry should read "KOLB, R. (ed.):". |
| 7 | Daniel, *Melanchton, Stöckel…* (2011) | fn `[^36]` + Bib | ✓ | ✓ | End page uncertain — draft "pp. 31–36"; one source reports 31–38. Start page (31) consistent. Re-check end page against printed ACEP XI. |

### Other named-but-not-in-Bibliography references (acceptable, but noted)
These are cited second-hand (through a source that *is* in the Bibliography) or are generic reference works, so they are defensible — but a strict reviewer may flag them:
- **Luther, Small & Large Catechism** (1529) — `[^22]`, via Dingel/BSELK 2014 (in Bib). Only Luther's *Formula Missae* is listed under LUTHER.
- **Melanchthon, *Apologia CA* XXIV** — `[^22]`, via Kolb–Wengert (in Bib).
- **Chemnitz, *Fundamenta…* (1570) & *De duabus naturis* (1578)** — named in body line 73; engaged via Valčo 2017 + Mahlmann 1969 (both in Bib).
- **Georg Creutzer's handbook** — body line 115, `[^10]`, `[^25]`; via Benka (in Bib).
- **Encyclopaedia Britannica, "Bohemian Confession" entry** — `[^37]`; deliberately generic ("older editions"). Fuller treatment reserved for the TEPALIT chapter; acceptable as written.

### Orphaned bibliography entries
**None.** All 28 entries are cited. (Kónya–Csepregi 2013 appears only as an embedded "see also" inside `[^11]` — present, but borderline; consider a direct cite or leave as is.)

### Duplicate entries
**None.** Grešová-Sekelská ×2 (2021, 2023), Valčo ×2 (2017, 2026), Kolb ×2 (2008 sole; 2000 with Wengert), Csepregi (2009 author; 2013 co-editor) are all distinct works, correctly separated.

### Style / format inconsistencies (minor)
1. **`[^22]` is a "mega-footnote" in a different citation system.** It mixes American/Chicago style (full first names "Irene", "David R."; quotation-mark titles; "(2006): 553-573"; "https://doi.org/") with the paper's otherwise consistent Central-European house style ("SURNAME, I.: *Title*. In: *Journal*, vol. X, no. Y (year), pp. A – B. DOI:"). Affects Graham, David, Schoen, Holeton, Dingel inside this note.
2. **First-name vs. initials** for the same author across note and Bib: "DINGEL, Irene" (`[^22]`) vs "DINGEL, I." (Bib); "HOLETON, David R." vs "HOLETON, D. R."; "GRAHAM, B. F.H." (missing space) vs "GRAHAM, B. F. H."
3. **Dash conventions vary** — spaced en-dash "pp. 141 – 150" (dominant), unspaced "pp. [155]–164" (`[^34]`,`[^35]`), hyphen "553-573" (`[^22]`).
4. **Grešová-Sekelská 2023 title** — Bibliography has the full bilingual title; footnote `[^4]` drops the Slovak half (acceptable as a short form, but note it).
5. **Benka title shortened** inconsistently across notes (full "Agenda Neosoliensia: Agenda Czeská 1581 a Bystrická agenda 1585" vs "Agenda Neosoliensia"; "Documenta Theologico-Religionistica, Tomus 2" dropped in later notes).
6. **Mahlmann publisher** — "Gerd Mohn" (`[^19]`) vs "Gütersloher Verlagshaus Gerd Mohn" (Bib). (Bib form is the correct canonical imprint.)
7. **Prosper wording** — the maxim is "*ut legem credendi lex statuat supplicandi*"; draft drops the "*ut*". Full passage is PL 51, cols. 209–210 (draft's "col. 209" is the opening column — fine).
8. **Italicisation of *Agenda česká* / *Bystrická agenda*** varies (italic vs roman; SK abstract lowercases "Agenda česká", EN uses "Agenda Česká"). Cosmetic; align with HE house style at proof.

**Verdict:** Clean apparatus with 4 substantive fixes and a set of cosmetic ones. No fabrication.

---

## 2. Source Documentation / Registry Cross-Check

This is a self-contained journal article, not the monograph chapter, so several of its sources were introduced specifically for it and are not yet in the chapter's `Source_Index.md`. That is expected — but worth recording so the registry stays the single source of truth.

- **Tracked in `Source_Index.md` (16):** Atwood, Benka 2024, Bente–Dau (under `BookConcord_1580`), Daniel 2011, David 1999, Dingel/BSELK, Graham 2006, Grešová-Sekelská 2021 & 2023, Holeton, Hrejsa 1912, Kolb–Wengert (under `BookConcord_1580`), Kónya–Csepregi 2013 (under the regional-confession entries), Luther *Formula Missae*, Schoen 2022, Vajda 1944.
- **Not in the registry (12)** — all verified real; recommend adding entries: **Bayer 2008, Bodnárová 2018, Csepregi 2009 (Pentapolitana Festschrift chapter), Kolb 2008, Mahlmann 1969, Prosper of Aquitaine, Reinhard 1983, Schilling 1988, Senn 1997, Spinks 1982, Valčo 2017 (Chemnitz), Valčo 2026 (TEPALIT dataset).**
  - Note: the registry tracks a *different* Csepregi work (`Csepregi_2003`, the *ARG* 94 article) — the 2009 Festschrift chapter this paper cites is a distinct, real publication (REAL-MTAK; ISBN 978-80-8068-992-6) and needs its own entry.

### Registry discrepancies found — the *registry* is wrong, not the draft
| Source | Draft (correct) | `Source_Index.md` (wrong) | Verified by |
|---|---|---|---|
| David 1999 | *Church History* 68/2, **pp. 294–337** | pp. 294–336 | Cambridge Core |
| Graham 2006 | *Cath. Hist. Rev.* 92/4, **pp. 553–573** | pp. 550–574 | Project MUSE (next article starts p. 574) |
| Holeton, "Evolution of Utraquist Liturgy" | *Religio* 1/2 (1993), pp. [155]–164 (original) | *Studia Liturgica* 25/1 (1995) | MUNI digilib (original) + Sage (1995 reprint) |

The Holeton case is not an error in either place: the draft cites the **original** 1993 *Religio* publication (verified verbatim, including the quoted pp. 157 and 162); the registry tracks the **1995 *Studia Liturgica* reprint** (also real, pp. 51–67). Optionally add "repr. *Studia Liturgica* 25/1 (1995): 51–67" to the draft entry.

**Verdict:** Draft documentation is accurate. 12 entries warrant new registry rows; 2 registry page-range bugs (David, Graham) should be corrected in `Source_Index.md` (the chapter would otherwise inherit them).

---

## 3. Other audit dimensions (brief — outside the citation scope but checked)

- **Phase integrity / prior audits:** A prior `Drafts/Theologos_Bibliography_Audit.md` (2026-05-08) covered the earlier Theologos draft. Both its fixes appear **applied** in this HE version: (a) the full bilingual Grešová-Sekelská 2023 title is now in the Bibliography; (b) the `(ed.).:` double-period typo in the Csepregi notes is gone (now clean `(ed.):`).
- **Intent check:** The paper does what its abstract claims — argues intra-codex confessional register-shift (AC 1581 → BA 1585) as a complement to the cross-confessional Lutheranisation thesis. The apparatus serves that argument; no drift.
- **Venue compliance (HE / Historia Ecclesiastica):** Trilingual abstracts (DE/EN/SK) + keyword sets present; ORCID, affiliation, APVV acknowledgment present; footnote apparatus consistent with HE practice. (Note the e-mail in the byline reads `michal.vlaco@uniba.sk` — looks like a typo for `michal.valco@…`; verify before submission.)

---

## Recommended Actions (priority order)

**Critical — fix before submission:**
1. **Add Daniel 2010 to the Bibliography** and **delete the false "Acta Collegii Evangelici Prešoviensis IX" series number** from `[^36]` (it is a stand-alone monograph: *Konfesionalizácia na Slovensku v 16.–18. storočí*, ed. Kónya, Prešov 2010, ISBN 978-80-555-0288-5).
2. **Re-verify `[^27]`** against the printed Triglotta: the *manducatio indignorum* text is standardly **SD VII §60** (≈ pp. 983–985), not §16/p. 990; and quote the Latin **verbatim** from the edition (current Latin appears to be a paraphrase).
3. **Add a pinpoint page to the Confessio Bohemica quote in `[^38]`** (Hrejsa 1912, within pp. 695–717).
4. **Correct the Zenodo deposit title** in `[^40]` and the Bibliography to match the actual record.

**Moderate:**
5. Add a pinpoint page for the **English** FC SD VII quote in `[^27]` (Kolb–Wengert).
6. Mark **Kolb 2008** as "(ed.)".
7. Re-check **Daniel 2011** end page (31–36 vs 31–38) against ACEP XI.
8. Normalise **`[^22]`** to the paper's house citation style.
9. Add the **12 missing sources** to `Source_Index.md`; **fix the David (337) and Graham (553–573) page ranges in `Source_Index.md`**.

**Minor (proof pass):**
10. Resolve the format inconsistencies in §1 (dashes, first-name/initials, Benka/Mahlmann/Grešová-Sekelská short forms, Prosper "ut", italics of *Agenda česká*); fix the byline e-mail typo.

---

*Read-only audit — no source files were modified. Generated with an 8-agent verification workflow (independent citation map, registry cross-check, 6 web-verification agents); every bibliographic claim checked against publisher/library sources.*
