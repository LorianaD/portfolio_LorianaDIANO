import SectionTitle from "../ui/SectionTitle.jsx"
import SectionText from "../ui/SectionText.jsx"

function SectionHeader({title, description}) {
    return (
        <div className="section-header">
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionText>
                {description}
            </SectionText>
        </div>
    )
}

export default SectionHeader