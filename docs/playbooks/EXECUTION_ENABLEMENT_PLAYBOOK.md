# Atlas Wealth — Execution Enablement Playbook

**Status:** DISABLED BY DEFAULT  
**Scope:** Broker & Banking Execution  
**Audience:** Board, Risk, Compliance, Ops, Partners  
**Version:** Canonical (v7.x)

---

## 1. Purpose

This playbook defines the **only authorised process** for enabling execution
within Atlas Wealth.

Execution is **not a feature toggle**.  
Execution is a **ceremony**.

At no point may execution be enabled without completing every gate in this
document.

---

## 2. Execution Philosophy

Atlas Wealth enforces strict separation between:

- Advice
- Acceptance
- Intent
- Execution

Execution occurs **only** when:
- Advice is valid
- Client acceptance is recorded
- Intent exists
- Human approvals are complete
- All technical gates are open

Failure of **any** gate MUST block execution.

---

## 3. Execution States

| Phase | Description | Money Moves |
|------|------------|-------------|
| PREPARED | Intent created | No |
| DUAL_APPROVED | Adviser + Compliance approval | No |
| CERTIFIED | Partner & parity checks complete | No |
| EXECUTABLE | All gates satisfied | No |
| EXECUTED | Funds/trades settled | Yes |

Only EXECUTED results in real-world effects.

---

## 4. Mandatory Preconditions (Hard Stops)

Execution cannot be enabled unless ALL of the following are true:

- Platform hardening complete
- Tenant isolation verified
- Audit ledger immutable
- Kill-switch tested
- Environment guard enforced (PROD only)
- Broker CERT completed
- Bank CERT completed
- Shadow ↔ CERT parity proven
- Reconciliation engine active
- Alerting (Slack/PagerDuty) live
- Runbooks approved
- Board approval recorded

---

## 5. Human Approval Ceremony

Execution requires **dual human approval**:

| Role | Responsibility |
|-----|----------------|
| Adviser | Confirms client intent |
| Compliance | Confirms regulatory posture |

Approvals are:
- Identity-bound
- Timestamped
- Immutable
- Auditable

---

## 6. Technical Gates (Non-bypassable)

The following guards MUST all pass at runtime:

- Kill-switch OFF
- Environment == PROD
- Tenant isolation assertion
- Intent phase == EXECUTABLE
- No unresolved reconciliation exceptions
- No active compliance holds

Any failure triggers immediate abort.

---

## 7. Broker Execution Enablement

Broker execution (FIX / REST OMS):

- Must pass CERT environment testing
- Must demonstrate idempotency
- Must support cancel/reject flows
- Must support replay
- Must be isolated per tenant

Broker adapters remain unreachable until ceremony completion.

---

## 8. Banking Execution Enablement

Banking execution (Zepto / Cuscal):

- Zepto LIVE approval
- Cuscal settlement confirmation
- Daily reconciliation mandatory
- Exception alerts wired
- Manual kill-switch rehearsal complete

No direct Cuscal integration permitted.

---

## 9. Rehearsal Requirements

Before LIVE enablement:

- Dry-run execution (no funds)
- Kill-switch drill
- Partner outage simulation
- Reconciliation failure simulation
- AFCA mock complaint replay

Results must be documented and approved.

---

## 10. Go-Live Declaration

Execution is enabled only when:

- Board signs execution declaration
- Compliance signs risk acceptance
- Technical owner signs readiness
- Partner signs operational acceptance

Declaration is recorded as evidence.

---

## 11. Post-Go-Live Controls

After enablement:

- Daily reconciliation
- Weekly compliance review
- Monthly board reporting
- Immediate disable on anomaly

Execution may be revoked at any time.

---

## 12. Absolute Prohibitions

The following are NEVER allowed:

- Auto-execution
- Model-driven execution
- Silent retries
- Bypassing human approval
- Disabling audit logs
- Ignoring reconciliation mismatches

---

## 13. Summary

Execution in Atlas Wealth is:

- Deliberate
- Auditable
- Human-governed
- Reversible
- Optional

Execution remains **disabled** unless this playbook is followed in full.

---

END OF PLAYBOOK