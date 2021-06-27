import React, { Fragment, useState } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');

  const getUserNameHandler = (name) => setUserName(name)

  const joinChatHandler = () => setIsRegistered(true);

  const leaveChatHandler = () => setIsRegistered(false);

  return (
    <Fragment>
      <MainHeader isRegistered={isRegistered} onLeave={leaveChatHandler}/>
      <main>
        {!isRegistered && <Home onJoin={joinChatHandler} onSetName={getUserNameHandler}/>}
        {isRegistered && <ChatRoom onLeave={leaveChatHandler} userName={userName}/>}
      </main>
    </Fragment>
  );
}

export default App;
