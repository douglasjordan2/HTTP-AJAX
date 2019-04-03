import React, { Component } from 'react';
import Friends from './components/Friends';
import Form from './components/Form';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Form />
        <Friends />
      </React.Fragment>
    );
  }
}

export default App;
