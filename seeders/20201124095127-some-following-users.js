"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "followingUsers",
      [
        {
          userId: 1,
          followingUserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          followingUserId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          followingUserId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          followingUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          followingUserId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          followingUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          followingUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          followingUserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("People", null, {});
  },
};
