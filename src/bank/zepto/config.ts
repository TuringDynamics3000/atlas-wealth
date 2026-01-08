export type ZeptoConfig = {
  baseUrl: string
  apiKey: string
  environment: 'SANDBOX' | 'PROD'
  mode: 'CERT' | 'LIVE'
}