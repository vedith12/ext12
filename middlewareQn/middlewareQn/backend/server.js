const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Middleware
app.use((req, res, next) => {
  console.log("Middleware executed for request:", req.url);
  next(); // pass control to next handler
});

// ✅ Route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

// ✅ Server
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
