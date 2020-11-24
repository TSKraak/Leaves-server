"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plantSuggestions",
      [
        {
          name: "Fiddle Leaf Fig",
          scientificName: "Ficus lyrata",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/g/r/grote_ficus_lyrata_tabaksplant_1.jpg",
          shortDescription:
            "Homeowners rely on Ficus lyrata to provide a fresh, modern twist in their decor, even in smaller spaces. Natural light is important for the large leaves to engage in photosynthesis, so place it close to a south or east-facing window. Allow soil to dry between waterings.",
          description:
            "The fiddle-leaf fig (Ficus lyrata) is a popular indoor specimen plant featuring very large, heavily veined, violin-shaped leaves that grow upright. These plants are native to tropical parts of Africa, where they thrive in very warm and wet conditions. This makes them somewhat challenging for the home grower, who is likely to have trouble duplicating these steamy conditions. However, they are relatively tough plants that can withstand a less-than-perfect environment for a fairly long time. Fiddle-leaf figs are perfect as focal points of a room if you can situate them in a floor-standing container where the plant is allowed to grow to at least 6 feet. (Most indoor specimens reach around 10 feet tall.) They’re fairly fast growers and can be potted at any point in the year if you're like most gardeners acquiring a nursery plant to keep indoors.",
          shortLight: "Bright light",
          light:
            "Fiddle-leaf figs require bright, filtered light to grow and look their best. Direct sunlight can burn the leaves, especially exposure to hot afternoon sun. And plants that are kept in very low light conditions will fail to grow rapidly.",
          shortWater: "Dry between waterings",
          water:
            "Fiddle-leaf figs like a moderate amount of moisture in the soil. If the plant doesn’t get enough water, its leaves will wilt and lose their bright green color. And if it gets too much water, the plant might drop its leaves and suffer from root rot, which ultimately can kill it. During the growing season (spring to fall), water your fiddle-leaf fig when the top inch of soil feels dry. And over the winter months, water slightly less. Furthermore, these plants are sensitive to high salt levels in the soil. So it's ideal to flush the soil until water comes out the bottom of the pot at least monthly. This helps to prevent salt build-up.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peace Lily",
          scientificName: "Spathiphyllum wallisii",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/s/p/spathiphyllum_sweet_sebastiano_lepelplant.jpg",
          shortDescription:
            "The graceful white spathes of the peace lily have long been rendered in silk plants, but there's no reason to go fake when the living specimens of Spathiphyllum wallisii are so easy to grow. Peace lilies do well in low light, but need regular moisture.",
          description:
            "The peace lily is a tropical species that is a favorite flowering houseplant. A striking plant when used in mass display, the peace lily blooms in spring with long-lasting flower stalks that hover gracefully over the foliage. A well-grown peace lily may bloom twice a year, resulting in several months of flowers. The plant has glossy oval leaves with points that emerge from the soil. <br></br>Peace lilies are indisputably terrific as houseplants. Small varieties look attractive on a tabletop and bigger ones can occupy a nice-sized spot on the floor. They filter more indoor pollutants than most other plants, so are great for bedrooms or other frequented rooms. Inside the tropical plant's pores, toxic gases like carbon monoxide and formaldehyde are broken down and neutralized. Peace lily can also be grown outdoors in warm climates, where it can tower as much as 6 feet high. <br></br>Despite their name, peace lilies are not members of the lily family. The peace lily is a member of the Araceae family of plants, known collectively as aroids. It is related to the philodendron, anthurium, and alocasia—also very popular as houseplants.",
          shortLight: "Low light",
          light:
            "Peace lilies are shade-loving plants in their native habitats, but when grown indoors they need plenty of filtered light, though not direct sunlight. Some varieties can withstand more light than others. Curled, pale leaves generally indicate that the plant is receiving too much light and scorched leaves indicate too much direct sun. In either case, the plant should be moved to a shadier location.",
          shortWater: "Moist",
          water:
            "During the summer, water and mist peace lilies frequently because they thrive with higher humidity, such as that found in the rainforest. In winter, reduce watering but never allow the soil to dry out. If your water is highly chlorinated, use filtered water.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chinese Money Plant",
          scientificName: "Crassula Ovata",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/c/h/chique_crassula_ovata_binnenplanten_kopen.jpg",
          shortDescription: "",
          description: "",
          shortLight: "Indirect light",
          light: "",
          shortWater: "Regular watering",
          water: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plantSuggestions", null, {});
  },
};
