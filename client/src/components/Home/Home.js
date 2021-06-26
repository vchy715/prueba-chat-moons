import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import classes from './Home.module.css';

const Home = (props) => {
  const [enteredName, setEnteredName] = useState('')

  const nameChangeHandler = (event) => setEnteredName(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName === '') {

    } else {
      props.onSetName(enteredName);
      setEnteredName('');
      props.onJoin();
    }
  }

  return (
    <Card className={classes.home}>
      <form onSubmit={submitHandler}>
        <Input
          id='name'
          label='Name'
          type='text'
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <div className={classes['home-button']}>
          <Button type='submit'>Join</Button>
        </div>
      </form>
    </Card>
  )
};

export default Home;
