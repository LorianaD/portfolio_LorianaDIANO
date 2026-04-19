import Btn from "../../ui/Btn"
import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import { aboutCta } from "../../../data/aboutPage";
import getTranslatedData from "../../../helper/translations/getTranslatedData";

function Contact({ locale = "fr" }) {

    const content = getTranslatedData(aboutCta, locale);

    return(
        <SectionContainer>
            <SectionHeader
                title={content.title}
                description={content.description}
            />
            <SectionBody className="home-contact-body-container">
                <div className="home-contact-body-box">
                    <Btn variant="primary" to="/projects">
                        {content.ctaProjects}
                    </Btn>
                    <Btn variant="secondary" href="mailto:loriana.diano@gmail.com">
                        {content.ctaContact}
                    </Btn>
                </div>
            </SectionBody>
        </SectionContainer>
    )
}

export default Contact