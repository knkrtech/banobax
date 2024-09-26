import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <section id="about">
        <h1>{t.aboutTitle}</h1>
        <p className="subtitle">{t.missionVision}</p>
      </section>
      <section id="mission">
        <h2>{t.ourMission}</h2>
        <p>{t.missionText}</p>
      </section>
      <section id="vision">
        <h2>{t.ourVision}</h2>
        <p>{t.visionText}</p>
      </section>
      <section id="team">
        <h2>{t.ourTeam}</h2>
        <p>{t.teamText}</p>
      </section>
    </Layout>
  );
}