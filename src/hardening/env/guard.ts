export type Environment = 'DEV' | 'TEST' | 'PROD'

export function assertEnv(required: Environment) {
  const current = process.env.NODE_ENV
  if (current !== required) {
    throw new Error('ENV_MISMATCH')
  }
}