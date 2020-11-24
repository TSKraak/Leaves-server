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
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shortLight: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      light: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      shortWater: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      water: {
        type: DataTypes.TEXT,
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
