import React from 'react';
import HOComponent from '../hoComponent/';

class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount');
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    );
  }
}

const LabelHOC = HOComponent(Label);

export default LabelHOC;
