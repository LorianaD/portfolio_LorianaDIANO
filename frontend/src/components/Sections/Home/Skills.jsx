import skills from "../../../data/skills";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import SkillsCard from "../../ui/SkillsCard";

function Skills() {

    const skillsData = skills[0];

    return(
        <SectionContainer>
            <SectionHeader
                title="Compétences"
                description="Technologies et outils que j’utilise pour concevoir des applications web modernes et structurées."
            />

            <div className="skills_cards">
                <SkillsCard title="Front-end" items={Object.values(skillsData["front-end"])}/>
                <SkillsCard title="Back-end" items={Object.values(skillsData["back-end"])}/>
                <SkillsCard title="Outils" items={Object.values(skillsData["outils"])}/>
            </div>
        </SectionContainer>
    )
}

export default Skills