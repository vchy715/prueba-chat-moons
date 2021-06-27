import React from 'react';

import classes from './ChatMessage.module.css';

const ChatMessage = (props) => {
  return (
    <div
      className={`${classes['chat-message']} ${props.message.owned ? classes['message-sent'] : classes['message-received']}`}
    >
      <div className={`${classes['chat-message__user']}`}>{props.message.user.name}</div>
      <div className={`${classes['chat-message__body']}`}>{props.message.body}</div>
    </div>
  )
};

export default ChatMessage;
