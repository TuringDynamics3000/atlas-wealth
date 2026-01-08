'use client'

import React from 'react'
import { EvidenceRef } from '@/lib/audit/types'

export function EvidenceBadge({
  evidence,
}: {
  evidence?: EvidenceRef[]
}) {
  if (!evidence || evidence.length === 0) return null

  return React.createElement(
    'div',
    { className: 'flex items-center gap-2 text-xs text-muted' },
    React.createElement('span', null, 'Evidence'),
    ...evidence.map(e =>
      React.createElement(
        'span',
        {
          key: e.id,
          title: \\ ? \ ? as at \\,
          className: 'rounded border border-border px-2 py-0.5',
        },
        e.type
      )
    )
  )
}
