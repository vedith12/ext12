const router = require("express").Router();

const users = ["sai", "jeevan"];

// GET /users → all users
router.get("/", (req, res) => {
  res.send(users.join(", "));
});

// GET /users/:username → store user
router.get("/:username", (req, res) => {
  users.push(req.params.username);
  res.send("Added: " + req.params.username);
});

module.exports = router;
