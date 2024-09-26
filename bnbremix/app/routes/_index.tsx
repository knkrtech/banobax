import { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="#services">SERVICES</Link>
        <Link to="#contact">CONTACT</Link>
      </nav>
      <main>
        <h1>BANOBA</h1>
        <p className="subtitle">Sustainability, Simplified</p>
        <p>BANOBA is a sustainable consulting firm established in 2024, delivering clear and effective sustainability strategies for businesses aiming for growth.</p>
        <p>CSR Policy Development & Reporting • ESG Assessments • Certifications</p>
        <p>
          <a href="https://www.linkedin.com/company/banoba" target="_blank" rel="noopener noreferrer">LinkedIn</a> • 
          <a href="https://www.instagram.com/banoba_sustainability" target="_blank" rel="noopener noreferrer">Instagram</a> • 
          <a href="https://twitter.com/banoba_sustain" target="_blank" rel="noopener noreferrer">X</a> • 
          Or reach us at <a href="mailto:info@banoba.com">info@banoba.com</a>
        </p>
      </main>
    </Layout>
  );
}
