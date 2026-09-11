import { useOutletContext } from "react-router";
import { CareerPath, Cta, Hero, Hobbies, ToolsTechs, WorkingWay } from "../components/Sections/About";

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