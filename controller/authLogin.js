const db = require("../config/db");

const login = (req, res) => {
  const data = req.body;
  const sql = `SELECT * FROM admin WHERE username = '${data.username}'`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Database Error!");
    }

    if (result.length === 0) {
      console.log("username/password salah");
      return res.render("login", { title: "login", error: true, layout: "layout/admin-layout" });
    }

    const dataAdmin = result[0];
    if (data.password == dataAdmin.password) {
      req.session.admin = true;
      res.redirect("/dashboard");
      console.log(req.session.admin);
    } else {
      console.log("username/password salah");
      res.render("login", { title: "login", error: true, layout: "layout/admin-layout" });
    }
  });
};

const check = (req, res, next) => {
  if (!req.session.admin) {
    return res.redirect("/");
  } else {
    next();
  }
};
const alreadyLogin = (req, res, next) => {
  if (req.session.admin) {
    if (req.originalUrl !== "/dashboard") {
      return res.redirect("/dashboard");
    }
  }
  next();
};

module.exports = {
  login,
  alreadyLogin,
  check,
};
