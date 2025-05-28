import ProjectNavigation from '../components/ProjectNavigation';

const ProjectOne = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#f5f0e6] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300 text-center">Wordle Application</h1>
            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg dark:shadow-gray-700/50 p-4 sm:p-6 md:p-8 transition-colors duration-300">
                    {/* First section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                During a semester-long software engineering course, I collaborated with four 
                                peers to develop a fully functional Wordle-style game using Java and JavaFX. 
                                From the outset, we designed the project with real-world software development 
                                in mind. We implemented the Scrum methodology, organizing our work into sprints 
                                and holding regular stand-ups to assess progress and adjust goals. GitLab 
                                served as our version control system, allowing us to manage collaboration 
                                effectively, merge branches seamlessly, and track development history. 
                                These practices mimicked industry standards and taught us how to manage 
                                team dynamics and development workflows in a professional setting.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/wordle4.jpg" 
                                alt="Wordle title screen" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-contain shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                    </div>

                    {/* Second paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            The foundational version of the game replicated the classic Wordle gameplay, 
                            including proper input validation, feedback mechanisms for guesses, and robust 
                            win/loss logic. However, we didn't stop there. Our team collectively decided to 
                            take on optional extension tasks that pushed the game to become something more. 
                            We refined the UI using JavaFX to deliver a clean, responsive, and engaging 
                            user interface that felt modern and intuitive. Attention was given to color 
                            schemes, animations, and layout consistency to enhance user experience.
                        </p>
                    </div>

                    {/* Third section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                To differentiate our project further, we introduced unique game modes and 
                                administrative tools. We built an "Evil Wordle" mode, where the game dynamically 
                                changed the target word to maximize difficulty and prolong the game—similar 
                                to the concept of "Evil Hangman." We also added AI players capable of playing 
                                the game algorithmically and created an admin panel that allowed advanced 
                                control over gameplay settings, logs, and user sessions. These features not 
                                only showcased our creativity but also challenged us to think about game design, 
                                logic branching, and state management on a much deeper level.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/wordle3.jpg" 
                                alt="Evil Wordle screenshot" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-contain shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                    </div>

                    {/* Fourth paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            This project was a major stepping stone in my development journey. I learned how 
                            to apply object-oriented programming in a practical context and how to manage 
                            feature creep while preserving code quality. The SCRUM process gave me a strong 
                            foundation in agile methodology, and our frequent retrospectives helped improve 
                            both technical implementation and team communication. The experience also gave 
                            me confidence in building GUI applications and affirmed my interest in collaborative, 
                            structured development environments.
                        </p>
                    </div>

                    {/* Technologies section */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">Key Technologies</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            <li>Java</li>
                            <li>JavaFX</li>
                            <li>GitLab</li>
                            <li>SCRUM</li>
                        </ul>
                    </div>
                </div>
                <ProjectNavigation currentProject={1} />
            </div>
        </div>
    );
};

export default ProjectOne;