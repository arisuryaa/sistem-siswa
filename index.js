// set up express gan
const express = require("express");
const app = express();
const port = 3000;

//  modules
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const { check } = require("./controller/authLogin");

// express layout ejs
app.set("view engine", "ejs");
app.use(expressLayout);
app.set("layout", "layout/main-layout");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// routes
const auth = require("./routes/auth");
const dashboard = require("./routes/dashboard");
const datasiswa = require("./routes/datasiswa");
const detailsiswa = require("./routes/detailsiswa");
const jenispelanggaran = require("./routes/jenispelanggaran");
const pelanggaran = require("./routes/pelanggaran");
const inputpelanggaran = require("./routes/inputpelanggaran");
const riwayatpelanggaran = require("./routes/riwayatpelanggaran");
const prestasi = require("./routes/prestasi");
const inputprestasi = require("./routes/inputprestasi");
const riwayatprestasi = require("./routes/riwayatprestasi");

// middleware
app.use(
  session({
    secret: "rahasia banget anjir",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/", auth);
app.use("/dashboard", check, dashboard);
app.use("/datasiswa", check, datasiswa);
app.use("/detailsiswa", check, detailsiswa);
app.use("/jenispelanggaran", check, jenispelanggaran);
app.use("/pelanggaran", check, pelanggaran);
app.use("/inputpelanggaran", check, inputpelanggaran);
app.use("/riwayatpelanggaran", check, riwayatpelanggaran);
app.use("/prestasi", check, prestasi);
app.use("/inputprestasi", check, inputprestasi);
app.use("/riwayatprestasi", check, riwayatprestasi);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
