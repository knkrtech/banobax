import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@remix-run/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export default function Layout({ children, header }: LayoutProps) {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Dark mode toggled');
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Language toggled');
    setLanguage(language === 'EN' ? 'TH' : 'EN');
  };

  return (
    <div className="fade-in">
      <div className="container">
        <header>
          <nav>
            <button className="menu-toggle" onClick={toggleMenu}>
              ☰
            </button>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
              <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
              <Link to="#services" className={isActive('#services')} onClick={() => setIsMenuOpen(false)}>{t.services}</Link>
              <Link to="#contact" className={isActive('#contact')} onClick={() => setIsMenuOpen(false)}>{t.contact}</Link>
            </div>
            <div className="nav-controls">
              <button 
                onClick={handleDarkModeToggle} 
                aria-label="Toggle dark mode"
                className="control-button"
              >
                {isDarkMode ? '🌙' : '☀️'}
              </button>
              <button 
                onClick={handleLanguageToggle} 
                aria-label="Toggle language"
                className="control-button"
              >
                {language}
              </button>
            </div>
          </nav>
        </header>
        <main>
          {header}
          {children}
        </main>
        <footer>
          <p>{t.footerText} 🌱</p>
          <p>&copy; 2024 BANOBA. {t.rights}</p>
        </footer>
      </div>
    </div>
  );
}