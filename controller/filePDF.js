const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const createFile = (data) => {
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  monthName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const doc = new PDFDocument();
  const folderPath = "suratPemanggilan";

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  const random = Math.floor(Math.random() * 1000);
  const fileName = `${data.nama}_SuratPemanggilan_${random}.pdf`;
  const filePath = path.join(folderPath, fileName);

  doc.pipe(fs.createWriteStream(filePath));

  const kopImagePath = path.join(__dirname, "../public/img/kopsurat.png"); // Sesuaikan path gambar Anda
  doc.image(kopImagePath, {
    fit: [500, 150], // Sesuaikan ukuran gambar
    align: "center",
  });

  doc.moveDown(10);

  doc.font("Times-Roman").fontSize(12).text(`Denpasar, ${day} ${monthName[month]} ${year}`, { align: "right" });

  doc.moveDown();
  doc.font("Times-Roman").fontSize(12).text("Nomor     : B.10.400.3/463/SMKN1DPS").text("Lampiran  : 1 lampiran").text("Hal       : Pemanggilan Orang Tua Siswa");

  doc.moveDown();
  doc.font("Times-Bold").fontSize(12).text("Kepada Yth.", { align: "left" }).moveDown(0.5).text("Bapak/Ibu/Orang Tua Wali", { align: "left" }).moveDown(0.5);

  doc.font("Times-Roman").fontSize(12).text(`${data.nama.toLowerCase()}`).moveDown(1);

  doc
    .font("Times-Roman")
    .fontSize(12)
    .text(`Dengan Hormat`)
    .moveDown(0.5)
    .text(
      `
  Sehubungan dengan adanya pelanggaran yang dilakukan oleh anak Anda, ${data.nama.toLowerCase()}, siswa dari SMK Negeri 1 Denpasar, kami bermaksud untuk memanggil Bapak/Ibu untuk hadir di sekolah guna membahas masalah ini lebih lanjut.`
    )
    .moveDown(0.5)
    .text(`sesuai dengan ketentuan yang berlaku di sekolah, apabila siswa mencapai jumlah poin pelanggaran 0, maka langkah selanjutnya adalah pemanggilan orang tua/wali.`)
    .moveDown(1)
    .text(`Kami berharap Bapak/Ibu dapat hadir pada:`)
    .moveDown(0.5)
    .text(`Tanggal: ${day + 1} ${monthName[month]}`)
    .moveDown(0.5)
    .text(`Pukul: 09:00 - 12:00`)
    .moveDown(0.5)
    .text(`Tempat: Ruang BK SMK Negeri 1 Denpasar`)
    .moveDown(2)
    .text(`Kehadiran Bapak/Ibu sangat penting untuk memberikan solusi terbaik bagi perkembangan anak kami, serta untuk memastikan bahwa kejadian serupa tidak terulang di masa depan.`)
    .moveDown(0.5)
    .text(`Demikian surat pemanggilan ini kami buat, atas perhatian dan kerjasama Bapak/Ibu, kami ucapkan terima kasih.`)
    .moveDown(1)
    .text(`Hormat kami,`)
    .moveDown(0.5)
    .text(`SMK Negeri 1 Denpasar`);

  doc.end();

  const data2 = {
    nama: "SMK Negeri 1 Denpasar",
    email: "ramboemailtumbal@gmail.com",
    emailTo: data.email,
    fileName: fileName,
    path: folderPath,
    filepath: filePath,
  };
  sendEmail(data2, "surat-pemanggilan.pdf");
};

async function sendEmail(data) {
  // Konfigurasi transport Gmail
  console.log(data.emailTo);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Gunakan port 587 jika tidak ingin SSL
    secure: true,
    service: "gmail",
    auth: {
      user: "rambobuatemail228@gmail.com", // Ganti dengan email Anda
      pass: "qdri bmtm tvvd asus", // Ganti dengan password atau App Password Gmail Anda
    },
  });

  // Konfigurasi email
  const mailOptions = {
    from: '"Admin Sekolah" <ramboemailtumbal@gmail.com>', // Ganti dengan nama pengirim
    to: data.emailTo,
    subject: "Surat Pemanggilan",
    text: `Halo ${data.nama}, berikut ini adalah surat pemanggilan Anda.`,
    attachments: [
      {
        filename: `${data.fileName}`,
        path: data.filepath, // Path ke file PDF
      },
    ],
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email terkirim:", info.response);
  } catch (error) {
    console.error("Error mengirim email:", error);
  }
}

module.exports = { createFile };
