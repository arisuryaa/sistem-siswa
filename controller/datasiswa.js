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
  const sql = `SELECT id_siswa,nama,nis,email,nama_wali,kontak_wali,kelas,nama_jurusan,subkelas,nomor_absen FROM siswa 
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

const detailSiswa = (id) => {
  const sql = `SELECT * FROM siswa 
  JOIN kelas ON siswa.id_kelas = kelas.id_kelas 
  JOIN jurusan ON siswa.id_jurusan = jurusan.id_jurusan
  JOIN subkelas ON siswa.id_subkelas = subkelas.id_subkelas
  WHERE id_siswa = '${id}' `;

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

const siswaByPoint = () => {
  const sql = `SELECT  id_siswa,nama,nis,email,nama_wali,kontak_wali,kelas,nama_jurusan,subkelas,nomor_absen,point FROM siswa JOIN kelas ON siswa.id_kelas = kelas.id_kelas
  JOIN jurusan ON siswa.id_jurusan = jurusan.id_jurusan
  JOIN subkelas ON siswa.id_subkelas = subkelas.id_subkelas 
ORDER BY point ASC
LIMIT 5;
`;
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

const siswaByNis = (nis) => {
  const sql = `SELECT  * FROM siswa
  JOIN kelas ON siswa.id_kelas = kelas.id_kelas
  JOIN jurusan ON siswa.id_jurusan = jurusan.id_jurusan
  JOIN subkelas ON siswa.id_subkelas = subkelas.id_subkelas 
   WHERE nis = '${nis}' `;
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

const editSiswa = (data) => {
  console.log(data.id_siswa);
  const sql = `UPDATE siswa
SET 
    nama = '${data.nama}',
    nomor_absen = '${data.absen}',
    nis = '${data.nis}',
    email = '${data.email}',
    no_telp = '${data.no_telp}',
    nama_wali = '${data.nama_wali}',
    kontak_wali = '${data.kontak_wali}',
    point = '${data.point}',
    alamat = '${data.alamat}'
WHERE 
    id_siswa = '${data.id_siswa}';
`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("berhasil");
        resolve(result);
      }
    });
  });
};

module.exports = { datajurusan, dataSiswa, detailSiswa, siswaByPoint, siswaByNis, editSiswa };
