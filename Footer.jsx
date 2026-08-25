import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Gatsby Productions Costa del Sol. All rights reserved.</p>
      <div className="footer-credit">
        <p>Luxury events and entertainment on the Costa del Sol</p>
      </div>
    </footer>
  );
}
