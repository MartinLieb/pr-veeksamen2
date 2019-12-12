'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lightbulps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      on_or_off: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      nominel_use: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      actual_use: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      light_percent: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      hardware_type: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      software_version: {
        allowNull: false,
        type: Sequelize.DOUBLE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lightbulps');
  }
};