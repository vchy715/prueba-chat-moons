import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:4000';
const USER_JOIN_EVENT = 'user_join';
const USER_LEAVE_EVENT = 'user_leave';
const USER_UPDATE_EVENT = 'user_update';
const NEW_MESSAGE_EVENT = 'message_received';

const useChat = (userName, room = 'General') => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL, { query: { room, userName } });

    socketRef.current.on(USER_JOIN_EVENT, (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    socketRef.current.on(USER_LEAVE_EVENT, (id) => {
      setUsers((users) => users.filter((u) => u.id === id))
    });

    socketRef.current.on(NEW_MESSAGE_EVENT, (msgData) => {
      const newMessage = {
        ...msgData,
        owned: msgData.senderId === socketRef.current.id,
      }
      setMessages((prevMessages) => [...prevMessages, newMessage])
    })

    socketRef.current.on(USER_UPDATE_EVENT, (usrData) => {
      setMessages((prevMessages) => {
        return prevMessages.map((message) => {
          if (message.user.id === usrData.id) message.user.name = usrData.newName
          return message;
        })
      })
    })

    return () => {
      socketRef.current.disconnect();
    }
  }, [room, userName])

  const sendMessage = (msg) => {
    socketRef.current.emit(NEW_MESSAGE_EVENT, {
      body: msg,
      senderId: socketRef.current.id,
      user: users.find((u) => u.id === socketRef.current.id),
    })
  }

  const updateUserName = (newName) => {
    socketRef.current.emit(USER_UPDATE_EVENT, {
      id: socketRef.current.id,
      newName: newName,
    })
  }

  return {
    messages,
    sendMessage,
    updateUserName,
  }
};

export default useChat;
