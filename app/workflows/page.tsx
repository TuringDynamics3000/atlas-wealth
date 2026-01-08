import { requireRoles } from '@/src/auth/guards'
import { fetchProjection } from '@/src/turingcore/client'

export default async function WorkflowQueue() {
  const session = await requireRoles(['principal', 'ic', 'compliance'])
  const queue = await fetchProjection('workflow-queue')

  return (
    <main style={{ padding: 24 }}>
      <h1>Workflow Queue</h1>
      <p><strong>Tenant:</strong> {session.tenantId}</p>
      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </main>
  )
}
