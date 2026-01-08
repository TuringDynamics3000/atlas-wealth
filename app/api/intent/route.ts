import { NextResponse } from 'next/server'
import { createIntent } from '@src/intent/intent'

export async function POST(req: Request) {
  const body = await req.json()
  const intent = createIntent(
    body.advice_id,
    body.acceptance_id,
    body.accepted_recommendations
  )
  return NextResponse.json(intent)
}