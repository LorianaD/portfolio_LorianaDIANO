import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import tailwind from "../assets/images/tailwind.png";
import symfony from "../assets/images/symfony.png";
import mysql from "../assets/images/mysql.png";
import html from "../assets/images/html.png";
import js from "../assets/images/javascript.png";
import css from "../assets/images/css.png";

import defaultImg from "../assets/images/screenshot/defaultScreen.png";

import marsaiImg from "../assets/images/screenshot/screenshotMarsai.png";
import protegeoImg from "../assets/images/screenshot/screenshotProtegeo.png";
import calculatorImg from "../assets/images/screenshot/screenshotCalculator.png";
import vitatrackImg from "../assets/images/screenshot/screenshotVitatrack.png";
import eventupImg from "../assets/images/screenshot/screenshotEventUp.png";

const projects = [
    {
        id: 1,
        variant: "primary",
        img: marsaiImg,
        techs: ["React", "Node", "MySQL", "Tailwind"],
        icon_techs: [react, node, mysql, tailwind],
        secondaryButton: {
            href: "https://github.com/LorianaD/project_marsai-bordeaux-groupe_LVETM",
            variant: "secondary",
        },
        translations: {
            fr: {
                title: "MarsAI – Plateforme de festival IA",
                description:
                    "Conception et développement d’une plateforme web complète dédiée à un festival international de courts-métrages générés par l’IA. Projet client réalisé en équipe dans un cadre compétitif inter-écoles, classé dans le top 4 lors de la restitution finale.",
                status: "Top 4 – projet client",
                roles: [
                    "Conception CMS full-stack",
                    "Développement front-end",
                    "Gestion BDD & contenus dynamiques",
                    "Coordination technique (Scrum)",
                ],
                secondaryButtonLabel: "Voir le code",
            },
            en: {
                title: "MarsAI – AI Film Festival Platform",
                description: "Design and development of a complete web platform dedicated to an international festival of AI-generated short films. Client project developed in a competitive inter-school environment, ranked among the top 4 during the final presentation.",
                status: "Top 4 - client project",
                roles: [
                    "Full-stack CMS design",
                    "Front-end development",
                    "Database and dynamic content management",
                    "Technical coordination (Scrum)",
                ],
                secondaryButtonLabel: "View code",
            },
            it: {
                title: "MarsAI – Piattaforma per festival IA",
                description: "Progettazione e sviluppo di una piattaforma web completa dedicata a un festival internazionale di cortometraggi generati dall’IA. Progetto cliente sviluppato in un contesto competitivo inter-scuole, classificato tra i primi 4 durante la presentazione finale.",
                status: "Top 4 - progetto cliente",
                roles: [
                    "Progettazione CMS full-stack",
                    "Sviluppo front-end",
                    "Gestione database e contenuti dinamici",
                    "Coordinamento tecnico (Scrum)",
                ],
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 2,
        variant: "secondary",
        img: protegeoImg,
        techs: ["React", "Symfony", "MySQL"],
        icon_techs: [react, symfony, mysql],
        primaryButton: {
            href: "https://www.protegeo.dianoholding.com",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/protegeo-showcase",
            variant: "secondary",
        },
        translations: {
            fr: {
                title: "Protégéo – Plateforme de gestion tutelle & curatelle",
                description:
                    "Application web destinée à faciliter la gestion administrative des mesures de protection juridique (tutelle, curatelle).",
                status: "En développement",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },
            en: {
                title: "Protegeo – Guardianship & Curatorship Management Platform",
                description:
                    "Web application designed to simplify the administrative management of legal protection measures.",
                status: "In development",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },
            it: {
                title: "Protegeo – Piattaforma di gestione tutela e curatela",
                description:
                    "Applicazione web pensata per facilitare la gestione amministrativa delle misure di protezione giuridica.",
                status: "In sviluppo",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 3,
        variant: "secondary",
        img: vitatrackImg,
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql],
        primaryButton: {
            href: "https://vitatrack.dianoholding.com/",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/projet_afit",
            variant: "secondary",
        },
        translations: {
            fr: {
                title: "Projet VitaTrack",
                description:
                    "Application web de suivi de données santé (poids, IMC, évolution) avec gestion des utilisateurs et des mesures.",
                status: "En développement",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },
            en: {
                title: "VitaTrack Project",
                description:
                    "Web application for health data tracking (weight, BMI, progress) with user and measurements management.",
                status: "In development",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },
            it: {
                title: "Progetto VitaTrack",
                description:
                    "Applicazione web per il monitoraggio dei dati di salute (peso, BMI, evoluzione) con gestione utenti e misurazioni.",
                status: "In sviluppo",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 4,
        variant: "secondary",
        img: eventupImg,
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql, tailwind],
        primaryButton: {
            href: "https://event-ia.netlify.app/",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/projet-eventup",
            variant: "secondary",
        },
        translations: {
            fr: {
                title: "Projet EventUp",
                description:
                    "Développement d’une application web full-stack axée sur la structuration du projet et la factorisation. Mise en place d’un système d’authentification et d’upload de médias.",
                status: "En développement",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },
            en: {
                title: "EventUp Project",
                description:
                    "Development of a full-stack web application focused on project structure and code factorization, including authentication and media upload.",
                status: "In development",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },
            it: {
                title: "Progetto EventUp",
                description:
                    "Sviluppo di un’applicazione web full-stack focalizzata sulla strutturazione del progetto e sulla fattorizzazione del codice, con autenticazione e upload di media.",
                status: "In sviluppo",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 5,
        variant: "secondary",
        img: calculatorImg,
        techs: ["HTML", "CSS", "JS"],
        icon_techs: [html, css, js],
        primaryButton: {
            href: "https://petit-mathogenie.dianoholding.com",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/Projet-calculator",
            variant: "secondary",
        },
        translations: {
            fr: {
                title: "Petit Mathogénie – Calculatrice interactive",
                description:
                    "Développement d’une calculatrice interactive en JavaScript, intégrée dans une page web conçue comme une expérience pédagogique.",
                status: "En développement",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },
            en: {
                title: "Petit Mathogénie – Interactive Calculator",
                description:
                    "Development of an interactive JavaScript calculator integrated into a web page designed as an educational experience.",
                status: "In development",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },
            it: {
                title: "Petit Mathogénie – Calcolatrice interattiva",
                description:
                    "Sviluppo di una calcolatrice interattiva in JavaScript integrata in una pagina web pensata come esperienza educativa.",
                status: "In sviluppo",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },
];

export default projects;