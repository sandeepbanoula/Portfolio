import ProjectSkillsList from "./ProjectSkillList";

export default function OtherProjects(props) {
    return (
        <div className="project project-lite flex flex-wrap md:flex-nowrap lg:items-center my-12">
            <div className="relative flex flex-col justify-between h-full bg-neutral-100/90 dark:bg-neutral-900/90 shadow-lg shadow-green-500/40 px-4 sm:px-9 py-4 z-10">
                <header>
                    <h2 className="text-xl lg:text-2xl pb-4">{props.name}</h2>
                    <p className="text-lg pb-4">{props.description}</p>
                </header>
                <footer>
                    <ProjectSkillsList skills={props.skills} />
                    <a href={props.link} target="_blank">
                        <p className="project-link">View the code &gt;</p>
                    </a>
                </footer>
            </div>
        </div>
    );
}