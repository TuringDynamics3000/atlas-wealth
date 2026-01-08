import { NextResponse } from 'next/server'
import { createAcceptance } from '@src/advice/acceptance'

export async function POST(req: Request) {
  const body = await req.json()
  const acceptance = createAcceptance(
    body.advice_id,
    body.action,
    body.partial,
    body.rationale
  )
  return NextResponse.json(acceptance)
}