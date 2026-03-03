param(
  [string]$BrandbookPath,
  [string]$LogosSvgFolderPath,
  [string]$FontsPath,
  [string]$FigmaFolderPath,
  [string]$PptComercialFolderPath,
  [string]$EstructuraProppiaFolderPath
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

function Read-PathIfMissing([string]$Current, [string]$Prompt) {
  if ([string]::IsNullOrWhiteSpace($Current)) {
    return (Read-Host $Prompt)
  }
  return $Current
}

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

$brandbookDest = Join-Path $repoRoot "docs\brandbook-source"
$logosDest = Join-Path $repoRoot "apps\docs\public\branding\proppia-logos"
$fontsDest = Join-Path $repoRoot "apps\docs\public\fonts\bw-nista"
$figmaDest = Join-Path $repoRoot "docs\figma"
$pptDest = Join-Path $repoRoot "docs\resources\PPT-Comercial"
$estructuraDest = Join-Path $repoRoot "docs\resources\Estructura-Proppia"

Ensure-Dir (Join-Path $repoRoot "docs")
Ensure-Dir (Join-Path $repoRoot "apps\docs\public\branding")
Ensure-Dir (Join-Path $repoRoot "apps\docs\public\fonts")
Ensure-Dir $brandbookDest
Ensure-Dir $logosDest
Ensure-Dir $fontsDest
Ensure-Dir $pptDest
Ensure-Dir $estructuraDest

$BrandbookPath = Read-PathIfMissing $BrandbookPath "Ruta del brandbook (archivo o carpeta) para copiar a docs\\brandbook-source"
$LogosSvgFolderPath = Read-PathIfMissing $LogosSvgFolderPath "Ruta de la carpeta de SVGs para copiar a apps\\docs\\public\\branding\\proppia-logos"
$importFonts = Read-Host "¿Importar fuentes Bw Nista ahora? (s/n)"
if ($importFonts -match "^(s|si|sí|y|yes)$") {
  $FontsPath = Read-PathIfMissing $FontsPath "Ruta de la carpeta de fuentes (WOODD2 para WOFF2 o BW NISTA OTF para OTF)"
  if (-not [string]::IsNullOrWhiteSpace($FontsPath) -and (Test-Path -LiteralPath $FontsPath)) {
    Write-Host "Copiando fuentes Bw Nista..." -ForegroundColor Cyan
    Copy-Item -LiteralPath (Join-Path $FontsPath "*") -Destination $fontsDest -Recurse -Force -ErrorAction SilentlyContinue
  }
}

if (-not (Test-Path -LiteralPath $BrandbookPath)) {
  throw "BrandbookPath no existe: $BrandbookPath"
}
if (-not (Test-Path -LiteralPath $LogosSvgFolderPath)) {
  throw "LogosSvgFolderPath no existe: $LogosSvgFolderPath"
}

Write-Host "Copiando brandbook..." -ForegroundColor Cyan
if (Test-Path -LiteralPath $BrandbookPath -PathType Leaf) {
  Copy-Item -LiteralPath $BrandbookPath -Destination $brandbookDest -Force
} else {
  Copy-Item -LiteralPath (Join-Path $BrandbookPath "*") -Destination $brandbookDest -Recurse -Force
}

Write-Host "Copiando logos SVG..." -ForegroundColor Cyan
Copy-Item -LiteralPath (Join-Path $LogosSvgFolderPath "*") -Destination $logosDest -Recurse -Force

if ([string]::IsNullOrWhiteSpace($FigmaFolderPath)) {
  $importFigma = Read-Host "¿Importar exportaciones/capturas de Figma ahora? (s/n)"
  if ($importFigma -match "^(s|si|sí|y|yes)$") {
    $FigmaFolderPath = Read-Host "Ruta de la carpeta de Figma exports para copiar a docs\\figma"
  }
}

if (-not [string]::IsNullOrWhiteSpace($FigmaFolderPath)) {
  if (-not (Test-Path -LiteralPath $FigmaFolderPath)) {
    throw "FigmaFolderPath no existe: $FigmaFolderPath"
  }
  Ensure-Dir $figmaDest
  Write-Host "Copiando Figma exports..." -ForegroundColor Cyan
  Copy-Item -LiteralPath (Join-Path $FigmaFolderPath "*") -Destination $figmaDest -Recurse -Force
}

if ([string]::IsNullOrWhiteSpace($PptComercialFolderPath)) {
  $importPpt = Read-Host "¿Importar PPT Comercial ahora? (s/n)"
  if ($importPpt -match "^(s|si|sí|y|yes)$") {
    $PptComercialFolderPath = Read-Host "Ruta de la carpeta PPT Comercial para copiar a docs\\resources\\PPT-Comercial"
  }
}
if (-not [string]::IsNullOrWhiteSpace($PptComercialFolderPath)) {
  if (-not (Test-Path -LiteralPath $PptComercialFolderPath)) {
    throw "PptComercialFolderPath no existe: $PptComercialFolderPath"
  }
  Write-Host "Copiando PPT Comercial..." -ForegroundColor Cyan
  Copy-Item -LiteralPath (Join-Path $PptComercialFolderPath "*") -Destination $pptDest -Recurse -Force
}

if ([string]::IsNullOrWhiteSpace($EstructuraProppiaFolderPath)) {
  $importEstructura = Read-Host "¿Importar Estructura Proppia ahora? (s/n)"
  if ($importEstructura -match "^(s|si|sí|y|yes)$") {
    $EstructuraProppiaFolderPath = Read-Host "Ruta de la carpeta Estructura Proppia para copiar a docs\\resources\\Estructura-Proppia"
  }
}
if (-not [string]::IsNullOrWhiteSpace($EstructuraProppiaFolderPath)) {
  if (-not (Test-Path -LiteralPath $EstructuraProppiaFolderPath)) {
    throw "EstructuraProppiaFolderPath no existe: $EstructuraProppiaFolderPath"
  }
  Write-Host "Copiando Estructura Proppia..." -ForegroundColor Cyan
  Copy-Item -LiteralPath (Join-Path $EstructuraProppiaFolderPath "*") -Destination $estructuraDest -Recurse -Force
}

Write-Host "Listo. Revisa:" -ForegroundColor Green
Write-Host " - $brandbookDest"
Write-Host " - $logosDest"
Write-Host " - $fontsDest (si aplica)"
Write-Host " - $figmaDest (si aplica)"
Write-Host " - $pptDest (si aplica)"
Write-Host " - $estructuraDest (si aplica)"

