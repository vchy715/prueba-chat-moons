import React, { Fragment, useState } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('General');

  const getUserNameHandler = (name) => setUserName(name)
  const getRoomNameHandler = (name) => setRoomName(name)


  const joinChatHandler = () => setIsRegistered(true);

  const leaveChatHandler = () => setIsRegistered(false);

  return (
    <Fragment>
      <MainHeader isRegistered={isRegistered} onLeave={leaveChatHandler}/>
      <main>
        {!isRegistered && <Home onJoin={joinChatHandler} onSetName={getUserNameHandler} onSetRoom={getRoomNameHandler}/>}
        {isRegistered && <ChatRoom userName={userName} roomName={roomName} onUpdateName={getUserNameHandler}/>}
      </main>
    </Fragment>
  );
}

export default App;
