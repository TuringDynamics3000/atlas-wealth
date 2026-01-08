# Alpha Wealth ? Scope Map (Canonical)

This document defines the *full* Alpha Wealth product surface beyond the frozen v1 static demo.
It is intentionally structured as **Modules ? Capabilities ? Data ? Controls ? Delivery milestones**.

---

## 0. North Star Definition

**Alpha Wealth** is the wealth product module delivered through the **Atlas Console** and powered by **TuringCore**.

- Atlas (Console): shell, auth/session, navigation, orchestration, evidence display
- Alpha Wealth: wealth workflows, domain UI, projection contracts, reporting
- TuringCore: authoritative ledger/events, policy evaluation, evidence generation

**Non-negotiable boundary**
- Alpha Wealth does not compute truth (no portfolio maths, no approval logic, no authority rules).
- It consumes projections and submits intents; the engine decides and evidences.

---

## 1. Personas & Operating Model

### 1.1 Personas
- **Principal / IC Chair**: oversight, approvals, mandates, risk appetite
- **Investment Analyst**: model changes, research notes, scenario testing
- **Ops / Administrator**: KYC status monitoring, account structures, document management
- **Advisor / Relationship Manager**: client-facing summaries, reporting packs
- **Compliance Officer**: policy breaches, audit trails, evidence packs

### 1.2 Operating model modes
- **Single-family office** (multi-entity, trusts/companies/individuals)
- **Multi-family office** (multi-tenant, segregation + delegated access)
- **Adviser firm** (many clients, delegated authorities, compliance reviews)

---

## 2. Core Domain Objects (UI-facing; engine-backed)

### 2.1 Entities (legal + beneficial)
- Individual
- Trust
- Company
- Partnership / Foundation (optional v2)
- Beneficial ownership graph (read-only in UI; engine computes)

### 2.2 Portfolios (containers)
- Portfolio = allocation policy + holdings + risk profile + mandates
- Can belong to an entity; can have sub-accounts (brokerage, cash, etc.)

### 2.3 Mandates / Policies (constraints)
- Risk bands, asset limits, concentration caps
- Liquidity constraints
- ESG exclusions / inclusions
- Rebalancing bands + drift thresholds
- Approval requirements (who/when/what)

### 2.4 Evidence Packs
- Decision proposal
- Inputs snapshot
- Policy hashes
- Commit event
- Reason codes + reviewer notes
- External attestations (future)

---

## 3. Product Modules (What Alpha Wealth includes)

### 3.1 Client & Entity Management (read + admin workflows)
Capabilities:
- Entity registry (create/edit under policy)
- Ownership/beneficiary relationships (graph view)
- Account structures (custody/broker/cash)
- Document vault (statements, KYC docs, mandates)

Data/projections:
- EntitySummaryProjection
- OwnershipGraphProjection
- AccountLinkProjection
Controls:
- Change approval gating
- Evidence pack on updates

---

### 3.2 Portfolio Construction & Maintenance
Capabilities:
- Model portfolio definitions (strategies, benchmarks)
- Target allocation sets (ETF/fund baskets)
- Drift monitoring (banded)
- Scenario tests (what-if, stress, rate shocks)
- Rebalance intent submission (not execution in UI)

Data/projections:
- PortfolioSummaryProjection
- AllocationTargetProjection
- DriftProjection
- ScenarioResultProjection (optional)
Controls:
- Mandate constraints enforced by engine
- Every rebalance decision evidenced

---

### 3.3 Performance & Reporting (institutional grade)
Capabilities:
- Time-weighted returns (TWR) and attribution (engine computed)
- Benchmark comparisons
- Periodic report pack generation (PDF later)
- Holdings snapshots
- Tax summaries (later; jurisdiction-specific)

Data/projections:
- PerformanceProjection
- HoldingsProjection
- CashFlowsProjection
- BenchmarkProjection
Controls:
- Immutable report artefacts with evidence references
- As-at timestamps everywhere

---

### 3.4 Cash & Liquidity (FO reality)
Capabilities:
- Cash laddering (bills/term deposits)
- Liquidity buffer tracking per entity
- Upcoming obligations tracking (fees, tax, distributions)
- Cash drag monitoring

