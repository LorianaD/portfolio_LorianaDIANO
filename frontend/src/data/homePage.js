import cvFr from "../assets/documents/CV_LorianaDIANO_DeveloppeuseWeb.pdf";
import cvEn from "../assets/documents/CV_LorianaDIANO_WebDeveloper.pdf";
import cvIt from "../assets/documents/CV_LorianaDIANO_SviluppatriceWeb.pdf";

const homeHero = {
    fr: {
        jobTitle: "Développeuse Web Full Stack",
        stacks: "Front-end • Back-end • Bases de données",
        description:
            "Développeuse web alliant rigueur organisationnelle et vision produit, je conçois des applications structurées, utiles et évolutives.",
        ctaProjects: "Voir mes projets",
        ctaCV: "Télécharger mon CV",
        cvName: "CV_LorianaDIANO_DeveloppeuseWeb",
        ctaHref: cvFr,
    },

    en: {
        jobTitle: "Full Stack Web Developer",
        stacks: "Front-end • Back-end • Databases",
        description:
            "Web developer combining organizational rigor and product vision, I design structured, useful and scalable applications.",
        ctaProjects: "View my projects",
        ctaCV: "Download my CV",
        cvName: "CV_LorianaDIANO_WebDeveloper",
        ctaHref: cvEn,
    },

    it: {
        jobTitle: "Sviluppatrice Web Full Stack",
        stacks: "Front-end • Back-end • Database",
        description:
            "Sviluppatrice web che unisce rigore organizzativo e visione del prodotto, progetto applicazioni strutturate, utili e scalabili.",
        ctaProjects: "Vedi i miei progetti",
        ctaCV: "Scarica il mio CV",
        cvName: "CV_LorianaDIANO_SviluppatriceWeb",
        ctaHref: cvIt,
    },
};

const homeProjects = {
    fr: {
        title: "Projets",
        description:
            "Découvrez une sélection de projets personnels et réalisés au cours de ma formation, développés autour de problématiques concrètes et de différentes architectures web.",
    },

    en: {
        title: "Projects",
        description:
            "Discover a selection of personal projects and projects developed during my training, built around real-world needs and different web architectures.",
    },

    it: {
        title: "Progetti",
        description:
            "Scopri una selezione di progetti personali e realizzati durante la mia formazione, sviluppati attorno a esigenze concrete e diverse architetture web.",
    },
};

const homeSkills = {
    fr: {
        title: "Compétences",
        description:
            "Technologies et outils que j’utilise pour concevoir des applications web modernes, structurées et évolutives.",
        toolsTitle: "Outils",
    },

    en: {
        title: "Skills",
        description:
            "Technologies and tools I use to build modern, structured and scalable web applications.",
        toolsTitle: "Tools",
    },

    it: {
        title: "Competenze",
        description:
            "Tecnologie e strumenti che utilizzo per progettare applicazioni web moderne, strutturate e scalabili.",
        toolsTitle: "Strumenti",
    },
};

const homeAbout = {
    fr: {
        title: "À propos",
        paragraphs: [
            "Développeuse web full-stack, je conçois des applications en travaillant aussi bien sur les interfaces utilisateur que sur la logique métier, les API et les bases de données.",
            "Mon parcours en gestion et comptabilité m’a apporté une forte rigueur organisationnelle, une capacité d’analyse et une bonne compréhension des besoins métiers.",
            "Je développe aujourd’hui plusieurs projets utilisant notamment React, Symfony, Node.js, MySQL, Angular et Java, avec une attention particulière portée à la structure du code et à l’expérience utilisateur.",
        ],
        stackLabel: "Stack principale :",
        stackValue: "React • Symfony • Node.js • MySQL • Angular • Java",
    },

    en: {
        title: "About",
        paragraphs: [
            "As a full-stack web developer, I build applications by working on user interfaces, business logic, APIs and databases.",
            "My background in management and accounting has given me strong organizational skills, analytical abilities and a solid understanding of business needs.",
            "I currently develop several projects using technologies such as React, Symfony, Node.js, MySQL, Angular and Java, with particular attention to code structure and user experience.",
        ],
        stackLabel: "Main stack:",
        stackValue: "React • Symfony • Node.js • MySQL • Angular • Java",
    },

    it: {
        title: "Chi sono",
        paragraphs: [
            "Come sviluppatrice web full-stack, progetto applicazioni lavorando sia sulle interfacce utente sia sulla logica applicativa, sulle API e sui database.",
            "Il mio percorso in gestione e contabilità mi ha dato un forte rigore organizzativo, capacità di analisi e una buona comprensione delle esigenze aziendali.",
            "Attualmente sviluppo diversi progetti utilizzando tecnologie come React, Symfony, Node.js, MySQL, Angular e Java, con particolare attenzione alla struttura del codice e all’esperienza utente.",
        ],
        stackLabel: "Stack principale:",
        stackValue: "React • Symfony • Node.js • MySQL • Angular • Java",
    },
};

const homeContact = {
    fr: {
        title: "Contact",
        description:
            "Je recherche actuellement une alternance en développement web afin de poursuivre mon parcours et mettre mes compétences full-stack au service de projets concrets.",
        ctaCV: "Télécharger mon CV",
        ctaHref: cvFr,
    },

    en: {
        title: "Contact",
        description:
            "I am currently looking for a work-study opportunity in web development to continue my journey and apply my full-stack skills to real-world projects.",
        ctaCV: "Download my CV",
        ctaHref: cvEn,
    },

    it: {
        title: "Contatto",
        description:
            "Sono attualmente alla ricerca di un’opportunità in alternanza nello sviluppo web per continuare il mio percorso e mettere le mie competenze full-stack al servizio di progetti concreti.",
        ctaCV: "Scarica il mio CV",
        ctaHref: cvIt,
    },
};

export {
    homeHero,
    homeProjects,
    homeSkills,
    homeAbout,
    homeContact,
};