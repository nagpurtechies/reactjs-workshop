# Nagpur Techies ReactJS Workshop - lab02

# Lab02 Notes

## Copying node_modules from other lab folder

React scripts uses symlinks hence command like

```bash
cp -r node_modules .
```

will not work. -a option is needed

```bash
cp -a node_modules .
```

## Different ways to create App component

Class method

```js
class App extends React.Component {
    render() {
        return <h1>Hi</h1>
    }
}
```

Stateless function method

```js
const App = () => {
    return <h1>Hi</h1>
}
```

Where return is defalt behaviour for last statement

```js
const App = () => (<h1>Hi</h1>)
```

## References

1. https://www.peterbe.com/plog/public-class-fields
1. http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
