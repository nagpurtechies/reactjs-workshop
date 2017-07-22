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
