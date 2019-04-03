import React from 'react'

export default function Friend(props) {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    padding: '20px',
    margin: '10px'
  }

  const { name, age, email } = props.friend

  return ( 
    <div style = { styles }>
      Name: { name }<br />
      Age: { age }<br />
      Email: { email }<br />
    </div>
  )
}
