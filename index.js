// set up express gan
const express = require("express");
const app = express();
const port = 3000;

// third party modules
const session = require("express-session");

// database
const db = require("./config/db");

// tampilan
const auth = require("./routes/auth");

// middleware
app.use(
  session({
    secret: "rahasia banget anjir",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// routing
app.use("/", auth);

app.listen(port, () => {
  console.log(`server running on http://localhost:3000`);
});
