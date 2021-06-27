import React, { useState } from 'react';

import useChat from '../../hooks/useChat';
import ChatMessage from '../ChatMessage/ChatMessage';
import MessageForm from '../MessageForm/MessageForm';
import NameForm from '../NameForm/NameForm';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './ChatRoom.module.css';

const ChatRoom = (props) => {
  const {messages, sendMessage, updateUserName} = useChat(props.userName, props.roomName);
  const [configIsShown, setConfigIsShown] = useState();

  const showConfigHandler = () => {
    setConfigIsShown(true);
  };

  const hideConfigHandler = () => {
    setConfigIsShown(false);
  };
  return (
    <Card className={classes.chatroom}>
      {configIsShown && <NameForm onClose={hideConfigHandler} onUpdateName={updateUserName}/>}
      <h2>Sala: {props.roomName}</h2>
      <Button className={classes['chatroom__button']} onClick={showConfigHandler}>Config</Button>
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
