import skills from "../../../data/skills";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import SkillsCardAbout from "../../ui/SkillsCardAbout";

function ToolsTechs() {

    const skillsData = skills[0];

    return (
        <SectionContainer>
            <SectionHeader
                title="Outils et technologies"
            />

            <div className="about_skills_cards">
                <SkillsCardAbout title="Front-end" items={Object.values(skillsData["front-end"])}/>
                <SkillsCardAbout title="Back-end" items={Object.values(skillsData["back-end"])}/>
                <SkillsCardAbout title="Outils" items={Object.values(skillsData["outils"])}/>
            </div>
        </SectionContainer>
    )
}

export default ToolsTechs