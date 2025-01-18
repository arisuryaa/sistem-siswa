const express = require("express");
const router = express.Router();
const { login, check } = require("../controller/authLogin");
const { createFile } = require("../controller/filePDF");

router.get("/", (req, res) => {
  res.render("login", { title: "login", error: false, layout: "layout/admin-layout" });
  // createFile();
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
  console.log("Admin Logout Success");
});

router.post("/", login);

module.exports = router;
