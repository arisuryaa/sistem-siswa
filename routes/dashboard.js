const express = require("express");
const router = express.Router();

const { siswaByPoint } = require("../controller/datasiswa");

router.get("/", async (req, res) => {
  try {
    const data = await siswaByPoint();
    res.render("dashboard", { title: "dashboard", username: req.session.username, data: data, result: false });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
