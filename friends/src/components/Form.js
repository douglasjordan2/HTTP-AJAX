import React from 'react'

export default function Form() {
  const form = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    border: '1px solid black',
    margin: '10px'
  }

  const input = {
    margin: '5px 0',
    padding: '2px 5px'
  }

  return (
    <form style = { form }>
      <input style = { input }
        type="text"
        name="name"
        placeholder="Name"
      />
      <input style = { input }
        type="text"
        name="age"
        placeholder="Age"
      />
      <input style = { input }
        type="text"
        name="email"
        placeholder="Email"
      />
      <input style = { input }
        type="submit"
        placeholder="Submit"
      />
    </form>
  )
}
