import Image from "next/image";

import html_5 from "/public/skills/html-5.svg";
import css_3 from "/public/skills/css-3.svg";
import javascript_logo from "/public/skills/javascript_logo.svg";
import react_logo from "/public/skills/react_logo.svg";
import node_logo from "/public/skills/node-js.svg";
import mysql_logo from "/public/skills/mysql-logo.svg";
import tailwind_logo from "/public/skills/tailwind_logo.svg";
import bootstrap_logo from "/public/skills/bootstrap_logo.svg";
import python_logo from "/public/skills/python_logo.svg";
import wordpress_logo from "/public/skills/wordpress_logo.svg";
import shopify_logo from "/public/skills/shopify_logo.svg"
import git_logo from "/public/skills/git_logo.svg";
import github_logo from "/public/skills/github_logo.svg";
import vscode_logo from "/public/skills/vscode_logo.svg";
import github_link from "/public/github_link.svg";

export default function SkillsCarousel() {
    return (
        <div id="skillCarousel" className="skill-carousel w-full h-24 flex flex-row items-center scroll-smooth gap-8">
            <Image src={html_5}
                alt="html-5"
                className="w-full h-full"
                title="HTML 5" />
            <Image src={css_3}
                alt="css-3"
                className="w-full h-full"
                title="CSS 3" />
            <Image src={javascript_logo}
                alt="javascript"
                className="w-full h-full"
                title="JavaScript" />
            <Image src={react_logo}
                alt="react.js"
                className="w-full h-full"
                title="React.Js" />
            <Image src={node_logo}
                alt="node.js"
                className="w-full h-full"
                title="Node.js" />
            <Image src={mysql_logo}
                alt="mysql"
                className="w-full h-full"
                title="MySql" />
            <Image src={tailwind_logo}
                alt="tailwind"
                className="w-full h-full"
                title="Tailwind Css" />
            <Image src={python_logo}
                alt="python"
                className="w-full h-full"
                title="Python" />
            <Image src={bootstrap_logo}
                alt="bootstrap"
                className="w-full h-full"
                title="Bootstrap" />
            <Image src={wordpress_logo}
                alt="wordpress"
                className="w-full h-full"
                title="WordPress" />
            <Image src={shopify_logo}
                alt="shopify"
                className="w-full h-full"
                title="Shopify" />
            <Image src={git_logo}
                alt="Git"
                className="w-full h-full"
                title="Git Version Control" />
            <Image src={github_logo}
                alt="github"
                className="w-full h-full bg-black rounded-full"
                title="Github" />
            <Image src={vscode_logo}
                alt="vscode"
                className="w-full h-full"
                title="VS Code" />
        </div>
    )
}