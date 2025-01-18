const db = require("../config/db");
const { createFile } = require("./filePDF");
const { detailSiswa } = require("./datasiswa");

const admin = (username) => {
  const sql = `SELECT * FROM admin WHERE username = '${username}' `;
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

const inputPelanggaran = async (alldata) => {
  const { data, session } = alldata;

  const siswa = await detailSiswa(data.id_siswa);
  const id_admin = await admin(session);
  const point = Number(data.point);
  const penguranganPoint = Number(data.pengurangan_point);
  let newPoint = 0;
  if (point > penguranganPoint) {
    newPoint += point - penguranganPoint;
  } else {
    createFile(siswa[0]);
  }

  const updatePoint = `UPDATE siswa
  SET point = '${newPoint}'
  WHERE id_siswa = '${data.id_siswa}' `;

  const sql = `INSERT INTO pelanggaran
   (id_siswa, id_subkategori, admin_penginput)
  VALUES ('${data.id_siswa}', '${data.id_subkategori}', '${id_admin[0].id_admin}')`;

  return new Promise((resolve, reject) => {
    db.query(updatePoint, (err, result) => {
      if (err) {
        reject(err);
      } else {
        db.query(sql, (err, result) => {
          if (err) {
            console.log(`Pelanggaran GAGAL Di Input!`);
            reject(err);
          } else {
            console.log(`Pelanggaran Berhasil Di Input!`);
            resolve(true);
          }
        });
      }
    });
  });
};

const riwayatPelanggaran = () => {
  const sql = `SELECT tanggal,nama,nama_pelanggaran,username,point FROM pelanggaran JOIN siswa ON pelanggaran.id_siswa = siswa.id_siswa JOIN subkategori_pelanggaran ON pelanggaran.id_subkategori = subkategori_pelanggaran.id_subkategori JOIN admin ON pelanggaran.admin_penginput = admin.id_admin ORDER BY tanggal DESC;`;

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

const detailpelanggaran = (id) => {
  const sql = `SELECT 
    pelanggaran.id_siswa,
    pelanggaran.tanggal,
    siswa.nama AS nama_siswa,
    subkategori_pelanggaran.nama_pelanggaran,
    admin.username AS admin_penginput,
    pengurangan_point
FROM 
    pelanggaran
JOIN 
    siswa 
ON 
    pelanggaran.id_siswa = siswa.id_siswa
JOIN 
    subkategori_pelanggaran 
ON 
    pelanggaran.id_subkategori = subkategori_pelanggaran.id_subkategori
JOIN 
    admin 
ON 
    pelanggaran.admin_penginput = admin.id_admin
WHERE pelanggaran.id_siswa = ${id}
ORDER BY 
    pelanggaran.tanggal DESC`;

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

module.exports = { inputPelanggaran, riwayatPelanggaran, detailpelanggaran };
