import React from 'react'
import PropTypes from 'prop-types'
import styles from '../MessageList/MessageList.css'

const Message = props => (
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
)

export default Message
