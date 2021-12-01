'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Eastern_Conferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      wins: {
        type: Sequelize.INTEGER
      },
      loss: {
        type: Sequelize.INTEGER
      },
      GF: {
        type: Sequelize.INTEGER
      },
      GA: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Eastern_Conferences');
  }
};