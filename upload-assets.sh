#!/bin/zsh

if [[ -f "build/static/js/main.js" ]]; then
  # Alpha
  az storage blob upload \
    --file "build/static/js/main.js" \
    --container-name "alpha/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.js \
    --overwrite

  # Beta
  az storage blob upload \
    --file "build/static/js/main.js" \
    --container-name "beta/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.js \
    --overwrite

  # Api
  az storage blob upload \
    --file "build/static/js/main.js" \
    --container-name "api/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.js \
    --overwrite
fi

if [[ -f "build/static/js/main.css" ]]; then
  # Alpha
  az storage blob upload \
    --file "build/static/css/main.css" \
    --container-name "alpha/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.css \
    --overwrite

  # Beta
  az storage blob upload \
    --file "build/static/css/main.css" \
    --container-name "beta/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.css \
    --overwrite

  # Api
  az storage blob upload \
    --file "build/static/css/main.css" \
    --container-name "api/fint-kontroll-appbar-pod" \
    --account-name stflaiscdn \
    --name main.css \
    --overwrite
fi



