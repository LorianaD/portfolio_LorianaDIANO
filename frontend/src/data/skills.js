import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/javascript.png";
import reactIcon from "../assets/images/react.svg";
import angularIcon from "../assets/images/angular.png";
import typescriptIcon from "../assets/images/typescript.png";

import nodeIcon from "../assets/images/nodejs.png";
import phpIcon from "../assets/images/php.png";
import symfonyIcon from "../assets/images/symfony.png";
import javaIcon from "../assets/images/java.png";

import mysqlIcon from "../assets/images/mysql.png";

import githubIcon from "../assets/images/github.png";
import vscodeIcon from "../assets/images/vs-code.png";
import figmaIcon from "../assets/images/figma.png";

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