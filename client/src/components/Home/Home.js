import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';

const Home = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredRoom, setEnteredRoom] = useState('General')

  const nameChangeHandler = (event) => setEnteredName(event.target.value)
  const roomChangeHandler = (event) => setEnteredRoom(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName === '') {
      setNameIsValid(false);
    } else {
      props.onSetName(enteredName);
      props.onSetRoom(enteredRoom);
      setEnteredName('');
      setEnteredRoom('');
      props.onJoin();
    }
  }

  return (
    <Card className={classes.home}>
      <form onSubmit={submitHandler}>
        <Input
          id='name'
          label='Nombre'
          type='text'
          isValid={nameIsValid}
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <Input
          id='room'
          label='Sala'
          type='text'
          value={enteredRoom}
          isValid={true}
          onChange={roomChangeHandler}
        />
        <div className={classes['home__button']}>
          <Button type='submit'>Entrar</Button>
        </div>
      </form>
    </Card>
  )
};

export default Home;
