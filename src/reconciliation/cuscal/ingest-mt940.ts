import { reconcile } from '../engine'

type MT940Record = {
  intent_id: string
  amount: number
  currency: string
}

export function ingestCuscalMT940(records: MT940Record[], expected: number) {
  records.forEach(r => {
    const status = reconcile(expected, r.amount)
    if (status !== 'RECONCILED') {
      throw new Error('CUSCAL_MT940_RECONCILIATION_FAILED')
    }
  })
}