const express = require("express");
const app = express();

const logger = require("./middleware/logger");


app.use(logger);
app.use(express.static("public"));// Frontend

app.get("/", (req, res) => {
  res.send("Home page");
});


app.listen(3000, () => {
  console.log("Server running om port 3000");
});
