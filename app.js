const caseStudies = [
  {
    slug: "baxter-senior-tpm",
    number: "01",
    company: "Baxter International",
    role: "Senior Technical Project / Program Manager",
    period: "Jul 2022 – Jun 2025",
    scope: "50+ global manufacturing and quality sites",
    title: "Post-acquisition integration & global quality governance",
    summary: "A three-year program spanning Hill-Rom integration, a global QMS rollout, and governance for 500+ List of Values.",
    headline: "40% fewer audit findings",
    tags: ["Post-M&A", "ERP / JDE", "Quality systems", "Global rollout"],
    filters: ["ERP / JDE"],
    problem: "Following Baxter's acquisition of Hill-Rom, product inventory had no path into Baxter's existing product-hold process. At the same time, quality workflows varied by region and reporting values were not standardized, creating release delays, audit exposure, and unreliable cross-functional analysis.",
    stakeholders: "Quality, Manufacturing Operations, IT/ERP, Supply Chain, Regulatory/Compliance, and executive portfolio leadership.",
    approach: [
      "Defined integration requirements between Hill-Rom inventory systems and Baxter's Hold System, then linked the updated process to JD Edwards for end-to-end traceability.",
      "Led deployment of a centralized Quality Management System with standardized inspection workflows and coordinated adoption across global sites.",
      "Consolidated 500+ List of Values into a governed framework with explicit ownership and change-control processes.",
    ],
    artifacts: ["Integration requirements documents", "Milestone and portfolio dashboards", "QMS inspection workflow standards", "List-of-Values governance framework"],
    outcomes: [
      ["30%", "fewer product release delays"],
      ["25%", "better audit readiness"],
      ["30%", "fewer manual processes"],
      ["40%", "fewer audit findings"],
    ],
    visual: "baxter-governance",
    why: "A single role spanning post-M&A integration, quality governance, and ERP-backed transformation, with measurable outcomes on all three.",
  },
  {
    slug: "gold-coast-health-plan",
    number: "02",
    company: "Gold Coast Health Plan",
    role: "Technical Project / Program Manager",
    period: "Apr 2021 – Jun 2022",
    scope: "15-month migration · team of 10",
    title: "Regulated data migration under live compliance constraints",
    summary: "A legacy portal migration and JDE alignment delivered without disrupting member-facing operations under Medi-Cal oversight.",
    headline: "98% data accuracy",
    tags: ["Regulated delivery", "Data migration", "Medi-Cal / DHCS", "UAT"],
    filters: ["Regulated delivery"],
    problem: "The legacy portal lacked reliable data accuracy and audit traceability, while financial, claims, and reporting workflows were disconnected. The migration had to happen without disrupting member-facing operations governed by California DHCS and CMS requirements.",
    stakeholders: "IT, Finance, Compliance/Regulatory, data and reporting teams, and leadership.",
    approach: [
      "Managed the end-to-end portal migration, aligning the new portal with JDE through data mapping and API configuration.",
      "Led JDE integration with finance and claims systems using APIs and ETL pipelines, validated through sprint-based UAT cycles.",
      "Redesigned SQL extraction logic and validated report outputs against evolving DHCS regulatory requirements.",
    ],
    artifacts: ["Data-mapping specifications", "API integration design", "ETL pipeline documentation", "UAT test plans and sign-offs"],
    outcomes: [
      ["98%", "data accuracy post-migration"],
      ["0", "operational disruption at cutover"],
      ["15%", "better audit-trail completeness"],
      ["12%", "fewer reconciliation errors"],
    ],
    visual: "gold-coast-flow",
    why: "A hard legacy-to-new-platform cutover with real financial and claims data, delivered inside a government-regulated, audit-heavy environment.",
  },
  {
    slug: "baxter-cloud-modernization",
    number: "03",
    company: "Baxter International",
    role: "Technical Project / Program Manager",
    period: "Apr 2019 – Mar 2021",
    scope: "Global · QA, IT, Regulatory, Supply Chain",
    title: "Legacy-to-cloud modernization of FDA-regulated systems",
    summary: "A connected program of cloud migration, recall automation, SQL Server consolidation, and global change management.",
    headline: "100% supply-chain visibility",
    tags: ["AWS migration", "FDA-regulated", "Recall automation", "Change management"],
    filters: ["Cloud / AWS", "Regulated delivery"],
    problem: "A legacy SharePoint hold system could not scale to global operations, recall tracking was manual, and fragmented data made supply-chain reconciliation slow and difficult to audit.",
    stakeholders: "QA, IT, Regulatory, Supply Chain, global site teams, and executive leadership.",
    approach: [
      "Led migration of the Baxter Hold System from SharePoint to AWS and integrated it with JDE and broader ERP for traceability.",
      "Designed a cloud-based recall automation system for execution, notification routing, and FDA audit-ready reporting.",
      "Consolidated fragmented data sources in SQL Server, migrated legacy data with zero loss, and built SOPs and training for global adoption.",
    ],
    artifacts: ["Cloud migration architecture and cutover plan", "Recall-reporting workflows", "Consolidated SQL Server data model", "SOPs and training materials"],
    outcomes: [
      ["30%", "faster product release cycles"],
      ["100%", "supply-chain visibility"],
      ["75%", "fewer manual reconciliations"],
      ["0", "data loss during consolidation"],
    ],
    visual: "cloud-modernization",
    why: "Four interlocking programs delivered under active FDA compliance, modernizing a high-risk system without breaking the business around it.",
  },
  {
    slug: "alcon-interoperability",
    number: "04",
    company: "Alcon",
    role: "Senior Product Manager",
    period: "Jul 2025 – Apr 2026",
    scope: "Team of 10 · approximately 9 months",
    title: "Multi-EHR healthcare interoperability platform",
    summary: "Architecture and delivery ownership across EHR integrations, surgical data, IAM/API gateway, and edge device lifecycle.",
    headline: "3 EHRs · 9 routes",
    tags: ["FHIR / DICOM", "OAuth / IAM", "Rhapsody", "Edge lifecycle"],
    filters: ["Interoperability"],
    problem: "Alcon needed a scalable, fault-tolerant integration layer across specialty EHRs, plus a surgical-data pipeline from intake through outcomes, with security and regulatory constraints at every touchpoint.",
    stakeholders: "Engineering, Security, Privacy, R&D, ITCI, EHR vendors, clinical operations, and the NTT IoT platform team.",
    approach: [
      "Enhanced the Rhapsody-based architecture across nine integration routes covering three EHRs and Patient, Appointment, and PDF data types.",
      "Improved the six-stage surgical workflow with DICOM device integration and FHIR-based bidirectional EHR synchronization.",
      "Designed reusable IAM token management, API gateway fault tolerance, and an idempotent edge-device lifecycle.",
    ],
    artifacts: ["Nine-route sequence diagrams", "Six-stage surgical workflow specifications", "IAM token architecture", "Edge deployment runbooks"],
    outcomes: [
      ["3", "specialty EHR systems integrated"],
      ["9", "Rhapsody integration routes"],
      ["6", "surgical workflow stages"],
      ["1", "reusable IAM token platform"],
    ],
    visual: "alcon-routes",
    scopeNote: "This engagement is presented on confirmed scope and architectural ownership. Before/after metrics for latency, data quality, incidents, adoption, and deployment reliability were not formally tracked during the tenure, so no percentages are estimated.",
    why: "The combination of surgical device data, EHR interoperability, IAM/security architecture, and edge deployment in one role is a rare mix for medtech and digital-health employers.",
  },
];

