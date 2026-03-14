import SectionBody from "../../ui/SectionBody";
import SectionContainer from "../../ui/SectionContainer";
import SectionHeader from "../../ui/SectionHeader";
import WorkingWayCard from "../../ui/WorkingWayCard";
import workingWay from "../../../data/workingWay";

function WorkingWay() {
    const title = "Ma manière de travailler";
    return(
        <SectionContainer>
            <SectionHeader
                title={title}
            />
            <SectionBody>
                <div className="working-way-list">
                    {workingWay.map((item) => (
                        <WorkingWayCard key={item.id} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default WorkingWay