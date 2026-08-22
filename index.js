const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Serve the frontend UI file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Listen for incoming real-time socket connections
io.on('connection', (socket) => {
  console.log('A user connected to TeleChats');

  // Broadcast incoming chat messages to everyone
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected from TeleChats');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('TeleChats server is running on port 3000');
});
