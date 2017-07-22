# Nagpur Techies ReactJS Workshop - lab01

First program, Hello World, Render function

## Copying node_modules from other lab folder

### On Windows

Copy and paste the setup folder and rename it to a different name

### On Mac and Linux

React scripts uses symlinks hence command like

```bash
cp -r setup myproject
```

cp with -a option is needed for symlinks to copy correctly

```bash
cp -a setup myproject
```

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

## Different ways to create App component

Class method

```js
class App extends React.Component {
    render() {
        return <h1>Hi</h1>;
    }
}
```

Stateless function method

```js
const App = () => {
    return <h1>Hi</h1>;
}
```

Where return is defalt behaviour for last statement

```js
const App = () => (<h1>Hi</h1>);
```

## Render function can return only single JSX element

Check by typing the following code in App.js

```js
class App extends React.Component {
    render() {
        return <h1>Hi</h1><p>Another content</p>;
    }
}
```

## References

1. https://www.peterbe.com/plog/public-class-fields
1. http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
