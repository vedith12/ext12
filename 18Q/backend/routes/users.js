const router = require("express").Router();

const users = ["sai", "jeevan"];   // stored in module

// GET /users → all users
router.get("/", (req, res) => {
  res.send(users.join(", "));
});

// GET /users/:username → single user
router.get("/:username", (req, res) => {
  res.send(req.params.username);
});

module.exports = router;
