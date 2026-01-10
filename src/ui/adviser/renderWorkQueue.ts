import { AdviserWorkQueue } from '../../projections/adviser/types';

export function renderWorkQueue(queue: AdviserWorkQueue) {
  return queue.items.map(item => ({
    caseId: item.caseId,
    state: item.state,
    priority: item.priority,
  }));
}
