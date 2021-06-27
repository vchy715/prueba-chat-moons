import React, { useRef } from 'react';

import Button from '../UI/Button/Button';
import classes from './MessageForm.module.css';

const MessageForm = (props) => {
  const messageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form className={classes['message-form']} onSubmit={submitHandler}>
      <input
        ref={messageInputRef}
        id="message"
        type="text"
        placeholder="Escriba un mensaje"
      />
      <Button className={classes['message-form__button']} type="submit">Enviar</Button>
    </form>
  )
};

export default MessageForm;
