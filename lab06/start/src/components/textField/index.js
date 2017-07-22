import React from 'react';
import PropTypes from 'prop-types';


class TextField extends React.Component {

  render() {
    return (<input
      ref={el => this.input = el}
      type="text"
      onChange={this.props.update}
    />);
  }
}

TextField.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TextField;

