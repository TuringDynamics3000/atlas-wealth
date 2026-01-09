import "server-only";
import { MOCK_CLIENTS } from "../../../lib/adviser/mocks";
import { AdviserClientRow, AdviserClientWorkspaceProjection } from "./types";

export function listAdviserClientsProjection(query?: string): AdviserClientRow [] {
  const q = (query ?? "").trim().toLowerCase();
  const all = MOCK_CLIENTS as unknown as AdviserClientRow [];
  if (!q) return all;
  return all.filter((c) => (c.name + " " + c.clientId).toLowerCase().includes(q));
}

export function getClientWorkspaceProjection(clientId: string): AdviserClientWorkspaceProjection | null {
  const all = MOCK_CLIENTS as unknown as AdviserClientRow [];
  const c = all.find((x) => x.clientId === clientId);
  if (!c) return null;

  const alerts: string[] = [];
  if (c.suitability === "AMBER") alerts.push("Suitability is borderline - review assumptions.");
  if (c.acceptanceStatus === "JOINT_PENDING") alerts.push("Joint acceptance pending.");
  if (c.acceptanceStatus === "COOLING_OFF") alerts.push("Cooling-off period active.");

  return { asOf: new Date().toISOString(), client: c, alerts };
}
