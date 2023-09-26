import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { header_en, footer_en, home_en, contacts_en } from "./locales/en/en";
import { header_pt, footer_pt, home_pt, contacts_pt } from "./locales/pt/pt";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          header: header_en,
          footer: footer_en,
          home: home_en,
          contacts: contacts_en,
        },
      },
      pt: {
        translation: {
          header: header_pt,
          footer: footer_pt,
          home: home_pt,
          contacts: contacts_pt,
        },
      },
    },
  });

export default i18n;
