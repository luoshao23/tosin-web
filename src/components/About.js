
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2>{t('aboutTitle')}</h2>
      <p>{t('aboutContent')}</p>
    </section>
  );
};

export default About;
