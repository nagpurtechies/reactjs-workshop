# Lab07

Lifecycle methods

## src/components/SomeThing/index.js

```js
import React from 'react';

class SomeThing extends React.Component {
  state = { val: 0 };
  
  componentWillMount = () => {
    console.log('componentWillMount');
  }
  componentDidMount = () => {
    console.log('componentDidMount');
  }
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }
  update = () => {
    this.setState({ val: this.state.val + 1 });
  }
  render = () => {
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>;
  }
}

export default SomeThing;
```

## src/App.js

```js
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import SomeThing from './components/someThing/';

class App extends React.Component {
  mount = () => {
    ReactDOM.render(<SomeThing />, document.getElementById('a'));
  };

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  };

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a" />
      </div>
    );
  }
}

export default App;
```