const artifacts = [
  {
    slug: "raid-log",
    title: "RAID log",
    type: "Governance",
    icon: "◈",
    description: "A live view of risks, assumptions, issues, and dependencies, reviewed weekly with the delivery team.",
    purpose: "Make ownership and escalation visible before a risk becomes a missed milestone.",
    use: "Weekly program reviews, phase gates, and go-live readiness.",
    source: "artifacts/raid-log-template.md",
  },
  {
    slug: "weekly-status-report",
    title: "Weekly status report",
    type: "Communication",
    icon: "↗",
    description: "A one-page Friday update designed to be scanned in 60 seconds and trend over time.",
    purpose: "Give executives trajectory, decisions needed, and the few risks that changed this week.",
    use: "Weekly executive and sponsor communication.",
    source: "artifacts/status-report-template.md",
  },
  {
    slug: "program-roadmap",
    title: "Program roadmap",
    type: "Planning",
    icon: "⌁",
    description: "A four-phase discovery, build, validate, and rollout shape with compliance gates visible.",
    purpose: "Put audit-trail review and hypercare on the critical path instead of burying them in testing.",
    use: "Program kickoff, integrated planning, and phase-gate alignment.",
    source: "artifacts/program-roadmap.md",
  },
  {
    slug: "stakeholder-comms",
    title: "Stakeholder communications plan",
    type: "Alignment",
    icon: "◎",
    description: "A practical mapping of what each stakeholder group needs, in which format, and how often.",
    purpose: "Prevent the wrong stakeholder from learning about a risk from someone other than the program lead.",
    use: "Kickoff and each major program phase.",
    source: "artifacts/stakeholder-comms-plan.md",
  },
];

