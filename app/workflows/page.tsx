import { requireWorkflowAccess } from '@/src/workflows/guard'
import { fetchProjection } from '@/src/turingcore/client'

export default async function WorkflowQueue() {
  const auth = requireWorkflowAccess()
  const queue = await fetchProjection('workflow-queue')

  return (
    <main style={{ padding: 24 }}>
      <h1>Workflow Queue</h1>
      <p><strong>Tenant:</strong> {auth.tenantId}</p>

      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </main>
  )
}
