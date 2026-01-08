# Alpha Wealth ? Broker-Live Governance Artefacts

This directory contains the **canonical governance artefacts** governing
broker-live execution for **Alpha Wealth**.

These documents define the **only authorised process** by which Alpha Wealth
may transition from paper execution to live broker execution.

---

## Contents

### 1. Broker-Live SOP & Broker Protocol (PDF)

**File:**  
\Alpha_Wealth_Broker_Live_SOP_and_Protocol.pdf\

**Purpose:**  
Defines the full end-to-end governance model for live trading, including:

- Dual-control human approvals
- Broker certification (no market routing)
- Shadow ? broker parity enforcement
- Policy hashing and diffs
- Execution kill-switches and rehearsals
- Evidence generation at every stage

---

## Governance Principles (Non-Negotiable)

- No single-actor execution
- No live trading without certification and parity
- No execution without cryptographic evidence
- No bypass of kill-switch controls
- Execution is OFF by default

---

## Status

- Authoritative: Yes  
- Execution Enabled: No (by design)  
- Applies From: Alpha Wealth v4.7+

---

## Change Control

Any change requires:
1. Code gate (reviewed PR)
2. Runtime gate (separate IAM principal)
3. Updated evidence
4. Board / Compliance acknowledgement
