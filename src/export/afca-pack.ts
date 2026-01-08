export type AfcaExportPack = {
  case_id: string
  advice_id: string
  exported_at: string
  contents: Record<string, any>
}

export function createAfcaExportPack(
  case_id: string
  advice_id: string
  contents: Record<string, any>
) {
  return {
    case_id,
    advice_id,
    exported_at: new Date().toISOString(),
    contents
  }
}