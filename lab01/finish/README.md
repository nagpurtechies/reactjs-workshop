# Nagpur Techies ReactJS Workshop - starter kit

## Introduction

This is the starter kit for the workshop.  This will be the 
boilerplate which will be used to start the workshop.

## Initialize the project with defaults
npm init -y

## Update the package.json

npm install --save-dev cross-env

## Install webpack
npm install --save-dev webpack webpack-dev-server
npm install --save-dev html-webpack-plugin

## React hot reloading
## https://webpack.js.org/guides/hmr-react/

## Babel and ES6 utils
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install --save-dev style-loader css-loader

npm install --save react react-dom react-hot-loader@next

## Linting support
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-watch

## Npm scripts utility
npm install --save-dev npm-run-all

## Unit testing support
npm install --save-dev jsdom mocha nock expect
npm install --save-dev babel-register