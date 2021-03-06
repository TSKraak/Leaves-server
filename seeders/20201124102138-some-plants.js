"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plants",
      [
        {
          name: "Bananas",
          scientificName: "Musa",
          description:
            "Time to go bananas with me! If you manage to kill this one, please let me know. You'll get a spot on my worst plant carer list. They can handle everything!",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1780/8157/products/Bianca-small-Musa_1200x1200.jpg",
          waterPeriodDays: 7,
          fertilisePeriodDays: 21,
          waterAlert: "2020/11/26",
          fertiliseAlert: "2020/11/26",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Lilly",
          scientificName: "Spathiphyllum",
          description:
            "This plant has beautiful white flowers when cared for with love and passion. One of my favorites!",
          imageUrl: "https://media.s-bol.com/Z64OyyRX5r4w/550x687.jpg",
          waterPeriodDays: 6,
          fertilisePeriodDays: 24,
          waterAlert: "2020/11/28",
          fertiliseAlert: "2020/12/04",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paradise",
          scientificName: "Strelitzia Nicolai",
          description:
            "It took a while, but the flowers have finally shown up and it's a beauty.",
          imageUrl:
            "https://boommade.nl/wp-content/uploads/2018/11/kunst-strelitzia-kunst-paradijsvogelplant-kunstplant-grote-kunstplant-1152x1536.jpg",
          waterPeriodDays: 12,
          fertilisePeriodDays: 48,
          waterAlert: "2020/12/06",
          fertiliseAlert: "2020/12/18",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Palm Spring",
          scientificName: "Dracaena Marginata",
          description: "This plant is a must have when you're a home owner.",
          imageUrl:
            "https://i.etsystatic.com/16813062/r/il/22ccd0/1708355081/il_570xN.1708355081_3fjn.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spikey",
          scientificName: "Euphorbia acruensis",
          description:
            "Better don't mess with this one. She'll make you regret it.",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0662/5489/products/Euphorbia-Acrurensis-14_-Pistils-Nursery_1050x1359.jpg",
          waterPeriodDays: 30,
          waterAlert: "2020/11/30",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green Tower",
          scientificName: "Sansevieria Laurentii",
          description:
            "This experiment turned out pretty good! I love the way the total picture looks.",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/849c18a8c18231e9e60068f97f2b6ad6/s/a/sansevieria_laurentii_vrouwentong_interieur.jpg",
          waterPeriodDays: 20,
          waterAlert: "2020/12/03",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elephantic",
          scientificName: "Alocasia Wentii",
          description:
            "If you have space for this and you take care of it, it's a pretty picture.",
          imageUrl:
            "https://www.tuincentrum.nl/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/s/t/strelitzia-paradijsvogelplant.jpg",
          waterPeriodDays: 5,
          fertilisePeriodDays: 30,
          waterAlert: "2020/11/29",
          fertiliseAlert: "2020/12/09",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White stripes",
          scientificName: "Calathea White Star",
          description:
            "The combination of the white stripes on top and the purple on the bottom is just astonishing.",
          imageUrl:
            "https://www.intratuin.nl/media/catalog/product/8/7/8717263109617.jpg",
          waterPeriodDays: 9,
          fertilisePeriodDays: 27,
          waterAlert: "2020/12/01",
          fertiliseAlert: "2020/12/28",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purple sky",
          scientificName: "Calathea Medallion",
          description: "Calathea species are my favorite. Just look at this..",
          imageUrl:
            "https://plnts.com/wp-content/uploads/2020/03/PL_XL_002_Calathea-Medaillon_potCR_XL_1035831-s.jpg",
          waterPeriodDays: 15,
          fertilisePeriodDays: 60,
          waterAlert: "2020/12/05",
          fertiliseAlert: "2020/02/02",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("plants", null, {});
  },
};
