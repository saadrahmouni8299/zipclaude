// ============================================================
// COMPONENTS/WHYUS.JS  —  Renders "Why Choose Us" cards
// Depends on: data/whyus.js  (WHYUS_DATA)
// ============================================================

(function renderWhyUs() {
  const container = document.getElementById("why-cards");
  if (!container) return;

  container.innerHTML = WHYUS_DATA.map(
    (item) => `
    <div class="why-card">
      <div class="why-card-icon">${item.icon}</div>
      <div class="why-card-title">${item.title}</div>
      <div class="why-card-desc">${item.desc}</div>
    </div>`
  ).join("");
})();
