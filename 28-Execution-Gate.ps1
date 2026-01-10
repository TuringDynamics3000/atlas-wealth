# ============================================================
# 28-Execution-Gate.ps1
# Atlas Wealth — Runtime Execution Gate
# ============================================================

param(
    [Parameter(Mandatory)]
    [string]$ArtefactPath
)

$ErrorActionPreference = "Stop"

if ($ArtefactPath -match '\.sim\.json$') {
    throw "EXECUTION BLOCKED: Simulation artefact cannot be executed."
}

if ($ArtefactPath -match '\.draft\.json$') {
    throw "EXECUTION BLOCKED: Draft artefact cannot be executed."
}

$Artefact = Get-Content $ArtefactPath -Raw | ConvertFrom-Json

if ($Artefact.artefact_type -ne "EXECUTION") {
    throw "EXECUTION BLOCKED: artefact_type != EXECUTION"
}

if (-not $Artefact.evidence_pack_id) {
    throw "EXECUTION BLOCKED: Missing evidence_pack_id"
}

if (-not $Artefact.policy_bundle_hash) {
    throw "EXECUTION BLOCKED: Missing policy_bundle_hash"
}

Write-Host "== Execution gate passed ==" -ForegroundColor Green
