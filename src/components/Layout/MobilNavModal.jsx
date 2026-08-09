import { Link } from "react-router"
import menuClose from "../../assets/images/close.png"
import getTranslatedData from "../../helper/translations/getTranslatedData";

function MobilNavModal({ closeMenu, links = [], locale = "fr" }) {

    const menuLabels = {
        fr: "Fermer le menu",
        en: "Close menu",
        it: "Chiudi il menu"
    };

    const menuAlt = getTranslatedData(menuLabels, locale);

    return (
        <div className="mobilNavModal">
            <div className="header">

                <div>
                    <h1 className="title_site">
                        <Link to="/" onClick={closeMenu}>
                            Loriana DIANO
                        </Link>
                    </h1>
                </div>

                <button className="menu-close" onClick={ closeMenu }>
                    <img src={ menuClose } alt={ menuAlt } />
                </button>

            </div>
            <div>
                <ul className="menu-body">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} onClick={ closeMenu }>
                                { link.name }
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobilNavModal