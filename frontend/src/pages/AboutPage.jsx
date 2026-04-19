import CareerPath from "../components/Sections/About/CareerPath"
import Hero from "../components/Sections/About/Hero"
import WorkingWay from "../components/Sections/About/WorkingWay"
import ToolsTechs from "../components/Sections/About/ToolsTechs";
import Hobbies from "../components/Sections/About/Hobbies";
import Cta from "../components/Sections/About/Cta";
import { useOutletContext } from "react-router";

function AboutPage() {

    const { locale } = useOutletContext();

    return (
        <main>
            <Hero locale={ locale } />
            <CareerPath locale={ locale } />
            <WorkingWay locale={ locale } />
            <ToolsTechs locale={ locale } />
            <Hobbies locale={ locale } />
            <Cta locale={ locale } />
        </main>
    )
}

export default AboutPage