export default async function ReconciliationPage() {
  const res = await fetch('/api/reconciliation')
  const data = await res.json()

  return (
    <main>
      <h1>Reconciliation Status</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}