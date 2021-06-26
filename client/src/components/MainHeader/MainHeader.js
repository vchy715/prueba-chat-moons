import React from 'react';

import Button from '../UI/Button/Button';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>Chat</h1>
      <Button>Salir</Button>
    </header>
  )
};

export default MainHeader;
