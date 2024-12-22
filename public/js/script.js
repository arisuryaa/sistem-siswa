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
