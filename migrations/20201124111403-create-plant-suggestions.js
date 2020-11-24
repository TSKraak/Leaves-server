"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("plantSuggestions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scientificName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shortLight: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      light: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      shortWater: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      water: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("plantSuggestions");
  },
};
