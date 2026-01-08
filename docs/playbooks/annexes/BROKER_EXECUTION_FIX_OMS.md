# Atlas Wealth — Broker Execution Annex (FIX / OMS)

**Status:** DISABLED BY DEFAULT  
**Applies to:** Equity & ETF execution via FIX or REST OMS  
**Audience:** Broker Partners, Risk, Compliance, Engineering  

---

## 1. Scope

This annex defines the **only authorised process** for broker execution
within Atlas Wealth.

This applies to:
- FIX-based brokers
- REST-based Order Management Systems (OMS)

Execution is **never automatic**.

---

## 2. Execution Preconditions (Hard Stops)

Broker execution cannot occur unless:

- Intent status == EXECUTABLE
- Dual human approval recorded
- Broker CERT environment passed
- Shadow ↔ CERT parity verified
- Kill-switch tested and OFF
- Environment == PROD
- No unresolved reconciliation issues
- Compliance sign-off recorded

Failure of any condition MUST block execution.

---

## 3. FIX / OMS Requirements

All broker integrations MUST support:

- Idempotent order submission
- Explicit order acknowledgement
- Reject / cancel flows
- Replay of identical orders
- Deterministic order IDs
- Time-bounded execution windows

---

## 4. Execution Ceremony

Broker execution follows this ceremony:

1. Intent reviewed
2. Adviser approval
3. Compliance approval
4. Technical gate verification
5. Broker submission
6. Broker acknowledgement
7. Settlement confirmation
8. Reconciliation check

Each step is recorded as evidence.

---

## 5. Error Handling

The following events MUST abort execution:

- Broker rejection
- Timeout or partial acknowledgement
- Duplicate execution detection
- Any reconciliation mismatch

Abort results in:
- Kill-switch assertion
- Alert emission
- Manual investigation

---

## 6. Absolute Prohibitions

The following are NEVER permitted:

- Auto-retry without review
- Aggregated or batched orders
- Silent partial fills
- Model-driven execution
- Execution without human approval

---

## 7. Summary

Broker execution in Atlas Wealth is:

- Human-approved
- Evidence-bound
- Deterministic
- Reversible
- Optional

Execution remains disabled unless this annex is followed in full.

---

END OF BROKER EXECUTION ANNEX