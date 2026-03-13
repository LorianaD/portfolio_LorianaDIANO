function SectionText({ children, className }) {
    return(
        <p className={`section-text ${className}`}>
            { children }
        </p>
    )
}

export default SectionText