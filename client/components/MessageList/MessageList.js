import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message'
import styles from './MessageList.css'

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
          />
        )
      })
    }
  </div>
)

export default MessageList
