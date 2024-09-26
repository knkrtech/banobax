import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@remix-run/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TH' : 'EN');
  };

  return (
    <div className="container fade-in">
      <header>
        <nav>
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>HOME</Link>
            <Link to="/about" className={isActive('/about')}>ABOUT</Link>
            <Link to="#services" className={isActive('#services')}>SERVICES</Link>
            <Link to="#contact" className={isActive('#contact')}>CONTACT</Link>
          </div>
          <div className="nav-controls">
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <button onClick={toggleLanguage} aria-label="Toggle language">
              {language}
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Everything we do is for a sustainable future. 🌱</p>
        <p>&copy; 2024 BANOBA. All rights reserved.</p>
      </footer>
    </div>
  );
}