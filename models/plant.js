"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      plant.belongsTo(models.user);
    }
  }
  plant.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scientificName: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      waterPeriodDays: DataTypes.INTEGER,
      fertilisePeriodDays: DataTypes.INTEGER,
      waterAlert: DataTypes.DATEONLY,
      fertiliseAlert: DataTypes.DATEONLY,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "plant",
    }
  );
  return plant;
};
