import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#94877a] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#f3f4f6] dark:text-gray-100 transition-colors duration-300">My Projects</h1>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <ProjectCard
                    imageUrl="/assets/images/wordle.png"
                    title="Wordle Game"
                    description="A JavaFX-based game inspired by Wordle, developed in a team of five 
                    using Scrum methodology. Features include word validation, feedback logic, and a 
                    polished graphical interface."
                    projectNumber={"One"}
                />

                <ProjectCard
                    imageUrl="/assets/images/expedia.png"
                    title="Travel Dataset Analysis"
                    description="Collaborated on analyzing a travel dataset using both supervised and 
                    unsupervised machine learning models. Focused on extracting insights, evaluating 
                    performance, and communicating findings through a detailed report."
                    projectNumber={"Two"}
                />

                <ProjectCard
                    imageUrl="/assets/images/website.png"
                    title="Personal Portfolio (this website)"
                    description="A responsive website built with TypeScript, React, and Tailwind CSS to 
                    showcase my work and skills. Designed with a clean, modern aesthetic and modular code 
                    for scalability and performance."
                    projectNumber={"Three"}
                />
            </div>
        </div>
    )
}

export default Projects