const express = require("express");
const router = express.Router();
const { detailSiswa, datajurusan } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");
const { inputPrestasi } = require("../controller/prestasi");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailSiswa(id);
    const jenispelanggaran = await allJenispelanggaran();
    res.render("input-prestasi", { title: "input-prestasi", data: data[0], jenispelanggaran: jenispelanggaran });
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
    const result = await inputPrestasi(allData);
    res.render("prestasi", { title: "prestasi", data: datajurusan2, result: result });
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

module.exports = router;
