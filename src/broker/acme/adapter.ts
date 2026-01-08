import { BrokerAdapter, BrokerOrder, BrokerExecutionReport } from '../contracts'
import { AcmeBrokerConfig } from './config'

export class AcmeBrokerAdapter implements BrokerAdapter {
  constructor(private cfg: AcmeBrokerConfig) {}

  async placeOrders(
    orders: BrokerOrder[]
  ): Promise<BrokerExecutionReport[]> {

    if (this.cfg.mode !== 'CERT') {
      throw new Error('LIVE_MODE_DISABLED_BY_POLICY')
    }

    // CERTIFICATION call (no market routing)
    return orders.map(o => ({
      broker_execution_id: crypto.randomUUID(),
      status: 'FILLED',
      filled_quantity: o.quantity,
      avg_price: o.limit_price ?? 100,
      timestamp: new Date().toISOString()
    }))
  }
}
