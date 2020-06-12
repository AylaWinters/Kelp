const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Aquarium = require("../../models/Aquarium");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   POST api/aquariums
// @desc    create a post
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newAquarium = new Aquarium({
        user: req.user.id,
        description: req.body.description,
        location: req.body.location,
        name: req.body.name,
        photo: req.body.photo,
        website: req.body.website,
        phone: req.body.phone,
      });

      const aquarium = await newAquarium.save();

      res.json(aquarium);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get("/", async (req, res) => {
  try {
    const aquarium = await Aquarium.find().sort({ date: -1 });
    res.json(aquarium);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Private
router.get("/:id", async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.id);

    if (!aquarium) {
      return res.status(404).json({ msg: "Aquarium not found" });
    }
    res.json(aquarium);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Aquarium not found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Delete api/post/:id
// @desc    Delete post
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.id);

    // check for aquarium
    if (!aquarium) {
      return res.status(404).json({ msg: "aquarium not found" });
    }
    // check user
    if (aquarium.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await aquarium.remove();

    res.json({ msg: "Aquarium removed" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Aquarium not found" });
    }
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/like/:id
// @desc    Like an Aquarium
// @access  Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.id);

    // check if aquarium has already been liked
    if (
      aquarium.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Aquarium already liked" });
    }

    aquarium.likes.unshift({ user: req.user.id });

    await aquarium.save();

    res.json(aquarium.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/unlike/:id
// @desc    Like a post
// @access  Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.id);

    // check if aquarium has already been liked
    if (
      aquarium.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Aquaruim has not been liked" });
    }

    //get remove index
    const removeIndex = aquarium.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    aquarium.likes.splice(removeIndex, 1);

    await aquarium.save();

    res.json(aquarium.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/comment/:id
// @desc    comment on a post
// @access  Private
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const aquarium = await Aquarium.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        rating: req.body.rating,
        title: req.body.title,
        visit: req.body.visit,
      };

      aquarium.comments.unshift(newComment);

      await aquarium.save();

      res.json(aquarium.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    delete a comment
// @access  Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.id);

    // Pull out comment
    const comment = aquarium.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    //get remove index
    const removeIndex = aquarium.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    aquarium.comments.splice(removeIndex, 1);

    await aquarium.save();

    res.json(aquarium.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/aquarium/comments/like/:id
// @desc    Like an Aquarium
// @access  Private
router.put("/:aquariumId/comments/:id/likes", auth, async (req, res) => {
  try {
    console.log("comment id", req.params);
    const aquarium = await Aquarium.findById(req.params.aquariumId);
    const comment = aquarium.comments.find((el) => el["_id"] == req.params.id);
    console.log("comment", comment);
    // check if aquarium has already been liked
    if (
      comment.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Comment already liked" });
    }

    comment.likes.unshift({ user: req.user.id });

    await aquarium.save();

    res.json(comment.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/comments/unlike/:id
// @desc    Like a post
// @access  Private
router.put("/:aquariumId/comments/:id/unlike", auth, async (req, res) => {
  try {
    const aquarium = await Aquarium.findById(req.params.aquariumId);
    const comment = aquarium.comments.find((el) => el._id == req.params.id);
    // check if aquarium has already been liked
    if (
      comment.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Comment has not been liked" });
    }

    //get remove index
    const removeIndex = comment.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    comment.likes.splice(removeIndex, 1);

    await aquarium.save();

    res.json(comment.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
