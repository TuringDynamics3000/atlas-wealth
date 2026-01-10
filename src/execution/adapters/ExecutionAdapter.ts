import { ExecutionIntent } from "../boundary/types";

export interface ExecutionResult {
  intentId: string;
  status: "ACCEPTED" | "REJECTED";
  reference?: string;
}

export interface ExecutionAdapter {
  name: string;
  submit(intent: ExecutionIntent): Promise<ExecutionResult>;
}

export class SimulatedExecutionAdapter implements ExecutionAdapter {
  name = "SIMULATED";

  async submit(intent: ExecutionIntent): Promise<ExecutionResult> {
    return {
      intentId: intent.intentId,
      status: "ACCEPTED",
      reference: `SIM-${intent.intentId}`
    };
  }
}
