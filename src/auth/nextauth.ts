import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'
import OIDCProvider from 'next-auth/providers/oidc'

// Map roles from token claims (customise per IdP)
function mapRoles(token: any): string[] {
  // Examples:
  // Entra ID: token.roles or token.groups
  // Okta/Auth0: token.roles or token.permissions
  return token.roles || token.groups || ['advisor']
}

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    OIDCProvider({
      id: 'oidc',
      name: 'OIDC',
      issuer: process.env.OIDC_ISSUER,
      clientId: process.env.OIDC_CLIENT_ID,
      clientSecret: process.env.OIDC_CLIENT_SECRET,
      authorization: { params: { scope: 'openid profile email' } },
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      // Tenant mapping (example claim keys)
      token.tenantId =
        (profile as any)?.tenant_id ||
        (profile as any)?.tid ||
        token.tenantId ||
        'tenant-demo'

      token.roles = mapRoles(token)
      return token
    },
    async session({ session, token }) {
      ;(session as any).tenantId = (token as any).tenantId
      ;(session as any).roles = (token as any).roles || []
      return session
    },
  },
}

export default NextAuth(authOptions)
