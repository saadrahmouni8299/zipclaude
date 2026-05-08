import React, { useState } from 'react';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery.trim()}"`);
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="site-nav">
      <div className="nav-top">
        <div className="nav-email">✉ info@PENTRENT.ma</div>

        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">PR</div>
          <div className="nav-logo-text">PENT<span>RENT</span></div>
        </a>

        <div className="nav-search">
          <input
            type="text"
            placeholder="search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>⌕</button>
        </div>
      </div>

      <div className="nav-links">
        <a href="#about">About Us</a>
        <a href="#discover">Discover</a>
        <a href="#listings">Rent</a>
        <a href="#contact">Location</a>
      </div>
    </nav>
  );
}

export default Navbar;