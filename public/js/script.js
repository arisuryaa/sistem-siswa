// start: Sidebar
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

const openModal = (id_subkategori, point) => {
  document.querySelector("#subkategori").value = id_subkategori;
  document.querySelector("#point").value = point;
  document.getElementById("my_modal_3").showModal();
};
