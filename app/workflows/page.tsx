import { getAuthContext, requireRole } from '@/src/auth/context'
import { fetchProjection } from '@/src/turingcore/client'

export default async function WorkflowQueue() {
  const auth = getAuthContext()
  requireRole(auth, ['principal', 'ic', 'compliance'])

  const queue = await fetchProjection('workflow-queue')

  return (
    <main style={{ padding: 24 }}>
      <h1>Workflow Queue</h1>

      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </main>
  )
}
