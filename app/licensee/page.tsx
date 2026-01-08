export default async function LicenseeDashboard() {
  const res = await fetch('/api/licensee/metrics')
  const data = await res.json()

  return (
    <main style={{ padding: 24 }}>
      <h1>Licensee Oversight</h1>
      <ul>
        <li>Total Advice: {data.total_advice }</li>
        <li>Valid Advice: {data.valid_advice }</li>
        <li>Stale Advice: { data.stale_advice }</li>
        <li>Invalid Advice: {data.invalid_advice }</li>
        <li>Drift Events: {data.drift_events }</li>
        <li>Client Acceptance Rate: { (data.client_acceptance_rate * 100).toFixed(0) }%</li>
        <li>Compliance Rework Rate: { (data.compliance_rework_rate * 100).toFixed(0) }%</li>
      </ul>
    </main>
  )
}