
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <a href="/">{t('heroTitle')}</a>
        <ul>
          <li><a href="#about">{t('aboutUs')}</a></li>
          <li><a href="#products">{t('products')}</a></li>
          <li><a href="#contact">{t('contactUs')}</a></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
