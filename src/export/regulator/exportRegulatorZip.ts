import fs from "fs";
import path from "path";
import archiver from "archiver";
import { SignedEvidenceBundle } from "../../evidence/signing/signEvidenceBundle";

export interface RegulatorManifest {
  caseId: string;
  bundleHash: string;
  signedAt: string;
  signer: string;
  generatedAt: string;
}

export async function exportRegulatorZip(
  signed: SignedEvidenceBundle,
  outDir: string
): Promise<string> {
  const zipPath = path.join(outDir, `case-${signed.bundle.caseId}.zip`);
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);

  const manifest: RegulatorManifest = {
    caseId: signed.bundle.caseId,
    bundleHash: signed.bundle.bundleHash,
    signedAt: signed.signedAt,
    signer: signed.signer,
    generatedAt: new Date().toISOString(),
  };

  archive.append(JSON.stringify(manifest, null, 2), { name: "MANIFEST.json" });
  archive.append(JSON.stringify(signed.bundle, null, 2), { name: "EVIDENCE.json" });
  archive.append(signed.signature, { name: "SIGNATURE.bin" });

  await archive.finalize();
  return zipPath;
}
