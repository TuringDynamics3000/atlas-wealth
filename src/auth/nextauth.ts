import NextAuth, { NextAuthOptions } from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      // ---- Tenant mapping ----
      // Use Cognito custom attribute: custom:tenant_id
      token.tenantId =
        (profile as any)?.['custom:tenant_id'] ||
        token.tenantId ||
        'tenant-demo'

      // ---- Role mapping ----
      // Prefer Cognito groups (recommended)
      // Add users to groups named:
      // principal | ic | analyst | advisor | compliance
      token.roles =
        (profile as any)?.['cognito:groups'] ||
        token.roles ||
        ['advisor']

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
