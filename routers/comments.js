const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Plant = require("../models/").plant;
const User = require("../models/").user;
const Comment = require("../models/").comment;

const router = new Router();

router.get("/:plantId", async (req, res, next) => {
  const { plantId } = req.params;

  if (!plantId) {
    return res
      .status(404)
      .json({ message: "Please provide a valid plant ID number." });
  }

  try {
    const comments = await Comment.findAll({ where: { plantId } });

    if (!comments) {
      return res.status(404).json({ message: "Sorry. No comments found." });
    }

    res.json(comments);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

// const plants = await User.findByPk(id, {
//   attributes: { exclude: ["password"] },
//   include: [{ model: Plant }],
// });

router.post("/:plantId", authMiddleware, async (req, res, next) => {
  const { comment } = req.body;
  const { plantId } = req.params;
  const userId = req.user.id;

  if (!comment | !plantId | !userId) {
    return res.status(400).json({
      message: "Please provide a comment, valid plant ID and user ID.",
    });
  }

  try {
    const newComment = await Comment.create({
      comment,
      userId,
      plantId,
    });

    if (!newComment) {
      return res
        .status(404)
        .json({ message: "Something went wrong.. Please try again." });
    }

    res.json(newComment);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const commentToUpdate = await Comment.findByPk(id);

    if (req.user.id !== commentToUpdate.userId) {
      return res
        .status(401)
        .json({ message: "You're not authorized to edit this comment." });
    }

    if (!commentToUpdate) {
      return res.status(404).json({ message: "Comment not found." });
    }
    const updatedComment = await commentToUpdate.update({
      comment,
    });

    res.json(updatedComment);
  } catch (e) {
    console.log("ERROR:", e);
    next(e);
  }
});

module.exports = router;
