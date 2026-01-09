import "server-only";
import { MOCK_QUEUE } from "../../../lib/adviser/mocks";
import { AdviserWorkQueueProjection } from "./types";

export function getAdviserWorkQueueProjection(): AdviserWorkQueueProjection {
  const items = MOCK_QUEUE.map((x) => ({
    id: x.id,
    clientId: x.clientId,
    clientName: x.clientName,
    kind: x.taskType,
    status: x.taskType === "ACCEPTANCE_PENDING" ? "WAITING_ON_CLIENT" : "OPEN",
    dueLabel: x.dueLabel,
    route: x.route,
    summary: x.statusLabel,
  }));

  const summary = {
    open: items.filter((i) => i.status === "OPEN").length,
    blocked: 0,
    waitingOnClient: items.filter((i) => i.status === "WAITING_ON_CLIENT").length,
    waitingOnReview: 0,
  };

  return { asOf: new Date().toISOString(), summary, items };
}
