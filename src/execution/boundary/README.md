# Atlas Wealth — Execution Boundary (LOCKED)

This directory defines the **Execution Boundary Contract**
for Atlas Wealth.

Principles:
- Atlas Wealth NEVER executes trades directly
- Atlas emits ExecutionIntent objects only
- Responsibility transfers at the boundary
- Execution systems consume intent + evidence
- Atlas records attestations and reconciliation

What LEAVES Atlas:
- ExecutionIntent
- EvidenceBundleHash

What NEVER leaves Atlas:
- Advice logic
- Suitability logic
- Client fact-find logic
- Adviser decision logic

This boundary prevents:
- Platform risk
- Broker liability leakage
- Execution-layer contamination

Breaking changes REQUIRE governance approval.
