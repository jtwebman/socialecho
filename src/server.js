'use strict';

const app = require('./app');
const config = require('config');
const db = require('./data/db');

const port = config.get('port');

db.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
}).catch((err) => {
  console.error(err.stack);
});
