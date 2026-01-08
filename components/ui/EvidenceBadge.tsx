'use client'

import React from 'react'
import { EvidenceRef } from '@/lib/audit/types'

export function EvidenceBadge({
  evidence,
}: {
  evidence?: EvidenceRef[]
}) {
  if (!evidence || evidence.length === 0) return null

  const children: any[] = []

  children.push(
    React.createElement('span', { key: 'label' }, 'Evidence')
  )

  for (const e of evidence) {
    children.push(
      React.createElement(
        'span',
        {
          key: e.id,
          title: e.type + ' | ' + e.hash + ' | as at ' + e.asAt,
          className: 'rounded border border-border px-2 py-0.5',
        },
        e.type
      )
    )
  }

  return React.createElement(
    'div',
    { className: 'flex items-center gap-2 text-xs text-muted' },
    children
  )
}
