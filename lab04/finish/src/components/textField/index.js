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

