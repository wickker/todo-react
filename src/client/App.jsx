import React from 'react';
import { hot } from 'react-hot-loader';
import List from './components/list'

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome!
        <br/>
        <br/>
        <List />
      </div>
    );
  }
}

export default hot(module)(App);
