import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import io from 'socket.io-client'
import Layout from '../../components/Layout/Layout'
import UserForm from '../../components/UserForm/UserForm'

const socket = io('/')

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      messages: [],
      text: '',
      name: ''
    }
  }
  componentDidMount = () => {
    socket.on('message', message => this.messageReceive(message))
    socket.on('update', ({ users }) => this.chatUpdate(users))
  }
  messageReceive = (message) => {
    const messages = [message, ...this.state.messages]
    this.setState({ messages })
  }
  chatUpdate = (users) => {
    this.setState({ users })
  }
  handleMessageSubmit = (message) => {
    const messages = [message, ...this.state.messages]
    this.setState({ messages })
    socket.emit('message', message)
  }
  handleUserSubmit = (name) => {
    this.setState({ name })
    socket.emit('join', name)
  }
  render = () => {
    return this.state.name !== '' ? this.renderLayout() : this.renderUserForm()
  }
  renderLayout = () => {
    return (
      <Layout
        users={this.state.users}
        messages={this.state.messages}
        onMessageSubmit={message => this.handleMessageSubmit(message)} // Rozwiazac problem !!!!!
        name={this.state.name}
      />
    )
  }
  renderUserForm = () => {
    return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
  }
};

App.propTypes = {
  users: PropTypes.array,
  messages: PropTypes.array,
  onMessageSubmit: PropTypes.func,
  name: PropTypes.string
}

export default hot(module)(App)
