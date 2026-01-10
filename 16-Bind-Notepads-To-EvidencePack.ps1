# ============================================================
# Atlas Wealth — Bind Notepads to Evidence Pack
# ============================================================

param (
    [Parameter(Mandatory)]
    [string]$EvidencePackId,

    [Parameter(Mandatory)]
    [string]$AdviceNotepadId
)

$ErrorActionPreference = "Stop"

$Root = "C:\Users\mjmil\TuringDeploy\atlas-wealth"
$PackDir = "$Root\evidence\packs\$EvidencePackId"
$ManifestPath = "$PackDir\manifest.json"

if (-not (Test-Path $ManifestPath)) {
    throw "Evidence Pack manifest not found: $ManifestPath"
}

$AdviceNotepad = "$Root\notepads\advice\$AdviceNotepadId.notepad.md"
$SystemNotepads = @(
    "AUTHORITY_MODEL",
    "AGENT_BOUNDARIES",
    "EVIDENCE_MODEL"
)
$DataNotepad = "EXTERNAL_DATA_PROVENANCE"

if (-not (Test-Path $AdviceNotepad)) {
    throw "Advice Notepad missing: $AdviceNotepad"
}

if (-not (Test-Path "$AdviceNotepad.sha256")) {
    throw "Advice Notepad hash missing"
}

foreach ($Sys in $SystemNotepads) {
    if (-not (Test-Path "$Root\notepads\system\$Sys.notepad.md")) {
        throw "System notepad missing: $Sys"
    }
}

if (-not (Test-Path "$Root\notepads\data\$DataNotepad.notepad.md")) {
    throw "Data provenance notepad missing"
}

$Manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json

$Manifest | Add-Member -Force -NotePropertyName "notepads" -NotePropertyValue @{
    advice = $AdviceNotepadId
    system = $SystemNotepads
    data   = $DataNotepad
}

$Manifest | ConvertTo-Json -Depth 10 | Set-Content $ManifestPath

Get-FileHash $ManifestPath -Algorithm SHA256 |
    ConvertTo-Json |
    Set-Content "$ManifestPath.sha256"

Write-Host "== Notepads bound to Evidence Pack $EvidencePackId ==" -ForegroundColor Green
