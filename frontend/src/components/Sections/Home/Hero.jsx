import Btn from "../../ui/Btn"
import profile from "../../../assets/images/photo.png"
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf"

function Hero({}) {

    const projects = "/projects";

    return (
        <section className="home-hero-container">

            {/* Left */}
            <div className="home-hero-left">
                <div className="home-hero-title-container">
                    <h1 className="home-hero-title">
                        Loriana DIANO
                    </h1>
                    <div className="home-hero-line"/>
                </div>
                <div className="home-hero-text-container">
                    <h2 className="home-hero-text-title">
                        Développeuse Web
                    </h2>
                    <p className="home-hero-stacks">
                        React • Node • Symfony • MySQL
                    </p>
                    <p className="home-hero-description">
                        Développeuse web alliant rigueur organisationnelle et vision produit, je conçois des plateformes structurées, performantes et évolutives.
                    </p>
                    <div className="home-hero-btns-container">
                        <Btn href={projects}>
                            Voir mes projets
                        </Btn>
                        <Btn variant="secondary" href={cv} download="CV_Loriana_Diano.pdf">
                            Télécharger mon CV
                        </Btn>
                    </div>
                    
                </div>
            </div>

            {/* Right */}
            <div className="home-hero-right">
                <div className="home-hero-img">
                    <img src={profile} alt="Loriana DIANO" className="home-hero-img-photo" />
                </div>
                <div  className="home-hero-ellipse" />                
            </div>

        </section>
    )
}

export default Hero