const skillRows = [
  ["ERP-backed transformation (JDE)", ["●●●", "●●●", "●●●", "○○○", "○○○"]],
  ["Healthcare interoperability (HL7/FHIR)", ["○○○", "○○○", "○○○", "●●●", "○○○"]],
  ["Regulated-environment delivery", ["●●●", "●●●", "●●●", "●●○", "○○○"]],
  ["Post-M&A integration", ["●●●", "○○○", "○○○", "○○○", "○○○"]],
  ["Cloud migration (AWS)", ["○○○", "○○○", "●●●", "●●○", "○○○"]],
  ["Data governance / standardization", ["●●●", "●●○", "●●○", "○○○", "○○○"]],
  ["Agile delivery", ["●●○", "●●●", "●●●", "●●○", "●●○"]],
  ["Executive stakeholder reporting", ["●●●", "●●○", "●●○", "●●○", "●○○"]],
  ["SQL / data infrastructure", ["●○○", "●●○", "●●●", "○○○", "○○○"]],
  ["Global / multi-site rollout", ["●●●", "○○○", "●●●", "○○○", "●●○"]],
];

const main = document.querySelector("#main-content");
const nav = document.querySelector("#site-nav");
document.querySelector("#current-year").textContent = new Date().getFullYear();

function tagList(tags) {
  return `<div class="tag-list">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
}

function caseCard(item) {
  return `<a class="work-card" href="#/work/${item.slug}" data-case-card data-tags="${item.filters.join("|")}">
    <div class="card-top">
      <span class="card-index">${item.number} / 04</span>
      <h3>${item.title}</h3>
      <span class="card-company">${item.company} · ${item.role}</span>
    </div>
    <div class="card-bottom">
      <p class="card-result"><strong>${item.headline}</strong>${item.summary}</p>
      ${tagList(item.tags.slice(0, 2))}
    </div>
  </a>`;
}

function metrics() {
  return `<div class="metrics-grid">
    <div class="metric"><span class="metric-value">50+</span><span class="metric-label">global manufacturing and quality sites</span></div>
    <div class="metric"><span class="metric-value">98%</span><span class="metric-label">data accuracy after regulated migration</span></div>
    <div class="metric"><span class="metric-value">9</span><span class="metric-label">EHR integration routes across three systems</span></div>
    <div class="metric"><span class="metric-value">75%</span><span class="metric-label">fewer manual reconciliations</span></div>
  </div>`;
}

function renderHome() {
  main.innerHTML = `<section class="hero"><div class="container hero-grid">
    <div>
      <span class="eyebrow">Senior PM · Technical Program Manager</span>
      <h1>Turning complex systems into <em>deliverable</em> programs.</h1>
      <p class="lede">I lead healthcare IT, medtech, and enterprise transformation programs where technical depth, regulatory discipline, and cross-functional alignment all have to work at once.</p>
      <div class="hero-actions"><a class="button button-primary" href="#/work">Explore selected work <span aria-hidden="true">↗</span></a><a class="button button-quiet" href="#/about">How I work <span aria-hidden="true">↓</span></a></div>
    </div>
    <aside class="hero-aside"><p>My best work happens at the intersection of a hard technical problem and a business that cannot afford an unpredictable delivery.</p><span class="signature-line"></span><span class="signature-label">Healthcare · Regulated delivery · Enterprise transformation</span></aside>
  </div></section>
  <section class="section"><div class="container">${metrics()}</div></section>
  <section class="section"><div class="container">
    <div class="section-heading"><div><span class="eyebrow">Selected work</span><h2>Proof of ownership, not just participation.</h2></div><p>Four engagements across post-M&A integration, regulated migration, cloud modernization, and healthcare interoperability.</p></div>
    <div class="work-grid">${caseStudies.map(caseCard).join("")}</div>
    <div class="button-row"><a class="button" href="#/work">View all case studies <span aria-hidden="true">→</span></a></div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section-heading"><div><span class="eyebrow">Delivery model</span><h2>A visible operating rhythm for ambiguous work.</h2></div><p>Every program needs a shared view of the work, the risk, the decisions, and the next meaningful milestone.</p></div>
    <div class="process-grid">
      <div class="process-step"><span class="process-number">01</span><h3>Discover</h3><p>Clarify the current state, constraints, and the outcome that matters.</p></div>
      <div class="process-step"><span class="process-number">02</span><h3>Align</h3><p>Make ownership, dependencies, and decision rights explicit.</p></div>
      <div class="process-step"><span class="process-number">03</span><h3>Deliver</h3><p>Turn the roadmap into a cadence teams can execute and inspect.</p></div>
      <div class="process-step"><span class="process-number">04</span><h3>Validate</h3><p>Use evidence, UAT, and compliance gates to earn the go-live decision.</p></div>
      <div class="process-step"><span class="process-number">05</span><h3>Roll out</h3><p>Pair cutover with training, hypercare, and a feedback loop.</p></div>
    </div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section-heading"><div><span class="eyebrow">Working artifacts</span><h2>The tools behind the outcome.</h2></div><p>Reusable templates make the operating model concrete and give stakeholders something useful to act on.</p></div>
    <div class="artifact-grid">${artifacts.map((item) => `<a class="artifact-card" href="#/artifacts/${item.slug}"><span class="artifact-icon">${item.icon}</span><h3>${item.title}</h3><p>${item.description}</p></a>`).join("")}</div>
  </div></section>`;
}

function renderWork() {
  main.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">Selected work</span><h1>Programs with real constraints and measurable stakes.</h1><p class="lede">A portfolio of delivery ownership across regulated healthcare, medtech interoperability, ERP transformation, and global rollout.</p></div></section>
  <section class="section"><div class="container"><div class="filter-row" aria-label="Filter case studies"><button class="filter-button" type="button" aria-pressed="true" data-filter="All">All work</button>${["Regulated delivery", "Interoperability", "Cloud / AWS", "ERP / JDE"].map((filter) => `<button class="filter-button" type="button" aria-pressed="false" data-filter="${filter}">${filter}</button>`).join("")}</div><div class="work-grid">${caseStudies.map(caseCard).join("")}</div></div></section>`;
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", item === button ? "true" : "false"));
    document.querySelectorAll("[data-case-card]").forEach((card) => {
      card.hidden = filter !== "All" && !card.dataset.tags.includes(filter);
    });
  }));
}

