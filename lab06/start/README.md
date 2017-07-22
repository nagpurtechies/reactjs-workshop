# Lab06

Child Properties

## Create component 

src/components/loveIcon/index.js

```js
import React from 'react';

const LoveIcon = props =>
  <span>&hearts;</span>;

export default LoveIcon;
```

src/components/button/index.js

```js
import React from 'react';

const Button = props =>
  <button>{props.children}</button>;

export default Button;
```

## Use the components 

src/App.js

```js
import React from 'react';
import Button from './components/button/';
import LoveIcon from './components/loveIcon/';

class App extends React.Component {
  render() {
    return <Button>I <LoveIcon /> React</Button>;
  }
}

export default App;
```