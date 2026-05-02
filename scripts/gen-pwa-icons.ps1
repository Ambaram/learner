Add-Type -AssemblyName System.Drawing
function Save-Icon {
  param([int]$Size, [string]$Path)
  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.Color]::FromArgb(255, 12, 14, 32))
  $rect = New-Object System.Drawing.Rectangle 0, 0, $Size, $Size
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, `
    ([System.Drawing.Color]::FromArgb(255, 201, 162, 39)), `
    ([System.Drawing.Color]::FromArgb(255, 61, 156, 253)), `
    45.0
  $pad = [int]($Size * 0.12)
  $g.FillEllipse($brush, $pad, $pad, $Size - 2 * $pad, $Size - 2 * $pad)
  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
  $brush.Dispose()
}
$public = (Resolve-Path (Join-Path $PSScriptRoot '..\public')).Path
Save-Icon 192 (Join-Path $public 'pwa-192.png')
Save-Icon 512 (Join-Path $public 'pwa-512.png')
Write-Host 'Wrote pwa-192.png and pwa-512.png'
