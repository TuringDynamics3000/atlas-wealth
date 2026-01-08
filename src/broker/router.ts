import { BrokerAdapter } from './contracts'
import { PaperBroker } from './paper'

//
// v4 invariant:
// LIVE brokers are disabled
//
export const LIVE_BROKER_ENABLED = false

export function getBroker(): BrokerAdapter {
  if (LIVE_BROKER_ENABLED) {
    throw new Error('LIVE_BROKER_DISABLED_BY_POLICY')
  }

  return new PaperBroker()
}
