import React from 'react';

import ChatMessage from '../ChatMessage/ChatMessage';
import MessageForm from '../MessageForm/MessageForm';
import Card from '../UI/Card/Card';
import classes from './ChatRoom.module.css';

const ChatRoom = () => {
  const dummyMessages = [
    {
      body: 'hello',
      id: 'dfajsdfsa',
      user: {
        id: 'fsdfasf',
        name: 'victoria'
      }
    },
    {
      body: 'hi',
      id: 'dfajszxdfsa',
      user: {
        id: 'fsdfdsasf',
        name: 'sandra'
      },
      owned: true,
    }
  ]
  return (
    <Card className={classes.chatroom}>
      <h2>Room:</h2>
      <Card className={classes['chatroom__messages']}>
        <ol>
          {dummyMessages.map((message) => {
            console.log(message);
            return (
            <li key={message.id}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          )})}
        </ol>
      </Card>
      <MessageForm/>
    </Card>
  )
};

export default ChatRoom;
