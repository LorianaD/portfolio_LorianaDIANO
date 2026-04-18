import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import Timeline from "../../ui/Timeline";
import careerPath from "../../../data/carrerPath";
import getTranslatedData from "../../../helper/translations/getTranslatedData";

function CareerPath({ locale = "fr" }) {
    const titles = {
        fr: "Mon parcours",
        en: "My journey",
        it: "Il mio percorso"
    };
    const title = getTranslatedData(titles, locale);
    const items = getTranslatedData(careerPath, locale);
    return(
        <SectionContainer>
            <SectionHeader title={title} />
            <SectionBody>
                <Timeline items={items} />
            </SectionBody>
        </SectionContainer>
    )
}

export default CareerPath