import LanguageSwitcher from "../ui/LanguageSwitcher";
import footerContent from "../../data/footerContent";
import getTranslatedData from "../../helper/translations/getTranslatedData";
import socialLinks from "../../data/socialLinks";

function Footer({ locale, setLocale }) {

    const content = getTranslatedData(footerContent, locale);

    return(
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-titles">
                    <h1 className="text-[#2F5D9F]">
                        Loriana DIANO
                    </h1>
                    <p className="text-[#6B7280]">
                        {content.jobTitle}
                    </p>
                </div>
                <div className="footer-links">
                    {socialLinks.map((link) => (
                        <a key={link.href} href={link.href} 
                            target={link.external ? "_blank" : undefined} 
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div>
                    <LanguageSwitcher locale={locale} setLocale={setLocale} />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Loriana DIANO — {content.copyright}</p>
            </div>
            
        </footer>
    )
}

export default Footer