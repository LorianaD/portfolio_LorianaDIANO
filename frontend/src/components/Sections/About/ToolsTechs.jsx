import skills from "../../../data/skills";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import SkillsCardAbout from "../../ui/SkillsCardAbout";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import { aboutToolsTechs } from "../../../data/aboutPage";

function ToolsTechs({ locale = "fr" }) {

    const content = getTranslatedData(aboutToolsTechs, locale);

    const skillsData = skills[0];

    return (
        <SectionContainer>
            <SectionHeader
                title={ content.title }
            />

            <div className="about_skills_cards">
                <SkillsCardAbout title="Front-end" items={Object.values(skillsData["front-end"])}/>
                <SkillsCardAbout title="Back-end" items={Object.values(skillsData["back-end"])}/>
                <SkillsCardAbout title={ content.toolsTitle } items={Object.values(skillsData["outils"])}/>
            </div>
        </SectionContainer>
    )
}

export default ToolsTechs