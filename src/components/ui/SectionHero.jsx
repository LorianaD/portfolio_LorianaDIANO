import SectionHeroHeader from "./SectionHeroHeader"

function SectionHero({ eyebrow, title, description, children, className = "" }) {
    return(
        <section className={`hero-container ${className}`}>
            {(eyebrow || title || description) && (
                <SectionHeroHeader eyebrow={ eyebrow } title={ title } description={ description }/>
            )}
            { children }
        </section>
    )
}

export default SectionHero