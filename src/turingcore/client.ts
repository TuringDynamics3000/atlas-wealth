import { getAuthContext } from '../auth/context'
import { isProjectionError } from '../errors/projection'

const BASE = process.env.TURINGCORE_BASE_URL || 'https://turingcore.demo';

export async function fetchProjection<T>(path: string) {
  const auth = getAuthContext()
  const start = Date.now()

  const res = await fetch(
    \\/projections/\\,
    {
      headers: {
        'X-Tenant-Id': auth.tenantId
      },
      cache: 'no-store'
    }
  )

  const latency = Date.now() - start
  const body = await res.json()

  if (!res.ok) {
    throw body
  }

  if (isProjectionError(body)) {
    throw body
  }

  body.meta.latency_ms = latency
  return body
}
