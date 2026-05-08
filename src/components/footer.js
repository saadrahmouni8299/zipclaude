import React from 'react';

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div>
          <div className="footer-logo">
            <div className="footer-logo-icon">PR</div>
            <div className="footer-logo-text">PENT<span>RENT</span></div>
          </div>
          <p className="footer-desc">
            Premium penthouse rentals in Casablanca. Live above it all with
            breathtaking views and unmatched luxury.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="X / Twitter">𝕏</a>
            <a href="#" className="footer-social" aria-label="Instagram">◎</a>
            <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>© 2026 PentRent. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </>
  );
}

export default Footer;