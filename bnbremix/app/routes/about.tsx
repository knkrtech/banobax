import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section id="about">
        <h1>About BANOBA</h1>
        <p className="subtitle">Our Mission and Vision</p>
      </section>
      <section id="mission">
        <h2>Our Mission</h2>
        <p>At BANOBA, we are committed to developing innovative strategies for a sustainable future. Our mission is to provide cutting-edge consulting services that help businesses and organizations minimize their environmental impact while maximizing their efficiency and profitability.</p>
      </section>
      <section id="vision">
        <h2>Our Vision</h2>
        <p>We envision a world where sustainable practices are seamlessly integrated into every aspect of business and society. BANOBA aims to be at the forefront of this transformation, leading the way in sustainable consulting and inspiring positive change on a global scale.</p>
      </section>
      <section id="team">
        <h2>Our Team</h2>
        <p>BANOBA is powered by a diverse team of experts in environmental science, sustainability, and business strategy. Our consultants bring a wealth of experience and a passion for creating a greener future.</p>
      </section>
    </Layout>
  );
}