// Navigasi Mobile Logic
const mobileMenu = document.getElementById("mobile-menu");
const openMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Fungsi Buka Menu
openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  document.body.style.overflow = "hidden"; // Kunci scroll layar saat menu buka
});

// Fungsi Tutup Menu
const closeMenu = () => {
  mobileMenu.classList.add("translate-x-full");
  document.body.style.overflow = "auto"; // Aktifkan kembali scroll
};

closeMenuBtn.addEventListener("click", closeMenu);

// Tutup menu otomatis saat link diklik
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
