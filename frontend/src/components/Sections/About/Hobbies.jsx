import hobbies from "../../../data/hobbies";
import HobbiesCard from "../../ui/HobbiesCard";
import SectionBody from "../../ui/SectionBody";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";

function Hobbies() {
    const title = "Au-delà du code";
    return(
        <SectionContainer>
            <SectionHeader
                title={title}
            />
            <SectionBody>
                <div className="hobbies-cards-box">
                    {hobbies.map((item) => (
                        <HobbiesCard key={item.id} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Hobbies