import SectionHero from "../../ui/SectionHero";
import profile from "../../../assets/images/photo.png";
import Badge from "../../ui/Badge";
import Btn from "../../ui/Btn";
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";

function Hero() {

    const title = "À propos";

    return (
        <SectionHero title={title}>
            <div className="section-body about-hero-container">
                <div className="about-hero-photo-container">
                    <div className="about-hero-photo-box">
                        <img src={profile} alt="Photo de Loriana DIANO" className="about-hero-photo-img"/>
                    </div>
                </div>
                <div className="about-hero-text-container">
                    <div className="about-hero-text-titles">
                        <h1 className="about-hero-text-title">Loriana DIANO</h1>
                        <h2 className="about-hero-text-title-2">Développeuse Web et Web Mobile</h2>
                    </div>
                    <div className="about-hero-text-description">
                        <p>
                            Après un parcours en gestion et administration, je me suis tournée vers le développement web avec l’envie de concevoir des outils numériques utiles, structurés et accessibles.
                        </p>
                        <p>
                            Aujourd’hui, je développe des interfaces et des fonctionnalités web avec React, Node.js, PHP et MySQL, tout en cultivant une approche rigoureuse de l’organisation, du travail en équipe et de la conception de projet.
                        </p>
                    </div>
                    <div className="about-hero-text-badges">
                        <Badge>
                            Basée à Bordeaux
                        </Badge>
                        <Badge>
                            Formation Développeuse Web & Web Mobile
                        </Badge>
                        <Badge>
                            Objectif : alternance / Cheffe de projet
                        </Badge>
                    </div>
                    <Btn variant="primary" href={cv} download="CV_Loriana_Diano.pdf">
                        Télécharger mon CV
                    </Btn>
                </div>
            </div>
        </SectionHero>
    )
}

export default Hero