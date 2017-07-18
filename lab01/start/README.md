# Nagpur Techies ReactJS Workshop - lab01

## Install Create React App globally

```bash
npm i -g create-react-app
```

```bash
create-react-app react-app
```

## Start the application 

```bash
npm start
```

## Remove additional files

To keep minimal code for learning remove the files listed below from the generated files.

* src/App.test.js
* src/App.css
* src/index.css
* src/logo.svg
* src/registerServiceWorker.js
* public/favicon.ico
* public/manifest.json

The application will show errors in browser as well as terminal.

Observe the changes in the terminal as we continue changing the files and saving them.

## Replace contents of the following files

### public/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>React Hello World</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

* We kept the title 
* We kept the id="root" element.  This is the location where the React App will be inserted.

### src/App.js

```js
import React from 'react';

const App = () => <h1>Hello World</h1>

export default App;
```

### src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
)
```

## Observe reload behaviour

* Change the contents of the files like title or h1 and see the reload happening in real time on the terminal as well as browser