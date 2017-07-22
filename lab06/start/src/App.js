import React from 'react';
import TextField from './components/textField/';

class App extends React.Component {
  state = {
      a: '',
      b: '',
  };
  
  update = (e) => {
    this.setState({
      a: this.a.input.value,
      b: this.refs.b.value,
    })
  }

  render = () => {
    return (
      <div>
        <TextField
          ref={ component => this.a = component}
          update={this.update}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update}
      /> {this.state.b}
      </div>
    );
  }
}

export default App;
