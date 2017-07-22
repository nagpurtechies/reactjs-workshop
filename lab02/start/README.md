# Nagpur Techies ReactJS Workshop - lab02

# Lab02 Notes

## Copying node_modules from other lab folder

### On Windows

Copy and paste the setup folder and rename it to a different name

### On Mac and Linux

React scripts uses symlinks hence command like

```bash
cp -r setup myproject
```

cp with -a option is needed for symlinks to copy correctly

```bash
cp -a setup myproject
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
