# ============================================================
# Build-Court-Replay-Bundle.ps1
# Atlas Wealth — Court-Grade Replay Bundle
# ============================================================

$ErrorActionPreference = "Stop"

$EvidencePackId  = "bacf3920-01db-4dcc-934b-2c0effbcfaf4"
$AdviceNotepadId = "486c67d4-cb01-4046-9c03-b18c81bb7a29"

$PackRoot = "court-replay-bundle"
$ZipPath  = "court-replay-bundle.zip"

if (Test-Path $PackRoot) { Remove-Item $PackRoot -Recurse -Force }
if (Test-Path $ZipPath)  { Remove-Item $ZipPath -Force }

$Dirs = @(
  "$PackRoot",
  "$PackRoot\artefacts\policies",
  "$PackRoot\artefacts\evidence",
  "$PackRoot\artefacts\events",
  "$PackRoot\artefacts\advice",
  "$PackRoot\hashes"
)

foreach ($d in $Dirs) { New-Item -ItemType Directory -Force -Path $d | Out-Null }

Copy-Item policies\*.md $PackRoot\artefacts\policies\ -Force
Copy-Item policies\POLICY_BUNDLE.sha256 $PackRoot\hashes\ -Force

Copy-Item "evidence\packs\$EvidencePackId" "$PackRoot\artefacts\evidence\" -Recurse -Force

Copy-Item "notepads\advice\$AdviceNotepadId.notepad.md" "$PackRoot\artefacts\advice\" -Force
Copy-Item "notepads\advice\$AdviceNotepadId.notepad.md.sha256" "$PackRoot\hashes\" -Force

$Events = Get-ChildItem "evidence\packs\$EvidencePackId\events" | Where-Object { $_.Name -match "^AdviceFinalised.*\.json$" }
foreach ($e in $Events) {
  Copy-Item $e.FullName "$PackRoot\artefacts\events\" -Force
  Copy-Item "$($e.FullName).sha256" "$PackRoot\hashes\" -Force
}

$Manifest = @{ bundle_type="COURT_REPLAY"; generated_at=(Get-Date).ToString("o") }
$Manifest | ConvertTo-Json -Depth 5 | Set-Content "$PackRoot\REPLAY_MANIFEST.json"

Compress-Archive -Path $PackRoot -DestinationPath $ZipPath

Write-Host "== Court replay bundle built ==" -ForegroundColor Green
Write-Host "Output: $ZipPath" -ForegroundColor Cyan
