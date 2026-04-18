import SectionContainer from "../../ui/SectionContainer"
import SectionHeader from "../../ui/SectionHeader"
import SectionBody from "../../ui/SectionBody"
import profile from "../../../assets/images/photo.png"
import { homeAbout } from "../../../data/homePage"
import getTranslatedData from "../../../helper/translations/getTranslatedData"
import useImageModal from "../../../hooks/useImageModal"

function About({ locale = "fr" }) {

    const content = getTranslatedData(homeAbout, locale);

    const { isOpen, openModal, closeModal } = useImageModal();

    return(
        <SectionContainer>
            <SectionHeader 
                title={content.title}
            />
            <SectionBody className="home-about-body">
                <div className="home-about-left" onClick={openModal}>
                    <img src={profile} alt="Loriana DIANO" className="home-hero-img-photo" />
                </div>
                <div className="home-about-right">

                    <div className="home-about-description">
                        
                        <div className="home-about-description-paragraphe">
                            {content.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        
                        <p>
                            <span className="block">{content.stackLabel}</span>
                            <span className="block">{content.stackValue}</span>
                        </p>
                        
                    </div>
                    
                </div>
            </SectionBody>

            {isOpen && (
                <div className="image-modal" onClick={closeModal}>
                    <img
                        src={profile}
                        alt="Loriana DIANO"
                        className="image-modal-img"
                    />
                </div>
            )}

        </SectionContainer>
    )
}

export default About