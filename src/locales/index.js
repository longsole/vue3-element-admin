import { createI18n } from 'vue-i18n';
import en from './lang/en';
import zhCn from './lang/zh-cn';

const messages = {
  en,
  'zh-ch': zhCn,
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export const setLanguage = (lang) => {
  i18n.setLanguage(lang);
};

export const setupI18n = (app) => {
  app.use(i18n);
};
