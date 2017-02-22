#!/usr/bin/env bash -x
rm -rf dist/
ng build

cd build
touch Staticfile
npm version > VERSION
git init
git add .
git commit -m "deployment commit"
git remote add flynn https://git.flynn.smfhq.com/jmftest.git || true
git push -f flynn master
