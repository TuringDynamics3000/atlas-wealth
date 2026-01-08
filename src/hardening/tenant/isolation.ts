export type TenantContext = {
  tenant_id: string
  allowed_resources: string[]
}

export function assertTenantIcolation(
  ctx: TenantContext,
  resource: string
) {
  if (!ctx.allowed_resources.includes(resource)) {
    throw new Error('TENANT_ISOLATION_VIOLATION')
  }
}