const express = require("express");
const router = express.Router();
const { riwayatprestasi } = require("../controller/prestasi");

router.get("/", async (req, res) => {
  try {
    const data = await riwayatprestasi();
    res.render("riwayat-prestasi", { title: "riwayat-prestasi", data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
