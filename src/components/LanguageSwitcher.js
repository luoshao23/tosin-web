
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</button>
      <button onClick={() => changeLanguage('zh')} className={i18n.language === 'zh' ? 'active' : ''}>中文</button>
      <button onClick={() => changeLanguage('ja')} className={i18n.language === 'ja' ? 'active' : ''}>日本語</button>
    </div>
  );
};

export default LanguageSwitcher;
