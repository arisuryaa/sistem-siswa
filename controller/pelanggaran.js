const db = require("../config/db");

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

  const point = Number(data.point);
  const penguranganPoint = Number(data.pengurangan_point);

  const newPoint = point < penguranganPoint ? 0 : point - penguranganPoint;

  const id_admin = await admin(session);
  console.log(id_admin[0].id_admin);
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
            reject(err);
          } else {
            resolve(true);
          }
        });
      }
    });
  });
};

const riwayatPelanggaran = () => {
  const sql = `SELECT tanggal,nama,nama_pelanggaran,username,point FROM pelanggaran JOIN siswa ON pelanggaran.id_siswa = siswa.id_siswa JOIN subkategori_pelanggaran ON pelanggaran.id_subkategori = subkategori_pelanggaran.id_subkategori JOIN admin ON pelanggaran.admin_penginput = admin.id_admin;`;

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

module.exports = { inputPelanggaran, riwayatPelanggaran };
