const Sequelize = require('sequelize');
const seq = require('../../config/database');

const  tableName = 'users';
const User = seq.define('User', {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  username: {
    type: Sequelize.STRING
  },
  display_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.ENUM('ADMIN','USER')
  },
  token: {
    type: Sequelize.STRING
  },

},{tableName});
module.exports = User;