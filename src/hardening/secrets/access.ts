export type SecretRef = {
  key: string
  provider: 'AWS_KMS' | 'AWS_SECRETS'
}

export function getSecret(ref: SecretRef) {
  // NO plaintext secrets ever returned
  throw new Error('SECRET_ACCESS_NOT_IMPLEMENTED')
}