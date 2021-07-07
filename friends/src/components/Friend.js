import React, { Component } from 'react';
import FriendCard from './FriendCard';
import axios from 'axios';

export default class Friend extends Component {
  state = {
    friend: {}
  }
  
  componentDidMount() {
    if(this.props.friends.length === 0) {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friend: response.data.find(friend => `${friend.id}` === this.props.match.params.id) })
        })
        .catch(err => console.log(err))
    } else {
      const friend = this.props.friends.find(
        friend => `${friend.id}` === this.props.match.params.id
      )
      this.setState({ friend: friend })
    }
  }

  goBack = () => {
    this.props.history.push('/friends/')
  }

  render() {
    return ( 
      <>
      <FriendCard 
        friend = { this.state.friend }
        delete = { this.props.delete }
      />
      <button onClick = { () => this.goBack() } style = {{
        padding: '10px 20px',
        margin: '0 10px'
      }}>Back</button>
      </>
    )
  }
}
