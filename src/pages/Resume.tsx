const Resume = () => {
    const resumePdfPath = '/assets/images/resume.pdf'; // Update with the correct path to your PDF

    const handleDownload = () => {
        window.open(resumePdfPath, '_blank'); // Opens the PDF in a new tab, triggering the browser's download
    };

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
            <div className="max-w-4xl mx-auto">
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
                    <img
                        src={'/assets/images/resume-1.png'}
                        alt="Cade's Resume"
                        className="w-full max-w-[850px] h-auto mx-auto object-contain border border-gray-300 shadow-lg"
                    />
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={handleDownload}
                        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
