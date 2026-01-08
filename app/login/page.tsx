'use client'
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Sign in</h1>
      <button onClick={() => signIn('oidc')}>Sign in with SSO</button>
    </main>
  )
}
