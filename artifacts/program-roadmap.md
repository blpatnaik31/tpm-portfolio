# Program Roadmap Template (Mermaid)

A generalized four-phase roadmap shape I use for regulated, multi-stakeholder programs — discovery, build, validate, rollout — with compliance/audit gates called out explicitly rather than buried inside a phase.

```mermaid
gantt
    title Example Program Roadmap
    dateFormat  YYYY-MM-DD
    axisFormat  %b %Y

    section Discovery
    Stakeholder alignment & requirements     :done,    disc1, 2024-01-01, 2024-02-01
    Current-state / gap assessment           :done,    disc2, 2024-01-15, 2024-02-15

    section Build
    Integration / data mapping design        :active,  build1, 2024-02-15, 2024-04-01
    Core build                               :active,  build2, 2024-03-01, 2024-05-15

    section Validate
    UAT cycle 1                              :         val1, 2024-05-15, 2024-06-01
    Compliance / audit-trail review          :crit,    val2, 2024-06-01, 2024-06-15
    UAT cycle 2 (post-fix)                   :         val3, 2024-06-15, 2024-07-01

    section Rollout
    Cutover / go-live                        :crit,    roll1, 2024-07-01, 2024-07-05
    Hypercare & training                     :         roll2, 2024-07-05, 2024-08-05
```

## Why this shape

The compliance/audit-trail review sits as its own critical-path block, not folded into "testing" — in regulated environments (FDA, HIPAA, DHCS/CMS), that review gates go-live and deserves its own visible milestone stakeholders can track. Hypercare after cutover is a deliberate phase, not an afterthought — the two weeks after go-live are where zero-disruption cutovers are actually won.
