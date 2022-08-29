'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
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
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};