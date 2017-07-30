'use strict';

const db = require('./db');

function getCountries(cb) {
  db.all('SELECT code, name FROM country', cb);
}

module.exports = getCountries;
