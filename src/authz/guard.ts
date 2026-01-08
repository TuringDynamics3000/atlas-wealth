import { RoleCapabilities, Capability } from './capabilities'
import { requireSession } from '@/src/auth/guards'

export async function requireCapability(cap: Capability) {
  const session = await requireSession()
  const roles: string[] = session.roles || []
  const caps = roles.flatMap(r => RoleCapabilities[r] || [])

  if (!caps.includes(cap)) {
    throw new Error('FORBIDDEN')
  }

  return session
}
