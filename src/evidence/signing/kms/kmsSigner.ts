import { KMSClient, SignCommand, VerifyCommand } from "@aws-sdk/client-kms";
import { EvidenceBundle } from "../bundle/buildEvidenceBundle";

const client = new KMSClient({});

export async function signWithKMS(
  bundle: EvidenceBundle,
  keyId: string
): Promise<{ signature: Uint8Array }> {
  const payload = Buffer.from(JSON.stringify(bundle));

  const cmd = new SignCommand({
    KeyId: keyId,
    Message: payload,
    MessageType: "RAW",
    SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256",
  });

  const res = await client.send(cmd);
  return { signature: res.Signature! };
}

export async function verifyWithKMS(
  bundle: EvidenceBundle,
  signature: Uint8Array,
  keyId: string
): Promise<boolean> {
  const payload = Buffer.from(JSON.stringify(bundle));

  const cmd = new VerifyCommand({
    KeyId: keyId,
    Message: payload,
    MessageType: "RAW",
    Signature: signature,
    SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256",
  });

  const res = await client.send(cmd);
  return res.SignatureValid === true;
}
