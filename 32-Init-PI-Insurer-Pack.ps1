# ============================================================
# 32-Init-PI-Insurer-Pack.ps1
# ============================================================

$ErrorActionPreference = "Stop"

$PackRoot = "pi-insurer-pack"

$Dirs = @(
    "$PackRoot",
    "$PackRoot\governance\policies",
    "$PackRoot\evidence",
    "$PackRoot\advice",
    "$PackRoot\execution",
    "$PackRoot\controls"
)

foreach ($d in $Dirs) {
    New-Item -ItemType Directory -Force -Path $d | Out-Null
}

Write-Host "== PI insurer pack structure created ==" -ForegroundColor Green
