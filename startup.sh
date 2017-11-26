#!/bin/bash
echo "Checking is yarn is installed on this machine."
echo "Starting up the client application. Server side is already deployed."

cd client/

if [ -x "$(command -v yarn)" ]; then
  echo "Yarn detected. Using Yarn"
  echo "Installing client side dependencies"
  yarn
  echo "Dependencies installed. Starting up webpack dev server"
  yarn start
else
  echo "Can not find yarn. Defaulting to NPM"
  echo "Installing client side dependencies"
  npm i
  echo "Dependencies installed. Starting up webpack dev server"
  npm run start
fi
