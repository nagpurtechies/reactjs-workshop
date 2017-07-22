# Lab04

Components and composition, passing props

## Add file `src/components/textField/index.js`

```js
import React from 'react';
import PropTypes from 'prop-types';

const TextField = props =>
  (<input
    type="text"
    onChange={props.update}
      />);

TextField.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TextField;
```

## In src/App.js import the component

```js
import TextField from './components/textField/';
```

## In src/App.js change the render function from

```js
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
```
to

```js
render = () => {
  return (
    <div>
      <TextField
        update={this.update}
      />
      <TextField
        update={this.update}
      />
      <TextField
        update={this.update}
      />
      <h1>{this.state.fullname} is of {this.state.age}</h1>
    </div>
  );
};
```