"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plantSuggestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  plantSuggestions.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scientificName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortLight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      light: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shortWater: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      water: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "plantSuggestions",
    }
  );
  return plantSuggestions;
};
