function SectionHeroHeader({ eyebrow, title, description }) {
    return (
        <div className="hero-header">
            
            {eyebrow && (
                <div className="hero-eyebrow">
                    <p>{ eyebrow }</p>
                </div>
            )}

            {title && (
                <div className="hero-title">
                    <h2>{ title }</h2>
                </div>
            )}

            {description && (
                <div className="hero-description">
                    <p>{ description }</p>
                </div>
            )}

        </div>
    )
}

export default SectionHeroHeader