const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
const uuid = require('uuid');

const { clog } = require('./helpers');

const PORT = process.env.PORT || 4000;
const USER_JOIN_EVENT = 'user_join';
const USER_LEAVE_EVENT = 'user_leave';
const USER_UPDATE_EVENT = 'user_update';
const NEW_MESSAGE_EVENT = 'message_received';

io.on('connection', (socket) => {
  clog(`${socket.id} connected`);
  const { room, userName } = socket.handshake.query;
  socket.join(room);

  const user = { name: userName, id: socket.id };
  io.to(room).emit(USER_JOIN_EVENT, user);

  socket.on(NEW_MESSAGE_EVENT, (msg) => {
    io.to(room).emit(NEW_MESSAGE_EVENT, {
      ...msg,
      id: uuid.v4(),
    });
  });

  socket.on(USER_UPDATE_EVENT, (updatedData) => {
    io.to(room).emit(USER_UPDATE_EVENT, updatedData);
  });

  socket.on('disconnect', () => {
    io.to(room).emit(USER_LEAVE_EVENT);
    socket.leave(room);
    clog(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  clog(`listening on *:${PORT}`);
});
