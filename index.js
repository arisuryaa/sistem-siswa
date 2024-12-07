// set up express gan
const express = require("express");
const app = express();
const port = 3200;

//  modules
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const { check, alreadyLogin } = require("./controller/authLogin");

// express layout ejs
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layout/main-layout");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// routes
const auth = require("./routes/auth");
const dashboard = require("./routes/dashboard");

// middleware
app.use(
  session({
    secret: "rahasia banget anjir",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/", alreadyLogin, auth);
app.use("/dashboard", check, dashboard);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
