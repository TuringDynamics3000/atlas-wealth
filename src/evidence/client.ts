const BASE = process.env.TURINGCORE_BASE_URL || 'https://turingcore.demo';

export async function fetchEvidencePack(evidenceId: string) {
  const res = await fetch(\\/evidence/\\, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to load evidence pack');
  }

  return res.json();
}
