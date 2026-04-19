import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import Timeline from "../../ui/Timeline";
import careerPath from "../../../data/carrerPath";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import { aboutCarrerPath } from "../../../data/aboutPage";

function CareerPath({ locale = "fr" }) {

    const titles = getTranslatedData( aboutCarrerPath, locale);
    const items = getTranslatedData(careerPath, locale);
    
    return(
        <SectionContainer>
            <SectionHeader title={titles.title} />
            <SectionBody>
                <Timeline items={items} />
            </SectionBody>
        </SectionContainer>
    )
}

export default CareerPath