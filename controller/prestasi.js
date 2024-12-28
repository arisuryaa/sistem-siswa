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

const inputPrestasi = async (alldata) => {
  const { data, session } = alldata;

  const point = Number(data.point);
  const penambahanPoint = Number(data.penambahan_point);

  const newPoint = point + penambahanPoint;

  const id_admin = await admin(session);

  const updatePoint = `UPDATE siswa
  SET point = '${newPoint}'
  WHERE id_siswa = '${data.id_siswa}' `;

  const sql = `INSERT INTO prestasi
   (id_siswa, nama_prestasi, admin_penginput,penambahan_point,catatan)
  VALUES ('${data.id_siswa}', '${data.nama_prestasi}', '${id_admin[0].id_admin}', '${data.penambahan_point}', '${data.catatan}' )`;

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

module.exports = { inputPrestasi };
