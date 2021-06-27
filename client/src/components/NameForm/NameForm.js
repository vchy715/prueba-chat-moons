import React, { useState } from 'react';

import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './NameForm.module.css';

const NameForm = (props) => {
  const [enteredNewName, setEnteredNewName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameChangeHandler = (event) => setEnteredNewName(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredNewName === '') {
      setNameIsValid(false);
    } else {
      props.onUpdateName(enteredNewName);
      // setEnteredNewName('');
      props.onClose();
    }
  }

  return (
    <Modal onClose={props.onClose}>
      <form className={classes['name-form']} onSubmit={submitHandler}>
      <Input
          id='new-name'
          label='Nuevo nombre'
          type='text'
          value={enteredNewName}
          isValid={nameIsValid}
          onChange={nameChangeHandler}
        />
        <div className={classes['name-form__button']}>
          <Button type='submit'>Actualizar</Button>
        </div>
      </form>
    </Modal>
  )
};

export default NameForm;
