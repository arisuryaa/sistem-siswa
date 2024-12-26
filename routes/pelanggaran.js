const express = require("express");
const router = express.Router();
const { datajurusan, dataSiswa, siswaByNis } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");

router.get("/", async (req, res) => {
  try {
    const data = await datajurusan();
    res.render("pelanggaran", { title: "pelanggaran", data: data, result: false });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const kelas = req.body;
    const data = await datajurusan();
    const alldataSiswa = await dataSiswa(req);
    res.render("pelanggaran", { title: "pelanggaran", data: data, datasiswa: alldataSiswa, kelas: kelas });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

router.post("/nis", async (req, res) => {
  try {
    const nis = req.body.NIS;
    const data = await siswaByNis(nis);
    const jenispelanggaran = await allJenispelanggaran();
    res.render("input-pelanggaran", { title: "input-pelanggaran", data: data[0], jenispelanggaran: jenispelanggaran });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

module.exports = router;
