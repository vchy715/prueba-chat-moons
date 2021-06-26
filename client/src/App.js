import React, { Fragment } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import ChatRoom from './components/ChatRoom/ChatRoom';


function App() {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Home />
        <ChatRoom />
      </main>
    </Fragment>
  );
}

export default App;
