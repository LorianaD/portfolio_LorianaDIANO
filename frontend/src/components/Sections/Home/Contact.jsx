import Btn from "../../ui/Btn"
import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import linkedin from "../../../assets/images/linkedin.png"
import github from "../../../assets/images/github.png"
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf"
import getTranslatedData from "../../../helper/translations/getTranslatedData"
import { homeContact } from "../../../data/homePage"

function Contact({ locale = "fr" }) {

    const content = getTranslatedData(homeContact, locale);
    
    return(
        <SectionContainer>
            <SectionHeader
                title={content.title}
                description={content.description}
            />
            <SectionBody className="home-contact-body-container">
                <div className="home-contact-body-box">
                    <Btn variant="secondary" href="mailto:loriana.diano@gmail.com">
                        loriana.diano@gmail.com
                    </Btn>
                    <div className="home-contact-body-icons">
                        <a href="https://www.linkedin.com/in/loriana-diano-33187ba8/" target="_blanket" className="icons">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/LorianaD" target="_blanket" className="icons">
                            <img src={github} alt="GitHub" />
                        </a>
                    </div>
                    <Btn variant="secondary" href={cv} download="CV_Loriana_Diano.pdf">
                        {content.ctaCV}
                    </Btn>
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Contact