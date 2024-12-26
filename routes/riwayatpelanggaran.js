const express = require("express");
const router = express.Router();
const { riwayatPelanggaran } = require("../controller/pelanggaran");

router.get("/", async (req, res) => {
  try {
    const data = await riwayatPelanggaran();
    res.render("riwayat-pelanggaran", { title: "riwayat-pelanggaran", data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