function renderArtifacts() {
  main.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">Working artifacts</span><h1>Small systems that keep big programs honest.</h1><p class="lede">Sanitized templates from real delivery practice: what I use to create shared context, surface risk, and move decisions forward.</p></div></section>
  <section class="section"><div class="container"><div class="artifact-grid">${artifacts.map((item) => `<a class="artifact-card" href="#/artifacts/${item.slug}"><span class="artifact-icon">${item.icon}</span><span class="card-index">${item.type}</span><h3>${item.title}</h3><p>${item.description}</p></a>`).join("")}</div></div></section>`;
}

function visualFor(item) {
  if (item.visual === "gold-coast-flow") return `<figure class="visual-panel"><div class="flow"><span class="flow-node">Legacy portal</span><span class="flow-arrow">→</span><span class="flow-node accent">API + ETL</span><span class="flow-arrow">→</span><span class="flow-node">JDE</span><span class="flow-arrow">→</span><span class="flow-node">Finance · Claims · Reports</span></div><figcaption>Data mapping and validation were treated as a continuous flow, not a single cutover event.</figcaption></figure>`;
  if (item.visual === "cloud-modernization") return `<figure class="visual-panel"><div class="timeline"><div class="timeline-row"><span>Hold system</span><div class="timeline-bar wide"></div></div><div class="timeline-row"><span>Recall flow</span><div class="timeline-bar warm"></div></div><div class="timeline-row"><span>Data layer</span><div class="timeline-bar"></div></div><div class="timeline-row"><span>Adoption</span><div class="timeline-bar wide"></div></div></div><figcaption>Four connected workstreams: cloud migration, recall automation, data consolidation, and global change management.</figcaption></figure>`;
  if (item.visual === "alcon-routes") return `<figure class="visual-panel"><div class="route-grid"><div class="route-cell"><strong>NextGen</strong>Patient · Appt · PDF</div><div class="route-cell"><strong>ModMed</strong>Patient · Appt · PDF</div><div class="route-cell"><strong>Nextech</strong>Patient · Appt · PDF</div></div><div class="flow" style="margin-top:1rem"><span class="flow-node accent">Rhapsody</span><span class="flow-arrow">→</span><span class="flow-node">Clinic Connect</span><span class="flow-arrow">+</span><span class="flow-node">Smart Solutions</span></div><figcaption>Three EHR sources × three data types = nine routes, supported by reusable IAM and fault-tolerance patterns.</figcaption></figure>`;
  return `<figure class="visual-panel"><div class="flow"><span class="flow-node">Hill-Rom</span><span class="flow-arrow">→</span><span class="flow-node accent">Baxter Hold System</span><span class="flow-arrow">→</span><span class="flow-node">JDE</span></div><div class="flow" style="margin-top:0.7rem"><span class="flow-node">QMS rollout</span><span class="flow-arrow">+</span><span class="flow-node">500+ values</span><span class="flow-arrow">→</span><span class="flow-node accent">Governed global model</span></div><figcaption>Three workstreams connected by one program operating rhythm: integration, adoption, and governance.</figcaption></figure>`;
}

function renderCaseStudy(slug) {
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  if (!item) return renderNotFound();
  main.innerHTML = `<section class="detail-hero"><div class="container"><span class="eyebrow">${item.company} · Case study ${item.number}</span><h1>${item.title}</h1><p class="lede">${item.summary}</p><div class="detail-meta"><div class="meta-item"><small>Role</small><span>${item.role}</span></div><div class="meta-item"><small>Period</small><span>${item.period}</span></div><div class="meta-item"><small>Scope</small><span>${item.scope}</span></div></div></div></section>
  <div class="container detail-layout"><article class="detail-content">
    <section class="detail-section"><h2>The problem</h2><p>${item.problem}</p>${visualFor(item)}</section>
    <section class="detail-section"><h2>Stakeholders</h2><p>${item.stakeholders}</p></section>
    <section class="detail-section"><h2>The approach</h2><ul>${item.approach.map((step) => `<li>${step}</li>`).join("")}</ul></section>
    <section class="detail-section"><h2>Artifacts produced</h2><div class="tag-list">${item.artifacts.map((artifact) => `<span class="tag">${artifact}</span>`).join("")}</div></section>
    <section class="detail-section"><h2>Outcome</h2>${item.scopeNote ? `<div class="scope-note"><strong>Confirmed scope, not invented metrics.</strong><br>${item.scopeNote}</div>` : ""}<div class="outcomes-grid">${item.outcomes.map(([value, label]) => `<div class="outcome-card"><span class="outcome-value">${value}</span><span class="outcome-label">${label}</span></div>`).join("")}</div></section>
    <section class="detail-section"><h2>Why it matters</h2><p>${item.why}</p></section>
  </article><aside class="detail-sidebar"><div class="side-label">Explore the portfolio</div><div class="side-list">${caseStudies.filter((other) => other.slug !== item.slug).map((other) => `<a href="#/work/${other.slug}">${other.number} · ${other.company}</a>`).join("")}</div><div class="side-label">Related artifacts</div><div class="side-list"><a href="#/artifacts/raid-log">RAID log</a><a href="#/artifacts/program-roadmap">Program roadmap</a><a href="#/artifacts/stakeholder-comms">Stakeholder communications plan</a></div></aside></div>`;
}

function artifactVisual(slug) {
  if (slug === "raid-log") return `<div class="visual-panel"><div class="route-grid"><div class="route-cell"><strong>R</strong>Risks</div><div class="route-cell"><strong>A</strong>Assumptions</div><div class="route-cell"><strong>I</strong>Issues</div><div class="route-cell"><strong>D</strong>Dependencies</div></div></div>`;
  if (slug === "weekly-status-report") return `<div class="visual-panel"><div class="timeline"><div class="timeline-row"><span>Trajectory</span><div class="timeline-bar wide"></div></div><div class="timeline-row"><span>Metrics</span><div class="timeline-bar"></div></div><div class="timeline-row"><span>Decisions</span><div class="timeline-bar warm"></div></div></div></div>`;
  if (slug === "program-roadmap") return `<div class="visual-panel"><div class="flow"><span class="flow-node">Discover</span><span class="flow-arrow">→</span><span class="flow-node">Build</span><span class="flow-arrow">→</span><span class="flow-node accent">Validate</span><span class="flow-arrow">→</span><span class="flow-node">Rollout</span></div></div>`;
  return `<div class="visual-panel"><div class="flow"><span class="flow-node">Executive</span><span class="flow-arrow">↕</span><span class="flow-node accent">Program lead</span><span class="flow-arrow">↕</span><span class="flow-node">Delivery teams</span></div></div>`;
}

function renderArtifact(slug) {
  const item = artifacts.find((artifact) => artifact.slug === slug);
  if (!item) return renderNotFound();
  main.innerHTML = `<section class="detail-hero"><div class="container"><span class="eyebrow">${item.type} artifact</span><h1>${item.title}</h1><p class="lede">${item.description}</p></div></section><div class="container detail-layout"><article class="detail-content"><section class="detail-section"><h2>What it does</h2><p>${item.purpose}</p>${artifactVisual(item.slug)}</section><section class="detail-section"><h2>When I use it</h2><p>${item.use}</p></section><section class="detail-section"><h2>In practice</h2><p>This sanitized template is part of a larger operating system: it creates a shared object for a conversation, makes the next decision explicit, and gives the team a repeatable way to inspect progress.</p><div class="button-row"><a class="button button-primary" href="${item.source}" target="_blank" rel="noreferrer">Open source template <span aria-hidden="true">↗</span></a></div></section></article><aside class="detail-sidebar"><div class="side-label">More artifacts</div><div class="side-list">${artifacts.filter((other) => other.slug !== item.slug).map((other) => `<a href="#/artifacts/${other.slug}">${other.title}</a>`).join("")}</div><div class="side-label">See it applied</div><div class="side-list"><a href="#/work">Browse case studies →</a></div></aside></div>`;
}

function renderAbout() {
  main.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">About</span><h1>Technical enough to ask the right question. Program-minded enough to get it shipped.</h1><p class="lede">I bring 13+ years across healthcare IT, medical devices, and enterprise program delivery, with a focus on making complex systems understandable and executable.</p></div></section><section class="section"><div class="container about-grid"><div><span class="eyebrow">Background</span><h2>The throughline is delivery in environments where details matter.</h2><p>My work has centered on EHR and device interoperability, ERP-backed transformation, regulated environments, and post-M&A integration. I work comfortably across architecture discussions, stakeholder decisions, delivery cadence, and the evidence needed for a safe launch.</p><p>Credentials include PMP, CSPO, CSM, and an MBA from the University of San Diego.</p><div class="credential-list"><span class="credential">PMP</span><span class="credential">CSPO</span><span class="credential">CSM</span><span class="credential">MBA</span></div><div class="button-row"><a class="button button-primary" href="mailto:blpatnaik31@gmail.com">Get in touch <span aria-hidden="true">↗</span></a><a class="button" href="https://linkedin.com/in/lbhogela" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div><div><span class="eyebrow">Skills matrix</span><h2>Where the reps were built.</h2><div class="skills-table-wrap"><table class="skills-table"><thead><tr><th>Skill</th><th>Baxter Sr.</th><th>GCHP</th><th>Baxter</th><th>Alcon</th><th>TCS / Infosys</th></tr></thead><tbody>${skillRows.map(([skill, values]) => `<tr><td>${skill}</td>${values.map((value) => `<td class="skill-dots" title="${value}">${value}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p style="font-size:0.72rem;color:var(--ink-faint);margin-top:0.9rem">●●● primary / repeated ownership · ●●○ significant contribution · ●○○ exposure</p></div></div></section>`;
}

function renderNotFound() {
  main.innerHTML = `<section class="not-found container"><span class="eyebrow">404</span><h1>That page is not on the roadmap.</h1><p class="lede" style="margin-inline:auto">The link may have moved. The work is still here.</p><div class="button-row" style="justify-content:center"><a class="button button-primary" href="#/">Return home</a></div></section>`;
}

function updateNav(path) {
  const page = path.startsWith("/work") ? "work" : path.startsWith("/artifacts") ? "artifacts" : path.startsWith("/about") ? "about" : "";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#/${page}`;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function render() {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  updateNav(`/${parts[0] || ""}`);
  if (parts[0] === "work" && parts[1]) renderCaseStudy(parts[1]);
  else if (parts[0] === "work") renderWork();
  else if (parts[0] === "artifacts" && parts[1]) renderArtifact(parts[1]);
  else if (parts[0] === "artifacts") renderArtifacts();
  else if (parts[0] === "about") renderAbout();
  else if (parts.length === 0) renderHome();
  else renderNotFound();
  main.focus({ preventScroll: true });
  nav.classList.remove("is-open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", render);
render();
