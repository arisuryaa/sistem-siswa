const express = require("express");
const router = express.Router();
const authLogin = require("../controller/authLogin");

router.get("/", (req, res) => {
  res.render("layout/layoutBody", {
    title: "login",
  });
});

router.post("/", authLogin);

module.exports = router;
