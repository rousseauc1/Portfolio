import { useNavigate } from 'react-router-dom';

interface ProjectNavigationProps {
    currentProject: number;
}

const ProjectNavigation = ({ currentProject }: ProjectNavigationProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center gap-4 mt-8">
            {[1, 2, 3].map((projectNum) => (
                <button
                    key={projectNum}
                    onClick={() => navigate(`/Project${projectNum === 1 ? 'One' : projectNum === 2 ? 'Two' : 'Three'}`)}
                    className={`w-12 h-12 rounded-full text-xl font-bold transition-all duration-300
                        ${currentProject === projectNum 
                            ? 'bg-[#5c4d3f] dark:bg-gray-600 text-white scale-110 shadow-lg dark:shadow-gray-700/50' 
                            : 'bg-[#f5f0e6] dark:bg-gray-700 text-[#5c4d3f] dark:text-gray-200 hover:bg-[#5c4d3f] dark:hover:bg-gray-600 hover:text-white hover:scale-105'
                        }`}
                >
                    {projectNum}
                </button>
            ))}
        </div>
    );
};

export default ProjectNavigation; 