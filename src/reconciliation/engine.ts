export type ReconciliationRecord = {
  intent_id: string
  zepto_transfer_id: string
  expected_amount: number
  actual_amount: number
  currency: string
  status: "RECONCILED" | "UNRECONCILED" | "EXEEPUTION"
}

export function reconcile(expected: number, actual: number) {
  return expected === actual ? "RECONCILED" : "UNRECONCILED"
}