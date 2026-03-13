import htlmIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/JavaScript.png";
import reactIcon from "../assets/images/react.svg";
import nodeIcon from "../assets/images/nodejs.png";
import phpIcon from "../assets/images/php.png";
import symfonyIcon from "../assets/images/symfony.png";
import githubIcon from "../assets/images/github.png";
import vscodeIcon from "../assets/images/vs-code.png";
import figmaIcon from "../assets/images/figma.png";
import mysqlIcon from "../assets/images/mysql.png";


const skills = [
    {
        "front-end":
        {
            "html": {
                "img": htlmIcon,
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
            "react": {
                "img": reactIcon,
                "name": "React"
            },
        },
        "back-end": {
            "node": {
                "img": nodeIcon,
                "name": "Node"
            },
            "php": {
                "img": phpIcon,
                "name": "PHP"
            },
            "symfony": {
                "img": symfonyIcon,
                "name": "Symfony"
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
            "mysql": {
                "img": mysqlIcon,
                "name": "MySQL"
            },
        }
    }
]

export default skills