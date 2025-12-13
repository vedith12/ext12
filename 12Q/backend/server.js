const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "secretkey";

app.post("/login", (req, res) => {
  const user = { id: 1, name: "User" };
  const token = jwt.sign(user, SECRET);
  res.json({ token });
});

app.listen(3000, () => console.log("Server started"));
