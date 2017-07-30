'use strict';

/*
This file loads the timezone data nto the databases. It is ran when a database is
created for the first time. It can be ran again to update the databases if you update
the csv files in this folder. These files come from timezonedb.com as a free source.

World Time Zone Database
========================

Source : http://www.iana.org
Processed by : http://timezonedb.com

This work is licensed under a Creative Commons Attribution 3.0 License,
see http://creativecommons.org/licenses/by/3.0/
The Data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness.
 */

const db = require('../../src/data/db');
const fs = require('fs');
const parse = require('csv-parse');

fs.readFile(inputPath, (err, fileData) => {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
    const params = rows.reduce((params, [code, name]) => {
      params.insert.push(code);
      params.insert.push(name);
      params.update.push(name);
      params.update.push(code);
    }, {
      insert: [],
      update: []
    });

    const placeholders = rows.map(() => '(?, ?)').join(',');
    const insertSql = `INSERT INTO country(code, name) VALUES ${placeholders}`;

    db.run('BEGIN TRANSACTION', (err) => {
      if (err) {
        return console.error(err.message);
      }

      db.run(insertSql, params.insert, function(err) {
        if (err) {
          return console.error(err.message);
        }

      });
    });
  });
});
