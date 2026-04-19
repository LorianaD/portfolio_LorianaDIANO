import SectionHero from "../../ui/SectionHero";
import profile from "../../../assets/images/photo.png";
import Badge from "../../ui/Badge";
import Btn from "../../ui/Btn";
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";
import { aboutHero } from "../../../data/aboutPage";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import useImageModal from "../../../hooks/useImageModal";

function Hero({ locale = "fr" }) {

    const content = getTranslatedData(aboutHero, locale);

    const { isOpen, openModal, closeModal } = useImageModal();

    return (
        <SectionHero title={content.title}>

            <div className="section-body about-hero-container">
                <div className="about-hero-photo-container">
                    <div className="about-hero-photo-box" onClick={openModal}>
                        <img src={profile} alt="Photo de Loriana DIANO" className="about-hero-photo-img"/>
                    </div>
                </div>
                <div className="about-hero-text-container">
                    <div className="about-hero-text-titles">
                        <h1 className="about-hero-text-title">Loriana DIANO</h1>
                        <h2 className="about-hero-text-title-2">{content.jobTitle}</h2>
                    </div>
                    <div className="about-hero-text-description">
                        {content.descriptions.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="about-hero-text-badges">
                        <Badge>
                            {content.target1}
                        </Badge>
                        <Badge>
                            {content.target2}
                        </Badge>
                        <Badge>
                            {content.target3}
                        </Badge>
                    </div>
                    <Btn variant="primary" href={cv} download="CV_Loriana_Diano.pdf">
                        {content.ctaCV}
                    </Btn>
                </div>
            </div>

            {isOpen && (
                <div className="image-modal" onClick={closeModal}>
                    <img
                        src={profile}
                        alt="Loriana DIANO"
                        className="image-modal-img"
                    />
                </div>
            )}

        </SectionHero>
    )
}

export default Hero