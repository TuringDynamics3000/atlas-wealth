# Alpha Wealth ? Banking Governance SOP & Protocol

## Purpose
Defines the only authorised process for cash movements in Alpha Wealth.
Banking follows the same staged, governed model as broker execution.

## Modes
- SHADOW: Internal simulation, no transfers
- CERT: Bank validation, no transfers
- LIVE: Gated transfers (disabled by default)

## Ceremony (Mandatory)
1. Dual approval (Principal + IC)
2. Policy hash verification
3. Shadow cash simulation
4. Bank certification (no transfer)
5. Parity check (shadow vs cert)
6. Dual-control enablement (code + runtime)
7. Scoped live transfer
8. Kill-switch rehearsal

## Prohibitions
- No manual wires
- No single-actor transfers
- No bypass of certification
- No live banking without evidence

## Evidence
Every stage emits immutable evidence:
- Intent
- Approval
- Policy diff
- Shadow bank
- Bank certification
- Execution (when enabled)
- Reconciliation

Execution is OFF by default.
