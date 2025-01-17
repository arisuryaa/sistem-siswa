const db = require("../config/db");

const pointKelas = () => {
  const sql = `SELECT 
    CONCAT(kelas.kelas, ' ', jurusan.nama_jurusan, ' ', subkelas.subkelas) as kelas,
    SUM(siswa.point) as total_point,
    COUNT(siswa.id_siswa) as jumlah_siswa,
    COUNT(CASE WHEN siswa.point < 100 THEN 1 END) as siswa_point_dibawah_100
FROM siswa
JOIN kelas ON siswa.id_kelas = kelas.id_kelas
JOIN jurusan ON siswa.id_jurusan = jurusan.id_jurusan
JOIN subkelas ON siswa.id_subkelas = subkelas.id_subkelas
GROUP BY siswa.id_kelas, siswa.id_jurusan, siswa.id_subkelas, kelas.kelas, jurusan.nama_jurusan, subkelas.subkelas
ORDER BY siswa_point_dibawah_100 DESC
LIMIT 5;`;

  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        let ress = [];
        result.forEach((e) => {
          ress.push(e.kelas);
        });
        resolve(result);
      }
    });
  });
};

module.exports = { pointKelas };
