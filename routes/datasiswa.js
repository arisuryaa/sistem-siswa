const express = require("express");
const router = express.Router();

const { datajurusan, dataSiswa } = require("../controller/datasiswa");

router.get("/", async (req, res) => {
  try {
    const data = await datajurusan();
    res.render("datasiswa", { title: "data-siswa", data: data });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

router.post("/", async (req, res) => {
  try {
    const kelas = req.body;
    const data = await datajurusan();
    const alldataSiswa = await dataSiswa(req);
    res.render("datasiswa", { title: "data-siswa", data: data, datasiswa: alldataSiswa, kelas: kelas });
  } catch (err) {
    res.status(500).send("Terjadi kesalahan: " + err);
  }
});

module.exports = router;
