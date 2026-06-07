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
// 3. Experience Slider Logic
// ----------------------------------------
let currentExpSlide = 0;
const expSlides = document.querySelectorAll(".exp-slide");

function updateExpSlider() {
  expSlides.forEach((slide, index) => {
    if (index === currentExpSlide) {
      slide.classList.remove("hidden");
      slide.classList.add("flex", "animate-fade-in");
    } else {
      slide.classList.add("hidden");
      slide.classList.remove("flex", "animate-fade-in");
    }
  });
}

function nextExpProject() {
  currentExpSlide = (currentExpSlide + 1) % expSlides.length;
  updateExpSlider();
}

function prevExpProject() {
  currentExpSlide = (currentExpSlide - 1 + expSlides.length) % expSlides.length;
  updateExpSlider();
}

// ----------------------------------------
// 4. Certification Slider Logic
// ----------------------------------------
let currentCertSlide = 0;
const certSlides = document.querySelectorAll(".cert-slide");

function updateCertSlider() {
  certSlides.forEach((slide, index) => {
    if (index === currentCertSlide) {
      slide.classList.remove("hidden");
      slide.classList.add("flex", "animate-fade-in");
    } else {
      slide.classList.add("hidden");
      slide.classList.remove("flex", "animate-fade-in");
    }
  });
}

function nextCert() {
  currentCertSlide = (currentCertSlide + 1) % certSlides.length;
  updateCertSlider();
}

function prevCert() {
  currentCertSlide =
    (currentCertSlide - 1 + certSlides.length) % certSlides.length;
  updateCertSlider();
}

// ----------------------------------------
// 5. Portfolio Slider Logic
// ----------------------------------------
let currentSlide = 0;
const slides = document.querySelectorAll(".project-slide");

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.remove("hidden");
      slide.classList.add("flex", "animate-fade-in");
    } else {
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
// 6. Contact Form to WhatsApp Logic
// ----------------------------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil nilai dari input form
    const name = document.getElementById("name").value.trim();
    const email =
      document.getElementById("email").value.trim() || "Tidak disertakan";
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Menyusun format pesan WhatsApp
    const waText = `Halo Azfa!\n\n*Nama:* ${name}\n*Email:* ${email}\n*Subjek:* ${subject}\n\n*Pesan:*\n${message}`;

    // Meng-encode teks agar aman dijadikan URL
    const encodedText = encodeURIComponent(waText);

    // Nomor WhatsApp tujuan
    const waNumber = "6282123824490";

    // URL WhatsApp
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

    try {
      // Mencoba membuka di tab baru
      const newWindow = window.open(waUrl, "_blank");

      // Cek apakah browser memblokir pop-up
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed == "undefined"
      ) {
        // Jika terblokir, tampilkan peringatan dan link alternatif
        fallbackLink.href = waUrl;
        popupWarning.classList.remove("hidden");
      } else {
        // Jika berhasil, sembunyikan peringatan (jika sebelumnya muncul)
        popupWarning.classList.add("hidden");

        // Opsional: Reset form setelah berhasil dikirim
        contactForm.reset();
      }
    } catch (error) {
      // Menangani error keamanan iFrame (biasanya terjadi di environment preview)
      console.error("Gagal membuka window:", error);
      fallbackLink.href = waUrl;
      popupWarning.classList.remove("hidden");

      // Fallback langsung mengubah URL di halaman saat ini jika open terblokir keras
      // window.location.href = waUrl;
    }
  });
}
