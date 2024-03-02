'use strict'

const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  timezone: process.env.DB_TIMEZONE,
  dialectOptions: {
    useUTC: true
  },
  pool: {
    max: 300,
    min: 10,
    idle: 600000
  },
  logging: false,
  alter: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// public schema
db.inventory = require('./inventory.js')(sequelize, Sequelize);
db.users = require('./users.js')(sequelize, Sequelize);

sequelize.sync();

module.exports = db;
