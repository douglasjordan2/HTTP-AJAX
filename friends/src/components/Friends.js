import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

export default function Friends(props) {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }

  const goToItem = (event, friend) => {
    event.preventDefault();
    props.history.push(`/friends/${friend.id}`)
  }
  
  return (
    <div style = { styles }>
      { props.friends.map(friend => (
        <div onClick = { event => goToItem(event, friend) }>
          <FriendCard 
            friend = { friend }
            delete = { props.delete }
          />
        </div>
      )) }
    </div>
  )
}