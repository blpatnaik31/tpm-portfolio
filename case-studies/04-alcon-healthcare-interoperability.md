# Case Study 4 — Alcon: Multi-EHR Healthcare Interoperability Platform

**Role:** Senior Product Manager · **Period:** Jul 2025 – Apr 2026 (~9 months) · **Team:** 10 · **Reported to:** Director, Digital Health Customer Integrations

> **Note on this case study:** unlike the other three, this engagement's outcomes weren't formally tracked with hard percentages during the tenure. The scope and architectural facts below are confirmed and accurate; no outcome metrics are estimated or implied beyond what's stated.

## Problem

Alcon's digital health platform needed a scalable, fault-tolerant integration layer to route patient and appointment data from multiple specialty EHR systems (NextGen, ModMed, Nextech) into Alcon's Clinic Connect and Smart Solutions platforms, plus a complete surgical-data pipeline for the surgical planning application spanning intake through post-operative outcomes — all while maintaining FDA-adjacent regulatory compliance and enterprise-grade security across every integration touchpoint (security, privacy, R&D, and IT/Commercial Infrastructure all had a stake).

## Stakeholders

Engineering (architecture review, implementation), Security (RBAC, credential management, TLS lifecycle), Privacy (data governance, EHR field-locking rules), R&D (surgical planning application requirements), ITCI (IAM/commerce/cloud infrastructure), EHR vendors (NextGen, ModMed, Nextech), Clinic Connect/HDS team, clinical/surgical operations, and the NTT IoT platform team for edge deployment.

## Approach

- **Multi-EHR FHIR integration (Rhapsody)** — documented and enhanced the architecture for a Rhapsody-based integration engine covering all 9 integration routes (3 EHR sources × Patient/Appointment/PDF data types). Rhapsody was already the interoperability layer in place; this work onboarded the EHRs onto it. Drove implementation of proactive OAuth token caching, correlationID-indexed end-to-end traceability, FHIR paging for large appointment bundles, and duplicate-patient detection (MRN + DOB + demographic matching). Coordinated retry-with-backoff and dead-letter-queue error handling to eliminate manual intervention on transient EHR API failures.
- **Surgical data platform (surgical planning application / DICOM)** — documented and improved the end-to-end surgical workflow across 6 clinical stages, from patient intake through post-operative outcome capture, including DICOM C-FIND/C-MOVE integration for biometry devices (IOLMaster, PentaCAM, ARGOS) and FHIR-based bidirectional EHR synchronization at each stage.
- **IAM & API gateway platform** — designed a unified, reusable IAM token management architecture (JWT/OAuth 2.0 decision routing, proactive token caching, AWS Secret Manager integration) serving multiple EHR integrations from a single Rhapsody route, plus API gateway architecture with circuit breaker, retry/DLQ, response caching, and on-call escalation.
- **Edge device lifecycle management** — documented and standardized the Rhapsody container lifecycle across NTT IoT-managed edge devices, including idempotent boot-hook logic and S3-backed configuration/backup workflows to prevent data loss on container recreation.

## Artifacts produced

Sequence diagrams capturing all decision branches/error paths for the 9 integration routes, surgical-workflow integration specifications (6-stage), IAM token architecture documentation, API gateway design docs, edge deployment runbooks, service catalogs and API references.

## Outcome

**Confirmed scope (not placeholders):**
- 3 specialty EHR systems (NextGen, ModMed, Nextech) integrated via 9 Rhapsody routes into Clinic Connect and Smart Solutions
- 6-stage surgical data flow documented and improved, from patient intake through post-op outcome capture
- Unified IAM token platform eliminating redundant token-fetch logic across multiple EHR integrations from a single reusable route
- Standardized, self-healing edge deployment lifecycle across NTT IoT-managed Rhapsody devices

On outcome metrics: this ~9-month engagement ended before before/after metrics (data-sync latency, data-quality/duplicate rate, incident rate, adoption, deployment reliability) were formally tracked. Rather than estimate numbers after the fact, this case study is presented on confirmed scope and architectural ownership alone.

## Why it matters

The combination of surgical device data (DICOM/biometry), EHR interoperability (FHIR/OAuth), IAM/security architecture, and edge deployment lifecycle in a single role is a rare, high-value mix for medtech/digital-health employers — and it's the deepest healthcare-interoperability evidence in this portfolio. This case study leads with scope and architecture rather than a headline percentage because those numbers genuinely weren't tracked at the time; the quantified track record lives in case studies 1–3.