Data/projections:
- LiquidityProjection
- ObligationsProjection
Controls:
- Minimum liquidity policy enforcement

---

### 3.5 Risk & Compliance (continuous)
Capabilities:
- Concentration + factor exposure dashboards
- Mandate breach alerts + reason codes
- Restricted list enforcement (instruments, counterparties)
- AML/PEP/Adverse media status surfaces (if integrated)

Data/projections:
- RiskExposureProjection
- BreachProjection
- RestrictedListProjection
Controls:
- Policy evaluation hash + audit trace
- Kill-switch semantics (engine-side)

---

### 3.6 Evidence & Audit (differentiator)
Capabilities:
- Evidence badge for every number
- Evidence viewer (v2) with:
  - policy hash
  - input snapshot
  - decision steps
  - commit event + signatures
- Exportable evidence pack (zip/PDF later)

Data/projections:
- EvidenceIndexProjection
- EvidencePackProjection
Controls:
- Tamper-evident references
- Immutable evidence store semantics

---

### 3.7 Workflows & Approvals (human in the loop)
Capabilities:
- Draft ? Review ? Approve ? Commit state machine
- Multi-approver IC flows (quorum)
- Delegated approvals (assistant, analyst)
- Action queues and SLA timers

Data/projections:
- WorkflowQueueProjection
- ApprovalStateProjection
Controls:
- Separation of duties enforced
- Approver identity bound to evidence

---

### 3.8 Integrations (real-world execution)
Capabilities (target list):
- Custody/brokerage (orders, holdings, confirmations)
- Banking rails (cash movements, balances)
- Market data (pricing, corporate actions)
- Document e-sign
- CRM/Comms (optional)

Data/projections:
- ExternalAccountProjection
- ReconciliationProjection
Controls:
- Integration evidence + reconciliation trails

---

### 3.9 Administration (tenant + platform)
Capabilities:
- Tenant config (branding, feature flags)
- User + role management
- Audit log search
- Environment status page (health, latency, errors)

Controls:
- Admin actions evidenced
- Break-glass controls

---

## 4. Non-Functional Requirements (must-have)

### 4.1 Security
- Strong auth (OIDC/SAML later)
- Least privilege roles
- Session hardening
- Secrets management
- Secure headers + CSP

### 4.2 Reliability
- Deterministic projection reads
- Backpressure + retries on integrations
- Idempotent commands
- Observability (metrics, traces, logs)

### 4.3 Compliance posture (AU)
- Auditability, evidence, traceability
- Clear segregation between advice content and execution intents
- Data retention + exportability

---

## 5. Delivery Milestones (practical sequencing)

### v1 (DONE ? Canonical Demo)
- Static UI shell
- Navigation + pages
- Mock projections + adapter boundary
- Evidence badge (basic)
- Deployed artefact and tag

### v1.1 (Demo-credible, still non-live)
- Evidence viewer panel (read-only)
- Better tables/cards and layout parity
- Report pack ?download? placeholder
- Tenant config surface (read-only)

### v2 (First live wiring)
- Auth + roles
- Real projection API (read-only)
- Entity + portfolio ingestion
- Evidence drill-down with real pack IDs
- Basic breach alerts

### v3 (Execution + approvals)
- Workflow queues + approvals
- Rebalance intent submission to engine
- External integration sandbox (paper trading / mocked broker)
- Reconciliation surfaces

---

## 6. Definition of ?Wired Up? (so we don't lie to ourselves)

Alpha Wealth is considered **fully wired** only when:
- Every displayed number has a backing projection source and as-at timestamp
- Every action is an intent that becomes an evidenced decision (or rejection)
- Approvals are enforced by policy (not UI)
- Evidence packs are retrievable end-to-end

---

## 7. Next Decisions (to move on cleanly)

1) Confirm Alpha Wealth v2 target: **Read-only live projections first** vs **workflow first**  
2) Decide integration order: Custody/broker vs banking rails vs market data  
3) Define minimum auth model: role taxonomy + tenant isolation  
4) Define evidence pack schema: IDs, hashes, retrieval API

---
