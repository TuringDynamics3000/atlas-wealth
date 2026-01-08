# Atlas Wealth — Banking Execution Annex (Zepto / Cuscal)

**Status:** DISABLED BY DEFAULT  
**Applies to:** Cash transfers and settlement  
**Audience:** Banking Partners, Risk, Compliance, Engineering  

---

## 1. Scope

This annex defines the **only authorised mechanism** for banking execution
within Atlas Wealth.

Atlas Wealth integrates with:
- Zepto (transfer orchestration)
- Cuscal (settlement)

Direct Cuscal integration is prohibited.

---

## 2. Execution Preconditions (Hard Stops)

Bank execution cannot occur unless:

- Intent status == EXECUTABLE
- Dual human approval recorded
- Zepto CERT passed
- Shadow ↔ CERT parity proven
- Kill-switch tested and OFF
- Environment == PROD
- Reconciliation engine active
- Alerting (Slack / PagerDuty) live
- Banking runbooks approved

Failure of any condition MUST block execution.

---

## 3. Zepto Requirements

Zepto execution MUST support:

- Idempotent transfer requests
- Explicit transfer states
- Deterministic transfer IDs
- Rejection and cancellation flows
- Replay protection

All transfers are initiated via Zepto only.

---

## 4. Cuscal Settlement Handling

Cuscal is treated as:

- Settlement authority
- Source of final truth
- Reconciliation input

Cuscal files/statements are ingested daily.
Any mismatch triggers immediate alerts.

---

## 5. Execution Ceremony

Banking execution follows this ceremony:

1. Intent reviewed
2. Adviser approval
3. Compliance approval
4. Technical gate verification
5. Zepto LIVE request
6. Cuscal settlement confirmation
7. Reconciliation validation

Each step produces immutable evidence.

---

## 6. Failure & Kill-Switch Behaviour

Execution MUST be aborted on:

- Zepto error
- Cuscal mismatch
- Missing settlement confirmation
- Any alert classified as CRITICAL

Kill-switch activation immediately disables all banking execution.

---

## 7. Absolute Prohibitions

The following are NEVER permitted:

- Direct Cuscal calls
- Auto-transfer retries
- Silent settlement mismatches
- Execution without reconciliation
- Execution without human approval

---

## 8. Summary

Banking execution in Atlas Wealth is:

- Zepto-mediated
- Cuscal-verified
- Fully reconciled
- Human-governed
- Reversible

Execution remains disabled unless this annex is followed in full.

---

END OF BANK EXECUTION ANNEX