import Btn from "../../ui/Btn"
import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import getTranslatedData from "../../../helper/translations/getTranslatedData"
import { homeContact } from "../../../data/homePage"
import { githubIcon, linkedinIcon } from "../../../assets/images"

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
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/LorianaD" target="_blanket" className="icons">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                    </div>
                    <Btn variant="secondary" href={content.ctaHref} target="_blank">
                        {content.ctaCV}
                    </Btn>
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Contact