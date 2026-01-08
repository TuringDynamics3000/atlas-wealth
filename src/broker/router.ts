import { BrokerAdapter } from './contracts'
import { AcmeBrokerAdapter } from './acme/adapter'
import { AcmeBrokerConfig } from './acme/config'
import { LIVE_BROKER_ENABLED } from './router'

export function getBroker(): BrokerAdapter {
  const cfg: AcmeBrokerConfig = {
    baseUrl: process.env.ACME_BROKER_URL!,
    apiKey: process.env.ACME_BROKER_KEY!,
    mode: 'CERT'
  }

  if (LIVE_BROKER_ENABLED && cfg.mode === 'LIVE') {
    throw new Error('LIVE_BROKER_NOT_APPROVED')
  }

  return new AcmeBrokerAdapter(cfg)
}
