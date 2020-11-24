const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: user.id, isAdmin: user.isAdmin });

    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .send({ message: "Please provide an email, password and a name" });
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id, isAdmin: user.isAdmin });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/users", authMiddleware, async (req, res, next) => {
  const userIsAdmin = req.user.isAdmin;

  if (!userIsAdmin) {
    return res.status(401).json({ message: "You are not authorized." });
  }

  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });

    if (!users) {
      return res.status(404).json({ message: "No users found." });
    }
    res.json(users);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.put("/users", authMiddleware, async (req, res, next) => {
  const { userId } = req.body;
  const userIsAdmin = req.user.isAdmin;
  // console.log("WHAT IS ID???", userId);

  if (!userIsAdmin) {
    return res.status(401).json({ message: "You are not authorized." });
  }

  try {
    const blockedUser = await User.findByPk(userId);
    if (!blockedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    const toggleBlocked = blockedUser.accountBlocked ? false : true;

    const changeUser = await blockedUser.update({
      accountBlocked: toggleBlocked,
    });

    res.json(changeUser);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

// The /me endpoint can be used to:
// - get the user info using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
