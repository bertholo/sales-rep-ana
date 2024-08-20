import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false // react already does escaping
    },
    debug: true
  });

export default i18n;
