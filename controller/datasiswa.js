const db = require("../config/db");

const datajurusan = async () => {
  const sql = `SELECT * FROM jurusan`;

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

const dataSiswa = (req) => {
  const data = req.body;
  const sql = `SELECT nama,nis,email,nama_wali,kontal_wali,kelas,nama_jurusan,subkelas,nomor_absen FROM siswa 
  JOIN kelas ON siswa.id_kelas = kelas.id_kelas
  JOIN jurusan ON siswa.id_jurusan = jurusan.id_jurusan
  JOIN subkelas ON siswa.id_subkelas = subkelas.id_subkelas 
  WHERE nama_jurusan = '${data.jurusan}'
  AND kelas = '${data.kelas}'
  AND subkelas= '${data.subkelas}'`;

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

module.exports = { datajurusan, dataSiswa };
