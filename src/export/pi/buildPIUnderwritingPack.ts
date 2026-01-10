import { AdviserWorkQueue } from "../../projections/adviser/types";
import { ExecutionBoundaryRecord } from "../../execution/boundary/types";

export interface PIUnderwritingPack {
  generatedAt: string;
  adviserCases: number;
  executionModel: string;
  evidenceModel: string;
  controlsSummary: string[];
}

export function buildPIUnderwritingPack(
  queue: AdviserWorkQueue,
  executions: ExecutionBoundaryRecord[]
): PIUnderwritingPack {
  return {
    generatedAt: new Date().toISOString(),
    adviserCases: queue.items.length,
    executionModel: "Non-executing, intent-based, broker-isolated",
    evidenceModel: "Immutable graph with cryptographic signing",
    controlsSummary: [
      "No adviser execution capability",
      "Deterministic advice projections",
      "Cryptographically signed evidence",
      "Reproducible regulator replay",
      "Dual kill-switch execution boundary"
    ]
  };
}
