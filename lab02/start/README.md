# Nagpur Techies ReactJS Workshop - lab02

Properties

## Properties in stateless function

```js
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ fullname, age }) => <h1>{fullname} is of {age}</h1>;

App.propTypes = {
  fullname: PropTypes.string,
  age: PropTypes.number.isRequired,
};

App.defaultProps = {
  fullname: 'John Doe',
};

export default App;
```

## Passing values to properties

```js
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(
  <App fullname="Rahul" age="25" />,
  document.getElementById('root'),
);
```

