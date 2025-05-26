import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    projectNumber: string;
}

const ProjectCard = ({ imageUrl, title, description, projectNumber }: ProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row bg-[#f5f0e6] dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 overflow-hidden mb-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent dark:border-gray-600">
            <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300">{title}</h2>
                <p className="text-[#4a3e32] dark:text-gray-200 mb-6 transition-colors duration-300">{description}</p>
                <button 
                    onClick={() => navigate(`/Project${projectNumber}`)}
                    className="bg-[#5c4d3f] dark:bg-gray-600 text-white px-6 py-2 rounded-md 
                    hover:bg-[#4a3e32] dark:hover:bg-gray-500 transition-colors duration-300 
                    shadow-md hover:shadow-lg transform hover:-translate-y-1 dark:shadow-gray-800/50"
                >
                    View Project
                </button>
            </div>
            <div className="md:w-1/3 p-4">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-[200px] object-contain rounded-lg shadow-md dark:shadow-gray-800/50 border border-gray-200 dark:border-gray-600"
                />
            </div>
        </div>
    )
}

export default ProjectCard;