const express = require("express");
const router = express.Router();
const { login, check } = require("../controller/authLogin");

router.get("/", (req, res) => {
  res.render("dashboard", { title: "dashboard", username: req.session.username });
});

module.exports = router;
