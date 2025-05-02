const Resume = () => {
    const resumePdfPath = '/assets/images/Resume.pdf'; // Update with the correct path to your PDF

    const handleDownload = () => {
        window.open(resumePdfPath, '_blank'); // Opens the PDF in a new tab, triggering the browser's download
    };


    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">My Resume</h1>
            <div className="max-w-4xl mx-auto">
                <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                        <img 
                            src="/assets/images/Resume.pdf" 
                            alt="Cade's Resume" 
                            className="w-full h-full object-cover"
                        />
                </div>

            </div>
        </div>
    )
}

export default Resume;
