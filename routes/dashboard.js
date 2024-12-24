const express = require("express");
const router = express.Router();
const { login, check } = require("../controller/authLogin");

const { siswaByPoint } = require("../controller/datasiswa");

router.get("/", async (req, res) => {
  try {
    const data = await siswaByPoint();
    res.render("dashboard", { title: "dashboard", username: req.session.username, data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
