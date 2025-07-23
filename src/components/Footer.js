
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t('footerText', { year: new Date().getFullYear() })}</p>
    </footer>
  );
};

export default Footer;
