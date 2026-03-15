// Hamburger Menu Logic
const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("navbar-default");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Tab Switching Logic untuk Resume Section
function showContent(id) {
  // 1. Sembunyikan semua konten tab
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.remove("block", "animate-fade-in");
    content.classList.add("hidden");
  });

  // 2. Reset semua desain tombol kembali ke default (tidak aktif)
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((button) => {
    button.className =
      "tab-btn w-full text-left px-6 py-3.5 rounded-xl font-medium transition-all duration-300 bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 border border-slate-200";
  });

  // 3. Tampilkan konten yang dipilih dengan animasi
  const targetContent = document.getElementById(id);
  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.classList.add("block", "animate-fade-in");
  }

  // 4. Ubah desain tombol yang sedang di-klik menjadi aktif (biru)
  const activeBtn = document.querySelector(
    `button[onclick="showContent('${id}')"]`,
  );
  if (activeBtn) {
    activeBtn.className =
      "tab-btn w-full text-left px-6 py-3.5 rounded-xl font-medium transition-all duration-300 bg-sky-600 text-white shadow-md";
  }
}

// Contact Form to WhatsApp Logic
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    // Mencegah form melakukan refresh halaman
    e.preventDefault();

    // Ambil nilai dari input form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Format teks untuk dikirim ke WhatsApp
    const waText = `Halo Azfa!\n\nNama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`;

    // Ubah format teks menjadi format URL yang aman
    const encodedText = encodeURIComponent(waText);

    // Nomor WhatsApp tujuan (Format internasional tanpa '+' atau '0' di depan)
    const waNumber = "6282123824490";

    // Buka link WhatsApp Web / Aplikasi di tab baru
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
  });
}
