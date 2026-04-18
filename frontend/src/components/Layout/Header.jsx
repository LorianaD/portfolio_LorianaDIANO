import { useState } from "react";
import { Link } from "react-router"
import MobilNavModal from "./MobilNavModal";
import menuBurger from "../../assets/images/menu-burger.png"
import links from "../../data/links";
import NavLinks from "../ui/NavLinks";
import getTranslatedData from "../../helper/translations/getTranslatedData";

function Header({ locale = "fr" }) {  

    const [ isOpen, setIsOpen ] = useState(false);

    const navLinks = getTranslatedData(links, locale);

    const menuLabels = {
        fr: "Ouvrir le menu",
        en: "Open menu",
        it: "Apri il menu"
    };

    const menuAlt = getTranslatedData(menuLabels, locale);

    function openMenu() {
        setIsOpen(true);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    return(
        <header className="header">
            <div>
                <h1 className="title_site">
                    <Link to="/">
                        Loriana DIANO
                    </Link>
                </h1>
            </div>

            <nav className="nav">
                <NavLinks links={navLinks} />
            </nav>

            <button type="button" className="nav-mobile" onClick={openMenu}>
                <img src={menuBurger} alt={menuAlt} />
            </button>

            {isOpen && (
                <MobilNavModal closeMenu={closeMenu} links={navLinks} locale={locale} />
            )}

        </header>
    )
}

export default Header