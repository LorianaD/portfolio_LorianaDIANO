import { Link } from "react-router"
import menuClose from "../../assets/images/close.png"

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
                    <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
                    {/* <li><Link onClick={closeMenu}>Projets</Link></li> */}
                    {/* <li><Link onClick={closeMenu}>À propos</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default MobilNavModal