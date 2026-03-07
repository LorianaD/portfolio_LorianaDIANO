import { Link } from "react-router"

function Header() {
    return(
        <header className="header">
            <div>
                <h1 className="title_site">
                    <Link to="/">
                        Loriana DIANO
                    </Link>
                </h1>
            </div>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link>
                            Projets
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link>
                            À propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header