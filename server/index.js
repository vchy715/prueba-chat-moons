const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const { clog } = require('./helpers');

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', (socket) => {
  clog(`${socket.id} connected`);
  socket.on('disconnect', () => {
    clog(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  clog(`listening on *:${PORT}`);
});
