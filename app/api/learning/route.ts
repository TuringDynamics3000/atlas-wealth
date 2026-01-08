import { NextResponse } from 'next/server'
import { createLearningSignal } from '@src/learning/signal'


export async function POST(req: Request) {
  const body = await req.json()
  const signal = createLearningSignal(
    body.type,
    body.reference_id,
    body.outcome,
    body.metadata
  )
  return NextResponse.json(signal)
}