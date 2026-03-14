import SectionContainer from "../../ui/SectionContainer"
import projects from "../../../data/projects";
import ProjectCard from "../../ui/ProjectCard";

function ProjectsGallery() {
    return (
        <SectionContainer id="projects">
                {projects.map((project, index) => (
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