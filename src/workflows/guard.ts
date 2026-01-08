import { getAuthContext } from '@/src/auth/context'
import { RoleCapabilities } from '@/src/workflows/capabilities'

export function requireWorkflowAccess() {
  const auth = getAuthContext()
  const caps = auth.roles.flatMap(r => RoleCapabilities[r])

  if (!caps.includes('VIEW_QUEUE')) {
    throw new Error('FORBIDDEN')
  }

  return auth
}
