import { Link } from "react-router";

function NavLinks({ links }) {
    return (
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
    );
}

export default NavLinks;