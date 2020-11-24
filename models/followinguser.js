"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class followingUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      followingUser.belongsTo(models.user);
    }
  }
  followingUser.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      followingUserId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "followingUser",
    }
  );
  return followingUser;
};
