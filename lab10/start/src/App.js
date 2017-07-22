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
