import { Link } from "react-router"

function Header() {
    return(
        <header>
            <div>
                <h1>
                    <Link to="/">
                        Loriana DIANO
                    </Link>
                </h1>
            </div>
            <nav>
                <ul>
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