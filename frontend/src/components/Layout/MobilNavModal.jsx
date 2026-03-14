import { Link } from "react-router"
import menuClose from "../../assets/images/close.png"
import links from "../../data/links"

function MobilNavModal({ closeMenu }) {

    return (
        <div className="mobilNavModal">
            <div className="header">

                <div>
                    <h1 className="title_site">
                        <Link to="/">
                            Loriana DIANO
                        </Link>
                    </h1>
                </div>

                <div className="menu-close" onClick={closeMenu}>
                    <img src={menuClose} alt="fermer le menu" />
                </div>

            </div>
            <div>
                <ul className="menu-body">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link to={link.to} onClick={closeMenu}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobilNavModal