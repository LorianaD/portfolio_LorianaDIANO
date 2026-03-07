function Btn({ children, variant = "primary", href, to, type = "button" }) {

    const classes = {
        primary: "btn-primary",
        secondary: "btn-secondary"
    }

    if (href) {
        return (
            <a href={href} className={classes[variant]}>
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link to={to} className={classes[variant]}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} className={classes[variant]}>
            { children }
        </button>
    )
}

export default Btn