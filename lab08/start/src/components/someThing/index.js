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
