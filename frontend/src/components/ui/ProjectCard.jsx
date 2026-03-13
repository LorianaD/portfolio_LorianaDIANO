import Badge from "./Badge";
import Btn from "./Btn";

function ProjectCard({img, showImage = true, title, description, techs=[], roles=[], status, variant = "primary", primaryButton, secondaryButton }) {

    return(
        <article className={`project-card ${variant}`}>
            {showImage && img && (
                <div className="project-card-visual">
                    <img src={img} alt={title} className="project-card-img"/>
                </div>
            )}
            <div className="project-card-content">
                <h3 className="project-card-content-title">
                    {title}
                </h3>
                {description && (
                    <p className="project-card-description">
                        {description}
                    </p>
                )}
                {techs.length > 0 && (
                    <div className="project-card-techs">

                        {techs.map((tech, index) => (
                            <span key={`${tech}-${index}`} className="project-card-tech" >
                                {tech}
                            </span>
                        ))}

                    </div>   
                )}

                {roles.length > 0 && (
                    <ul className="project-card-roles">

                        {roles.map((role, index) => (
                            <li key={`${role}-${index}`} className="project-card-role" >
                                {role}
                            </li>
                        ))}

                    </ul>   
                )}

                {status && (
                    <Badge className="project-card-status">
                        {status}
                    </Badge>
                )}

                {(primaryButton || secondaryButton) && (
                    <div className="project-card-actions">
                        {primaryButton && (
                            <Btn
                                href={primaryButton.href}
                                to={primaryButton.to}
                                variant="primary"
                            >
                                {primaryButton.label}
                            </Btn>
                        )}

                        {secondaryButton && (
                            <Btn
                                href={secondaryButton.href}
                                to={secondaryButton.to}
                                variant="secondary"
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