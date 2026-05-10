# Gotchas — APVV TEPALIT chapter project

Process lessons collected during the project. Each entry: what went wrong, why, and how to avoid it. Add new entries at the top with a date.

---

## 2026-05-10 — Verify survey-agent "corrections" repo-wide before applying

**What happened.** The Tier 1 Holeton survey (research-scout agent) confidently claimed that the `Haberkern_2023` entry in `Sources/Source_Index.md` was mis-dated and should be renamed `Haberkern_2016` — citing *Patron Saint and Prophet* (Oxford UP, 2016, ISBN 9780190280734) as the actual book. The rename was applied. Then a repo-wide `Grep` for `Haberkern_2023` revealed two further references:

- `Chapter/Chapter_Master_Plan.md` lines 86–87 already distinguishes two distinct Haberkern works: `Haberkern_2016.md` (= *Patron Saint and Prophet*, OUP) AND `Haberkern_2023.md` (= R&RR 25/2–3 article on the Confessio Bohemica's "archaeology").
- `taxonomy/confessional_positions.csv` row L1.1 cites Haberkern_2023 specifically for the Confessio Bohemica's strategic ambiguity — which matches the 2023 article's subject, not the 2016 monograph (which is on Hus reception).

The survey's "correction" was a confident factual claim made on incomplete repo context. The agent had been given Source_Index.md and the four exemplar source notes, but not Chapter_Master_Plan.md or the taxonomy CSV. The rename was reverted; the entry was clarified rather than renamed.

**Why this matters.** Survey agents (research-scout, citation-auditor, any external-vs-internal reconciliation agent) only know what their prompt told them about the repo. They can produce confident factual claims that contradict repo state the agent never saw. Renames and "doesn't exist" assertions are especially dangerous — a single propagation pass can rename a real entry into a phantom or delete a working reference.

**How to avoid.**
1. Treat **renames** and **factual corrections** as separate, higher-stakes categories than ordinary new-entry triage.
2. Before applying any rename or "this is mis-dated/wrong" correction from a survey, run a repo-wide `Grep` for the identifier. Check `Chapter/`, `taxonomy/`, `Drafts/`, `website/`, and `admin/`, not just `Sources/`.
3. If existing repo references consistently match the original (uncorrected) reading, the survey is probably working with incomplete repo context. Either verify the survey's claim against an external authority (publisher catalogue, WorldCat, ISBN lookup) before applying, or keep the original identifier and flag the survey's claim for human review.
4. New-entry additions don't need this safeguard — they're purely additive. Only existing-ID modifications and non-existence assertions need it.
5. The audit pass before integrating a survey into Source_Index.md should explicitly check: (a) renames against repo state, (b) "phantom" references against actual repo state, (c) external URLs against actual resolution.

**Where this lesson lives.**
- This file (`Gotchas.md`) — project-permanent.
- `~/.claude/projects/.../memory/feedback_survey_corrections.md` — Claude's persistent memory.
