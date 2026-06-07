const certSearch = document.getElementById("certSearch");
const toggleBtn = document.getElementById("toggleCerts");
const toggleText = document.getElementById("toggleText");
const toggleIconContainer = document.getElementById("toggleIconContainer");
const toggleWrapper = document.getElementById("toggleWrapper");

const allCerts = document.querySelectorAll(".cert-card");
const extraCerts = document.querySelectorAll(".extra-cert");

let isExpanded = false;

// Toggle Show More
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;

    extraCerts.forEach((cert) => {
      cert.classList.toggle("hidden", !isExpanded);
    });

    if (isExpanded) {
      toggleText.textContent = "Sembunyikan Sertifikat";
      toggleIconContainer.innerHTML =
        '<i data-lucide="chevron-up" class="w-5 h-5"></i>';
    } else {
      toggleText.textContent = "Lihat Seluruh Sertifikat (16)";
      toggleIconContainer.innerHTML =
        '<i data-lucide="chevron-down" class="w-5 h-5"></i>';
    }

    lucide.createIcons();
  });
}

// Search
if (certSearch) {
  certSearch.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const isSearching = searchTerm.length > 0;

    if (isSearching) {
      toggleWrapper.style.display = "none";

      allCerts.forEach((card) => {
        const title = card
          .querySelector(".cert-title")
          ?.textContent.toLowerCase();

        const date = card
          .querySelector(".cert-date")
          ?.textContent.toLowerCase();

        if (title?.includes(searchTerm) || date?.includes(searchTerm)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    } else {
      toggleWrapper.style.display = "block";

      allCerts.forEach((card, index) => {
        card.classList.remove("hidden");

        if (!isExpanded && index >= 4) {
          card.classList.add("hidden");
        }
      });
    }
  });
}
