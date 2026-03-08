import ProjectCard from "../../ui/ProjectCard.jsx"
import SectionContainer from "../../ui/SectionContainer.jsx"
import SectionHeader from "../../ui/SectionHeader.jsx"
import projects from "../../../data/projects.js";

function Projects() {

    const mainProject = projects[0];

    const secondaryProjects = projects.slice(1, 3);

    return (
        <SectionContainer>

            <SectionHeader 
                title="Projets" 
                description="Plateformes web conçues avec une approche produit, une architecture structurée et une attention portée à l’expérience utilisateur." 
            />

            <div className="home-projects">

                {mainProject && (
                    <ProjectCard
                        {...mainProject}
                        showImage={true}
                    />
                )}

                <div className="home-projects-secondary">
                    {secondaryProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            showImage={false}
                        />
                    ))}
                </div>

            </div>

        </SectionContainer>
    )
}

export default Projects