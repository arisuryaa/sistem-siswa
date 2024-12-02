const db = require("../config/db");

const login = (req, res) => {
  const data = req.body;
  const sql = `SELECT * FROM admin WHERE username = '${data.username}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log("ada Error!");
    }
    if (data.password == result[0].password) {
      req.session.admin = true;
      res.send("VALID");
    } else {
      res.redirect("/");
    }
  });
};

module.exports = login;
