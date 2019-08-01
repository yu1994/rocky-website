import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
import enLocale from "./en";
import cnLocale from "./cn";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...cnLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: Cookies.get("language") || "en",
  // set locale messages
  messages
});

export default i18n;
