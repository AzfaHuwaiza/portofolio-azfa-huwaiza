// ----------------------------------------
// 1. Hamburger Menu Logic
// ----------------------------------------
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("navbar-default");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// ----------------------------------------
// 2. Tab Switching Logic (Resume Section)
// ----------------------------------------
function showContent(id) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.remove("block", "animate-fade-in");
    content.classList.add("hidden");
  });

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((button) => {
    button.className =
      "tab-btn w-full text-left px-6 py-3.5 rounded-xl font-medium transition-all duration-300 bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 border border-slate-200";
  });

  const targetContent = document.getElementById(id);
  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.classList.add("block", "animate-fade-in");
  }

  const activeBtn = document.querySelector(
    `button[onclick="showContent('${id}')"]`,
  );
  if (activeBtn) {
    activeBtn.className =
      "tab-btn w-full text-left px-6 py-3.5 rounded-xl font-medium transition-all duration-300 bg-sky-600 text-white shadow-md";
  }
}

// ----------------------------------------
// 3. Portfolio Slider Logic
// ----------------------------------------
let currentSlide = 0;
const slides = document.querySelectorAll(".project-slide");

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      // Munculkan slide yang aktif
      slide.classList.remove("hidden");
      // Tambahkan class flex agar strukturnya sejajar
      slide.classList.add("flex", "animate-fade-in");
    } else {
      // Sembunyikan slide lainnya
      slide.classList.add("hidden");
      slide.classList.remove("flex", "animate-fade-in");
    }
  });
}

function nextProject() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevProject() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

// ----------------------------------------
// 4. Contact Form to WhatsApp Logic
// ----------------------------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const waText = `Halo Azfa!\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`;
    const encodedText = encodeURIComponent(waText);
    const waNumber = "6282123824490";

    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
  });
}
