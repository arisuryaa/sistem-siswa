const express = require("express");
const router = express.Router();
const { detailSiswa } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailSiswa(id);
    const jenispelanggaran = await allJenispelanggaran();
    res.render("input-pelanggaran", { title: "input-pelanggaran", data: data[0], jenispelanggaran: jenispelanggaran });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
