import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import profile from "../../../assets/images/photo.png"

function About() {
    return(
        <SectionContainer>
            <SectionHeader 
                title="À propos"
            />
            <SectionBody className="home-about-body">
                <div className="home-about-left">
                    <img src={profile} alt="Loriana DIANO" className="home-hero-img-photo" />
                </div>
                <div className="home-about-right">

                    <div className="home-about-description">
                        
                        <div className="home-about-description-paragraphe">
                            <p>Développeuse web en formation RNCP, je conçois des applications web structurées et évolutives.</p>
                            <p>Mon parcours en gestion et comptabilité m’a apporté une forte rigueur organisationnelle et une bonne compréhension des besoins métiers.</p>
                            <p>Aujourd’hui, je mets ces compétences au service du développement web afin de créer des plateformes utiles, fiables et bien conçues.</p>
                        </div>
                        
                        <p>
                            <span className="block">Stack principale :</span>
                            <span className="block">React • Node.js • Symfony • MySQL</span>
                        </p>
                        
                    </div>
                    
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default About