export type Role =
  | 'principal'
  | 'ic'
  | 'analyst'
  | 'advisor'
  | 'compliance'

export type AuthContext = {
  userId: string
  tenantId: string
  roles: Role[]
  issuedAt: string
}

export function getAuthContext(): AuthContext {
  // v2.4: OIDC-ready stub
  // Replace with token parsing (JWT) later
  return {
    userId: 'demo-user',
    tenantId: 'demo-tenant',
    roles: ['principal'],
    issuedAt: new Date().toISOString()
  }
}

export function requireRole(
  ctx: AuthContext,
  allowed: Role[]
) {
  if (!allowed.some(r => ctx.roles.includes(r))) {
    throw new Error('FORBIDDEN')
  }
}
