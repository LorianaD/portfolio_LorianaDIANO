import SectionHero from "../../ui/SectionHero";
import Btn from "../../ui/Btn";

function Hero() {

    const eyebrow = "Mes projets";
    const title = "Mes projets Web";
    const description = (
        <>
            Découvrez une sélection de projets réalisés pendant ma formation de développeuse web.<br/>
            Ils illustrent mes compétences en{" "}<span className="important">HTML, CSS, JavaScript, React, Node.js et bases de données</span>.
        </>
    );

    return(
        <SectionHero eyebrow={eyebrow} title={title} description={description}>
            <Btn>
                Voir mes projets
            </Btn>
        </SectionHero>
    )
}

export default Hero