import ProjectNavigation from '../components/ProjectNavigation';

const ProjectThree = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#f5f0e6] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300 text-center">Personal Portfolio Website</h1>
            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg dark:shadow-gray-700/50 p-4 sm:p-6 md:p-8 transition-colors duration-300">
                    {/* First section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                My personal portfolio was a solo project designed not just to showcase my 
                                technical skills, but also to challenge myself with new technologies and 
                                design philosophies. I built it over the course of two months using TypeScript, 
                                React, and Tailwind CSS. This project served as an introduction to TypeScript—a 
                                typed superset of JavaScript widely used in modern development—and gave me 
                                hands-on experience with React's component-based architecture. For deployment, 
                                I utilized AWS Amplify, which provided a seamless CI/CD pipeline that automatically 
                                builds and deploys the site whenever changes are pushed to the repository. This 
                                experience with AWS Amplify taught me about cloud deployment, continuous integration, 
                                and how to manage production environments effectively. The primary goal was to create 
                                a clean, responsive, and professional space where I could display my projects, resume, 
                                and personal background.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/portfolio2.jpg" 
                                alt="Portfolio website screenshot" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                    </div>

                    {/* Second paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            I approached the design with a UX-first mindset, drawing from principles I learned 
                            in my classes as well as graphic design experience from high school. I wanted the 
                            site to be intuitive, fast, and aesthetically pleasing across devices. Tailwind 
                            CSS played a key role in this, helping me write maintainable styles without bloating 
                            the codebase. With Tailwind's utility classes, I was able to create sleek layouts, 
                            manage spacing, and apply responsive designs all within my React components. I also 
                            focused on accessibility and performance, using semantic HTML and optimized routing.
                        </p>
                    </div>

                    {/* Third section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                One of the major lessons from this project was how to manage frontend logic 
                                through reusable components and state management. I built modular sections for 
                                each page—such as the Projects page with interactive previews and links to 
                                detailed writeups—and ensured that routing between pages was smooth and consistent. 
                                I also implemented a footer "Contact Me" section on every page for easy access to 
                                my email and LinkedIn. As the site grew, I began to think more critically about 
                                file organization, component responsibility, and scalability, which are essential 
                                skills for frontend developers.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/portfolio1.jpg" 
                                alt="Portfolio website screenshot" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                    </div>

                    {/* Fourth paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            This project was both challenging and incredibly rewarding. Seeing real-time 
                            changes and iterating on design elements helped me appreciate the power and 
                            flexibility of modern frontend tools. It also gave me a better understanding of 
                            how developers work with both logic and layout simultaneously. Beyond the technical 
                            skills, it taught me how to present my work thoughtfully and communicate my 
                            experiences effectively—something that's essential in both job applications and 
                            team environments.
                        </p>
                    </div>

                    {/* Technologies section */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">Key Technologies</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                            <li>AWS Amplify</li>
                        </ul>
                    </div>
                </div>
                <ProjectNavigation currentProject={3} />
            </div>
        </div>
    );
};

export default ProjectThree;
