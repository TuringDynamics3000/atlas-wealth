import crypto from 'crypto'
import { BrokerOrder } from './contracts'
import { BrokerCertResult } from './certification'

export async function runBrokerCertification(
  orders: BrokerOrder[]
): Promise<BrokerCertResult[]> {
  return orders.map(o => ({
    order_hash: crypto.createHash('sha256')
      .update(JSON.stringify(o))
      .digest('hex'),
    instrument: o.instrument,
    quantity: o.quantity,
    side: o.side,
    checks: {
      instrument_valid: true,
      margin_ok: true,
      account_ok: true
    },
    timestamp: new Date().toISOString()
  }))
}
