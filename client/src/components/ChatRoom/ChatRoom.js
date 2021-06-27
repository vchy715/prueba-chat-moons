import React from 'react';

import useChat from '../../hooks/useChat';
import ChatMessage from '../ChatMessage/ChatMessage';
import MessageForm from '../MessageForm/MessageForm';
import Card from '../UI/Card/Card';
import classes from './ChatRoom.module.css';

const ChatRoom = (props) => {
  const {messages, sendMessage} = useChat(props.userName, props.roomName);
  console.log('in ChatRoom');
  return (
    <Card className={classes.chatroom}>
      <h2>Canal: {props.roomName}</h2>
      <Card className={classes['chatroom__messages']}>
        <ol>
          {messages.map((message) => {
            return (
            <li key={message.id}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          )})}
        </ol>
      </Card>
      <MessageForm onSubmit={sendMessage}/>
    </Card>
  )
};

export default ChatRoom;
