const express = require("express");
const router = express.Router();
const { login, check } = require("../controller/authLogin");

router.get("/", (req, res) => {
  res.render("login", { title: "login", error: false, layout: "layout/admin-layout" });
});

router.post("/", login);

module.exports = router;
