# Case Study 5 — AI-Driven Catalog Platform: Delivery Operating Model for a New AI-Platform Pod

**Role:** Product Owner / Solution Architect · **Period:** Jun 2026 – present · **Engagement:** A commerce/marketplace SaaS platform (AI-driven product catalog) · **Scope:** Backend AI-platform pod, plus cross-pod program work

> **Note on this case study:** like case study 4, this one is presented on **confirmed scope**. The engagement is ongoing and outcome metrics aren't formally tracked yet. Every count below is from documented, independently evidenced work, and no percentages are estimated. Client, product, marketplace and internal tool names are left out.

## Problem

The platform runs an AI-driven catalog engine: it takes sellers' raw product data and lists it on e-commerce marketplaces. A **newly formed backend AI-platform pod** had to start delivering on it straight away, without:
- a shared understanding of the runtime pipeline
- a delivery cadence
- a backlog tied to real production signal
- a way to settle contested technical decisions

Program-level problems were also building up across the wider engagement:
- milestone completion was disputed in leadership reporting
- a newly scoped frontend pod depended on a few subject-matter experts
- Jira and reporting hygiene was inconsistent across pods
- marketplace onboarding needed category-mapping validation before enablement work could be built

## Stakeholders

- Engineering (the AI-platform pod, and later the frontend pod): sprint delivery, refinement, review
- Engineering leads: sign-off on gated decisions
- Leadership: sprint-goal tracking, milestone completion, delivery dates
- Cross-pod program stakeholders: Jira hygiene, dashboards, roster
- Marketplace onboarding teams: category-mapping validation

## Approach

- **Phase-0 discovery for the new pod.** Turned architecture deep-dives and onboarding sessions into about **15 referenced discovery artifacts**:
  - pipeline access inventories
  - a verified catalog-pipeline reference
  - a repo-restructure and pod-split analysis

  The pod started from a checked understanding of the system, not tribal knowledge.
- **A weekly Say → Do delivery cadence.** Ran plan → status → retro for **16 consecutive sprints**, with sprint goals and Done-When criteria, honest committed-vs-completed reporting, and leadership-facing sprint-goal tracking.
- **Gated decisions instead of open debates.** Ran a lead-gated decision register, where verification analyses went in as recommendations for engineering sign-off. Wrote **3 project decision records** on contested AI-validation trade-offs.
- **A backlog grounded in production signal.** Sized backlog candidates from live production telemetry instead of stale summaries, and reconciled a live-blocked vs ever-blocked metric discrepancy before prioritising. Broke an umbrella epic into **10 ready-to-build stories**, each with acceptance criteria and a definition of done.
- **Marketplace onboarding readiness.** Produced and reviewed **8+ category-mapping validation packets** covering hundreds of SKUs. Refined about **19 enablement stories** to Definition of Ready.
- **Defensible milestone reporting.** Built a resolver-based milestone-completion attribution method and a companion feasibility tool. Used them for leadership-facing completion reports, and to resolve a disputed delivery date.
- **Standing up a second pod.** Set up program coverage for a newly scoped frontend pod: an ownership roadmap, a risk log for its dependence on a few experts, per-surface reference docs, and a capacity plan.
- **A safe operating model for AI-driven repair.** Designed a two-pass model that separates automated fix verification from **human-approved production re-drive**, with named exceptions and explicit owners for cases outside automation. The architecture is written up in the companion [architecture portfolio](https://blpatnaik31.github.io/arch/).
- **Making it repeatable.** Built **19+ reusable PO/PM workflow tools** (13 at first release), adopted as the pod's prompt pack, with the team's delivery rules encoded into the outputs. Also standardised Jira and artifact hygiene across pods: a naming convention, metadata cleanup, and a reusable committed-vs-completed dashboard template.

## Artifacts produced

- Discovery and onboarding pack: a verified pipeline reference and a pod-split analysis
- Sprint plans, weekly status reports and retros for 16 sprints
- Decision register and 3 decision records
- Telemetry-grounded backlog ranking, and a 10-story epic breakdown
- Category-mapping validation packets
- Milestone-completion attribution and feasibility analyses
- Frontend pod ownership roadmap, risk log and capacity plan
- Two-pass repair operating model
- Reusable PO/PM workflow tool pack

## Outcome

**Confirmed scope (not placeholders):**
- **16** sprints planned and reported on a weekly Say → Do cadence, with committed-vs-completed reporting
- **~15** Phase-0 discovery artifacts orienting a newly formed pod
- **1** umbrella epic broken into **10** ready-to-build stories
- **8+** category-mapping validation packets covering hundreds of SKUs; **~19** enablement stories refined to Definition of Ready
- **3** decision records, and a gated decision register for contested trade-offs
- **1** new delivery pod stood up with an ownership roadmap and reference documentation
- Disputed delivery date resolved with a reproducible milestone-attribution method
- **19+** reusable workflow tools adopted as the pod's prompt pack

On outcome metrics: the engagement is ongoing. Before/after measures such as cycle time, predictability or onboarding speed weren't baselined when the work started. Rather than estimate them, this case study is presented on confirmed scope.

## Why it matters

This is program management on an AI platform where many decisions are contested by default: what counts as "fixed", which metric to trust, and when automation can touch production. The common thread is making things **checkable**:
- a verified pipeline reference instead of tribal knowledge
- telemetry instead of estimates
- a decision register instead of re-arguing
- a reproducible attribution method instead of a disputed date
- a human gate where automation meets production

It's the same discipline as the regulated-environment case studies, applied to AI delivery.
