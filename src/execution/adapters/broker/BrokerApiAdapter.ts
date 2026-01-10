import fetch from "node-fetch";
import { ExecutionIntent } from "../../boundary/types";
import { ExecutionResult } from "../ExecutionAdapter";

export class BrokerApiAdapter {
  name = "BROKER_API";

  constructor(
    private endpoint: string,
    private apiKey: string
  ) {}

  async submit(intent: ExecutionIntent): Promise<ExecutionResult> {
    const res = await fetch(`${this.endpoint}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(intent),
    });

    if (!res.ok) {
      return {
        intentId: intent.intentId,
        status: "REJECTED"
      };
    }

    const data = await res.json();
    return {
      intentId: intent.intentId,
      status: "ACCEPTED",
      reference: data.executionRef
    };
  }
}
