export type Role = 'principal' | 'ic' | 'analyst' | 'advisor' | 'compliance'

export type AuthContext = {
  userId: string
  tenantId: string
  roles: Role[]
}

export function getAuthContext(): AuthContext {
  // v2.2: stubbed OIDC claims mapping
  // Replace with real IdP token parsing later
  return {
    userId: 'user-demo',
    tenantId: 'tenant-demo',
    roles: ['principal']
  }
}

export function requireRole(ctx: AuthContext, allowed: Role[]) {
  if (!allowed.some(r => ctx.roles.includes(r))) {
    throw new Error('FORBIDDEN')
  }
}
