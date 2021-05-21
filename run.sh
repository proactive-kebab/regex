#! /bin/bash

SITE="https://regex101.com"

curl -s -o index.html $SITE
curl -sO $SITE/robots.txt

mkdir static
cd static
curl -sO https://regex101.com/static/manifest.json

STATIC=$(cat manifest.json | grep : | cut -d ":" -f 2 | tr -d "\"" | tr -d "," | grep -vi "assets" | grep -v "\.\.")
ASSETS=$(cat manifest.json | grep : | cut -d ":" -f 2 | tr -d "\"" | tr -d "," | grep "assets")
ROOT=$(cat manifest.json | grep : | cut -d ":" -f 2 | tr -d "\"" | tr -d "," | grep -vi "assets" | grep "\.\.")

echo "Downloading static files"
for i in $STATIC
do
    curl -sO $SITE$i
done

echo "Downloading assets"
mkdir assets
cd assets
for i in $ASSETS
do
    curl -sO $SITE$i
done
cd ..

echo "Downloading other files"
cd ..
for i in $ROOT
do
    curl -sO $SITE$i
done

echo "Downloading translations"
mkdir translations
cd translations
curl -sO $SITE/static/translations/english.json
cd -

echo "Cleaning up trackers"
sed -i -e "s#https://[a-zA-Z0-9.]*/#https://notexist/#g" static/bundle*.js
sed -i -e "s/sentry.io/notexist/g" static/bundle*.js

echo "Done, try serving with \"python3 -m http.server\""
