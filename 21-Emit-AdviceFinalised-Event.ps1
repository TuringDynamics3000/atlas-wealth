# ============================================================
# 21-Emit-AdviceFinalised-Event.ps1
# ============================================================

param(
    [Parameter(Mandatory)]
    [string]$EvidencePackId,

    [Parameter(Mandatory)]
    [string]$AdviceNotepadId
)

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$RegistryPath = Join-Path $Root "policies\POLICY_REGISTRY.json"

if (-not (Test-Path $RegistryPath)) {
    throw "Missing policies/POLICY_REGISTRY.json. Run policy hash computation first."
}

$Registry = Get-Content $RegistryPath -Raw | ConvertFrom-Json

if (-not $Registry.computed.policy_bundle_hash) {
    throw "Policy bundle hash not computed. Run 18-Compute-Policy-Hashes.ps1."
}

$PackDir = Join-Path $Root ("evidence\packs\" + $EvidencePackId)
$ManifestPath = Join-Path $PackDir "manifest.json"

if (-not (Test-Path $ManifestPath)) {
    throw "Evidence Pack manifest not found: $ManifestPath"
}

$EventsDir = Join-Path $PackDir "events"
New-Item -ItemType Directory -Force -Path $EventsDir | Out-Null

$Stamp = (Get-Date).ToString("yyyyMMddTHHmmss")
$EventPath = Join-Path $EventsDir ("AdviceFinalised." + $Stamp + ".json")

$Event = @{
    event_type           = "AdviceFinalised"
    occurred_at          = (Get-Date).ToString("o")
    evidence_pack_id     = $EvidencePackId
    advice_notepad_id    = $AdviceNotepadId
    policy_bundle_hash   = $Registry.computed.policy_bundle_hash
    policy_registry_path = "policies\POLICY_REGISTRY.json"
}

$Event | ConvertTo-Json -Depth 10 | Set-Content $EventPath

Get-FileHash $EventPath -Algorithm SHA256 |
    ConvertTo-Json |
    Set-Content ($EventPath + ".sha256")

Write-Host "== AdviceFinalised event emitted ==" -ForegroundColor Green
Write-Host ("Evidence Pack: " + $EvidencePackId) -ForegroundColor Cyan
Write-Host ("Advice Notepad: " + $AdviceNotepadId) -ForegroundColor Cyan
Write-Host ("Policy bundle hash: " + $Registry.computed.policy_bundle_hash) -ForegroundColor Cyan
