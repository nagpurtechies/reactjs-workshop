# Nagpur Techies ReactJS Workshop

This repository is the code used in the hands-on workshop for 
ReactJS conducted at Nagpur Techies 23 July 2017 meetup.

## Prerequisite Setup

1. Node.js v8.2.1+
2. NPM v5.3.0+
2. Git v2.10.0+
3. Visual Studio Code v1.14.2+

## Visual Studio Code Extensions

Use Command+P (Mac) Control+P(Windows, Linux) to open command bar and type the extensions commands to install extensions in VSCode

ESLint by Dirk Baeumer 

```bash
  ext install vscode-eslint
```

ReactSnippets by charalampos karypidis

```bash
  ext install ReactSnippets
```

JavaScript (ES6) code snippets by charalampos karypidis

```bash
  ext install JavaScriptSnippets
```

## Visual Studio Code Custom User Settings

User settings in VSCode can be found in:

    File > Preferences > Settings on Windows.
    Code > Preferences > Settings on Mac OS.

```json
{
  "files.autoSave": "onWindowChange",
  "editor.tabSize": 2,
  "editor.minimap.enabled": true,
  "window.zoomLevel": 0,
  "editor.dragAndDrop": true,
  "html.suggest.html5": true,
  "files.eol": "\n",
  "eslint.options": {
      "extends": "airbnb",
      "plugins": [
          "react",
          "jsx-a11y",
          "import"
      ]
  },
  "eslint.autoFixOnSave": true,
  "typescript.check.tscVersion": false,
  "editor.snippetSuggestions": "top"
}
```

## Required Node.js packages

```bash
npm install -g create-react-app
cd setup
npm install
npm run selenium-setup
```
Check the settings by running following commands in separate terminals at same time

```bash
npm start
npm test
npm run selenium-start
npm run e2e-tests
```

## Additional settings 

## Admin Console

Installation for WebdriverIO package needs build tools to be available on the system.  If there is any error in the `npm install` command you may have to install the build tools as below:

```bash
npm install --global --production windows-build-tools
```

Windows users please run: 

VC++ 2015 Build Tools
http://landinghub.visualstudio.com/visual-cpp-build-tools

```bash
npm install --global --production windows-build-tools
```

Ubuntu users please run: 

```bash
sudo apt-get install g++ build-essential
```
