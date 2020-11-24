const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const PlantSuggestions = require("../models/").plantSuggestions;
const Plant = require("../models/").plant;
const User = require("../models/").user;

const router = new Router();

router.get("/suggestions", async (req, res, next) => {
  try {
    const plants = await PlantSuggestions.findAll();

    if (!plants) {
      return res.status(404).json({ message: "Sorry. No suggestions found." });
    }
    res.json(plants);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const plants = await Plant.findAll();

    if (!plants) {
      return res.status(404).json({ message: "Sorry. No plants found." });
    }

    res.json(plants);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(404)
      .json({ message: "Please provide a valid plant ID number." });
  }

  try {
    const plant = await Plant.findByPk(id);

    if (!plant) {
      return res
        .status(404)
        .json({ message: "Plant with that ID doesn't exist." });
    }
    res.json(plant);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.get("/user/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(404)
      .json({ message: "Please provide a valid user ID number." });
  }

  try {
    const plants = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Plant }],
    });

    if (!plants) {
      return res
        .status(404)
        .json({ message: "User with that ID doesn't exist." });
    }
    res.json(plants);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.get("/following", authMiddleware, async (req, res, next) => {
  const { id } = req.user;

  if (!id) {
    return res
      .status(404)
      .json({ message: "No logged in user found or invalid ID." });
  }

  try {
    const plants = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
          as: "following",
          include: [Plant],
        },
      ],
    });

    if (!plants) {
      return res
        .status(404)
        .json({ message: "Sorry. No users and plants found." });
    }

    res.json(plants);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const {
    name,
    scientificName,
    description,
    imageUrl,
    waterPeriodDays,
    fertilisePeriodDays,
    waterAlert,
    fertiliseAlert,
  } = req.body;
  const userId = req.user.id;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for the plant." });
  }

  try {
    const newPlant = await Plant.create({
      name,
      scientificName,
      description,
      imageUrl,
      waterPeriodDays,
      fertilisePeriodDays,
      waterAlert,
      fertiliseAlert,
      userId,
    });

    if (!newPlant) {
      return res
        .status(404)
        .json({ message: "Something went wrong.. Please try again." });
    }

    res.json(newPlant);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    scientificName,
    description,
    imageUrl,
    waterPeriodDays,
    fertilisePeriodDays,
    waterAlert,
    fertiliseAlert,
  } = req.body;

  try {
    const plantToUpdate = await Plant.findByPk(id);

    if (req.user.id !== plantToUpdate.userId) {
      return res.status(401).json({ message: "You're not authorized." });
    }

    if (!plantToUpdate) {
      return res.status(404).json({ message: "Plant not found." });
    }

    const updatedPlant = await plantToUpdate.update({
      name,
      scientificName,
      description,
      imageUrl,
      waterPeriodDays,
      fertilisePeriodDays,
      waterAlert,
      fertiliseAlert,
    });

    res.json(updatedPlant);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

module.exports = router;