# Lab03

State

## src/App.js

```js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: 'John Doe',
      age: 25,
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ fullname: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.update}
        />
        <h1>{this.state.fullname} is of {this.state.age}</h1>
      </div>
    );
  }
}

export default App;
```

## src/index.js

```js
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
```

## Current way of using state

```js
import React from 'react';

class App extends React.Component {
  state = {
      fullname: 'John Doe',
      age: 25,
  };
  

  update = (e) => {
    this.setState({ fullname: e.target.value });
  }

  render = () => {
    return (
      <div>
        <input
          type="text"
          onChange={this.update}
        />
        <h1>{this.state.fullname} is of {this.state.age}</h1>
      </div>
    );
  }
}

export default App;
```