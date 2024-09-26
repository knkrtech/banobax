import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <h1>BANOBA</h1>
      <p className="subtitle">Sustainability, Simplified</p>
      <p>BANOBA is a sustainable consulting firm established in 2024, delivering clear and effective sustainability strategies for businesses aiming for growth.</p>
      <p>CSR Policy Development & Reporting • ESG Assessments • Certifications</p>
      <p>
        <a href="#">LinkedIn</a> • <a href="#">Instagram</a> • <a href="#">X</a> • Or reach us at <a href="mailto:info@banoba.com">info@banoba.com</a>
      </p>
    </Layout>
  );
}
