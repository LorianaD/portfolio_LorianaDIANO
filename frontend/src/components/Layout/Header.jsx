import { useState } from "react";
import { Link } from "react-router"
import MobilNavModal from "./MobilNavModal";
import menuBurger from "../../assets/images/menu-burger.png"
import links from "../../data/links";

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
                    {links.map((link, index) => (
                        <li key={link.to} className="nav-item">
                            <Link to={link.to}>
                                {link.name}
                            </Link>
                            {index < links.length - 1 && (
                                <span className="separator">|</span>
                            )}
                        </li>
                    ))}
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