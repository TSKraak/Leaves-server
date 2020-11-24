const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const FollowingUser = require("../models/").followingUser;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(404)
      .json({ message: "Please provide a valid ID number." });
  }

  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User with that ID doesn't exist." });
    }
    res.json(user);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, city, country } = req.body;

  if (req.user.id !== parseInt(id)) {
    return res.status(401).json({ message: "You're not authorized." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      city,
      country,
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.json(updatedUser);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.post("/follow", authMiddleware, async (req, res, next) => {
  const { followingUserId } = req.body;
  const userId = req.user.id;

  if (!followingUserId || !userId) {
    return res
      .status(404)
      .json({ message: "User with that ID doesn't exist." });
  }

  try {
    const newFollowId = await FollowingUser.create({ userId, followingUserId });

    if (!newFollowId) {
      return res.status(404).json({ message: "No user found." });
    }

    res.json(newFollowId);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

module.exports = router;
