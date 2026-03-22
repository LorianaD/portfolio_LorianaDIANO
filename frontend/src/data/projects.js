import marsaiImg from "../assets/images/marsai.png";
import protegeoImg from "../assets/images/protegeo.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import tailwind from "../assets/images/tailwind.png";
import symfony from "../assets/images/symfony.png";
import mysql from "../assets/images/mysql.png";
import defaultImg from "../assets/images/defaultScreen.png"

const projects = [
    {
        id: 1,
        variant: "primary",
        img: marsaiImg,
        title: "MarsAI – Plateforme de festival IA",
        description:
            "Conception et développement d’une plateforme web complète dédiée à un festival international de courts-métrages générés par intelligence artificielle.",
        techs: ["React","Node", "MySQL", "Tailwind"],
        icon_techs: [react, node, mysql, tailwind],
        roles: [
            "Développement front-end",
            "Architecture back-end",
            "Conception CMS dynamique",
            "Coordination technique (Scrum)",
        ],
        primaryButton: {
            to: "/projects",
            label: "Voir le projet",
            variant: "primary",
        },
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
        // primaryButton: {
        //     href: "#",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
        secondaryButton: {
            href: "https://github.com/LorianaD/protegeo-showcase",
            label: "Voir le code",
            variant: "secondary",
        },
    },
    {
        id: 3,
        variant: "secondary",
        img: defaultImg,
        title: "Projet VitaTrack",
        description:
            "Développement d’une application web en architecture MVC avec gestion des entités et base de données relationnelle.",
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql],
        status: "En développement",
        // primaryButton: {
        //     href: "#",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
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
            "Développement d’une application web en architecture MVC avec gestion des entités et base de données relationnelle.",
        techs: ["React", "Node", "MySQL"],
        icon_techs: [react, node, mysql, tailwind],
        status: "En développement",
        // primaryButton: {
        //     href: "#",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
        secondaryButton: {
            href: "https://github.com/LorianaD/projet-eventup",
            label: "Voir le code",
            variant: "secondary",
        },
    },
];

export default projects;