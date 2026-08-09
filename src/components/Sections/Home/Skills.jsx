import { homeSkills } from "../../../data/homePage";
import skills from "../../../data/skills";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import SkillsCard from "../../ui/SkillsCard";

function Skills({ locale = "fr" }) {

    const sectionContent = getTranslatedData(homeSkills, locale);

    const skillsData = skills[0];

    return(
        <SectionContainer>
            <SectionHeader
                title={sectionContent.title}
                description={sectionContent.description}
            />

            <div className="skills_cards">
                <SkillsCard title="Front-end" items={Object.values(skillsData["front-end"])}/>
                <SkillsCard title="Back-end" items={Object.values(skillsData["back-end"])}/>
                <SkillsCard title={sectionContent.toolsTitle} items={Object.values(skillsData["outils"])}/>
            </div>
        </SectionContainer>
    )
}

export default Skills