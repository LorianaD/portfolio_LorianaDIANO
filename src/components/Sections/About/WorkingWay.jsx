import SectionBody from "../../ui/SectionBody";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import WorkingWayCard from "../../ui/WorkingWayCard";
import workingWay from "../../../data/workingWay";
import { aboutWorkingWay } from "../../../data/aboutPage";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import getTranslatedHobby from "../../../helper/translations/getTranslatedHobby";

function WorkingWay({ locale = "fr" }) {

    const content = getTranslatedData(aboutWorkingWay, locale);

    const items = workingWay.map((item) =>
        getTranslatedHobby(item, locale)
    );

    return(
        <SectionContainer>
            <SectionHeader
                title={content.title}
            />
            <SectionBody>
                <div className="working-way-list">
                    {items.map((item) => (
                        <WorkingWayCard key={item.id} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default WorkingWay