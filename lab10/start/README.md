# Lab10

Unit Testing

## src/App.js

```js
import React from 'react';

const App = () => (
  <div>My App</div>
);

export default App;
```

## src/App.test.js

```js
/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
```

## public/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>TodoList App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## e2etests/test.js

```js
/* global describe, it,browser */

const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('TodoList App');
  });
});
```