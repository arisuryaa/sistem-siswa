const express = require("express");
const router = express.Router();
const { detailSiswa } = require("../controller/datasiswa");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await detailSiswa(id);
    res.render("detailsiswa", { title: "detail-siswa", data: dataDetail[0], result: false });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

module.exports = router;
