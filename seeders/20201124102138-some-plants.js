"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "plants",
      [
        {
          name: "Bananas",
          scientificName: "Musa",
          imageUrl:
            "https://cdn.webshopapp.com/shops/138826/files/315697998/600x600x2/bananenplant-musa-large.jpg",
          waterPeriodDays: 7,
          vertilisePeriodDays: 21,
          waterAlert: "2020/11/26",
          vertiliseAlert: "2020/11/26",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Lilly",
          scientificName: "Spathiphyllum",
          imageUrl: "https://media.s-bol.com/Z64OyyRX5r4w/550x687.jpg",
          waterPeriodDays: 6,
          vertilisePeriodDays: 24,
          waterAlert: "2020/11/28",
          vertiliseAlert: "2020/12/04",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paradise",
          scientificName: "Strelitzia Nicolai",
          imageUrl:
            "https://boommade.nl/wp-content/uploads/2018/11/kunst-strelitzia-kunst-paradijsvogelplant-kunstplant-grote-kunstplant-1152x1536.jpg",
          waterPeriodDays: 12,
          vertilisePeriodDays: 48,
          waterAlert: "2020/12/06",
          vertiliseAlert: "2020/12/18",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paradise",
          scientificName: "Dracaena Marginata",
          imageUrl:
            "https://i.etsystatic.com/16813062/r/il/22ccd0/1708355081/il_570xN.1708355081_3fjn.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spikey",
          scientificName: "Euphorbia acruensis",
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
          imageUrl:
            "https://www.tuincentrum.nl/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/s/t/strelitzia-paradijsvogelplant.jpg",
          waterPeriodDays: 5,
          vertilisePeriodDays: 30,
          waterAlert: "2020/11/29",
          vertiliseAlert: "2020/12/09",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White stripes",
          scientificName: "Calathea White Star",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0254/3750/3562/products/ImageServer_287a9f8e-2235-4043-af67-8f6406ae6a2f_2000x.jpg",
          waterPeriodDays: 9,
          vertilisePeriodDays: 27,
          waterAlert: "2020/12/01",
          vertiliseAlert: "2020/12/28",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Purple sky",
          scientificName: "Calathea Medallion",
          imageUrl:
            "https://plnts.com/wp-content/uploads/2020/03/PL_XL_002_Calathea-Medaillon_potCR_XL_1035831-s.jpg",
          waterPeriodDays: 15,
          vertilisePeriodDays: 60,
          waterAlert: "2020/12/05",
          vertiliseAlert: "2020/02/02",
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
