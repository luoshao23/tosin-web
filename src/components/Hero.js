import React from 'react';
import { useTranslation } from 'react-i18next';
import BearingModel from './BearingModel';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <h1>{t('heroTitle')}</h1>
      <p>{t('heroSubtitle')}</p>
      <BearingModel />
    </section>
  );
};

export default Hero;