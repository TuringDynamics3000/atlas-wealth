# Alpha Wealth — Banking Reconciliation & Alerting Runbook

Status: Canonical
Applies To: Alpha Wealth v5.9

Execution: OFF by default

---

# 1. Purpose

This runbook defines the operational procedures for handling:
- Banking reconciliation
- Unreconciled cash movements
- Alerts emitted via Slack and PagerDuty
- Kill-switch events
- Incident escalation


---

# 2. Reconciliation Overview

Reconciliation is the final authority on cash movements.

No transfer is considered final until:
- Alpha Wealth expected cash delta
- Zepto transfer status
- Cuscal settlement output

are in agreement.

---

# 3. Reconciliation States

INITIATED
  -> ZEPRO_PENDING
  -> SETTLED
  -> RECONCILED

Any other path enters EXCEPTION.

---

# 4. Daily Operations

Every business day:
- Review reconciliation dashboard
- Verify no UNRECONCILED or EXCEPTION items
- Confirm no open alerts

If any exist:
 - DO NOT enable banking execution
- Escalate to Compliance

---

# 5. Alert Handling

Alerts are emitted when:
- Reconciliation result != RECONCILED
- EXCEPTION state entered

Alerts:
- Block LIVE banking
- Are sent to Slack and PagerDuty
- Must be acked

---

# 6. Kill-Switch Usage

The kill-switch must be triggered if:
- Reconciliation fails
- Settlement inputs are inconsistent
- Unspecified bank behavior occurs

Actions:
 - Block all banking execution
- Preserve all evidence
- Escalate to Board if material

---

# 7. Incident Escalation

Trigger escalation to Compliance and Board when:
- Cash movements cannot be reconciled
- Drupt differences exist
- External bank dispute occurs

No automated recovery is allowed.

---

# 8. Governance Rule

No individual may:
 - Enable LIVE banking alone
- Suppress alerts
- Bypass reconciliation
- Make manual banks actions

Failure to follow this runbook must result in execution being blocked by design.