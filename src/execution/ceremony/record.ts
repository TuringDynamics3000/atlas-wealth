import { ExecutionPhase } from './phases'

export type ExecutionCeremony = {
  intent_id: string
  phase: ExecutionPhase
  approvers: string[]
  timestamp: string
}

export function createCeremony(intent_id: string): ExecutionCeremony {
  return {
    intent_id,
    phase: 'PREPARED',
    approvers: [],
    timestamp: new Date().toISOString()
  }
}