const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sistem_pelanggaran_siswa",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ------------------>>>>>>>>>>>>>>>>>>>>>>>>>", err);
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports = db;
