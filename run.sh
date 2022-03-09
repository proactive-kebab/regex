#! /bin/bash

SITE="https://regex101.com"

curl -s -o index.html $SITE
rm -rf static
mkdir static
cd static
curl -sO https://regex101.com/static/manifest.json

STATIC=$(cat manifest.json | jq -r '.[]' | grep -v "assets" | grep -v "\.\.")
ASSETS=$(cat manifest.json | jq -r '.[]' | grep "assets")
ROOT=$(cat manifest.json | jq -r '.[]' | grep "\.\." | xargs -n 1 basename)

echo "Downloading static files, this going to take a while..."
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
    curl -sO $SITE/$i
done

echo "Removing evil trackers"
sed -i -e "s#https://[a-zA-Z0-9.]*/#https://notexist/#g" static/bundle*.js
sed -i -e "s/sentry.io/notexist/g" static/bundle*.js

echo "Done, try serving with \"python3 -m http.server\""
