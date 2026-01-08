import { getServerSession } from 'next-auth'
import { authOptions } from './nextauth'

export type Role =
  | 'principal'
  | 'ic'
  | 'analyst'
  | 'advisor'
  | 'compliance'

export async function requireSession() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('UNAUTHENTICATED')
  return session as any
}

export async function requireRoles(allowed: Role[]) {
  const session = await requireSession()
  const roles: Role[] = session.roles || []
  if (!allowed.some(r => roles.includes(r))) {
    throw new Error('FORBIDDEN')
  }
  return session
}
