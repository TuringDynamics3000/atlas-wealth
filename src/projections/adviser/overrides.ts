import "server-only";
import { MOCK_OVERRIDES } from "../../../lib/adviser/mocks";
import { OverrideRow } from "./types";

export function listOverridesProjection(): OverrideRow[] {
  return (MOCK_OVERRIDES as unknown) as OverrideRow[];
}
