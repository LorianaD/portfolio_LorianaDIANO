import ProjectCard from "../../ui/ProjectCard.jsx"
import SectionContainer from "../../ui/SectionContainer.jsx"
import SectionHeader from "../../ui/SectionHeader.jsx"
import projects from "../../../data/projects.js";
import getTranslatedData from "../../../helper/translations/getTranslatedData.js";
import getTranslatedProject from "../../../helper/translations/getTranslatedProject.js";
import { homeProjects } from "../../../data/homePage.js";

function Projects({ locale = "fr" }) {

    const sectionContent = getTranslatedData(homeProjects, locale);

    const translatedProjects = projects.map((project) =>
        getTranslatedProject(project, locale)
    );

    const mainProject = translatedProjects[0];

    const secondaryProjects = translatedProjects.slice(1, 3);

    return (
        <SectionContainer id="projects">

            <SectionHeader 
                title={sectionContent.title} 
                description={sectionContent.description}
            />

            <div className="home-projects">

                {mainProject && (
                    <ProjectCard
                        {...mainProject}
                        layout="featured"
                    />
                )}

                <div className="home-projects-secondary">
                    {secondaryProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            layout="compact"
                        />
                    ))}
                </div>

            </div>

        </SectionContainer>
    )
}

export default Projects