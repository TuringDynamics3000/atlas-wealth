export type BrokerOrder = {
  instrument: string
  side: 'BUY' | 'SELL'
  quantity: number
  limit_price?: number
}

export type BrokerExecutionReport = {
  broker_execution_id: string
  status: 'FILLED' | 'PARTIAL' | 'REJECTED'
  filled_quantity: number
  avg_price: number
  timestamp: string
}

export interface BrokerAdapter {
  placeOrders(
    orders: BrokerOrder[]
  ): Promise<BrokerExecutionReport[]>
}
