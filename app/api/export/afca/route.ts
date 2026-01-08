import { NextResponse } from 'next/server'
import { createAfcaExportPack } from '@src/export/afca-pack'

export async function POST(req: Request) {
  const body = await req.json()
  const pack = createAfcaExportPack(
    body.case_id,
    body.advice_id,
    body.contents
  )
  return NextResponse.json(pack)
}