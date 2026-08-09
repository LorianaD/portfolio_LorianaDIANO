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
        img: protegeoImg,
        techs: ["React", "Symfony", "MySQL"],
        icon_techs: [react, symfony, mysql],

        primaryButton: {
            href: "https://www.protegeo.fr",
            variant: "primary",
        },

        secondaryButton: {
            href: "https://github.com/LorianaD/protegeo-showcase",
            variant: "secondary",
        },

        translations: {
            fr: {
                title: "Protégéo – Gestion de tutelle & curatelle",
                description:
                    "Conception et développement d’une application web destinée à accompagner les tuteurs et curateurs dans la gestion administrative des mesures de protection juridique. Interface React connectée à une API Symfony avec authentification, gestion des dossiers, personnes protégées, mesures, contacts et données de gestion.",
                status: "En développement actif",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir la vitrine",
            },

            en: {
                title: "Protegeo – Guardianship & Curatorship Management",
                description:
                    "Design and development of a web application created to assist guardians and curators with the administrative management of legal protection measures. React interface connected to a Symfony API with authentication and management of cases, protected persons, legal measures, contacts and management data.",
                status: "Active development",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View showcase",
            },

            it: {
                title: "Protegeo – Gestione tutela e curatela",
                description:
                    "Progettazione e sviluppo di un’applicazione web pensata per accompagnare tutori e curatori nella gestione amministrativa delle misure di protezione giuridica. Interfaccia React collegata a un’API Symfony con autenticazione e gestione dei fascicoli, delle persone protette, delle misure, dei contatti e dei dati di gestione.",
                status: "In sviluppo attivo",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi la vetrina",
            },
        },
    },

    {
        id: 2,
        variant: "secondary",
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
                // status: "En développement – temporairement en pause",

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
                description:
                    "Design and development of a complete web platform dedicated to an international festival of AI-generated short films. Client project developed in a competitive inter-school environment, ranked among the top 4 during the final presentation.",
                status: "In development – temporarily paused",

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
                description:
                    "Progettazione e sviluppo di una piattaforma web completa dedicata a un festival internazionale di cortometraggi generati dall’IA. Progetto cliente sviluppato in un contesto competitivo inter-scuole, classificato tra i primi 4 durante la presentazione finale.",
                status: "In sviluppo – temporaneamente in pausa",

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
        id: 3,
        variant: "secondary",
        img: defaultImg,
        techs: ["Symfony", "MySQL"],
        icon_techs: [symfony, mysql],

        secondaryButton: {
            href: "https://github.com/LorianaD/sports-club-manager",
            variant: "secondary",
        },

        translations: {
            fr: {
                title: "Sports Club Manager – Gestion de club sportif",
                description:
                    "Application web de gestion pour club sportif développée avec Symfony. Elle permet de structurer la gestion des joueurs, suivre les absences et sanctions, organiser les entraînements et événements, et gérer le matériel du club.",
                status: "En développement – temporairement en pause",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "Sports Club Manager – Sports Club Management",
                description:
                    "Sports club management web application developed with Symfony. It helps manage players, track absences and sanctions, organize training sessions and events, and manage club equipment.",
                status: "In development – temporarily paused",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "Sports Club Manager – Gestione di un club sportivo",
                description:
                    "Applicazione web per la gestione di un club sportivo sviluppata con Symfony. Permette di gestire i giocatori, monitorare assenze e sanzioni, organizzare allenamenti ed eventi e gestire il materiale del club.",
                status: "In sviluppo – temporaneamente in pausa",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 4,
        variant: "secondary",
        img: defaultImg,
        techs: ["Symfony", "MySQL"],
        icon_techs: [symfony, mysql],

        secondaryButton: {
            href: "https://github.com/LorianaD/motus",
            variant: "secondary",
        },

        translations: {
            fr: {
                title: "Motus – Jeu de lettres",
                description:
                    "Adaptation du jeu Motus développée avec Symfony. Le joueur doit retrouver un mot choisi aléatoirement dans une base de données en un maximum de six tentatives, avec retour visuel sur la position des lettres.",
                status: "En développement – version avancée",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "Motus – Word Game",
                description:
                    "Adaptation of the Motus word game developed with Symfony. The player must guess a randomly selected word from a database within six attempts, with visual feedback on letter positions.",
                status: "In development – advanced version",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "Motus – Gioco di parole",
                description:
                    "Adattamento del gioco Motus sviluppato con Symfony. Il giocatore deve indovinare una parola scelta casualmente dal database entro sei tentativi, con indicazioni visive sulla posizione delle lettere.",
                status: "In sviluppo – versione avanzata",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 5,
        variant: "secondary",
        img: defaultImg,
        techs: ["React", "Symfony", "MySQL"],
        icon_techs: [react, symfony, mysql],

        secondaryButton: {
            href: "https://github.com/LorianaD/budget_management",
            variant: "secondary",
        },

        translations: {
            fr: {
                title: "Budget Manager – Gestion budgétaire",
                description:
                    "Application web full-stack de gestion financière personnelle développée avec React et Symfony. Le projet comprend une API REST sécurisée, une base de données MySQL et une interface destinée au suivi des finances et des objectifs d’épargne.",
                status: "En développement – API réalisée",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "Budget Manager – Personal Finance Management",
                description:
                    "Full-stack personal finance management application developed with React and Symfony. The project includes a secure REST API, a MySQL database and an interface for tracking finances and savings goals.",
                status: "In development – API completed",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "Budget Manager – Gestione finanziaria personale",
                description:
                    "Applicazione full-stack per la gestione delle finanze personali sviluppata con React e Symfony. Il progetto comprende un’API REST sicura, un database MySQL e un’interfaccia per il monitoraggio delle finanze e degli obiettivi di risparmio.",
                status: "In sviluppo – API realizzata",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 6,
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
                title: "VitaTrack – Suivi de données santé",
                description:
                    "Application web de suivi de données santé permettant d’enregistrer et de suivre le poids, l’IMC et leur évolution, avec gestion des utilisateurs et des mesures.",
                status: "En développement – temporairement en pause",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "VitaTrack – Health Data Tracking",
                description:
                    "Web application for health data tracking, including weight, BMI and progress monitoring, with user and measurement management.",
                status: "In development – temporarily paused",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "VitaTrack – Monitoraggio dei dati di salute",
                description:
                    "Applicazione web per il monitoraggio dei dati di salute, tra cui peso, BMI ed evoluzione, con gestione degli utenti e delle misurazioni.",
                status: "In sviluppo – temporaneamente in pausa",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    {
        id: 7,
        variant: "secondary",
        img: eventupImg,
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql],

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
                title: "EventUp – Plateforme événementielle",
                description:
                    "Développement d’une application web full-stack axée sur la structuration du projet et la factorisation du code. Mise en place d’un système d’authentification et de fonctionnalités d’upload de médias.",
                status: "En développement – temporairement en pause",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "EventUp – Event Platform",
                description:
                    "Development of a full-stack web application focused on project structure and code factorization, including authentication and media upload features.",
                status: "In development – temporarily paused",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "EventUp – Piattaforma per eventi",
                description:
                    "Sviluppo di un’applicazione web full-stack focalizzata sulla strutturazione del progetto e sulla fattorizzazione del codice, con autenticazione e funzionalità di upload dei media.",
                status: "In sviluppo – temporaneamente in pausa",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },

    /*
    |--------------------------------------------------------------------------
    | PROJETS MASQUÉS TEMPORAIREMENT
    |--------------------------------------------------------------------------
    */

    /*
    {
        id: 8,
        variant: "secondary",
        img: defaultImg,
        techs: ["Angular", "TypeScript", "Java"],
        icon_techs: [],

        translations: {
            fr: {
                title: "Boutique LOCE – Application e-commerce",
                description:
                    "Développement d’une application e-commerce full-stack avec un front-end Angular en TypeScript et une API Java. Mise en place des premières pages de navigation, notamment l’accueil, la liste des produits et le détail d’un produit.",
                status: "En développement – temporairement en pause",
            },

            en: {
                title: "Boutique LOCE – E-commerce Application",
                description:
                    "Development of a full-stack e-commerce application with an Angular front-end written in TypeScript and a Java API. Implementation of the first navigation pages, including the homepage, product listing and product detail.",
                status: "In development – temporarily paused",
            },

            it: {
                title: "Boutique LOCE – Applicazione e-commerce",
                description:
                    "Sviluppo di un’applicazione e-commerce full-stack con front-end Angular in TypeScript e API Java. Implementazione delle prime pagine di navigazione, tra cui homepage, elenco dei prodotti e dettaglio del prodotto.",
                status: "In sviluppo – temporaneamente in pausa",
            },
        },
    },
    */

    /*
    {
        id: 9,
        variant: "secondary",
        img: defaultImg,
        techs: ["Symfony", "MySQL"],
        icon_techs: [symfony, mysql],

        secondaryButton: {
            href: "https://github.com/LorianaD/projet_tableflow",
            variant: "secondary",
        },

        translations: {
            fr: {
                title: "TableFlow – Gestion de restaurant",
                description:
                    "Application web de gestion de restaurant développée avec Symfony. Elle permet aux clients de réserver une table en ligne et à l’équipe du restaurant de gérer les disponibilités, les créneaux et les réservations depuis un back-office.",
                status: "En développement – temporairement en pause",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "TableFlow – Restaurant Management",
                description:
                    "Restaurant management web application developed with Symfony. It allows customers to book a table online and restaurant staff to manage availability, time slots and reservations through a back office.",
                status: "In development – temporarily paused",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "TableFlow – Gestione di ristorante",
                description:
                    "Applicazione web per la gestione di un ristorante sviluppata con Symfony. Permette ai clienti di prenotare un tavolo online e allo staff di gestire disponibilità, fasce orarie e prenotazioni tramite un back-office.",
                status: "In sviluppo – temporaneamente in pausa",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },
    */

    {
        id: 10,
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
                    "Développement d’une calculatrice interactive en JavaScript intégrée dans une page web conçue comme une petite expérience pédagogique autour des mathématiques.",
                status: "En développement – temporairement en pause",
                primaryButtonLabel: "Voir le projet",
                secondaryButtonLabel: "Voir le code",
            },

            en: {
                title: "Petit Mathogénie – Interactive Calculator",
                description:
                    "Development of an interactive JavaScript calculator integrated into a web page designed as a small educational experience around mathematics.",
                status: "In development – temporarily paused",
                primaryButtonLabel: "View project",
                secondaryButtonLabel: "View code",
            },

            it: {
                title: "Petit Mathogénie – Calcolatrice interattiva",
                description:
                    "Sviluppo di una calcolatrice interattiva in JavaScript integrata in una pagina web pensata come una piccola esperienza educativa dedicata alla matematica.",
                status: "In sviluppo – temporaneamente in pausa",
                primaryButtonLabel: "Vedi il progetto",
                secondaryButtonLabel: "Vedi il codice",
            },
        },
    },
];

export default projects;