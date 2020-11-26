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
          imageUrl:
            "https://res.cloudinary.com/leaves-client/image/upload/v1606382052/thomas_gel3c3.jpg",
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
          imageUrl:
            "https://res.cloudinary.com/leaves-client/image/upload/v1606382052/trump_nzn0by.jpg",

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
          imageUrl:
            "https://res.cloudinary.com/leaves-client/image/upload/v1606382052/ramin_glm3q5.jpg",

          accountBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Stephanie",
          lastName: "Bergman",
          email: "s@b.com",
          password: bcrypt.hashSync("apple", SALT_ROUNDS),
          city: "Amsterdam",
          country: "Netherlands",
          imageUrl:
            "https://res.cloudinary.com/leaves-client/image/upload/v1606382053/steph_ij5hpy.jpg",

          accountBlocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Igor",
          lastName: "Sijlbing",
          email: "i@s.com",
          password: bcrypt.hashSync("roti", SALT_ROUNDS),
          city: "Amsterdam",
          country: "Netherlands",
          imageUrl:
            "https://res.cloudinary.com/leaves-client/image/upload/v1606382052/igor_qwvdnz.jpg",

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
