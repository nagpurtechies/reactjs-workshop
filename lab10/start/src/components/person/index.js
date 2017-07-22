import React from 'react';
import PropTypes from 'prop-types';

const Person = props => <h4>{props.person.name}</h4>;

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Person;
