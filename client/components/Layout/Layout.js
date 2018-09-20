import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageForm from '../../components/MessageForm/MessageForm'
import MessageList from '../../components/MessageList/MessageList'
import UsersList from '../../components/UsersList/UsersList'
import styles from './Layout.css'

const Layout = props => (
  <div className={styles.App}>
    <div className={styles.AppHeader}>
      <div className={styles.AppTitle}>
        ChatApp
      </div>
      <div className={styles.AppRoom}>
        App room
      </div>
    </div>
    <div className={styles.AppBody}>
      <UsersList
        users={props.users}
      />
      <div className={styles.MessageWrapper}>
        <MessageList
          messages={props.messages}
        />
        <MessageForm
          onMessageSubmit={props.onMessageSubmit}
          name={props.name}
        />
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  users: PropTypes.array,
  messages: PropTypes.array,
  onMessageSubmit: PropTypes.func,
  name: PropTypes.string
}

export default Layout
