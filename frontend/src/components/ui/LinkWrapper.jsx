import { NavLink } from "react-router";

function LinkWrapper({ to, href, children, className = "" }) {

    // Lien externe
    if (href) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {children}
            </a>
        );
    }

    // Lien interne
    if (to) {
        return (
            <NavLink to={to} className={className}>
                {children}
            </NavLink>
        );
    }

    // fallback
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default LinkWrapper;