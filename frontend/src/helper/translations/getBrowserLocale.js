import supportedLocales from "./supportedLocales";

function getBrowserLocale() {
    const browserLanguages = navigator.languages || [navigator.language];

    for (const language of browserLanguages) {
        const shortLocale = language.split("-")[0].toLowerCase();

        if (supportedLocales.includes(shortLocale)) {
            return shortLocale;
        }
    }

    return "fr";
}

export default getBrowserLocale;