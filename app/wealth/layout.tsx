import { redirect } from 'next/navigation'

export default function WealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // v1: allow all access
  // v2: enforce auth / entitlements here

  const authorised = true

  if (!authorised) {
    redirect('/')
  }

  return children
}
