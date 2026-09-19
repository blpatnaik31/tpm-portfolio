# Open placeholders — resolve before making this repo public

Tracking file for outstanding items across the repo. Delete once everything below is resolved.

## Case study 4 — Alcon (`case-studies/04-alcon-healthcare-interoperability.md`)

The Career Workbook didn't formally track quantified outcomes for this engagement, so these are open rather than invented:

1. % or measured reduction in patient data-sync latency from proactive token caching
2. Measured or estimated improvement in data quality / duplicate-record rate from automated duplicate detection
3. Reduction in production incidents attributable to retry/DLQ fault-tolerance (even directional, if trackable)
4. Platform adoption rate or release velocity change during tenure
5. Deployment-incident reduction from idempotent edge boot-hook logic

**How to approach these together:** for each one, first decide whether it's estimable at all (some things genuinely weren't measured and shouldn't get a number invented after the fact) — and for the ones that are, prefer a defensible directional claim over a precise-looking percentage with no data behind it. "Materially fewer manual interventions" backed by the retry/DLQ design is more credible to a technical interviewer than an invented "35% reduction."

## Nothing else in this repo has open placeholders

Case studies 1–3 and the artifacts/skills-matrix are all built directly from documented figures in the Career Workbook.
