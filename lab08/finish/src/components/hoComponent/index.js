import React from 'react';

const HOComponent = InnerComponent => class extends React.Component {
  state = { count: 0 };

  componentWillMount() {
    console.log('will mount');
  }

  update = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update}
      />
    );
  }
};

export default HOComponent;
