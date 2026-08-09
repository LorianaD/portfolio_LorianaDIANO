import SectionHero from "../../ui/SectionHero";
import Btn from "../../ui/Btn";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import { projectsHero } from "../../../data/projectsPage";

function Hero({ locale = "fr" }) {

    const content = getTranslatedData(projectsHero, locale);

    const description = (
        <>
            {content.description1}<br/>
            {content.description2}{" "}
            <span className="important">
                {content.highlight}
            </span>.
        </>
    );

    return(
        <SectionHero eyebrow={content.eyebrow} title={content.title} description={description}>
            <Btn href={"https://github.com/LorianaD"}>
                {content.cta}
            </Btn>
        </SectionHero>
    )
}

export default Hero