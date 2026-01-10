# ============================================================
# 20-Stamp-Policy-Into-AdviceNotepad.ps1
# ============================================================

param(
    [Parameter(Mandatory)]
    [string]$AdviceNotepadId
)

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$RegistryPath = Join-Path $Root "policies\POLICY_REGISTRY.json"

if (-not (Test-Path $RegistryPath)) {
    throw "Missing policies/POLICY_REGISTRY.json. Run scripts 17 and 18 first."
}

$Registry = Get-Content $RegistryPath -Raw | ConvertFrom-Json

if (-not $Registry.computed.policy_bundle_hash) {
    throw "Policy bundle hash not computed. Run 18-Compute-Policy-Hashes.ps1."
}

$NotepadPath = Join-Path $Root ("notepads\advice\" + $AdviceNotepadId + ".notepad.md")

if (-not (Test-Path $NotepadPath)) {
    throw "Advice notepad missing: $NotepadPath"
}

$Section = @()
$Section += ""
$Section += "## Policy Binding"
$Section += ("Policy Bundle Hash (SHA-256): " + $Registry.computed.policy_bundle_hash)
$Section += ("Policy Registry: policies\POLICY_REGISTRY.json")
$Section += ""
$Section += "### Policy File Hashes"

foreach ($h in ($Registry.computed.policy_hashes | Sort-Object policy_id)) {
    $Section += ("- " + $h.policy_id + " | " + $h.path + " | " + $h.sha256)
}

$Section += ""

Add-Content -Path $NotepadPath -Value ($Section -join "`r`n")

Get-FileHash $NotepadPath -Algorithm SHA256 |
    ConvertTo-Json |
    Set-Content ($NotepadPath + ".sha256")

Write-Host "== Policy binding stamped into Advice Notepad $AdviceNotepadId ==" -ForegroundColor Green
Write-Host ("Policy bundle hash: " + $Registry.computed.policy_bundle_hash) -ForegroundColor Cyan
