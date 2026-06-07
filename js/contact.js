const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email =
      document.getElementById("email").value.trim() || "Tidak disertakan";

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    const waText =
      `Halo Azfa!\n\n` +
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Subjek: ${subject}\n\n` +
      `Pesan:\n${message}`;

    const waNumber = "6282123824490";

    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`,
      "_blank",
    );
  });
}
