# ============================================================
# 19-Bind-Policy-To-EvidencePack.ps1
# ============================================================

param(
    [Parameter(Mandatory)]
    [string]$EvidencePackId
)

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$RegistryPath = Join-Path $Root "policies\POLICY_REGISTRY.json"

if (-not (Test-Path $RegistryPath)) {
    throw "Missing policies/POLICY_REGISTRY.json. Run 17 and 18 first."
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

$Manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json

$Manifest | Add-Member -Force -NotePropertyName "policy_binding" -NotePropertyValue @{
    policy_bundle_hash = $Registry.computed.policy_bundle_hash
    policy_hashes      = $Registry.computed.policy_hashes
    bound_at           = (Get-Date).ToString("o")
    registry_path      = "policies\POLICY_REGISTRY.json"
}

$Manifest | ConvertTo-Json -Depth 20 | Set-Content $ManifestPath

Get-FileHash $ManifestPath -Algorithm SHA256 |
    ConvertTo-Json |
    Set-Content ($ManifestPath + ".sha256")

Write-Host "== Policy bundle bound to Evidence Pack $EvidencePackId ==" -ForegroundColor Green
Write-Host ("Policy bundle hash: " + $Registry.computed.policy_bundle_hash) -ForegroundColor Cyan
