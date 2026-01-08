import { NextResponse } from 'next/server'
import { createReview } from '@src/compliance/review'


export async function POST(req: Request) {
  const body = await req.json()
  const review = createReview(
    body.advice_id,
    body.result,
    body.rework_count,
    body.missing_sections,
    body.inserted_clauses,
    body.review_codes
  )
  return NextResponse.json(review)
}