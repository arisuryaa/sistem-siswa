const express = require("express");
const router = express.Router();
const { detailprestasi } = require("../controller/prestasi");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await detailprestasi(id);
    res.render("detailprestasi", { title: "detail-prestasi-siswa", data: data });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
