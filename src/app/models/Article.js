const Sequelize = require('sequelize');
const seq = require('../../config/database');

const  tableName = 'articles';
const Article = seq.define('Article', {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING
  },
  sub_title: {
    allowNull: false,
    type: Sequelize.TEXT('text')
  },
  description: {
    allowNull: false,
    type: Sequelize.TEXT('longtext')
  },
  image: {
    allowNull: false,
    type: Sequelize.STRING
  },
  author:{
    allowNull: false,
    type: Sequelize.INTEGER
  },
  keywords:{
    allowNull: false,
    type: Sequelize.TEXT
  }

},{tableName});
module.exports = Article;