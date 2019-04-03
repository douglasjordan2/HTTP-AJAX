import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

export default class Friends extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err));
  }

  render() { console.log(this.props)
    return (
      <div style = { styles }>
        { this.state.friends.map(friend => (
            <Friend 
              friend = { friend }
            />
        )) }
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap'
}