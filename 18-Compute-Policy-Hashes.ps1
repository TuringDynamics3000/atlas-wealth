# ============================================================
# 18-Compute-Policy-Hashes.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$PoliciesDir = Join-Path $Root "policies"
$RegistryPath = Join-Path $PoliciesDir "POLICY_REGISTRY.json"

if (-not (Test-Path $RegistryPath)) {
    throw "Missing policies/POLICY_REGISTRY.json. Run 17-Init-Policy-Registry.ps1 first."
}

$Registry = Get-Content $RegistryPath -Raw | ConvertFrom-Json

$ComputedHashes = @()

foreach ($p in $Registry.policies) {
    $AbsPath = Join-Path $Root $p.path
    if (-not (Test-Path $AbsPath)) {
        throw "Policy file missing: $($p.path) (expected at $AbsPath). Create it or update POLICY_REGISTRY.json."
    }

    $Hash = (Get-FileHash $AbsPath -Algorithm SHA256).Hash.ToLowerInvariant()

    $ComputedHashes += @{
        policy_id = $p.policy_id
        path      = $p.path
        sha256    = $Hash
    }
}

# Deterministic bundle hash: sort by policy_id then hash concatenated material
$Lines = $ComputedHashes |
    Sort-Object policy_id |
    ForEach-Object { "$($_.policy_id):$($_.sha256)`n" }

$BundleMaterial = ($Lines -join "")
$BundleHashBytes = [System.Text.Encoding]::UTF8.GetBytes($BundleMaterial)
$BundleHash = (New-Object System.Security.Cryptography.SHA256Managed).ComputeHash($BundleHashBytes)
$BundleHashHex = ($BundleHash | ForEach-Object { $_.ToString("x2") }) -join ""

$Registry.computed.computed_at = (Get-Date).ToString("o")
$Registry.computed.policy_hashes = $ComputedHashes
$Registry.computed.policy_bundle_hash = $BundleHashHex

$Registry | ConvertTo-Json -Depth 12 | Set-Content $RegistryPath

# Write standalone bundle hash
$BundlePath = Join-Path $PoliciesDir "POLICY_BUNDLE.sha256"
@{
    policy_bundle_hash = $BundleHashHex
    computed_at        = $Registry.computed.computed_at
} | ConvertTo-Json | Set-Content $BundlePath

Write-Host "== Policy hashes computed ==" -ForegroundColor Green
Write-Host ("Policy bundle hash: " + $BundleHashHex) -ForegroundColor Cyan
