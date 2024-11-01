function ProjectSkillsList({ skills }) {
    return (
        <ul className="flex flex-wrap gap-5 text-md text-gray-400 pb-4">
            {skills.map((items, index) => (<li key={index}>{items}</li>))}
        </ul>
    );
}

export default ProjectSkillsList;