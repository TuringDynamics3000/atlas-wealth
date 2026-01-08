import { NextResponse } from 'next/server'
import { LicenseeMetrics } from '@src/licensee/metrics'

export async function GET() {
  const metrics: LicenseeMetrics = {
    total_advice: 120,
    valid_advice: 78,
    stale_advice: 30,
    invalid_advice: 12,
    drift_events: 45,
    client_acceptance_rate: 0.82,
    compliance_rework_rate: 0.15
  }
  return NextResponse.json(metrics)
}