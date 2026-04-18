function getTranslatedData(data, locale) {
    return data[locale] || data.fr;
}

export default getTranslatedData;