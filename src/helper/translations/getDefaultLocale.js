import getBrowserLocale from "./getBrowserLocale";
import supportedLocales from "./supportedLocales";

function getDefaultLocale() {
    const savedLocale = localStorage.getItem("locale");

    if (savedLocale && supportedLocales.includes(savedLocale)) {
        return savedLocale;
    }

    return getBrowserLocale();
}

export default getDefaultLocale;