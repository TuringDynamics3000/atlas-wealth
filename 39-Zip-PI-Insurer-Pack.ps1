# ============================================================
# 39-Zip-PI-Insurer-Pack.ps1
# ============================================================

$ErrorActionPreference = "Stop"

if (-not (Test-Path "pi-insurer-pack")) {
    throw "Missing pi-insurer-pack directory"
}

if (Test-Path "pi-insurer-pack.zip") {
    Remove-Item "pi-insurer-pack.zip" -Force
}

Compress-Archive -Path "pi-insurer-pack" -DestinationPath "pi-insurer-pack.zip"

Write-Host "== PI insurer pack zipped ==" -ForegroundColor Green
