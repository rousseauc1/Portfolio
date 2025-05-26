const Resume = () => {
    const resumePdfPath = '/assets/images/Resume.pdf'; // Update with the correct path to your PDF

    const handleDownload = () => {
        window.open(resumePdfPath, '_blank'); // Opens the PDF in a new tab, triggering the browser's download
    };

    return (
        <div className="min-h-screen p-8 bg-[#5c4d3f] dark:bg-gray-700 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                {/* Triangle Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(60deg, #f5f0e6 0px, #f5f0e6 2px, transparent 2px, transparent 20px)'
                    }}></div>
                </div>
                {/* Vertical Lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 30px)'
                    }}></div>
                </div>
                {/* Diamond Grid */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 25px)'
                    }}></div>
                </div>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center text-white dark:text-gray-100 relative z-10 transition-colors duration-300">My Resume</h1>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mt-8">
                    <button
                        onClick={handleDownload}
                        className="mb-6 px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
                    >
                        Download Resume
                    </button>
                </div>
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl dark:shadow-gray-700/50">
                    <img
                        src={'/assets/images/resume-1.png'}
                        alt="Cade's Resume"
                        className="w-full max-w-[850px] h-auto mx-auto object-contain border border-gray-300 dark:border-gray-600 shadow-lg dark:shadow-gray-700/50 transition-colors duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
