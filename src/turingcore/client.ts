const TCORE_BASE = process.env.TURINGCORE_BASE_URL || 'https://turingcore.demo';

export async function fetchProjection<T>(
  path: string,
  auth: { tenantId: string }
): Promise<T> {
  const res = await fetch(
    \\/projections/\\,
    {
      headers: {
        'X-Tenant-Id': auth.tenantId
      },
      cache: 'no-store'
    }
  );

  if (!res.ok) {
    throw new Error(\Projection fetch failed: \\);
  }

  return res.json();
}
