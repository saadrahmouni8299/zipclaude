// ============================================================
// COMPONENTS/REVIEWS.JS  —  Renders the review cards
// Depends on: data/reviews.js  (REVIEWS_DATA)
// ============================================================

(function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  function buildStars(count) {
    return "★".repeat(count) + "☆".repeat(5 - count);
  }

  grid.innerHTML = REVIEWS_DATA.map(
    (r) => `
    <div class="review-card">
      <div class="review-stars">${buildStars(r.stars)}</div>
      <div class="review-title">${r.title}</div>
      <div class="review-sub">${r.sub}</div>
      <div class="review-author">${r.author}</div>
    </div>`
  ).join("");
})();
