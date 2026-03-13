function SectionBody({ children, className }) {
    return(
        <div className={`section-body ${className || ""}`}>
            { children }
        </div>
    )
}

export default SectionBody