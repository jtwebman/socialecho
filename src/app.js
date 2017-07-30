'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Will be UI soon!');
});

module.exports = app;
