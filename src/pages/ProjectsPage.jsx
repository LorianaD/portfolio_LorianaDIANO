import { useOutletContext } from "react-router";
import Hero from "../components/Sections/Projects/Hero"
import ProjectsGallery from "../components/Sections/Projects/ProjectsGallery"

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