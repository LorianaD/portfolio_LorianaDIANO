import { aboutHobbies } from "../../../data/aboutPage";
import hobbies from "../../../data/hobbies";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import getTranslatedHobby from "../../../helper/translations/getTranslatedHobby";
import HobbiesCard from "../../ui/HobbiesCard";
import SectionBody from "../../ui/SectionBody";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";

function Hobbies({ locale = "fr" }) {

    const content = getTranslatedData(aboutHobbies, locale);

    const items = hobbies.map((item) =>
        getTranslatedHobby(item, locale)
    );
    
    return(
        <SectionContainer>
            <SectionHeader
                title={content.title}
            />
            <SectionBody>
                <div className="hobbies-cards-box">
                    {items.map((item) => (
                        <HobbiesCard key={item.id} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Hobbies