import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:4000';
const USER_JOIN_EVENT = 'user_join';
const USER_LEAVE_EVENT = 'user_leave';
const NEW_MESSAGE_EVENT = 'message_received';

const useChat = (userName, room = 'General') => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL, { query: { room, userName } });

    socketRef.current.on("connect", () => {
      console.log('connect: ', socketRef.current.id);
    });

    socketRef.current.on(USER_JOIN_EVENT, (user) => {
      console.log('user: ', user);
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
      console.log('message: ', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage])
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

  return {
    messages,
    sendMessage,
  }
};

export default useChat;
