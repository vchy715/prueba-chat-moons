import React from 'react';

import Button from '../UI/Button/Button';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Chat</h1>
      {props.isRegistered && <Button onClick={props.onLeave}>Salir</Button>}
    </header>
  )
};

export default MainHeader;
