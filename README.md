# Atlas Wealth

Atlas Wealth is a **regulated wealth-management product** delivered through the **Atlas Console**
and powered by **TuringCore-v3**.

This repository:
- owns **wealth-specific UI and workflows**
- consumes **read-only projections**
- contains **no business logic, policy evaluation, or state mutation**

The UI must conform exactly to the **v1 design specification**.

## Non-Negotiables
- No portfolio mathematics
- No approval logic
- No authority rules
- No ledger state

Those concerns live exclusively in TuringCore-v3.

See /docs/ATLAS_VS_ATLAS_WEALTH.md.
