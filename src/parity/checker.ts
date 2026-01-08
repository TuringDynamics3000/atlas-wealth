export type ParityResult = {
  ok: boolean
  mismatches: string[]
}

export function checkParity(
  shadow: { instrument: string; quantity: number }[],
  cert: { instrument: string; quantity: number }[]
): ParityResult {

  const mismatches: string[] = []

  shadow.forEach(s => {
    const c = cert.find(x => x.instrument === s.instrument)
    if (!c || c.quantity !== s.quantity) {
      mismatches.push(s.instrument)
    }
  })

  return { ok: mismatches.length === 0, mismatches }
}
