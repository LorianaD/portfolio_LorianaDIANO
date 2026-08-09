import voyageBadge from "../assets/images/voyage.png"
import creatifBadge from "../assets/images/creatif.png"
import logiqueBadge from "../assets/images/logique.png"
import numeriqueBadge from "../assets/images/numerique.png"

const hobbies = [
    {
        id: 1,
        icon: voyageBadge,
        translations: {
            fr: {
                title: "Voyage",
                description: "L’Italie, Londres et l’Éthiopie ont nourri mon ouverture culturelle et mon adaptation."
            },
            en: {
                title: "Travel",
                description: "Italy, London and Ethiopia have shaped my cultural openness and adaptability."
            },
            it: {
                title: "Viaggi",
                description: "Italia, Londra ed Etiopia hanno sviluppato la mia apertura culturale e capacità di adattamento."
            }
        }
    },
    {
        id: 2,
        icon: creatifBadge,
        translations: {
            fr: {
                title: "Créatif & manuel",
                description: "Crochet, couture, décoration, bricolage : j’aime créer, assembler, ajuster."
            },
            en: {
                title: "Creative & hands-on",
                description: "Crochet, sewing, decoration, DIY: I enjoy creating, assembling and refining."
            },
            it: {
                title: "Creativo & manuale",
                description: "Uncinetto, cucito, decorazione, fai-da-te: mi piace creare, assemblare e perfezionare."
            }
        }
    },
    {
        id: 3,
        icon: logiqueBadge,
        translations: {
            fr: {
                title: "Logique & réflexion",
                description: "Jeux de réflexion, organisation, analyse : une façon naturelle de penser et réfléchir dans mon métier."
            },
            en: {
                title: "Logic & thinking",
                description: "Puzzle games, organization and analysis: a natural way of thinking that I apply in my work."
            },
            it: {
                title: "Logica & riflessione",
                description: "Giochi di logica, organizzazione e analisi: un modo naturale di pensare che applico nel mio lavoro."
            }
        }
    },
    {
        id: 4,
        icon: numeriqueBadge,
        translations: {
            fr: {
                title: "Numérique & high-tech",
                description: "Comparer, comprendre, installer, configurer : je suis attirée par la technologie bien au-delà du code."
            },
            en: {
                title: "Digital & tech",
                description: "Comparing, understanding, installing, configuring: I’m drawn to technology beyond just coding."
            },
            it: {
                title: "Digitale & tecnologia",
                description: "Confrontare, comprendere, installare, configurare: sono attratta dalla tecnologia ben oltre il codice."
            }
        }
    }
]

export default hobbies