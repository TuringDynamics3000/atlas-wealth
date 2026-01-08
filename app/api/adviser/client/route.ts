import { NextResponse } from 'next/server'


export async function GET() {
  return NextResponse.json({
    client_id: 'client-demo',
    state: {
      accounts_count: 4,
      last_updated: '2026-01-08'
    },
    drift: {
      status: 'DRIFT_DETECTED',
      reason: 'Account balance exceeds threshold'
    },
    advice: {
      status: 'STALE',
      reasons: ['Advice is older than 90 days']
    }
  })
}