Write-Host "`nDYN PALLETS repository check" -ForegroundColor Cyan
Write-Host "----------------------------"
git --version
Write-Host "`nSTATUS" -ForegroundColor Yellow
git status -sb
Write-Host "`nREMOTE" -ForegroundColor Yellow
git remote -v
Write-Host "`nRECENT HISTORY" -ForegroundColor Yellow
git log --oneline --decorate --all -n 10
Write-Host "`nAUTHORS" -ForegroundColor Yellow
git shortlog -sne --all
Write-Host "`nIf the remote above is dynsimulationofficial/dyn_palettes, the original repository is preserved." -ForegroundColor Green
