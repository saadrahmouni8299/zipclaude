// ============================================================
// COMPONENTS/LISTINGS.JS  —  Renders the property cards
// Depends on: data/listings.js  (LISTINGS_DATA)
// ============================================================

(function renderListings() {
  const grid = document.getElementById("listings-grid");
  if (!grid) return;

  const pinIcon = `
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
         stroke="#C9A84C" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`;

  grid.innerHTML = LISTINGS_DATA.map(
    (l) => `
    <div class="listing-card">
      <img src="${l.img}" alt="${l.loc}" loading="lazy" />
      <div class="listing-body">
        <div class="listing-location">
          ${pinIcon}
          <span>${l.loc}</span>
        </div>
        <div class="listing-specs">${l.specs}</div>
        <span class="listing-badge ${l.dark ? "dark" : "gold"}">${l.price}</span>
      </div>
    </div>`
  ).join("");
})();
