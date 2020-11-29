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
      .json({ message: "Please provide a valid user ID number." });
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
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { firstName, lastName, email, password, city, country } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
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
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/password", authMiddleware, async (req, res, next) => {
  const { id } = req.user;
  const { password } = req.body;

  if (!id) {
    return res.status(401).json({ message: "User not found." });
  }

  try {
    const userToUpdate = await User.findByPk(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: "No user found." });
    }

    const updatedUser = await userToUpdate.update({
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete updatedUser.dataValues["password"]; // don't send back the password hash

    res.status(200).send({ message: "Password updated." });
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/follow", authMiddleware, async (req, res, next) => {
  const { followingUserId } = req.body;
  const userId = req.user.id;

  if (!followingUserId || !userId) {
    return res.status(404).json({
      message: "No valid ID provided for current user or user to follow.",
    });
  }

  try {
    const newFollowId = await FollowingUser.create({ userId, followingUserId });

    if (!newFollowId) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json(newFollowId);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.delete(
  "/follow/:followingUserId",
  authMiddleware,
  async (req, res, next) => {
    const { followingUserId } = req.params;
    const userId = req.user.id;

    console.log("followingUserId", followingUserId);
    console.log("userId", userId);

    if (!followingUserId || !userId) {
      return res.status(404).json({
        message: "No valid ID provided for current user or user to unfollow.",
      });
    }

    try {
      const unfollowUser = await FollowingUser.findOne({
        where: {
          userId,
          followingUserId,
        },
      });

      if (!unfollowUser) {
        return res
          .status(404)
          .json({ message: "You're not following this user." });
      }

      const removeFollow = await unfollowUser.destroy();

      res.json(removeFollow);
    } catch (e) {
      console.log("ERROR:", e);
      next(e);
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }
  }
);

module.exports = router;
