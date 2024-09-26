import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const homeHeader = <h1 className="site-title">BANOBA</h1>;

  return (
    <Layout header={homeHeader}>
      <p className="subtitle">{t.subtitle}</p>
      <p>{t.description}</p>
      <p>{t.servicesList}</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/company/banoba" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/banoba_sustainability" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/banoba_sustain" target="_blank" rel="noopener noreferrer">X</a>
      </div>
      <p>{t.reachUs} <a href="mailto:info@banoba.com">info@banoba.com</a></p>
    </Layout>
  );
}
