function changeLanguage(lang) {
  const script = document.createElement('script');
  script.src = `js/lang-${lang}.js`;
  script.onload = () => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  };
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-select");
  if (selector) {
    selector.addEventListener("change", function () {
      changeLanguage(this.value);
    });
  }
});


