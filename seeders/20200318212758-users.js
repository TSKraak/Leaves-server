"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Thomas",
          lastName: "Kraak",
          email: "t@k.com",
          password: bcrypt.hashSync("banana", SALT_ROUNDS),
          city: "Amsterdam",
          country: "Netherlands",
          accountBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Donald",
          lastName: "Trump",
          email: "d@t.com",
          password: bcrypt.hashSync("trump", SALT_ROUNDS),
          city: "Washington",
          country: "USA",
          accountBlocked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ramin",
          lastName: "Kader",
          email: "r@k.com",
          password: bcrypt.hashSync("kebab", SALT_ROUNDS),
          city: "Amsterdam",
          country: "Netherlands",
          accountBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
