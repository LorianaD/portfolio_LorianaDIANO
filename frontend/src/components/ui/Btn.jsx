function Btn({ children, variant = "primary", href, to, type = "button" }) {

    const classes = {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary"
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

// Utilisation

// <Btn href="#projects">
//      Me contacter
// </Btn>

// <Btn variant="secondary">
//      Me contacter
// </Btn>