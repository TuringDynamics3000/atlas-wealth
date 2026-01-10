# ============================================================
# 23-Upgrade-PreCommit-Block-Policy-Drift.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$HookPath = ".git\hooks\pre-commit.ps1"

if (-not (Test-Path $HookPath)) {
    throw "Missing pre-commit hook: $HookPath"
}

$Existing = Get-Content $HookPath -Raw

# ------------------------------------------------------------
# POLICY DRIFT GUARD
# ------------------------------------------------------------

$ChangedFiles = git diff --cached --name-only

$PolicyTouched = $false
$RegistryTouched = $false
$BundleTouched = $false

foreach ($f in $ChangedFiles) {
    if ($f -match '^policies/') { $PolicyTouched = $true }
    if ($f -eq 'policies/POLICY_REGISTRY.json') { $RegistryTouched = $true }
    if ($f -eq 'policies/POLICY_BUNDLE.sha256') { $BundleTouched = $true }
}

if ($PolicyTouched -and (-not ($RegistryTouched -and $BundleTouched))) {
    Write-Error @"
POLICY DRIFT BLOCKED:

You modified files under policies/ but did not recompute policy hashes.

Required in the same commit:
- policies/POLICY_REGISTRY.json
- policies/POLICY_BUNDLE.sha256

Run:
  .\18-Compute-Policy-Hashes.ps1
and recommit.
"@
}

if ($Existing -notmatch 'POLICY DRIFT GUARD') {
    $New = $Existing + "`r`n" + ($lines[11..($lines.Length-1)] -join "`r`n")
    Set-Content $HookPath $New -NoNewline
}

Write-Host "== Pre-commit upgraded: policy drift protection enabled ==" -ForegroundColor Green
