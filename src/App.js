import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import TicTacToe from './containers/TicTacToe/TicTacToe';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Layout>
          <TicTacToe />
        </Layout>
      </div>
    );
  }
}

export default App;
