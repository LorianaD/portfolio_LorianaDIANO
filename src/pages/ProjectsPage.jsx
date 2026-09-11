import { useOutletContext } from "react-router";
import { Hero, ProjectsGallery } from "../components/Sections/Projects";

function ProjectsPage() {

    const { locale } = useOutletContext();

    return(
        <main>
            <Hero locale={locale}/>
            <ProjectsGallery locale={locale}/>
        </main>
    )
}

export default ProjectsPage