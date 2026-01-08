export default async function AdviserWorkflowPage() {
  const res = await fetch('/api/adviser/client')
  const data = await res.json()

  return (
    <main style={{ padding: 24 }}>
      <h1>Adviser Workflow</h1>
      <h2>Client: {data.client_id}</h2>
      <section>
        <h3>Financial State</h3>
        <p>Accounts: { data.state.accounts_count }</p>
        <p>Last Update: {data.state.last_updated }</p>
      </section>
      <section>
        <h3>Drift Status</h3>
        <p>{data.drift.status }: { data.drift.reason }</p>
      </section>
      <section>
        <h3>Advice Status</h3>
        <p>{data.advice.status }</p>
        <ul>{ data.advice.reasons.map((r: string) => (<li key={r}>{r}</li>)) }</ul>
      </section>
      <section>
        <h3>Next Actions</h3>
        <ul>
          <li>Regenerate Advice (required)</li>
          <li>Review Advice Evidence</li>
          <li>Await Client Acceptance</li>
        </ul>
      </section>
    </main>
  )
}