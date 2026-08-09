import cvFr from "../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";
import cvEn from "../assets/documents/CV_LorianaDIANO_WebDeveloper.pdf";
import cvIt from "../assets/documents/CV_LorianaDIANO_SviluppatriceWeb.pdf";

const aboutHero = {
    fr: {
        title: "À propos",
        jobTitle: "Développeuse Web Full Stack",
        descriptions: [
            "Après un parcours en gestion, comptabilité et administration, je me suis tournée vers le développement web avec l’envie de concevoir des outils numériques utiles, structurés et adaptés à des besoins concrets.",
            "Aujourd’hui, je développe des applications front-end et back-end avec notamment React, Symfony, Node.js et MySQL. J’explore également Angular, TypeScript et Java afin d’élargir progressivement mes compétences techniques."
        ],
        target1: "Basée à Bordeaux",
        target2: "Formation Développeuse Web & Web Mobile",
        target3: "Recherche d’alternance • Évolution vers la gestion de projet",
        ctaCV: "Télécharger mon CV",
        cvName: "CV_LorianaDIANO_DeveloppeuseWeb",
        ctaHref: cvFr,
    },

    en: {
        title: "About",
        jobTitle: "Full Stack Web Developer",
        descriptions: [
            "After a background in management, accounting and administration, I transitioned into web development with the goal of designing useful, structured digital tools that address real-world needs.",
            "Today, I develop front-end and back-end applications using technologies such as React, Symfony, Node.js and MySQL. I am also exploring Angular, TypeScript and Java to gradually broaden my technical skills."
        ],
        target1: "Based in Bordeaux",
        target2: "Web & Mobile Web Developer training",
        target3: "Seeking a work-study position • Career path toward project management",
        ctaCV: "Download my CV",
        cvName: "CV_LorianaDIANO_WebDeveloper",
        ctaHref: cvEn,
    },

    it: {
        title: "Chi sono",
        jobTitle: "Sviluppatrice Web Full Stack",
        descriptions: [
            "Dopo un percorso in gestione, contabilità e amministrazione, mi sono orientata verso lo sviluppo web con l’obiettivo di creare strumenti digitali utili, strutturati e adatti a esigenze concrete.",
            "Oggi sviluppo applicazioni front-end e back-end utilizzando tecnologie come React, Symfony, Node.js e MySQL. Sto inoltre approfondendo Angular, TypeScript e Java per ampliare progressivamente le mie competenze tecniche."
        ],
        target1: "Basata a Bordeaux",
        target2: "Formazione Sviluppatrice Web & Web Mobile",
        target3: "Ricerca di un apprendistato • Evoluzione verso la gestione di progetto",
        ctaCV: "Scarica il mio CV",
        cvName: "CV_LorianaDIANO_SviluppatriceWeb",
        ctaHref: cvIt,
    }
};

const aboutCarrerPath = {
    fr: {
        title: "Mon parcours",
    },
    en: {
        title: "My journey",
    },
    it: {
        title: "Il mio percorso",
    }
};

const aboutWorkingWay = {
    fr: {
        title: "Ma manière de travailler",
    },
    en: {
        title: "My working style",
    },
    it: {
        title: "Il mio modo di lavorare",
    }
};

const aboutToolsTechs = {
    fr: {
        title: "Outils et technologies",
        toolsTitle: "Outils",
    },
    en: {
        title: "Tools & Technologies",
        toolsTitle: "Tools",
    },
    it: {
        title: "Strumenti e tecnologie",
        toolsTitle: "Strumenti",
    }
};

const aboutHobbies = {
    fr: {
        title: "Au-delà du code",
    },
    en: {
        title: "Beyond code",
    },
    it: {
        title: "Oltre il codice",
    }
};

const aboutCta = {
    fr: {
        title: "Envie d’en savoir plus ?",
        description:
            "Découvrez mes projets ou contactez-moi pour échanger autour de mon parcours, de mes réalisations et de ma recherche d’alternance.",
        ctaProjects: "Voir mes projets",
        ctaContact: "Me contacter"
    },

    en: {
        title: "Want to learn more?",
        description:
            "Explore my projects or contact me to discuss my background, my work and my search for a work-study opportunity.",
        ctaProjects: "View my projects",
        ctaContact: "Contact me"
    },

    it: {
        title: "Vuoi saperne di più?",
        description:
            "Scopri i miei progetti o contattami per parlare del mio percorso, delle mie realizzazioni e della mia ricerca di un apprendistato.",
        ctaProjects: "Vedi i miei progetti",
        ctaContact: "Contattami"
    }
};

export {
    aboutHero,
    aboutCarrerPath,
    aboutWorkingWay,
    aboutToolsTechs,
    aboutHobbies,
    aboutCta
};