const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "secretkey";

const users = [
  { id: 1, username: "admin", password: "1234" },
  { id: 2, username: "user", password: "password" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET
  );

  res.json({ token });
});

app.listen(3000, () => console.log("Server started on port 3000"));
