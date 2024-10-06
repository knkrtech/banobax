import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export default function Layout({ children, header }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

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
    <div className="fade-in">
      <div className="container">
        <Header 
          toggleDarkMode={toggleDarkMode} 
          toggleLanguage={toggleLanguage} 
          isDarkMode={isDarkMode}
        />
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