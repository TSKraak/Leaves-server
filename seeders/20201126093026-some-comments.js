"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          text: "This is shit, America has the greatest plants. The best!",
          userId: 2,
          plantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Shut up..",
          userId: 1,
          plantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Looking good!",
          userId: 3,
          plantId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I need to get one of these!",
          userId: 3,
          plantId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "How much water are you giving this plant? And how often?",
          userId: 4,
          plantId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I love the colors!",
          userId: 4,
          plantId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Still loving this one, even after have it for years <3",
          userId: 4,
          plantId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text:
            "I really like the lines on the leaves. Didn't know there were plants like these.",
          userId: 5,
          plantId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
