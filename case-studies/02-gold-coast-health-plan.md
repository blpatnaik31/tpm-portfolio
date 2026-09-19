# Case Study 2 — Gold Coast Health Plan: Regulated Data Migration Under Live Compliance Constraints

**Role:** Technical Project/Program Manager · **Period:** Apr 2021 – Jun 2022 (15 months) · **Team:** 10 · **Reported to:** Director, IT Population Health and Interoperability

## Problem

Gold Coast Health Plan is the Medi-Cal managed-care plan for Ventura County, California, operating under strict California DHCS and CMS regulatory requirements with heavy data-accuracy and audit-compliance obligations. The plan's legacy systems couldn't meet those standards: no reliable data accuracy, no real audit traceability, and disconnected financial/claims/reporting workflows that created reconciliation delays and compliance risk. A full portal migration with ERP (JD Edwards) alignment was required to modernize the data infrastructure — and it had to happen without disrupting member-facing operations governed by state oversight.

## Stakeholders

IT (technical execution partner), Finance (integration requirements and reconciliation validation), Compliance/Regulatory (Medi-Cal/DHCS standards adherence), the data/reporting team, and leadership (dashboard visibility and status reporting).

## Approach

- **Legacy portal migration & JDE integration** — managed the end-to-end portal migration, coordinating IT, Finance, and Compliance; aligned the new portal with JDE through data mapping and API configuration to ensure reporting accuracy; oversaw UAT to validate data integrity before cutover.
- **Financial & claims systems integration** — designed and led integration of JDE with finance and claims systems using APIs and ETL pipelines, establishing data-flow continuity across financial, claims, and reporting domains; validated through sprint-based UAT cycles with Finance and Compliance.
- **SQL reporting optimization** — redesigned data-extraction logic to correct accuracy issues, optimized SQL workflows for scale under Medi-Cal's evolving compliance reporting requirements, and validated report outputs against DHCS regulatory standards.

Delivery ran on Agile (sprint planning, backlog grooming, UAT) rather than a single big-bang cutover, which is what made zero-disruption achievable in a regulated, member-facing environment.

## Artifacts produced

Data-mapping specifications, API integration design, ETL pipeline documentation, redesigned SQL reporting logic, audit-trail documentation validated against DHCS standards, UAT test plans and sign-offs.

## Outcome

- **98% data accuracy** achieved post-migration, with **zero operational disruption** during cutover
- **15% improvement in audit-trail completeness** through the JDE-integrated financial/claims systems
- **12% reduction in reconciliation errors** via SQL reporting optimization
- All three programs delivered under live Medi-Cal (DHCS/CMS) regulatory compliance constraints

## Why it matters

This is the cleanest example I have of delivering a hard cutover — legacy system to new platform, real financial and claims data — with zero disruption, inside a government-regulated, audit-heavy environment where a miss isn't just a bug, it's a compliance finding.
