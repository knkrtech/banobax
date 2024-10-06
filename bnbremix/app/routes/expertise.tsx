import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Expertise() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <div className="content-container">
        <h1>{t.expertise}</h1>
        <section>
          <h2>{t.understandingLandscape}</h2>
          <p>{t.expertiseDescription}</p>
        </section>
        <section>
          <h2>{t.ourApproach}</h2>
          <ul>
            <li>{t.assessmentAnalysis}</li>
            <li>{t.strategyDevelopment}</li>
            <li>{t.implementationSupport}</li>
            <li>{t.certificationReporting}</li>
            <li>{t.continuousImprovement}</li>
          </ul>
        </section>
        <section>
          <h2>{t.ourServices}</h2>
          <ul>
            <li>{t.csrPolicyDevelopment}</li>
            <li>{t.esgAssessments}</li>
            <li>{t.sustainabilityCertifications}</li>
            <li>{t.comprehensiveCsrReporting}</li>
          </ul>
        </section>
        <section>
          <h2>{t.caseStudiesInsights}</h2>
          <h3>{t.caseStudies}</h3>
          <div className="case-study">
            <h4>{t.caseStudyTitle}</h4>
            <p>{t.caseStudyDescription}</p>
          </div>
          <h3>{t.insights}</h3>
          <ul>
            <li>{t.insight1}</li>
            <li>{t.insight2}</li>
            <li>{t.insight3}</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}