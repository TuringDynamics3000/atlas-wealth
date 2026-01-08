# Atlas Wealth — Partner Due-Diligence Pack

**Audience:** Banks, Brokers, Custodians, Infrastructure Partners  
**Status:** Review-ready  
**Execution:** Disabled by default  

---

## 1. Executive Overview

Atlas Wealth is a **decision-of-record and evidence-of-record platform**
for regulated financial advice.

The platform separates:
- Advice
- Client acceptance
- Intent
- Execution

Execution is **optional**, **ceremony-based**, and **disabled by default**.

---

## 2. What Atlas Wealth Does

Atlas Wealth provides:

- Living client financial state
- Deterministic drift detection
- Advice validity assessment
- Adviser workflow
- Client acceptance (incl. partial)
- Intent creation (non-executing)
- Evidence capture and replay
- Regulator / AFCA export packs
- Licensee oversight dashboards
- Offline learning (governed)

---

## 3. What Atlas Wealth Does NOT Do

Atlas Wealth explicitly does **not**:

- Auto-execute trades or transfers
- Replace bank ledgers
- Replace broker OMS
- Perform autonomous decision-making
- Update models without approval
- Bypass human governance

---

## 4. Governance & Control Model

### Separation of Concerns
| Layer | Responsibility |
|-----|----------------|
| Advice | Reasoned recommendations |
| Acceptance | Client consent |
| Intent | Execution eligibility |
| Execution | Optional, gated, external |

### Human-in-the-Loop
- Adviser approval
- Compliance approval
- Board-approved execution enablement

---

## 5. Execution Posture

Execution is governed by:

- Dual human approval
- Environment guards (PROD only)
- Kill-switch enforcement
- Partner certification (CERT)
- Shadow ↔ CERT parity checks
- Reconciliation validation

Execution adapters remain unreachable unless ceremonies complete.

---

## 6. Partner Integration Model

### Brokers (FIX / OMS)
- Idempotent order submission
- Explicit acknowledgements
- Cancel / reject handling
- Replay protection
- No batching or silent fills

### Banks (Zepto / Cuscal)
- Zepto-mediated transfers only
- Cuscal as settlement authority
- Daily reconciliation mandatory
- Exception alerts wired
- No direct Cuscal integration

---

## 7. Audit, Evidence & Replay

Atlas Wealth maintains:

- Immutable audit intent
- Evidence bundles per advice / case
- Replayable decision history
- AFCA / ASIC-ready exports

Partners can rely on Atlas Wealth as the **authoritative record**
of why an action was taken.

---

## 8. Security & Hardening

Platform hardening includes:

- Tenant isolation contracts
- Append-only audit ledger
- Secrets boundary (KMS-first)
- Environment separation
- Kill-switch primitives
- Threat model anchoring

---

## 9. Risk Management

Key risks addressed:

- Advice drift → detected early
- Stale advice → invalidated
- Execution errors → gated
- Settlement mismatches → blocked
- Model risk → offline, governed

---

## 10. Engagement Expectations

Atlas Wealth expects partners to:

- Support CERT environments
- Participate in rehearsal testing
- Provide deterministic APIs
- Support reconciliation workflows
- Respect execution ceremonies

---

## 11. Why Partners Work With Atlas Wealth

Partners benefit from:

- Reduced execution risk
- Cleaner audit trails
- Faster issue resolution
- Clear separation of liability
- Regulator-aligned architecture

Atlas Wealth is designed to **lower**, not increase, partner risk.

---

## 12. Summary

Atlas Wealth is:

- Conservative by design
- Transparent by default
- Governed by ceremony
- Safe for regulated execution

Execution remains disabled unless explicitly enabled
through documented governance.

---

END OF PARTNER DUE-DILIGENCE PACK