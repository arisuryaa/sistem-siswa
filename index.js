// set up express gan
const express = require("express");
const app = express();
const port = 3000;

// database
const db = require("./config/db");

// tampilan
const auth = require("./routes/auth");

// middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

// routing
app.get("/", auth);

app.listen(port, () => {
  console.log(`server running on http://localhost:3000`);
});
