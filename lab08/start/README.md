# Lab08

Higher Order Components

## src/components/hoComponent/index.js

```js
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
```

## src/components/button/index.js

```js
import React from 'react';
import HOComponent from '../hoComponent/';

const Button = HOComponent(props =>
  <button onClick={props.update}>{props.children} - {props.count}</button>,
);

export default Button;
```

## src/components/label/index.js

```js
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
```

## src/App.js

```js
import React from 'react';
import Button from './components/button/';
import LabelHOC from './components/label/';

const App = () => (
  <div>
    <Button>button</Button>
    <hr />
    <LabelHOC>label</LabelHOC>
  </div>
);

export default App;
```