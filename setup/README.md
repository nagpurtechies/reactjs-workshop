# Setup for ReactJS Workshop

Ensure that you have cloned this repository 

```bash
git clone https://github.com/nagpurtechies/reactjs-workshop.git ReactJSWorkshop
cd ReactJSWorkshop
```

The setup can be done by running the commands with the checked out pre-prepared files 

```bash
npm install -g create-react-app
cd setup
npm install
npm run selenium-setup
```

To test the setup execute the following commands each one on a separate terminal.  All commands should run without errors to ensure the setup is as required.

```bash
npm start
npm test
npm run selenium-start
npm run e2e-tests
```

The following description explains how these files were created.  If anyone of these files need to be re-created they can be created using the steps given below from scratch.

## Install `create-react-app` command globally

```bash
npm install -g create-react-app
cd setup
create-react-app .
```

## Remove additional clutter

To keep minimal code for learning remove the files listed below from the generated files.

* src/App.test.js
* src/App.css
* src/index.css
* src/logo.svg
* public/favicon.ico
* public/manifest.json

## ESLint configuration

Install and configure ESlint

```bash
npm install --save-dev eslint
node_modules/.bin/eslint —-init
```
Provide the following answers to the questions

  - ? How would you like to configure ESLint? Use a popular style guide
  - ? Which style guide do you want to follow? Airbnb
  - ? Do you use React? Yes
  - ? What format do you want your config file to be in? JavaScript
  Checking peerDependencies of eslint-config-airbnb@latest
  - ? The style guide "airbnb" requires eslint@^3.19.0. You are currently using eslint@4.3.0.
    Do you want to downgrade? Yes

Add `.eslintrc.js` file with the following contents

```js
module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    },
};
```

## Install enzyme and react-test-renderer

```bash
npm install --save-dev enzyme react-test-renderer
```

## Configure WebdriverIO and Selenium

```bash
npm install --save-dev selenium-standalone webdriverio chai
```

Perform setup of WebdriverIO using the following command

```bash
node_modules/.bin/wdio config
```

Provide the following answers to the questions

  - ? Where do you want to execute your tests? On my local machine
  - ? Which framework do you want to use? mocha
  - ? Shall I install the framework adapter for you? Yes
  - ? Where are your test specs located? ./e2etests/*.js
  - ? Which reporter do you want to use?
  - ? Do you want to add a service to your test setup?
  - ? Level of logging verbosity silent
  - ? In which directory should screenshots gets saved if a command fails? ./errorShots/
  - ? What is the base url? http://localhost

Add scripts to the `package.json` for selenium and webdriver

```json
"scripts": {
  "selenium-setup": "selenium-standalone install",
  "selenium-start": "selenium-standalone start",
  "e2e-tests": "wdio wdio.conf.js",
  "e2e-tests-watch": "wdio wdio.conf.js --watch",
  ...
}
```

## Install Redux

```bash
npm install --save redux react-redux
```

## The final `package.json` should look like below

```json
{
  "name": "setup-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.5",
    "redux": "^3.7.1"
  },
  "devDependencies": {
    "chai": "^4.1.0",
    "enzyme": "^2.9.1",
    "eslint": "^3.19.0",
    "eslint-config-airbnb": "^15.0.1",
    "eslint-plugin-import": "^2.6.1",
    "eslint-plugin-jsx-a11y": "^5.1.0",
    "eslint-plugin-react": "^7.1.0",
    "prop-types": "^15.5.10",
    "react-scripts": "1.0.7",
    "react-test-renderer": "^15.6.1",
    "selenium-standalone": "^6.5.0",
    "wdio-dot-reporter": "0.0.8",
    "wdio-mocha-framework": "^0.5.10",
    "wdio-selenium-standalone-service": "0.0.9",
    "webdriverio": "^4.8.0"
  },
  "scripts": {
    "selenium-setup": "selenium-standalone install",
    "selenium-start": "selenium-standalone start",
    "e2e-tests": "wdio wdio.conf.js",
    "e2e-tests-watch": "wdio wdio.conf.js --watch",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

And then setup the selenium server:

```bash
npm run selenium-setup
```

## End to end tests file

Add the file `e2etests/test.js` for end to end test check

```js
/* global describe, it,browser */

const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Hello World');
  });
});
```

## Reference

Many steps of this setup are taken from the tutorials at
https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-1-b8a200bb7091
