// ============================================================
// COMPONENTS/FOOTER.JS  —  Renders the footer
// ============================================================

(function renderFooter() {
  const root = document.getElementById("footer-root");
  if (!root) return;

  root.innerHTML = `
    <footer class="site-footer">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-icon">PR</div>
          <div class="footer-logo-text">PENT<span>RENT</span></div>
        </div>
        <p class="footer-desc">
          Premium penthouse rentals in Casablanca. Live above it all with
          breathtaking views and unmatched luxury.
        </p>
        <div class="footer-socials">
          <a href="#" class="footer-social" aria-label="X / Twitter">𝕏</a>
          <a href="#" class="footer-social" aria-label="Instagram">◎</a>
          <a href="#" class="footer-social" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </footer>

    <div class="footer-bottom">
      <p>© 2026 PentRent. All rights reserved.</p>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  `;
})();
