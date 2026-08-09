function getTranslatedHobby(item, locale) {
    return {
        id: item.id,
        icon: item.icon,
        ...(item.translations[locale] || item.translations.fr)
    };
}

export default getTranslatedHobby;