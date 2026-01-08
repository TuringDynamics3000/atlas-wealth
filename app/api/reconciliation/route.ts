import { aggregate } from '@s/src/reconciliation/dashboard/aggregate'
import { NextResponse } from 'next/server'

export async function GET() {
  // Stubbed data source (read-only)
  const records = [
    { status: 'RECONCILED' },
    { status: 'UNRECONCILED' }
  ]

  return NextResponse.json(aggregate(records))
}