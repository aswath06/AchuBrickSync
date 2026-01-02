'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('vehicles', {
      slNo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      vehicleNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      fitness: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      rc: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      pollution: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      insurance: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('vehicles');
  }
};
