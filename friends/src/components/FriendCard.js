import React from 'react';

const FriendCard = props => {
  const styles = {
    display: 'flex',
    width: '300px',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid black',
    padding: '20px',
    margin: '10px'
  }

  const { name, age, email, id } = props.friend
  return ( 
    <div 
      style = { styles }
    >
      Name: { name }<br />
      Age: { age }<br />
      Email: { email }<br />
      <button onClick = { (event) => props.delete(event, id) }>Delete</button>
    </div>
  )
}

export default FriendCard