import Btn from "../../ui/Btn"
import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"

function Contact() {
    return(
        <SectionContainer>
            <SectionHeader
                title="Envie d’en savoir plus ?"
                description="Découvrez mes projets ou contactez-moi pour échanger autour de mon parcours, de mes réalisations et de mes objectifs professionnels."
            />
            <SectionBody className="home-contact-body-container">
                <div className="home-contact-body-box">
                    <Btn variant="primary" to="/projects">
                        Voir mes projets
                    </Btn>
                    <Btn variant="secondary">
                        Me contacter
                    </Btn>
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Contact