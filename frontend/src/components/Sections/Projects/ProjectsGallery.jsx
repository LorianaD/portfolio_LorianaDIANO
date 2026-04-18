import SectionContainer from "../../ui/SectionContainer"
import projects from "../../../data/projects";
import ProjectCard from "../../ui/ProjectCard";
import getTranslatedProject from "../../../helper/translations/getTranslatedProject";

function ProjectsGallery({ locale = "fr" }) {

    const translatedProjects = projects.map((project) =>
        getTranslatedProject(project, locale)
    );

    return (
        <SectionContainer id="projects">
                {translatedProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                        layout="detailed"
                        imagePosition={index % 2 === 0 ? "left" : "right"}
                    />
                ))}            
        </SectionContainer>
    )
}

export default ProjectsGallery