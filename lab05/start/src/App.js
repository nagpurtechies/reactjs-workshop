import React from 'react';
import TextField from './components/textField/';

class App extends React.Component {
  state = {
      fullname: 'John Doe',
      age: 25,
  };
  
  update = (e) => {
    this.setState({ fullname: e.target.value });
  }

  render = () => {
    return (
      <div>
        <TextField
          update={this.update}
        />
        <TextField
          update={this.update}
        />
        <TextField
          update={this.update}
        />
        <h1>{this.state.fullname} is of {this.state.age}</h1>
      </div>
    );
  }
}

export default App;
