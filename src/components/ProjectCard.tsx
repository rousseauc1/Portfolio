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
        <div className="flex flex-col md:flex-row bg-[#f5f0e6] rounded-lg shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#5c4d3f]">{title}</h2>
                <p className="text-[#4a3e32] mb-6">{description}</p>
                <button 
                    onClick={() => navigate(`/Project${projectNumber}`)}
                    className="bg-[#5c4d3f] text-white px-6 py-2 rounded-md hover:bg-[#4a3e32] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                    View Project
                </button>
            </div>
            <div className="md:w-1/3 p-4">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-[200px] object-contain rounded-lg"
                />
            </div>
        </div>
    )
}

export default ProjectCard;