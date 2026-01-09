# Atlas Wealth — Service Level Objectives (SLO)

## Summary

Atlas Wealth capacity and performance SLOs have been validated
using progressive load testing with production semantics.

- 4xx responses treated as controlled policy rejections
- 5xx responses treated as system failures
- p95 latency used as the governing performance metric

## Validated Capacity

| Tier | Max Concurrent VUs | p95 Latency | Status |
|-----|-------------------|-------------|--------|
| Gold | ≤ 50 | < 250 ms | PASS |
| Silver | ≤ 100 | < 500 ms | PASS |
| Bronze | ≤ 150 | ~580 ms | DEGRADED (non-fatal) |
| Beyond | > 150 | > 600 ms | OUT OF SLO |

## Interpretation

- System correctness and authority enforcement remain intact
  beyond SLO boundaries.
- Latency degradation is graceful, not catastrophic.
- Autoscaling or admission control should engage above Silver tier.

## Test Conditions

- Duration: 2 minutes per step
- Environment: Local test
- Load tool: k6
- Paths tested:
  - Advice decision
  - Authority acceptance
  - Evidence write
  - Regulator replay

## Sign-off

This SLO reflects observed system behaviour and is suitable
for operational planning, PI insurer review, and board oversight.

Generated: 01/10/2026 05:17:52
