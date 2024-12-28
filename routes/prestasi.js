const express = require("express");
const router = express.Router();
const { datajurusan, dataSiswa, siswaByNis } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");

router.get("/", async (req, res) => {
  try {
    const data = await datajurusan();
    res.render("prestasi", { title: "prestasi", data: data, result: false });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const kelas = req.body;
    const data = await datajurusan();
    const alldataSiswa = await dataSiswa(req);
    res.render("prestasi", { title: "pelanggaran", data: data, datasiswa: alldataSiswa, kelas: kelas, result: false });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

router.post("/nis", async (req, res) => {
  try {
    const nis = req.body.NIS;
    const data = await siswaByNis(nis);
    const jenispelanggaran = await allJenispelanggaran();
    res.render("input-prestasi", { title: "input-pelanggaran", data: data[0], jenispelanggaran: jenispelanggaran });
    console.log(data[0]);
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

module.exports = router;
