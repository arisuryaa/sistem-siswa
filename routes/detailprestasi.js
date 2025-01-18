const express = require("express");
const router = express.Router();
const { detailprestasi } = require("../controller/prestasi");
const { detailSiswa } = require("../controller/datasiswa");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailprestasi(id);
    const nama = await detailSiswa(id);
    res.render("detailprestasi", { title: "detail-prestasi-siswa", data: data, nama: nama });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
