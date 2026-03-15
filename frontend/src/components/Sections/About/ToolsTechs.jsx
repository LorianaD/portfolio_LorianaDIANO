import skills from "../../../data/skills";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import SkillsCard from "../../ui/SkillsCard";

function ToolsTechs() {

    const skillsData = skills[0];

    return (
        <SectionContainer>
            <SectionHeader
                title="Outils et technologies"
            />

            <div className="about_skills_cards">
                <SkillsCard title="Front-end" items={Object.values(skillsData["front-end"])}/>
                <SkillsCard title="Back-end" items={Object.values(skillsData["back-end"])}/>
                <SkillsCard title="Outils" items={Object.values(skillsData["outils"])}/>
            </div>
        </SectionContainer>
    )
}

export default ToolsTechs