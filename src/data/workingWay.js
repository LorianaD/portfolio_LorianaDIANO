import analyser from "../assets/images/analyser.png";
import construire from "../assets/images/construire.png";
import organiser from "../assets/images/organiser.png";

const workingWay = [
    {
        id: 1,
        icon: analyser,
            translations: {
            fr: {
                title: "Analyser",
                description: "Comprendre le besoin, structurer l’information et poser une base claire avant de développer.",
            },
            en: {
                title: "Analyze",
                description: "Understand the needs, structure information, and establish a clear foundation before building."
            },
            it: {
                title: "Analizzare",
                description: "Comprendere le esigenze, strutturare le informazioni e definire una base chiara prima di sviluppare."
            }
        }
    },
    {
        id: 2,
        icon: construire,
        translations: {
            fr: {
                title: "Construire",
                description: "Développer des interfaces et fonctionnalités web de manière progressive, propre et cohérente.",
            },
            en: {
                title: "Build",
                description: "Develop web interfaces and features in a progressive, clean, and consistent way."
            },
            it: {
                title: "Costruire",
                description: "Sviluppare interfacce e funzionalità web in modo progressivo, pulito e coerente."
            }
        }
    },
    {
        id: 3,
        icon: organiser,
        translations: {
            fr: {
                title: "Organiser",
                description: "Travailler avec méthode, documenter, collaborer et garder une vision claire du projet.",
            },
            en: {
                title: "Organize",
                description: "Work methodically, document processes, collaborate, and maintain a clear vision of the project."
            },
            it: {
                title: "Organizzare",
                description: "Lavorare con metodo, documentare, collaborare e mantenere una visione chiara del progetto."
            }
        }
    }
];

export default workingWay;