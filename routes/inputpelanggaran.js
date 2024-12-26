const express = require("express");
const router = express.Router();
const { detailSiswa } = require("../controller/datasiswa");
const { allJenispelanggaran } = require("../controller/datakategoripelanggaran");
const { inputPelanggaran } = require("../controller/pelanggaran");
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailSiswa(id);
    const jenispelanggaran = await allJenispelanggaran();
    console.log(data);
    console.log(jenispelanggaran);
    res.render("input-pelanggaran", { title: "input-pelanggaran", data: data[0], jenispelanggaran: jenispelanggaran });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const session = req.session.username;
    const data = req.body;
    const allData = { data, session };
    const result = await inputPelanggaran(allData);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
