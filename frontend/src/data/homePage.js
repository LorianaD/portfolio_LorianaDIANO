import cvFr from "../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";
import cvEn from "../assets/documents/CV_LorianaDIANO_WebDeveloper.pdf";
import cvIt from "../assets/documents/CV_LorianaDIANO_SviluppatriceWeb.pdf";

const homeHero = {
    fr: {
        jobTitle: "Développeuse Web",
        stacks: "Front-end • Back-end • Bases de données",
        description:
            "Développeuse web alliant rigueur organisationnelle et vision produit, je conçois des plateformes structurées, performantes et évolutives.",
        ctaProjects: "Voir mes projets",
        ctaCV: "Télécharger mon CV",
        cvName: "CV_LorianaDIANO_DeveloppeuseWeb",
        ctaHref: cvFr,
    },

    en: {
        jobTitle: "Web Developer",
        stacks: "Front-end • Back-end • Databases",
        description:
            "Web developer combining organizational rigor and product vision, I design structured, scalable and high-performance platforms.",
        ctaProjects: "View my projects",
        ctaCV: "Download my CV",
        cvName: "CV_LorianaDIANO_WebDeveloper",
        ctaHref: cvEn,
    },

    it: {
        jobTitle: "Sviluppatrice Web",
        stacks: "Front-end • Back-end • Database",
        description:
            "Sviluppatrice web che unisce rigore organizzativo e visione prodotto, progetto piattaforme strutturate, performanti ed evolutive.",
        ctaProjects: "Vedi i miei progetti",
        ctaCV: "Scarica il mio CV",
        cvName: "CV_LorianaDIANO_SviluppatriceWeb",
        ctaHref: cvIt,
    }
};

const homeProjects = {
    fr: {
        title: "Projets",
        description: "Plateformes web conçues avec une approche produit, une architecture structurée et une attention portée à l’expérience utilisateur."
    },
    en: {
        title: "Projects",
        description: "Web platforms designed with a product mindset, structured architecture and attention to user experience."
    },
    it: {
        title: "Progetti",
        description: "Piattaforme web progettate con un approccio prodotto, un’architettura strutturata e attenzione all’esperienza utente."
    }
}

const homeSkills = {
    fr: {
        title: "Compétences",
        description: "Technologies et outils que j’utilise pour concevoir des applications web modernes et structurées.",
        toolsTitle: "Outils"
    },
    en: {
        title: "Skills",
        description: "Technologies and tools I use to build modern and well-structured web applications.",
        toolsTitle: "Tools"
    },
    it: {
        title: "Competenze",
        description: "Tecnologie e strumenti che utilizzo per progettare applicazioni web moderne e strutturate.",
        toolsTitle: "Strumenti"
    }    
}

const homeAbout = {
    fr: {
        title: "À propos",
        paragraphs: [
            "Développeuse web en formation RNCP, je conçois des applications web structurées et évolutives.",
            "Mon parcours en gestion et comptabilité m’a apporté une forte rigueur organisationnelle et une bonne compréhension des besoins métiers.",
            "Aujourd’hui, je mets ces compétences au service du développement web afin de créer des plateformes utiles, fiables et bien conçues."
        ],
        stackLabel: "Stack principale :",
        stackValue: "React • Node.js • Symfony • MySQL"
    },
    en: {
        title: "About",
        paragraphs: [
            "As a web developer currently training through an RNCP certification, I build structured and scalable web applications.",
            "My background in management and accounting has given me strong organizational skills and a solid understanding of business needs.",
            "Today, I use these skills in web development to create useful, reliable and well-designed platforms."
        ],
        stackLabel: "Main stack:",
        stackValue: "React • Node.js • Symfony • MySQL"
    },
    it: {
        title: "Chi sono",
        paragraphs: [
            "Sviluppatrice web in formazione RNCP, progetto applicazioni web strutturate e scalabili.",
            "Il mio percorso in gestione e contabilità mi ha dato un forte rigore organizzativo e una buona comprensione delle esigenze aziendali.",
            "Oggi metto queste competenze al servizio dello sviluppo web per creare piattaforme utili, affidabili e ben progettate."
        ],
        stackLabel: "Stack principale:",
        stackValue: "React • Node.js • Symfony • MySQL"
    }
}

const homeContact = {
    fr: {
        title: "Contact",
        description: "Je suis actuellement à la recherche d’une alternance ou d’une opportunité pour poursuivre mon évolution dans le développement web.",
        ctaCV: "Télécharger mon CV",
        ctaHref: cvFr,
    },
    en: {
        title: "Contact",
        description: "I am currently looking for an apprenticeship or an opportunity to continue growing as a web developer.",
        ctaCV: "Download my CV",
        ctaHref: cvEn,
    },
    it: {
        title: "Contatto",
        description: "Sono attualmente alla ricerca di un apprendistato o di un’opportunità per continuare a crescere nello sviluppo web.",
        ctaCV: "Scarica il mio CV",
        ctaHref: cvIt,
    }
}

export { homeHero, homeProjects, homeSkills, homeAbout, homeContact };