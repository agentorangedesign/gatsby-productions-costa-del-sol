import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">GATSBY PRODUCTIONS</div>
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <Link to="/talent" onClick={() => setMobileMenuOpen(false)}>Talent</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}
