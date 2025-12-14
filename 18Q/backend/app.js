const express = require("express");
const app = express();

app.use(require("cors")());   // ⭐ needed for React

app.use("/users", require("./routes/users"));

app.listen(3000, () => console.log("Server running 3000"));
