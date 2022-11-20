import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import config from '@config';

import en from './en.json';

i18n.use(initReactI18next).init({
  lng: config.DEFAULT_LOCALE,
  fallbackLng: config.DEFAULT_LOCALE,
  resources: {en: {translation: en}},
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
