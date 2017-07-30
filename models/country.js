'use strict';

module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  return country;
};
