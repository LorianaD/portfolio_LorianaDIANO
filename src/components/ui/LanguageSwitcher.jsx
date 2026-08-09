function LanguageSwitcher({ locale, setLocale }) {

    const locales = ["fr", "en", "it"];

    return(
        <div className="language-switcher">
            {locales.map((item) => (
                <button key={item} type="button" onClick={() => setLocale(item)} className={locale === item ? "is-active" : ""} >
                    { item.toUpperCase() }
                </button>
            ))}
        </div>
        
    )
}

export default LanguageSwitcher;