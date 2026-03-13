import Btn from "../../ui/Btn"
import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import linkedin from "../../../assets/images/linkedin.png"
import github from "../../../assets/images/github.png"
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf"

function Contact() {
    return(
        <SectionContainer>
            <SectionHeader
                title="Contact"
                description="Je suis actuellement à la recherche d’une alternanceou d’une opportunité pour poursuivre mon évolutiondans le développement web."
            />
            <SectionBody className="home-contact-body-container">
                <div className="home-contact-body-box">
                    <Btn variant="secondary" href="mailto:loriana.diano@gmail.com">
                        loriana.diano@gmail.com
                    </Btn>
                    <a href="https://www.linkedin.com/in/loriana-diano-33187ba8/" className="icons">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/LorianaD" className="icons">
                        <img src={github} alt="GitHub" />
                    </a>
                    <Btn variant="secondary" href={cv} download="CV_Loriana_Diano.pdf">
                        Télécharger mon CV
                    </Btn>
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Contact