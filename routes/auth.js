const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("layout/layoutBody", {
    title: "login",
  });
});

module.exports = router;
