param (
  [string[]] $Path = @('static/assets'),
  [string[]] $Include = @('*.jpg', '*.jpeg', '*.png'),
  [int] $Quality = 75
)

Get-ChildItem -Path $Path -Include $Include -Recurse|`
  ForEach-Object {
    $webpPath = Join-Path $_.Directory "$($_.BaseName).webp"
    Invoke-Expression ("cwebp $($_.FullName) -q $Quality -o $webpPath") 
  }