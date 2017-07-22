# Lab09

Dynamic Data Fetching

## src/characterService.js

```js
/* global fetch */

const baseUrl = 'https://swapi.co/api/people/?format=json';

const loadCharacters = () => fetch(baseUrl)
    .then(response => response.json());

export default loadCharacters;
```

## src/components/person/index.js

```js
import React from 'react';
import PropTypes from 'prop-types';

const Person = props => <h4>{props.person.name}</h4>;

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Person;
```

## Using in src/App.js

```js
import React from 'react';
import loadCharacters from './characterService';
import Person from './components/person/';

class App extends React.Component {

  state = { items: [] };

  componentWillMount = () => {
    loadCharacters()
      .then(({ results: items }) => this.setState({ items }));
  }

  filter = (e) => {
    this.setState({ filter: e.target.value });
  }

  render = () => {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()));
    }
    let personList = items.map(item =>
        <Person key={item.name} person={item} />);
    return (
      <div>
        <input
          type="text"
          onChange={this.filter}
        />
        {personList}
      </div>
    );
  }
}

export default App;
```

