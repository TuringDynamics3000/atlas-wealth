import { reconcile } from '../engine'

type CsvcRow = {
  intent_id: string
  amount: number
  currency: string
}

export function ingestCuscalCSV(rows: CsvcRow[], expected: number) {
  rows.forEach(r => {
    const status = reconcile(expected, r.amount)
    if (status !== 'RECONCILED') {
      throw new Error('CUSCAL_CSV_RECONCILIATION_FAILED')
    }
  })
}