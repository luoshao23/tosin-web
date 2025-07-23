
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2>{t('contactTitle')}</h2>
      <p>{t('contactAddress')}</p>
      <p>{t('contactPhone')}</p>
      <p>{t('contactFax')}</p>
      <p>{t('contactEmail')}</p>
    </section>
  );
};

export default Contact;
