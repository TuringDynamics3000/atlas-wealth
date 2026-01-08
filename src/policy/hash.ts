import crypto from 'crypto'
import { Policy } from './policy'

export function hashPolicy(policy: Policy): string {
  // Stable stringify (key order matters)
  const stable = JSON.stringify(policy, Object.keys(policy).sort())
  return crypto.createHash('sha256').update(stable).digest('hex')
}
