import { useState } from 'react';
import { Link } from '@remix-run/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface HeaderProps {
  toggleDarkMode: () => void;
  toggleLanguage: () => void;
  isDarkMode: boolean;
}

export default function Header({ toggleDarkMode, toggleLanguage, isDarkMode }: HeaderProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
          <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/">{t.home}</Link>
          <Link to="/expertise">{t.expertise}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/ventures">{t.ventures}</Link>
          <Link to="/contact">{t.contact}</Link>
        </div>
        <div className="nav-controls">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? '🌱' : '☀️'}
          </button>
          <button onClick={toggleLanguage} aria-label="Toggle language">
            🌍
          </button>
        </div>
      </nav>
    </header>
  );
}
