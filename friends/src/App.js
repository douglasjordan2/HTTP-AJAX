import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Friends from './components/Friends';
import Form from './components/Form';
import Friend from './components/Friend';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err));
  }

  handleSubmit = data => {
    this.setState({ friends: data })
  }

  delete = (event, friend) => {
    event.stopPropagation();
    console.log(friend)
    axios
      .delete(`http://localhost:5000/friends/${ friend }`)
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {  console.log(this.state)
    return (
      <React.Fragment>
        <Route path = "/" render = {props => <Form
          {...props} 
          submit = { this.handleSubmit }
          friends = { this.state.friends }
        /> } />
        <Route exact path="/friends" render = { props => <Friends 
          {...props}
          friends = { this.state.friends }
          updateList = { this.updateList }
          delete = { this.delete }
        /> } />
        <Route path="/friends/:id" render = { props => <Friend 
          {...props}
          friends = { this.state.friends }
          delete = { this.delete }
        /> } />
      </React.Fragment>
    );
  }
}

export default App;
