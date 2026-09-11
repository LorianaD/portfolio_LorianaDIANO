import { angularIcon, cssIcon, figmaIcon, githubIcon, gitIcon, htmlIcon, javaIcon, jsIcon, mysqlIcon, nodeIcon, phpIcon, reactIcon, symfonyIcon, typescriptIcon, vscodeIcon } from "../assets/images";

const skills = [
    {
        "front-end": {
            "html": {
                "img": htmlIcon,
                "name": "HTML"
            },
            "css": {
                "img": cssIcon,
                "name": "CSS"
            },
            "js": {
                "img": jsIcon,
                "name": "JavaScript"
            },
            "typescript": {
                "img": typescriptIcon,
                "name": "TypeScript"
            },
            "react": {
                "img": reactIcon,
                "name": "React"
            },
            "angular": {
                "img": angularIcon,
                "name": "Angular"
            },
        },

        "back-end": {
            "node": {
                "img": nodeIcon,
                "name": "Node.js"
            },
            "php": {
                "img": phpIcon,
                "name": "PHP"
            },
            "symfony": {
                "img": symfonyIcon,
                "name": "Symfony"
            },
            "java": {
                "img": javaIcon,
                "name": "Java"
            },
        },

        "database": {
            "mysql": {
                "img": mysqlIcon,
                "name": "MySQL"
            },
        },

        "outils": {
            "git": {
                "img": gitIcon,
                "name": "Git"
            },
            "github": {
                "img": githubIcon,
                "name": "GitHub"
            },
            "vscode": {
                "img": vscodeIcon,
                "name": "VS Code"
            },
            "figma": {
                "img": figmaIcon,
                "name": "Figma"
            },
        }
    }
];

export default skills;