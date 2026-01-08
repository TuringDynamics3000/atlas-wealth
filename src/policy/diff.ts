import { Policy } from './policy'

export type PolicyDiff = {
  added: string[]
  removed: string[]
  changed: string[]
}

export function diffPolicy(prev: Policy, next: Policy): PolicyDiff {
  const prevKeys = Object.keys(prev.rules)
  const nextKeys = Object.keys(next.rules)

  return {
    added: nextKeys.filter(k => !prevKeys.includes(k)),
    removed: prevKeys.filter(k => !nextKeys.includes(k)),
    changed: nextKeys.filter(
      k => prevKeys.includes(k) &&
           JSON.stringify(prev.rules[k]) !== JSON.stringify(next.rules[k])
    )
  }
}
