"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user);
      comment.belongsTo(models.plant);
    }
  }
  comment.init(
    {
      text: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      plantId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
