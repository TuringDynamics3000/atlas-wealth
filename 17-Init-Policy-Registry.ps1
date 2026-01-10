# ============================================================
# 17-Init-Policy-Registry.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$PoliciesDir = Join-Path $Root "policies"

New-Item -ItemType Directory -Force -Path $PoliciesDir | Out-Null

$RegistryPath = Join-Path $PoliciesDir "POLICY_REGISTRY.json"

if (-not (Test-Path $RegistryPath)) {
    $Registry = @{
        registry_version = "1.0"
        created_at = (Get-Date).ToString("o")
        policies_root = "policies"
        policies = @(
            @{
                policy_id = "ADVICE_GOVERNANCE"
                title = "Advice Governance Policy"
                path = "policies\ADVICE_GOVERNANCE.md"
            },
            @{
                policy_id = "DATA_PROVENANCE"
                title = "External Data Provenance Policy"
                path = "policies\DATA_PROVENANCE.md"
            }
        )
        computed = @{
            computed_at = $null
            policy_hashes = @()
            policy_bundle_hash = $null
        }
    }

    $Registry | ConvertTo-Json -Depth 10 | Set-Content $RegistryPath
}

Write-Host "== Policy registry initialised ==" -ForegroundColor Green
Write-Host "Registry: policies\POLICY_REGISTRY.json" -ForegroundColor Cyan
