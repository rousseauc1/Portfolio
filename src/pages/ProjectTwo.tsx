import ProjectNavigation from '../components/ProjectNavigation';

const ProjectTwo = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#f5f0e6] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300 text-center">Travel Dataset Analysis</h1>
            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg dark:shadow-gray-700/50 p-4 sm:p-6 md:p-8 transition-colors duration-300">
                    {/* First section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/world.png" 
                                alt="Portfolio website screenshot" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-cover shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                In this data science project, I partnered with Gavin Konitzer to explore a 
                                massive dataset containing over 100,000 entries related to global travel trends. 
                                Our goal was to uncover patterns and test hypotheses using both supervised and 
                                unsupervised machine learning models. From the beginning, we treated data 
                                preprocessing as a crucial phase—handling missing values, encoding categorical 
                                variables, scaling features, and performing exploratory data analysis using 
                                visualizations. This step gave us a solid foundation for building effective 
                                models and ensured the integrity of our insights.
                            </p>
                        </div>
                    </div>

                    {/* Second paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            We implemented two supervised learning models: K-Nearest Neighbors (KNN) and 
                            Logistic Regression. KNN allowed us to make predictions based on proximity in 
                            feature space, making it great for identifying clusters of traveler behaviors, 
                            while Logistic Regression gave us probability-based classifications which we 
                            used to predict outcomes like travel destination type or likelihood of 
                            returning customers. Both models were rigorously evaluated using accuracy, 
                            precision, and recall, and we also plotted decision boundaries to visualize 
                            how the models performed in different feature spaces.
                        </p>
                    </div>

                    {/* Third section with image */}
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                        <div className="md:w-1/3">
                            <img 
                                src="/assets/images/imports.jpg" 
                                alt="Portfolio website screenshot" 
                                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-contain shadow-md dark:shadow-gray-700/50"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                For the unsupervised portion of the project, we applied K-Means Clustering 
                                to identify latent groupings within the dataset. By experimenting with different 
                                values of k and analyzing the resulting inertia and silhouette scores, we were 
                                able to segment traveler types into meaningful clusters. These clusters helped 
                                support some of our initial hypotheses and led to the discovery of unexpected 
                                trends—such as seasonal spikes in certain demographic behaviors or destination 
                                preferences based on booking lead time. We compiled our entire workflow, 
                                findings, and visualizations into a polished report that explained both our 
                                methodology and our conclusions.
                            </p>
                        </div>
                    </div>

                    {/* Fourth paragraph - full width */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            This project significantly deepened my understanding of the machine learning 
                            pipeline—from data cleaning to model evaluation—and helped sharpen my skills with 
                            Python's data ecosystem. Working in a Jupyter Notebook environment encouraged 
                            iterative development and visualization-heavy analysis, which is ideal for data 
                            science. Most importantly, the experience gave me confidence in making data-driven 
                            decisions, collaborating on technical documents, and translating complex findings 
                            into digestible insights.
                        </p>
                    </div>

                    {/* Technologies section */}
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">Key Technologies</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            <li>Python</li>
                            <li>Jupyter Notebook</li>
                            <li>Scikit-learn</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                            <li>Other libraries</li>
                        </ul>
                    </div>
                </div>
                <ProjectNavigation currentProject={2} />
            </div>
        </div>
    );
};

export default ProjectTwo;
