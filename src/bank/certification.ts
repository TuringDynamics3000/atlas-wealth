export type BankCertResult = {
  leg_hash: string
  account_valid: boolean
  beneficiary_whitelisted: boolean
  limits_ok: boolean
  timestamp: string
}
