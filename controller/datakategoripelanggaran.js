const db = require("../config/db");

const dataKategori = () => {
  const sql = `SELECT * FROM kategori_pelanggaran`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const jenispelanggaran = (req) => {
  const data = req.body;
  console.log(data.nama_kategori);
  const sql = `SELECT * FROM kategori_pelanggaran JOIN subkategori_pelanggaran ON kategori_pelanggaran.id_kategori = subkategori_pelanggaran.id_kategori WHERE nama_kategori = '${data.nama_kategori}'`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { dataKategori, jenispelanggaran };
