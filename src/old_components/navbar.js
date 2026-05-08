// ============================================================
// COMPONENTS/NAVBAR.JS  —  Renders the sticky navigation bar
// ============================================================

(function renderNavbar() {
  const root = document.getElementById("navbar-root");
  if (!root) return;

  root.innerHTML = `
    <nav class="site-nav">
      <div class="nav-top">
        <div class="nav-email">✉ info@PENTRENT.ma</div>

        <a href="#" class="nav-logo">
          <div class="nav-logo-icon">PR</div>
          <div class="nav-logo-text">PENT<span>RENT</span></div>
        </a>

        <div class="nav-search">
          <input type="text" placeholder="search…" id="nav-search-input" />
          <button id="nav-search-btn">⌕</button>
        </div>
      </div>

      <div class="nav-links">
        <a href="#about">About Us</a>
        <a href="#discover">Discover</a>
        <a href="#listings">Rent</a>
        <a href="#contact">Location</a>
      </div>
    </nav>
  `;

  // Search button behaviour (basic)
  const searchBtn   = document.getElementById("nav-search-btn");
  const searchInput = document.getElementById("nav-search-input");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: "${query}"`);
      searchInput.value = "";
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchBtn.click();
  });
})();
