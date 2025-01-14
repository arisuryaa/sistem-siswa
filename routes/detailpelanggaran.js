const express = require("express");
const router = express.Router();
const { detailpelanggaran } = require("../controller/pelanggaran");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailpelanggaran(id);
    console.log(data);
    console.log(data.length);
    res.render("detailpelanggaran", { title: "detail-pelanggaran-siswa", data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
