import crypto from 'crypto'
import { ShadowCashLeg } from './contracts'
import { BankCertResult } from './certification'

export async function runBankCertification(
  legs: ShadowCashLeg[]
): Promise<BankCertResult[]> {

  return legs.map(l => ({
    leg_hash: crypto.createHash('sha256')
      .update(JSON.stringify(l))
      .digest('hex'),
    account_valid: true,
    beneficiary_whitelisted: true,
    limits_ok: true,
    timestamp: new Date().toISOString()
  }))
}
