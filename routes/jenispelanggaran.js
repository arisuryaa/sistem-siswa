const express = require("express");
const router = express.Router();

const { dataKategori, jenispelanggaran } = require("../controller/datakategoripelanggaran");

router.get("/", async (req, res) => {
  try {
    const data = await dataKategori();
    res.render("jenispelanggaran", { title: "jenis-pelanggaran", data: data });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await dataKategori();
    const datajenispelanggaran = await jenispelanggaran(req);
    console.log(datajenispelanggaran);
    res.render("jenispelanggaran", { title: "jenis-pelanggaran", data: data, datajenis: datajenispelanggaran });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
