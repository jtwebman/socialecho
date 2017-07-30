'use strict';

const config = require('config');
const bluebird = require('bluebird');
const db = require('sqlite');

module.exports = db.open(config.get('db.filename'), {
  cached: true,
  Promise: bluebird
});
