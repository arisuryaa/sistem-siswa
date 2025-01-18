const express = require("express");
const router = express.Router();
const { detailSiswa, datajurusan } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");
const { inputPelanggaran } = require("../controller/pelanggaran");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailSiswa(id);
    const jenispelanggaran = await allJenispelanggaran();
    res.render("input-pelanggaran", { title: "input-pelanggaran", data: data[0], jenispelanggaran: jenispelanggaran });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

router.post("/", async (req, res) => {
  try {
    const session = req.session.username;
    const data = req.body;
    const allData = { data, session };
    const datajurusan2 = await datajurusan();
    const result = await inputPelanggaran(allData);

    res.render("pelanggaran", { title: "pelanggaran", data: datajurusan2, result: result });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
