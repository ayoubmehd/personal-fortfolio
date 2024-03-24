import en from "./lang/en.json";
import fr from "./lang/fr.json";

export default defineI18nConfig(() => ({
  locale: "en",
  legacy: false,
  messages: {
    en,
    fr,
  },
}));
