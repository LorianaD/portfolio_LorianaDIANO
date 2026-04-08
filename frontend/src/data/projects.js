import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import tailwind from "../assets/images/tailwind.png";
import symfony from "../assets/images/symfony.png";
import mysql from "../assets/images/mysql.png";
import html from "../assets/images/html.png";
import js from "../assets/images/javascript.png";
import css from "../assets/images/css.png";

import defaultImg from "../assets/images/screenshot/defaultScreen.png";

import marsaiImg from "../assets/images/screenshot/marsai.png";
import protegeoImg from "../assets/images/screenshot/screenshotProtegeo.png";
import calculatorImg from "../assets/images/screenshot/screenshotCalculator.png";
import vitatrackImg from "../assets/images/screenshot/screenshotVitatrack.png";

const projects = [
    {
        id: 1,
        variant: "primary",
        img: marsaiImg,
        title: "MarsAI – Plateforme de festival IA",
        description:
            "Conception et développement d’une plateforme web complète dédiée à un festival international de courts-métrages générés par l' IA.",
        techs: ["React","Node", "MySQL", "Tailwind"],
        icon_techs: [react, node, mysql, tailwind],
        roles: [
            "Conception CMS full-stack",
            "Développement front-end",
            "Gestion BDD & contenus dynamiques",
            "Coordination technique (Scrum)",
        ],
        // primaryButton: {
        //     to: "/projects",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
        secondaryButton: {
            href: "https://github.com/LorianaD/project_marsai-bordeaux-groupe_LVETM",
            label: "Voir le code",
            variant: "secondary",
        },
    },
    {
        id: 2,
        variant: "secondary",
        img: protegeoImg,
        title: "Protégéo – Plateforme de gestion tutelle & curatelle",
        description:
            "Application web destinée à faciliter la gestion administrative des mesures de protection juridique (tutelle, curatelle).",
        techs: ["React", "Symfony", "MySQL"],
        icon_techs: [react, symfony, mysql],
        status: "En développement",
        primaryButton: {
            href: "https://www.protegeo.dianoholding.com",
            label: "Voir le projet",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/protegeo-showcase",
            label: "Voir le code",
            variant: "secondary",
        },
    },
    {
        id: 3,
        variant: "secondary",
        img: vitatrackImg,
        title: "Projet VitaTrack",
        description:
            "Application web de suivi de données santé (poids, IMC, évolution) avec gestion des utilisateurs et des mesures.",
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql],
        status: "En développement",
        primaryButton: {
            href: "https://vitatrack.dianoholding.com/",
            label: "Voir le projet",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/projet_afit",
            label: "Voir le code",
            variant: "secondary",
        },
    },
    {
        id: 4,
        variant: "secondary",
        img: defaultImg,
        title: "Projet EventUp",
        description:
            "Développement d’une application web fullstack axée sur la structuration du projet et la factorisation. Mise en place d’un système d’authentification et d’upload de médias.",
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql, tailwind],
        status: "En développement",
        primaryButton: {
            href: "https://event-ia.netlify.app/",
            label: "Voir le projet",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/projet-eventup",
            label: "Voir le code",
            variant: "secondary",
        },
    },
    {
        id: 5,
        variant: "secondary",
        img: calculatorImg,
        title: "Petit Mathogénie – Calculatrice interactive",
        description:
            "Développement d’une calculatrice interactive en JavaScript, intégrée dans une page web conçue comme une expérience pédagogique.",
        techs: ["HTML", "CSS", "JS"],
        icon_techs: [html, css, js],
        status: "En développement",
        primaryButton: {
            href: "https://petit-mathogenie.dianoholding.com",
            label: "Voir le projet",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/Projet-calculator",
            label: "Voir le code",
            variant: "secondary",
        },
    },
];

export default projects;