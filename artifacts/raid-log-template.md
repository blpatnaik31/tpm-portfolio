# RAID Log Template

A RAID log (Risks, Assumptions, Issues, Dependencies) I keep live throughout a program, reviewed weekly with stakeholders. Genericized from practice on regulated, multi-stakeholder programs (ERP integrations, cloud migrations, post-M&A system consolidation).

## Risks

| ID | Risk | Likelihood | Impact | Owner | Mitigation | Status |
|---|---|---|---|---|---|---|
| R-01 | Example: Data mapping between legacy and target system is incomplete for edge-case record types | Medium | High | IT Lead | Run a sample reconciliation pass against production-shaped data before UAT sign-off | Open |

## Assumptions

| ID | Assumption | Validated? | Owner | Notes |
|---|---|---|---|---|
| A-01 | Example: Target system's API rate limits are sufficient for peak cutover load | No | Integration Lead | Load-test before go-live decision |

## Issues

| ID | Issue | Severity | Raised | Owner | Resolution | Status |
|---|---|---|---|---|---|---|
| I-01 | Example: Reconciliation errors exceeded threshold in UAT cycle 2 | High | 2024-03-04 | Data Lead | Root-caused to a stale mapping table; corrected and re-tested | Closed |

## Dependencies

| ID | Dependency | Depends On | Needed By | Owner | Status |
|---|---|---|---|---|---|
| D-01 | Example: Compliance sign-off on audit-trail design | Compliance team review | Sprint 6 | Program Lead | On track |

## How I use this

- Reviewed every week with the core delivery team, not just at milestone gates — risks that sit untouched for two weeks are a signal something's being avoided.
- Every risk gets an owner who is not me; a RAID log with the PM as owner on every line means nothing is actually assigned.
- Issues get escalated the moment severity crosses "affects go-live date," not after the fact in a retro.
