const  Sequelize = require('sequelize');
const connection =require('./connection');
const database = new Sequelize(
    connection.development.database,
     connection.development.username, 
     connection.development.password, {
    host: connection.development.host,
    dialect: connection.development.dialect
  });
  module.exports = database;