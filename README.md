# react-horizon
React bindings for [Horizon](https://github.com/rethinkdb/horizon)

### Installation
```
npm i -S react-horizon
```

### Usage
**Example Root component:**
```JavaScript
import Horizon from '@horizon/client';
import { Provider } from 'react-horizon';
import TodoList from './components/TodoList';

const horizon = new Horizon();

export default () => (
  <Provider instance={horizon}>
    <TodoList />
  </Provider>
);
```

Or if you use Redux:
```JavaScript
import Horizon from '@horizon/client';
import { Provider } from 'react-redux';
import { Provider as HorizonProvider } from 'react-horizon';
import configureStore from './configureStore';

const store = configureStore();
const horizon = new Horizon();

export default () => (
  <Provider store={store}>
    <HorizonProvider instance={horizon}>
      <TodoList />
    </HorizonProvider>
  </Provider>
);
```

**Example Child component:**
Decorator style
```JavaScript
import React, { Component } from 'react';
import { connect } from 'react-horizon';

@connect()
class TodoList extends Component {
  componentDidMount() {
    // You can access to the Horizon instance as a prop in the connected child component.
    this.props.hz('todos').limit(100).watch().subscribe(todos => this.setState({ todos }));
  }

  render() {
    return (
      <ul>
        {this.state.todos.map( todo => <Todo {...todo} /> )}
      </ul>  
    );
  }
}

export default TodoList;
```

Higher order components style:
```Javascript
import React, { Component } from 'react';
import { connect as horizonConnect } from 'react-horizon';

class TodoList extends Component {
  componentDidMount() {
    // You can access to the Horizon instance as a prop in the connected child component.
    this.props.hz('todos').limit(100).watch().subscribe(todos => this.setState({ todos }));
  }

  render() {
    return (
      <ul>
        {this.state.todos.map( todo => <Todo {...todo} /> )}
      </ul>  
    );
  }
}

TodoList = horizonConnect()(TodoList);
export default TodoList;
```

### Contributing
Pull Requests are very welcome!

If you find any issues, please report them via [Github Issues](https://github.com/hoducha/react-horizon/issues)!

### License
(MIT)
