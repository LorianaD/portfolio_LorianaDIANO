import Btn from "./Btn";

function ProjectCard({ title, description, techs, link }) {
    return(
        <article>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <div>
                {techs.map((tech) => (
                    <span key={tech}>
                        {tech}
                    </span>
                ))}
            </div>
            <Btn href={link}>
                Voir le projet
            </Btn>
        </article>
    )
}

export default ProjectCard

// Mettre des variants pour faire toutes les type de carte de projet, 
// dans la home comme dans la page projets. Projet principal, projets secondaires,
// image ou non, statu rôles, taille de titres en base à projet principal ou secondaire
// à noter que les projets secondaire sont dans la home page