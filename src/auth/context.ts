export type AuthContext = {
  userId: string
  tenantId: string
  roles: string[]
}

export function getAuthContext(): AuthContext {
  // v2 stub: replace with OIDC / SAML
  return {
    userId: 'demo-user',
    tenantId: 'demo-tenant',
    roles: ['principal']
  }
}
