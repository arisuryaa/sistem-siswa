const express = require("express");
const router = express.Router();

const { siswaByPoint } = require("../controller/datasiswa");
const { pointKelas } = require("../controller/dataKelas");

router.get("/", async (req, res) => {
  try {
    const data = await siswaByPoint();
    const point = await pointKelas();

    res.render("dashboard", { title: "dashboard", username: req.session.username, data: data, result: false, pointKelas: point });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
