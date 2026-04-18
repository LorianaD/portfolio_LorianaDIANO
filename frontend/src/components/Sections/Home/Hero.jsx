import Btn from "../../ui/Btn";
import profile from "../../../assets/images/photo.png";
import cv from "../../../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";
import { homeHero } from "../../../data/homePage";
import getTranslatedData from "../../../helper/translations/getTranslatedData";
import useImageModal from "../../../hooks/useImageModal";

function Hero({ locale = "fr" }) {

    const projects = "/projects";
    const content = getTranslatedData(homeHero, locale);
    const { isOpen, openModal, closeModal } = useImageModal();

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
                        {content.jobTitle}
                    </h2>
                    <p className="home-hero-stacks">
                        {content.stacks}
                    </p>
                    <p className="home-hero-description">
                        {content.description}
                    </p>
                    <div className="home-hero-btns-container">
                        <Btn to={projects}>
                            {content.ctaProjects}
                        </Btn>
                        <Btn variant="secondary" href={cv} download="CV_Loriana_Diano.pdf">
                            {content.ctaCV}
                        </Btn>
                    </div>
                    
                </div>
            </div>

            {/* Right */}
            <div className="home-hero-right">
                <div className="home-hero-img" onClick={openModal}>
                    <img src={profile} alt="Loriana DIANO" className="home-hero-img-photo" />
                </div>
                <div  className="home-hero-ellipse" />                
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

        </section>
    )
}

export default Hero