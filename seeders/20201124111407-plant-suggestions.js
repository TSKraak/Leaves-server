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
            "The fiddle-leaf fig (Ficus lyrata) is a popular indoor specimen plant featuring very large, heavily veined, violin-shaped leaves that grow upright. These plants are native to tropical parts of Africa, where they thrive in very warm and wet conditions. This makes them somewhat challenging for the home grower, who is likely to have trouble duplicating these steamy conditions. However, they are relatively tough plants that can withstand a less-than-perfect environment for a fairly long time. <br></br>Fiddle-leaf figs are perfect as focal points of a room if you can situate them in a floor-standing container where the plant is allowed to grow to at least 6 feet. (Most indoor specimens reach around 10 feet tall.) They’re fairly fast growers and can be potted at any point in the year if you're like most gardeners acquiring a nursery plant to keep indoors.",
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
          shortDescription:
            "Pilea peperomiodes is at home in minimalist and contemporary surroundings. The circular leaves are produced with abundance in average soil and indirect light. Mature Chinese money plants have a slightly cascading habit that looks great in hanging baskets.",
          description:
            "Succulent plants have become so popular because they offer low maintenance and diverse shapes and textures, both in the garden and indoors. Crassula is a diverse and extensive genus of succulent plants, with about 350 species. Probably the most well-known is the jade plant (Crassula ovata). Many of us know it as a houseplant, but in warm climates, it grows into a shrub. <br></br>Crassulas range from annuals to perennials, herbaceous or woody plants, groundcovers to shrubs to small trees. Many Crassula species are small, including some miniatures and creeping ground covers. They are all quite fascinating, the types of plants you see occasionally and wonder `What is that?` With the resurgence of succulent container gardening, these smaller Crassula species are becoming more readily available and their easy growing habit makes them worth getting to know. They are perfect container plants—low maintenance, evergreen, and eye-catching. <br></br>Most of the Crassulas grown as houseplants originated from the eastern cape of South Africa. If you have the climate, the plants look terrific in the garden, tucked into and hanging over walls. In zones 9a-10b, jade plants in their natural element will be one of the easiest plants to maintain in your garden. Their dark, glossy green color is a great foil for almost any flower color.",
          shortLight: "Indirect light",
          light:
            "Most Crassula plants need some shade in the hottest part of summer but require bright light to attain their most vibrant color. When grown outdoors, a site with morning sun and afternoon shade is perfect. Placed in full sun, the leaves can scald. When grown indoors, place Crassula plants in a spot that receives bright indirect light all day, or direct sun for six hours of the day. A southern-facing window is ideal.",
          shortWater: "Regular watering",
          water:
            "These are succulent plants related to the stonecrops, and they prefer sparse watering, with the soil drying out completely before being watered again. Avoid overwatering. Instead, soak the plant, allow it to drain completely, then wait for the soil to dry out before watering again. During cooler months, reduce watering, as the roots can rot in cold, wet soil. Crassula plants begin actively growing in the spring, so watch for watering needs. When grown indoors, watering should be minimized from late fall through winter, as the plants go semi-dormant during this time.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spider Plant",
          scientificName: "Chlorophytum comosum",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/k/o/kokodama_chlorophytum_comosum.jpg",
          shortDescription:
            "Chlorophytum comosum has been a popular houseplant for decades, but this throwback plant is still relevant in any setting where you desire a low maintenance specimen that also purifies the air. The arching leaves make these plants great for pedestals or hanging baskets.",
          description:
            "Despite the creepy-crawly name, the spider plant is among the most popular (and easiest to grow) of all hanging or trailing houseplants. While these exceptionally hardy plants will survive in less than perfect conditions, in perfect conditions they are stunning. A mature plant will form tight rosettes of arching leaves with a profusion of hanging plantlets on long stems, up to three feet, somewhat like a bushy green mane. Although there is a pure green variety, the most common variety seen in garden centers in the green-and-white striped 'Variegatum.' Mature plants have small white flowers.",
          shortLight: "Indirect light",
          light:
            "This undemanding plant feels well in a bright spot. Places where they get in direct contact with the sun in the morning or in the evening are just perfect. The light contributes, for example, to the development of a strong coloring of the leaves. If possible the spider plant should not be exposed to the hot midday sun in the summer to make sure the leaves won’t burn.",
          shortWater: "Average to dry",
          water:
            "The spider plant should be poured regularly and generously. From spring to autumn the soil should constantly be slightly damp. Waterlogging should however be strictly avoided. Therefore, the plant is best planted in a pot, from which excess water can drain down. This should be removed a few minutes after pouring. In its thick roots the spider plant can store water, which is why it survives even short dry periods.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Air Plant",
          scientificName: "Tillandsia",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/t/i/tillandsia_hangplant_kunstplant.jpg",
          shortDescription:
            "The Tillandsia genus has breathed new life into the terrarium hobby. Although these plants do grow without any soil, they still need bright light and weekly watering, which you can achieve with a heavy spritz from a spray bottle or by dunking the whole plant in water.",
          description:
            "The term air plant refers to any of roughly 500 different species of flowering perennial plants in the Tillandsia genus, a part of the Bromeliad family. These are plants that require no soil for their roots. Instead, they extract moisture from the air. In their natural element, you will find Tillandsia plants growing on trees. Spanish moss is one type of Tillandsia. Although perennial in a sufficiently warm climate, air plants are normally grown as indoor houseplants. They are native to warm, arid regions. <br></br>Although once rare in commercial use, Tillandsia plants are now quite trendy and are used in a variety of hanging garden applications. While a few species can be grown in pots, most are mounted on pieces of bark or driftwood and suspended in air. They are now widely available at garden centers. These are fairly diminutive plants that need to be viewed up close. ",
          shortLight: "Bright light",
          light:
            "Before making a choice on where to place your tillandsia, you should regard the origin of the plant. In general a tillandsia requires a sufficient exposure to light, moderately warm temperatures and a moderately humid environment. The plant should be placed in an environment where it gets enough exposure to light, however is not exposed to the sunlight all day.",
          shortWater: "Weekly misting",
          water:
            "Tillandsias do have to regularly be watered because they absorb the required amount of water out of the air. In order to sustainably thrive it is important to ensure a humid environment. During low humidity, e.g. during winter, you should additionally spray tepid water on the plant. Avoid watering the plant and only use soft, filtrated water which should be free from limestone. Spray several times a week.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aloe Vera",
          scientificName: "Aloe barbadensis",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/a/l/aloe-vera-wonderplant_1_.jpg",
          shortDescription:
            "The gel from cut Aloe barbadensis leaves is widely used in first aid remedies and cosmetics, adding function to form as a houseplant. Like most succulents, it prefers dry sandy soil and bright light. Healthy plants will produce pup offsets to replace any leaves you might harvest.",
          description:
            "Few people aren't familiar with the ubiquitous Aloe vera plant: the gel from its fleshy leaves are so widely coveted for cosmetics and medicinal uses that this succulent is cultivated on large farms in Asia, Mexico, and in parts of the United States. However, the Aloe genus is large and diverse, containing hundreds of species native to Africa and the Arabian peninsula, which feature the mild temperatures and arid climate that support the growth of these tough plants. Learn about lesser-known aloes that you can cultivate in containers, or even outdoors in frost-free zones.",
          shortLight: "High",
          light:
            "The Aloe Vera needs a warm, sunny and dry location during outdoor cultivation. This is the basic prerequisite for a splendid, healthy growth. A semi-shaded location can also be chosen as long as the temperatures are stable and consistently warm.",
          shortWater: "Dry",
          water:
            "As much as the Aloe Vera is used to hot and dry fields and often does not require water for a period of several months, regular watering is recommended. In dry periods, the Aloe Vera draws its moisture from the fleshy leaves. However, this inhibits its healthy and splendid growth. To prevent this, this Aloe species should always have a moist root ball during spring to late summer. You can test with your thumb, whether the plant needs water. If the surface can be pressed down a little bit, the soil is still moist inside. If the surface does not drop at least two to three centimeters under your thumb pressure, it should be watered.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jade Plant",
          scientificName: "Crassula ovata",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/c/r/crassula_ovata.jpg",
          shortDescription:
            "You can't go wrong with a Crassula ovata in a bright room: It's every bit as pretty as those trendy faux plants you see at the hobby store, only fake plants don't continue to grow and become more stately over time like real jade plants do. Water sparingly and add supplemental lighting if leaf drop occurs.",
          description:
            "The jade plant (Crassula ovata) is a popular succulent houseplant with fleshy, oval-shaped leaves and thick, woody stems that resemble tiny tree trunks. The jade plant can grow to a size of 3–6 inches, but does so slowly, only growing about two inches a year. <br></br>Sometimes called the money plant or tree, lucky plant, friendship plant, or dollar plant, these plants were once thought to bring good luck to their owners so were often given as housewarming gifts. Several species are sometimes seen labeled as jade plants in garden centers, as they share cultural requirements.",
          shortLight: "High",
          light:
            "Young jade plants should only be exposed to bright, indirect light to prevent leaf scorching. Well-established jade plants can tolerate and thrive with four or more hours of sunlight each day. They are best in a room with south-facing windows.",
          shortWater: "Dry",
          water:
            "During the summer and spring, jade plants should be watered often so the soil is moist but not wet, making sure drainage is immaculate. Reduce watering to monthly in the winter. Never let your jade plant sit in water. If you water from beneath by letting the plant sit in a saucer of water, pour off any excess water after a few minutes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "African Violet",
          scientificName: "Saintpaulia",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0204/2542/products/shutterstock_35049577.jpg",
          shortDescription:
            "African violets have a passionate following, and it's no wonder why. These plants are compact and free flowering with a wide variety of flower forms and colors. With careful watering, high humidity, and bright, but not direct, light, it is possible to coax forth several blooms every year. Some master growers can keep their African violets in bloom nearly all year round.",
          description:
            "African violets are one of the world's most popular houseplants and for good reason. These compact, low-growing plants flower several times a year, and they are available in a multitude of leaf forms and colors. Don't be put off by their reputation for difficulty: providing you follow a few simple rules, African violets should thrive indoors. With a little experience, it's possible to keep them in flower nearly all year round and grow them to the size of dinner plates.",
          shortLight: "Indirect light",
          light:
            "Bright, but not direct sunlight. They are commonly grown under fluorescent lights placed 12 to 15 inches above the leaves.",
          shortWater: "Light, regular moisture",
          water:
            "Keep soil moist with warm water and strive for high humidity. Do not allow water to contact the leaves to prevent damage, other than light misting. Water from below, or push the water spout into the soil when watering. Don't allow the plant to sit in water.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snake Plant",
          scientificName: "Sansevieria trifasciata",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/4/s/4salatu35.jpg",
          shortDescription:
            "Sansevieria trifasciata is about as close as it gets to a plant-it-and-forget-it houseplant. The plant tolerates a wide range of moisture, soil, and light conditions. You can find variegated types, and the plants also look great grown in metal or concrete containers for industrial chic.",
          description:
            "Sansevieria trifasciata (also known as the Snake Plant or Mother-In-Law's Tongue) is one of the most popular and hardy species of houseplants. An architectural species, it features stiff leaves that range from six inches to eight feet tall, depending on the variety. Snake Plants usually have green banded leaves, while the variety commonly known as Mother-In-Law's Tongue typically features a yellow border. <br></br>Sansevieria trifasciata is a member of the Asparagacea family—a relative of garden asparagus. Sansevieria was first cultivated in China and kept as a treasured houseplant because it was believed the eight gods bestowed their virtues (long life, prosperity, intelligence, beauty, art, poetry, health, and strength) upon those who grew the snake plant. Sansevieria also is among several plants chosen by NASA for a study on how plants can be used for air purification and to combat `sick building syndrome`. According to joint studies run by the Department of Horticulture at the University of Georgia and the Institute for Environmental Research at Yonsei University in Seoul, Korea, Sansevieria has a demonstrated ability to remove formaldehyde and benzene from the air.",
          shortLight: "Low to high",
          light:
            "Although they are very forgiving, Sansevieria plants prefer indirect but steady light with some direct sun. They can adapt to full sun conditions and will also survive quite dim situations.",
          shortWater: "Low",
          water:
            "Let the soil dry between waterings. During winter, reduce watering to monthly, or whenever the soil is dry to the touch. Err on the side of under watering; too much water can kill the plant.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bromeliad",
          scientificName: "Bromeliaceae",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0062/8532/8445/products/5-inch-Savannah-White-Guzmania-Orange-Bromeliad_1024x1024.jpg",
          shortDescription:
            "In their native habitat, plants in the Bromeliaceae family grow as epiphytes nestled in trees. That means two things for their care: they like filtered light, and good aeration around their roots. Orchid potting medium works well. Fill their stiff leaves with distilled water to further mimic nature's way.",
          description:
            "For a long time, bromeliads (Bromeliaceae) were considered advance houseplants, more fit for a greenhouse than a typical home. However, homegrown bromeliads have finally attracted the attention they deserve and can easily adapt to average home conditions. They are available in an astonishing array of colors and textures and mature in about one to three years. Even discounting their showy flower displays, bromeliads are beautiful foliage plants with strappy leaves in red, green, purple, orange, yellow colors and with bands, stripes, spots, and other features. <br></br>As a general rule of thumb, bromeliads will thrive in the same conditions as epiphytic orchids. However, they are considerably more tolerant than orchids of fluctuations in temperature, drought, and careless feeding.",
          shortLight: "Filtered or indirect",
          light:
            "Different genera of bromeliads are tolerant of different levels of light. Some can withstand full tropical sun, while others will quickly scorch. In general, the plants prefer bright windowsills but not direct sunlight. A south, west, or east window is often perfect. Plants that are yellowish might be receiving too much light, while plants that are dark green or elongated might be receiving too little light. Increasing light exposure can help the plant bloom, if the conditions are appropriate.",
          shortWater: "Medium",
          water:
            "Bromeliads are very tolerant of drought conditions. In a typical house, it's usually not necessary to keep the central cup of the plant filled with water. But this is an option if the light levels and temperature are high. If you do centrally water your bromeliad, make sure to flush the central cup every so often to remove any built-up salts. But in general, it's enough to water these plants through the soil weekly during the growing season and reduce watering during the winter rest period. Never let the plant rest in standing water.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lucky Bamboo",
          scientificName: "Dracaena sanderiana",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61ElCkgu10L._AC_SL1000_.jpg",
          shortDescription:
            "The ability to grow in water and the pliable stems that you can weave into grids or braids make Dracaena sanderiana a handsome statement in any small space. Lucky bamboo ceases to grow when you clip the top, making it easy to manage, unlike the bamboo that grows outdoors. Grow in low light or artificial light.",
          description:
            "You don't have to look very hard to find lucky bamboo nowadays. These plants pop up in offices, on desks, in businesses, and in homes pretty much everywhere. An important part of feng shui, lucky bamboo plants are said to bring good luck and fortune, especially if the plants were given as gifts. It also helps that they have a well-earned reputation as nearly indestructible; these tough stalks can survive in vases of pure water or in containers of soil, and in a wide variety of light conditions. Even a poorly kept lucky bamboo plant will live for a long time before it finally succumbs. <br></br>The vast majority of lucky bamboo plants are shipped in from Taiwan or China, where professional growers braid, twist, and curl their stalks into a multitude of shapes. The more intricate lucky bamboo plants can cost hundreds of dollars and feature 20 or more individual stalks. More commonly, though, lucky bamboo plants in simple pots can be had for as little as $10 for a three-stalk bundle.",
          shortLight: "Low",
          light:
            "bright indirect light. In it’s native environment Dracaena sanderiana receive an ample amount of light. However, the surrounding plants shade the Dracaena sanderiana from direct exposure to the sun. Too much direct sunlight can cause the leaves to burn. It is important that the Dracaena sanderiana receive adequate light; lack of light will cause week growth, stretching and poor color. Low light conditions will, also, cause stunted growth and inhibit new leaf growth. The light requirements for Dracaena sanderiana are the same whether grown in water or in soil.",
          shortWater: "High",
          water:
            "Water level should be at least 5cm (2 in). Make sure the roots are covered with water; add water to keep the water level constant. Every couple of weeks change the water completely. Refill the container with clean water. Dracaena sanderiana is sensitive to the salts and chemicals in tap water; use distilled water or rainwater if possible. If you must use tap water let it set in an open container over night; this will let the chlorine evaporate. However, there is no way to remove the fluoride from the tap water. Fluoride can cause leaf tips to turn brown. Low humidity can cause leaf tips to turn brown as well. Mist the leaves of the Dracaena sanderiana every couple of days if lack of humidity is a problem.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ivy",
          scientificName: "Hedera helix",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/4/h/4hewoha24.jpg",
          shortDescription:
            "A container of trailing Hedera helix is an instant upgrade for your kitchen, bathroom, or anywhere you have bright light and some humidity. Cooler rooms that remain at or below 70 degrees Fahrenheit will also extend the life of these Northern European natives.",
          description:
            "English ivy (Hedera helix) is a very vigorous and aggressive woody evergreen vine. Outdoors, English ivy is used as an ornamental ground-cover or elegant green covering for stone or brick walls. This is the plant that inspired the Ivy League colleges nickname. English ivy is also a very popular indoor houseplant or for use in outdoor hanging baskets. A European native, English ivy was brought to the New World by colonial settlers but soon naturalized into the wild. <br></br>English ivy is frequently used as a dense ground-cover in places where turfgrass and other ground-covers do not readily grow. It is also used as an ornamental climbing cover for fences, stone walls, and brick facades. English ivy can reach 100 feet in length as a ground-cover or upward as a climbing vine. As a ground-cover, the plants grow about 6 to 8 inches tall.",
          shortLight: "Medium to high",
          light:
            "In both winter and summer, ivy requires bright light, but avoid direct sunlight in summer. In winter, plants can accept a bit of direct sunlight, such as when placed in south-facing windows.",
          shortWater: "Medium",
          water:
            "Potted ivy prefers moist, humid conditions, but not soaking. Don’t let the soil dry out and keep it evenly moist.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dumb Cane Plant",
          scientificName: "Dieffenbachia",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/d/i/dieffenbachia_grote_kamerplant.jpg",
          shortDescription:
            "The common name 'dumb cane' doesn't do much to describe the elegant Dieffenbachia, which exhibits large speckled and splotched leaves in humid areas with bright light. Provide moderate moisture, and keep the toxic leaves away from kids and pets.",
          description:
            "The Dieffenbachia genus includes a large group of beautiful tropical perennial species, but the ones most commonly grown in cultivation are D. sequine, D. oerstedii, D. maculata, and D. amoena. Several Dieffenbachia species have recently been reassigned with different names, so you may run into confusion on the precise naming of different varieties. Collectively, they are generally known as dieffenbachias or dumb canes. <br></br>Dieffenbachias​ feature pointed, ovate leaves in a variety of combinations of green, cream, and white colors. A large, well-grown dieffenbachia can reach 10 feet, with leaves 20 inches long. However, the plants will rarely reach this size in typical indoor conditions.",
          shortLight: "Medium to bright",
          light:
            "Dieffenbachia plants appreciate bright light during the winter months. During the growing season, the plant prefers dappled shade or indirect light.",
          shortWater: "Medium",
          water:
            "During the growing season, Dieffenbachias like regular moisture and do not want to dry out. A large dieffenbachia might need to be watered twice a week. In the winter, cut back on the water.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Umbrella Plant",
          scientificName: "Schefflera arboricola",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/s/c/schefflera_arboricola_kamerplant.jpg",
          shortDescription:
            "If you have a yen for tropical plants, check out the Schefflera arboricola, which can grow up to ten feet tall in the jungles of Taiwan. You can check this growth in containers, especially with slow growing variegated cultivars like 'Gold Capella' or 'Sunburst.'",
          description:
            "Schefflera species are wonderful tropical plants. The larger schefflera (sometimes called the umbrella plant) features long, shiny, oval green leaves that droop gracefully from a central stalk, resembling an umbrella. A mature schefflera might have 12 to 16 leaflets from a single stalk, while an immature schefflera is more likely to have four to six. Schefflera arboricola (sometimes called dwarf schefflera) feature smaller, glossy leaves, sometimes with creamy variegation. <br></br>Schefflera plants are hardy only to zone 10. In cooler climates, they're grown indoors for most of the years and can be taken outdoors for the warmer months. Indoors, they will thrive alongside other tropical plants. However, this plant is unlikely to bloom inside. They typically have to be grown outdoor to display their show of long red, white, or pink tentacle-like flowers.",
          shortLight: "High",
          light:
            "Schefflera prefer bright, indirect light. In the summer, move potted plants outside where they will receive bright light but not direct sun, such as under a patio cover. A schefflera plant that gets leggy or floppy might not be receiving enough light. Never place a schefflera houseplant in direct, full sun because intense sun can burn the leaves.",
          shortWater: "Medium",
          water:
            "Water weekly during the growing season and spray the leaves frequently. You can wait until the soil in the pot dries out and then thoroughly soak the soil when you water. Cut back on water during winter. Often, people will overwater their schefflera plant and doing so will eventually kill it. Yellow and dropped leaves is a sign that you might be watering too much.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Croton",
          scientificName: "Codiaeum",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/c/r/croton_mammi_kleurige_kamerplant.jpg",
          shortDescription:
            "Codiaeum plants offer that colorful pow that neutral gray or taupe rooms need. Bright light is essential for good leaf coloration and plant health. Leaf form varies from paddle-like to grassy and narrow, but all have stripes or splotches of yellow, red, orange, or pink.",
          description:
            "The croton (Codiaeum variegatum) appears to have it all: colorful foliage, nearly limitless leaf forms, and even a cultish following. But these plants have a drawback: They're difficult to please indoors. In their native habitats, crotons like humid, warm conditions with dappled light and plentiful water. The primary challenge when growing them indoors is maintaining the ideal temperature—when it is too cold, they start losing leaves. However, crotons are well worth the effort because well-grown croton is an explosion of color. <br></br>Crotons are evergreen shrubs that are hardy only to USDA plant hardiness zones 11 and 12, where they are often grown outdoors as ornamental shrubs. Outdoor plants can reach 10 feet in height, but pot-grown specimens tend to be much smaller, making them suitable for permanent houseplants or indoor/outdoor container plants. Many crotons can be brought outdoors when temperatures stay above 50 degrees Fahrenheit, provided they are properly acclimated to the light and temperature conditions.",
          shortLight: "High",
          light:
            "Crotons need bright, indirect light. They do not like unfiltered, direct sunlight, but thrive in dappled sunlight. Vibrant colors depend on bright light.",
          shortWater: "Medium",
          water:
            "Keep them evenly moist in the summer and reduce watering in the winter to biweekly. Mist frequently during the growth period.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Philodendron",
          scientificName: "Philodendron scandens",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/g/r/grote_philodendron_hangplant_1.jpg  ",
          shortDescription:
            "Whether trailing from a basket or growing up a trellis, Philodendron scandens is the classic low-care houseplant that thrives in all light conditions. You might see the heart-shaped leaves growing to giant proportions outdoors in frost-free zones, but it's just as happy in your bedroom.",
          description:
            "The Philodendron genus contains some of the most beautiful foliage plants in the plant kingdom. Their glossy leaves add a touch of indoor jungle to your home, reminiscent of the tropical areas of the Americas to which they are native. For indoor use, there are two basic types of philodendrons: the climbing varieties and the self-heading (non-climbing) types. <br></br>The climbing varieties are often used in hanging baskets or trained along a trellis. The non-climbing ones provide excellent upright foliage plants in pots on the floor or table. Often, they are valued for their ability to clean the air in your home. In the wild, some of these plants can grow into massive, tree-swallowing specimens, but indoors they aren't nearly so vigorous. Newer hybrids have been bred that mix the vigor and ease of the hanging varieties with the convenience of the self-heading varieties.",
          shortLight: "Low to high",
          light:
            "Provide dappled, bright light, mimicking what is found under a tropical canopy. Philodendrons can be acclimated to nearly direct sunlight in the right conditions, but they thrive in light shade. If you notice many of the leaves turning yellow at the same time, it can indicate you are giving the plant too much direct light. If you notice it is getting leggy, it may need more light.",
          shortWater: "Medium",
          water:
            "Keep the growing medium moist at all times. Push aerial roots into the soil on climbing varieties. Keeping the plants moist during winter when indoor air can get very dry can be a challenge. At the same time, avoid overwatering or root rot may develop. If the leaves are drooping, it can indicate either too much water or not enough.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amazon Elephant's Ear",
          scientificName: "Alocasia x amazonica",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/a/l/alocasia_polly_skeletplant_kamerplant.jpg",
          shortDescription:
            "Amazon elephant's ear is common but distinctive and almost regal. Large, arrow-shaped green leaves are ribbed with silver. They are much easier to grow inside than most Alocasia species and provide seasonal displays of wonderful foliage. They prefer rich, fast-draining potting soil and do require regular feeding. This plant originated in southeast Asia.",
          description:
            "Hailing from Southeast Asia, this popular elephant's ear (Alocasia x amazonica, part of the Alocasia genus) is sometimes called African mask. It's a hybrid that makes a striking and beautiful houseplant and is typically sold as such. It is defined by its deep green leaves accentuated by whitish or light green veins. The leaves are roughly serrated, and in some cases, the leaf color appears as an almost purple-green. Leaf shapes range from wide hearts to slim arrowheads, with textures from slick and glossy to thick and waxy. It is a fleshy evergreen that grows from underground corms. These plants rarely bloom, however, and are grown primarily for their foliage. ",
          shortLight: "Shade or filtered sun",
          light:
            "These plants require bright, indirect light. They can survive in 80-percent shade but prefer about 60-percent shade. Do not expose them to strong, direct sunlight.",
          shortWater: "Keep moist but avoid wet roots",
          water:
            "Keep the soil moist but remember that these plants do not like wet feet. If possible, water in the morning (so they are dry overnight) and from below, at the root zone, to keep the leaves from getting too wet. This plant needs a rest period in winter when you should allow the soil to become almost dry between waterings, and stop fertilizing. If it dries completely it may go dormant, in which case you may be able to dig up the corm and save it until you can keep it in warmer temperatures. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kentia Palm",
          scientificName: "Howea Forsteriana",
          imageUrl:
            "https://www.123planten.nl/media/catalog/product/cache/e332fd122d4e60ebabc904769afed1da/k/e/kentia_palm_grote_kamerplant_1.jpg",
          shortDescription:
            "Palm trees are the enduring symbol of everything tropical, and many palms are easy to grow indoors. You can enjoy them in an entryway or in the corner of a sunny room and be transported back to your tropical vacation. You are in good company, too—Queen Victoria made sure that Kentia palms were used throughout her many residences. Plant your palm in fast-draining potting mix, fertilize monthly, and keep your plant warm.",
          description:
            "The kentia palm (Howeia) is one of the world's most popular indoor palms. In fact, it's sometimes called the sentry palm, presumably because of the entryways it guards. The kentia palm is perhaps not the most beautiful or graceful of all palm trees, but it has everything you could ask for in an indoor palm. It's shade tolerant, cold tolerant, and doesn't grow too alarmingly large. Under the right conditions, a kentia palm will eventually grow into a magnificent specimen plant, up to 10 feet tall. The kentia palm is usually sold with two to five palms planted together, appearing to have multiple stems topped with graceful, arching foliage.",
          shortLight: "Filtered bright sun",
          light:
            "Kentia palms prefer indirect sunlight. Do not expose the plant to direct sun unless it is acclimated as a seedling to direct sun. While they can grow in low light conditions, you will get more foliage if they get more light.",
          shortWater:
            "Water weekly in summer letting the soil dry between waterings",
          water:
            "Water your kentia palm weekly in summer, letting the soil dry between waterings. Do not allow it to sit in water. Perfect drainage is essential. It is good to mist your palm. If the air is too dry or it isn't watered enough you will see brown leaves. If you are watering it too much, you may see yellow tips on the leaves, which can progress to yellow speckling.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chenille Plant",
          scientificName: "Acalypha hispida",
          imageUrl: "",
          shortDescription:
            "It's hard to resist touching the fuzzy catkins of the Acalypha hispida. Chenille plants are fun specimens for the annual container garden, but they also take well to indoor culture, provided you have bright south or east-facing window for them to gain the energy to produce their year-round blooms. Chenille plants also like lots of water and nutrients, and you can kill two birds with one stone by irrigating them with compost tea. ",
          description:
            "The chenlille plant (Acalypha hispida), a member of the spurge family, is named for the French word for caterpillar. Its crimson accents can provide textural interest to a sunny flower garden or a homegrown bouquet. The genus acalypha is one of the members of the Euphorbiaceae family, which is a treasure trove of ornamental plants for the flower gardener; think poinsettia, croton, and castor bean, among others. <br></br>The foliage of the chenille plant is unremarkable; the real stars are its fuzzy red flowers. The anatomy of the flower itself is just a row of pistils, but the fuzzy catkins formed from the flowers provide visual and tactile enjoyment for all ages. The catkins can look like plump fuzz balls, eventually turning downright pendulous, with lengths of 18 inches not unheard of. Outside of tropical zones, chenille plants are commonly grown in containers that can be brought indoors for winter. They can also be grown year-round as houseplants. They are perennial in zones 9 and 10, where they are best planted in spring.",
          shortLight: "Full sun outdoors, indoors high levels of light",
          light:
            "Chenille plants grow best in full sun to partial shade. Outdoors, plant chenille in full sun for vigorous growth. As a houseplant, place it in a south-facing window where it will get a high level of light.",
          shortWater: "Maintain moderate moisture",
          water:
            "Keep your plants consistently moist as they establish. Maintain moderate moisture throughout the season.",
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
