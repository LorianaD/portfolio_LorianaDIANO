import Badge from "./Badge";
import Btn from "./Btn";

function ProjectCard({img, title, description, techs=[], roles=[], icon_techs=[], status, layout = "compact", imagePosition = "left", primaryButton, secondaryButton }) {

    const articleClass = `project-card project-card--${layout} project-card--image-${imagePosition}`;
    
    return(
        <article className={articleClass}>
            {(layout === "featured" || layout === "detailed") && img && (
                <div className="project-card-visual">
                    <img src={img} alt={title} className="project-card-img"/>
                </div>
            )}
            <div className="project-card-content">
                <h3 className="project-card-content-title">
                    {title}
                </h3>

                {status && (
                    <Badge className="project-card-status">
                        {status}
                    </Badge>
                )}

                {description && (
                    <p className="project-card-description">
                        {description}
                    </p>
                )}

                {techs.length > 0 && (
                    <div className="project-card-techs">
                        {layout === "detailed" ? (
                            icon_techs.map((iconTech, index) => (
                                <div key={`${techs[index]}-${index}`} className="project-card-tech-icon">
                                    <img src={iconTech} alt={techs[index]} title={techs[index]}/>
                                </div>
                            ))
                        ) : (
                            techs.map((tech, index) => (
                                <span key={`${tech}-${index}`} className="project-card-tech">
                                    {tech}
                                </span>
                            ))
                        )}
                    </div>
                )}

                {roles.length > 0 &&  layout !== "compact" && (
                    <ul className="project-card-roles">

                        {roles.map((role, index) => (
                            <li key={`${role}-${index}`} className="project-card-role" >
                                {role}
                            </li>
                        ))}

                    </ul>   
                )}

                {(primaryButton || secondaryButton) && (
                    <div className="project-card-actions">
                        {primaryButton && (
                            <Btn
                                href={primaryButton.href}
                                to={primaryButton.to}
                                variant={primaryButton.variant || "primary"}
                            >
                                {primaryButton.label}
                            </Btn>
                        )}

                        {secondaryButton && (
                            <Btn
                                href={secondaryButton.href}
                                to={secondaryButton.to}
                                variant={secondaryButton.variant || "secondary"}
                            >
                                {secondaryButton.label}
                            </Btn>
                        )}
                    </div>
                )}

            </div>
        </article>
    )
}

export default ProjectCard

// Mettre des variants pour faire toutes les type de carte de projet, 
// dans la home comme dans la page projets. Projet principal, projets secondaires,
// image ou non, statu rôles, taille de titres en base à projet principal ou secondaire
// à noter que les projets secondaire sont dans la home page