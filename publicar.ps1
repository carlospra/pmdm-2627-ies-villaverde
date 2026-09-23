# publicar.ps1 - Comprueba que la web compila y la publica en GitHub Pages.
#
#   .\publicar.ps1 "docs: lo que has cambiado"
#   .\publicar.ps1 "docs: ..." -Rapido      <- se salta la comprobacion
#
# La comprobacion importa: docusaurus.config.js tiene onBrokenLinks 'throw',
# asi que un enlace roto no falla aqui, falla en GitHub y la web se queda sin
# actualizar sin avisarte.

param(
    [Parameter(Mandatory = $true)][string]$Mensaje,
    [switch]$Rapido
)

Set-Location $PSScriptRoot

if (-not $Rapido) {
    Write-Host "Comprobando que la web compila..." -ForegroundColor Cyan
    & npm.cmd run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "La web NO compila. No subo nada." -ForegroundColor Red
        Write-Host "Mira el error de arriba: suele ser un enlace a una pagina que no existe."
        exit 1
    }
    Write-Host "Compila bien." -ForegroundColor Green
}

git add -A
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No hay cambios que subir." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Se van a subir estos ficheros:" -ForegroundColor Cyan
git diff --cached --name-status

git commit -m $Mensaje
if ($LASTEXITCODE -ne 0) { Write-Host "Fallo el commit." -ForegroundColor Red; exit 1 }

git push
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Fallo el push." -ForegroundColor Red
    Write-Host "Si dice 'non-fast-forward', es que el historial local y el de GitHub"
    Write-Host "han divergido. NO hagas git pull: pregunta antes."
    exit 1
}

Write-Host ""
Write-Host "Publicado." -ForegroundColor Green
Write-Host "  https://carlospra.github.io/pmdm-2627-ies-villaverde/"
Write-Host "El despliegue tarda un par de minutos. Estado: pestana Actions del repositorio."
