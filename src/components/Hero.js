import React from 'react';
import { useTranslation } from 'react-i18next';
import BearingModel from './BearingModel';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-section">
      <BearingModel heroTitle={t('heroTitle')} heroSubtitle={t('heroSubtitle')} />
    </section>
  );
};

export default Hero;