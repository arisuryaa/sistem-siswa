console.log("JS LOADED");

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sidebarMenu = document.querySelector(".sidebar-menu");
const main = document.querySelector(".main");

new DataTable("#example", {
  info: false,
  ordering: false,
  paging: false,
});

sidebarToggle.addEventListener("click", function (e) {
  e.preventDefault();
  main.classList.toggle("active");
  sidebarMenu.classList.toggle("-translate-x-full");
  sidebarOverlay.classList.toggle("hidden");
});

sidebarOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  main.classList.add("active");
  sidebarOverlay.classList.add("hidden");
  sidebarMenu.classList.add("-translate-x-full");
});

const swiperss = new Swiper(".mySwiperss", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides: false,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
      hide: true,
    },
  },
});

const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  initialSlide: 0,
  coverflowEffect: {
    rotate: 10,
    stretch: 100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 25,
    },

    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,
    },

    1280: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 40,
    },
  },
});

const swipersss = new Swiper(".mySwipersss", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides: false,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
      hide: true,
    },
  },
});

// input pelanggaran
const openModal = (id_subkategori, point) => {
  document.querySelector("#subkategori").value = id_subkategori;
  document.querySelector("#point").value = point;
  document.getElementById("my_modal_3").showModal();
};

const form = document.getElementById("prestasiForm");
const formEdit = document.getElementById("editSiswa");
const modal = document.getElementById("my_modal_1");
const openModalButton = document.getElementById("openModalButton");
const submitFormButton = document.getElementById("submitFormButton");
const closeModalButton = document.getElementById("closeModalButton");
console.log("JS LOADED2");
// Event untuk membuka modal

document.addEventListener("DOMContentLoaded", () => {
  openModalButton.addEventListener("click", () => {
    modal.showModal();
  });

  // Event untuk menutup modal
  closeModalButton.addEventListener("click", () => {
    modal.close();
  });

  // Event untuk submit form
  submitFormButton.addEventListener("click", () => {
    form.submit(); // Kirim form secara manual
  });

  submitFormButton.addEventListener("click", () => {
    formEdit.submit();
  });
});

console.log("JS LOADED3");

const kelas = JSON.parse(document.querySelector("#kelas").value);
const namaKelas = kelas.map((e) => e.kelas);
const jumlahMelanggar = kelas.map((e) => e.siswa_point_dibawah_100);
const siswaKelas = kelas.map((e) => e.siswa_point_dibawah_100);
const data = {
  labels: namaKelas,
  datasets: [
    {
      data: jumlahMelanggar,
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return Math.round(value); // Membulatkan nilai ke bilangan bulat
          },
        },
        beginAtZero: true,
      },
    },
  },
};

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, config);
console.log("JS LOADED4");
