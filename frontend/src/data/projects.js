import marsaiImg from "../assets/images/marsai.png";
import protegeoImg from "../assets/images/protegeo.png";

const projects = [
    {
        id: 1,
        variant: "primary",
        img: marsaiImg,
        title: "MarsAI – Plateforme de festival IA",
        description:
            "Conception et développement d’une plateforme web complète dédiée à un festival international de courts-métrages générés par intelligence artificielle.",
        techs: ["React","Node", "MySQL", "Tailwind"],
        roles: [
            "Développement front-end",
            "Architecture back-end",
            "Conception CMS dynamique",
            "Coordination technique (Scrum)",
        ],
        primaryButton: {
            href: "#",
            label: "Voir le projet",
            variant: "primary",
        },
        secondaryButton: {
            href: "https://github.com/LorianaD/project_marsai-bordeaux-groupe_LVETM",
            label: "Voir le code",
            variant: "outline",
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
        status: "En développement",
        // primaryButton: {
        //     href: "#",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
        // secondaryButton: {
        //     href: "#",
        //     label: "Voir le code",
        //     variant: "outline",
        // },
    },
    {
        id: 3,
        variant: "secondary",
        title: "Projet Atelier Symfony",
        description:
            "Développement d’une application web en architecture MVC avec gestion des entités et base de données relationnelle.",
        techs: ["React", "Symfony", "MySQL"],
        status: "À venir",
        // primaryButton: {
        //     href: "#",
        //     label: "Voir le projet",
        //     variant: "primary",
        // },
    },
];

export default projects;