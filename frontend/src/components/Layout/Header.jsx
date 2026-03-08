import { useState } from "react";
import { Link } from "react-router"
import MobilNavModal from "./MobilNavModal";
import menuBurger from "../../assets/images/menu-burger.png"

function Header() {  

    const [ isOpen, setIsOpen ] = useState(false);

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
                <ul className="nav-list">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    {/* <span>|</span>
                    <li>
                        <Link>
                            Projets
                        </Link>
                    </li> */}
                    {/* <span>|</span>
                    <li>
                        <Link>
                            À propos
                        </Link>
                    </li> */}
                </ul>
            </nav>
            <div className="nav-mobile" onClick={openMenu}>
                <img src={menuBurger} alt="menu" />
            </div>

            {isOpen && <MobilNavModal closeMenu={closeMenu} />}

        </header>
    )
}

export default Header