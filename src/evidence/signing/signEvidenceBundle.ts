import crypto from "crypto";
import { EvidenceBundle } from "../bundle/buildEvidenceBundle";

export interface SignedEvidenceBundle {
  bundle: EvidenceBundle;
  signature: string;
  signedAt: string;
  signer: "ATLAS_SYSTEM";
}

export function signEvidenceBundle(
  bundle: EvidenceBundle,
  secret: string
): SignedEvidenceBundle {
  const payload = JSON.stringify(bundle);
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return {
    bundle,
    signature,
    signedAt: new Date().toISOString(),
    signer: "ATLAS_SYSTEM",
  };
}

export function verifyEvidenceBundle(
  signed: SignedEvidenceBundle,
  secret: string
): boolean {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(signed.bundle))
    .digest("hex");

  return expected === signed.signature;
}
