#!/bin/bash
echo "Starting up the client application. Server side is already deployed."
cd client/
echo "Installing client side dependencies"
yarn
echo "Dependencies installed. Starting up webpack dev server"
yarn start
