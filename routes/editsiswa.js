const express = require("express");
const router = express.Router();
const { detailSiswa, editSiswa } = require("../controller/datasiswa");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await detailSiswa(id);
  res.render("editSiswa", { title: "edit-siswa", data: data[0] });
});

router.post("/", async (req, res) => {
  const data = req.body;
  const id = data.id_siswa;
  const result = await editSiswa(data);
  const dataDetail = await detailSiswa(id);
  res.render("detailsiswa", { title: "detail-siswa", data: dataDetail[0], result: true });
});

module.exports = router;
