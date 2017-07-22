# Nagpur Techies ReactJS Workshop - lab02

Properties

## Properties in stateless function

src/App.js

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

src\index.js

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

## Old conventional way of passing props

```js
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const fullname = this.props.fullname;
    return <h1>{fullname} is of {this.props.age}</h1>;
  }
}

App.propTypes = {
  fullname: PropTypes.string,
  age: PropTypes.number.isRequired,
};

App.defaultProps = {
  fullname: 'John Doe',
};

export default App;
```

