import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { setCurrentLanguage } from "./redux/user/user.actions";

import store from "./redux/store";

const fallbackLng = ["en"];
const availableLanguages = ["en", "es"];

i18n
  .on("languageChanged", function(lng) {
    store.dispatch(setCurrentLanguage(i18n.language));
  })
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    returnObjects: true,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
