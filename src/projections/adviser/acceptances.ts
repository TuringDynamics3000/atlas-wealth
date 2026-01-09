import "server-only";
import { MOCK_ACCEPTANCES } from "../../../lib/adviser/mocks";
import { AcceptanceRow } from "./types";

export function listAcceptancesProjection(): AcceptanceRow[] {
  return (MOCK_ACCEPTANCES as unknown) as AcceptanceRow[];
}
