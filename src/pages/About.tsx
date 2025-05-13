const About = () => {
    return (
        <div className="min-h-screen p-8 bg-[#fdf8f4]">
            <h1 className="text-5xl font-bold ml-8 text-left text-[#1b1b1d]">About Me</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <p className="text-xl text-[#1b1b1d] leading-relaxed mb-6">
                        My name is Cade Rousseau and I'm a sophomore at MSOE, studying Software Engineering. 
                        Additionally, I'm pursuing a minor in Data Science. I am currently looking for an
                        internship part-time during the school year, and / or during the summer of 2026.
                    </p>
                    <p className="text-xl text-[#1b1b1d] leading-relaxed">
                        I'm from Waukesha, WI. Some of my hobbies are going to the gym, skiing, sports, and 
                        videogames. I also enjoy listening to music, and reading.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full h-auto rounded-lg overflow-hidden">
                    <img
                        src={'/assets/images/canada2.jpg'}
                        alt="Image of Cade"
                        className="w-full max-w-[500px] h-auto mx-auto object-cover border border-gray-300 shadow-lg"
                    />
                </div>
            </div>

            {/* Career Goals Section */}
            <div className="bg-white p-8 mt-12 rounded-lg shadow-md my-8">
                <h2 className="text-4xl font-bold text-[#1b1b1d]">Career Goals & Aspirations</h2>
                <p className="text-xl text-[#1b1b1d] leading-relaxed mb-6 mt-4">
                    I aspire to work in the field of software engineering, focusing on developing innovative 
                    solutions that can make a difference. I am particularly interested in areas such as 
                    artificial intelligence, machine learning, and data analysis. My goal is to contribute 
                    to projects that have a positive impact on society and to continuously learn and grow 
                    in my career.
                </p>
            </div>

            {/* Key Strengths Section */}
            <div className="bg-white p-8 mt-8 rounded-lg shadow-md my-8">
                <h2 className="text-4xl font-bold text-[#1b1b1d]">Key Strengths</h2>
                <ul className="list-disc list-inside mt-4 text-xl text-[#1b1b1d]">
                    <li>Strong work ethic and drive to succeed</li>
                    <li>Excellent communication and teamwork abilities</li>
                    <li>Strong analytical and problem-solving skills</li>
                    <li>Adaptability and willingness to learn new technologies</li>
                    <li>Passion for technology and innovation</li>
                </ul>    
            </div>
        </div>
    )
}

export default About;
