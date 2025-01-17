// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

//sanity check
server.use('*', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});



module.exports = server;