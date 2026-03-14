import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import Timeline from "../../ui/Timeline";
import careerPath from "../../../data/carrerPath";

function CareerPath() {
    const title = "Mon parcours";
    return(
        <SectionContainer>
            <SectionHeader
                title={title}
            />
            <SectionBody>
                <Timeline items={careerPath} />
            </SectionBody>
        </SectionContainer>
    )
}

export default CareerPath