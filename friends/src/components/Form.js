import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
  state = {
    item: {
      name: '',
      age: '',
      email: ''
    }
  }

  fullWidth = {
    width: '100vw'
  }

  form = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    border: '1px solid black',
    margin: '10px auto'
  }

  input = {
    margin: '5px 0',
    padding: '2px 5px'
  }

  btn = {
    margin: '5px 0',
    padding: '2px 5px',
    width: '45%'
  }

  handleUpdate = (event) => {
    event.preventDefault()
    const update = this.props.friends.find(friend => friend.name === this.state.item.name)
    
    axios
      .put(`http://localhost:5000/friends/${ update.id }`, this.state.item)
      .then(response => {
        this.props.submit(response.data)
      })
      .catch(err => console.log(err))

    this.setState({ item: {
      name: '',
      age: '',
      email: ''
    } })
  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/friends', this.state.item)
      .then(response => {
        this.props.submit(response.data)
      })
      .catch(err => console.log(err))

    this.setState({ item: {
      name: '',
      age: '',
      email: ''
    } })
  }

  changeHandler = event => {
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      item: { ...prevState.item, [event.target.name]: value }
    }));
  }

  render() { console.log(this.props)
    const { name, age, email } = this.state.item
    return (
      <div style = { this.fullWidth }>
        <form 
          style = { this.form }
          onSubmit = { this.handleSubmit }
        >
          <input style = { this.input }
            type="text"
            name="name"
            placeholder="Name"
            value = { name }
            onChange = { this.changeHandler }
          />
          <input style = { this.input }
          onChange = { this.changeHandler }
            type="text"
            name="age"
            placeholder="Age"
            value = { age }
            onChange = { this.changeHandler }
          />
          <input style = { this.input }
          onChange = { this.changeHandler }
            type="text"
            name="email"
            placeholder="Email"
            value = { email }
            onChange = { this.changeHandler }
          />
          <div style = {{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between'
            }}>
            <input style = { this.btn }
            onChange = { this.changeHandler }
              type="submit"
              placeholder="Submit"
            />
            <button style = { this.btn } onClick = { (event) => this.handleUpdate(event) }>
              Update
            </button>
          </div>
        </form>
      </div>
    )
  }
}
