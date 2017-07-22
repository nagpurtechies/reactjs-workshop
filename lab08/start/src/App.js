/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import SomeThing from './components/someThing/';

class App extends React.Component {
  mount = () => {
    ReactDOM.render(<SomeThing />, document.getElementById('a'));
  };

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  };

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a" />
      </div>
    );
  }
}

export default App;
