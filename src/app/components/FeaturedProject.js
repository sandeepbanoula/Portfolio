import Image from "next/image";
import ProjectSkillsList from "./ProjectSkillList";

function FeaturedProject(props) {
    return (

        <div className="project flex flex-wrap md:flex-nowrap lg:items-center my-12">
            <div className={props.order + " md:w-2/4 lg:w-fill shadow-xl peer"}>
                <Image src={"." + props.images[0]} alt={props.name} width={700} height={0} />
            </div>
            <div className={props.position + " md:w-2/4 lg:w-fill relative flex flex-col bg-neutral-100/90 dark:bg-neutral-900/90 shadow-lg shadow-green-500/40 px-4 sm:px-9 py-4 z-10"}>
                <h2 className="text-xl lg:text-2xl pb-4">{props.name}</h2>
                <p className="text-lg pb-4">{props.description}</p>
                <ProjectSkillsList skills={props.skills} />
                <a href={props.link} target="_blank">
                    <p className="project-link">View the code &gt;</p>
                </a>
            </div>
        </div>

    );
}

export default FeaturedProject;