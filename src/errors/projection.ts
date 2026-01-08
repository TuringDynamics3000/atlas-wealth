export type ProjectionError =
  | { kind: 'ENGINE_UNAVAILABLE' }
  | { kind: 'STALE_DATA'; as_at: string }
  | { kind: 'POLICY_BLOCK'; reason: string }

export function isProjectionError(x: any): x is ProjectionError {
  return x && typeof x.kind === 'string'
}
