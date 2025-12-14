const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
