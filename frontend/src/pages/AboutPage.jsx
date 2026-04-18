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
            <Hero/>
            <CareerPath locale={ locale } />
            <WorkingWay/>
            <ToolsTechs/>
            <Hobbies/>
            <Cta/>
        </main>
    )
}

export default AboutPage