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
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <Link to="/" className="logo">
          <img
            src="/images/banoba-logo-light.png"
            alt="BANOBA"
            className="logo light-logo"
          />
          <img
            src="/images/banoba-logo-dark.png"
            alt="BANOBA"
            className="logo dark-logo"
          />
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''} ${language === 'TH' ? 'thai-nav' : ''}`}>
          <li><Link to="/expertise">{t.expertise}</Link></li>
          <li><Link to="/about">{t.about}</Link></li>
          <li><Link to="/insights">{t.insights}</Link></li>
          <li><Link to="/contact">{t.contact}</Link></li>
        </ul>
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
