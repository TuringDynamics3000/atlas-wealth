import { BrokerAdapter, BrokerOrder, BrokerExecutionReport } from './contracts'

export class PaperBroker implements BrokerAdapter {
  async placeOrders(
    orders: BrokerOrder[]
  ): Promise<BrokerExecutionReport[]> {

    return orders.map(o => ({
      broker_execution_id: crypto.randomUUID(),
      status: 'FILLED',
      filled_quantity: o.quantity,
      avg_price: o.limit_price ?? 100,
      timestamp: new Date().toISOString()
    }))
  }
}
