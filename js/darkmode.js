const darkToggle = document.getElementById("dark-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    sunIcon?.classList.toggle("hidden");
    moonIcon?.classList.toggle("hidden");
  });
}
