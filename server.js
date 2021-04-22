'use strict';

// requireing express library
const express = require('express'); // installed express first

const server = express(); // server has all the porper and methods for express.

const PORT = process.env.PORT || 3000; //
server.use(express.static('./public'));
// route
server.get('/', (req, res) => {
  res.send('home route');
});
server.get('/test', (req, res) => {
  res.send('your server is alive!');
});

server.get('/data', (req, res) => {
  let family = [{ Name: 'odai' }, { city: 'amman' }];
  res.json(family);
});
server.listen(PORT, () => {
  console.log(`listening ${PORT}`);
});