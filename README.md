# Nagpur Techies ReactJS Workshop

This repository is the code used in the hands-on workshop for 
ReactJS conducted at Nagpur Techies 23 July 2017 meetup.

## Prerequisite Setup

1. Node.js v8.2.1+
2. NPM v5.3.0+
2. Git v2.10.0+
3. Visual Studio Code v1.14.2+
4. 

## Admin Console

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

## Visual Studio Code Extensions

ESLint by Dirk Baeumer 

  ext install vscode-eslint

ReactSnippets by charalampos karypidis

  ext install ReactSnippets

JavaScript (ES6) code snippets by charalampos karypidis

  ext install JavaScriptSnippets

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
```