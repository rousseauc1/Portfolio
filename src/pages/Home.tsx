import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="flex justify-center items-center min-h-[70vh] bg-[#f5f0e6] px-4 py-24 md:py-32 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0">
                        {/* Triangle Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(60deg, #5c4d3f 0px, #5c4d3f 2px, transparent 2px, transparent 20px)'
                            }}></div>
                        </div>
                        {/* Vertical Lines */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(90deg, #4a3e32 0px, #4a3e32 1px, transparent 1px, transparent 30px)'
                            }}></div>
                        </div>
                        {/* Diamond Grid */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, #5c4d3f 0px, #5c4d3f 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, #5c4d3f 0px, #5c4d3f 1px, transparent 1px, transparent 25px)'
                            }}></div>
                        </div>
                    </div>
                    
                    <div className="max-w-4xl text-center relative z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5c4d3f] mb-6">
                            Cade Rousseau
                        </h1>
                        <h2 className="text-3xl md:text-4xl text-[#4a3e32] mb-8">
                            Software Engineer
                        </h2>
                    </div>
                </section>
                
                {/* About Section */}
                <section className="py-20 px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                                    Hello!
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                                    My name is Cade Rousseau and I am a Software Engineering major with a Data Science minor.
                                    I am set to graduate in May 2027 from Milwaukee School of Engineering.
                                </p>
                                <Link 
                                    to="/About" 
                                    className="inline-block px-8 py-3 bg-[#5c4d3f] text-white rounded-lg 
                                    hover:bg-[#4a3e32] transition-colors duration-300 
                                    shadow-md hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                                <img 
                                    src="/assets/images/canada2.jpg" 
                                    alt="About Cade" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-24 px-10 bg-[#5c4d3f]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                                <div className="w-full h-full bg-[#4a3e32] flex items-center justify-center">
                                    <span className="text-white text-xl">Quote Image Placeholder</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed">
                                    "Your quote will go here. This is a placeholder for the inspirational quote you want to share."
                                </blockquote>
                                <p className="text-xl text-gray-200">
                                    - Author Name
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-24 px-10">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
                            My Journey
                        </h2>
                        <div className="min-h-[600px] bg-gray-50 rounded-lg shadow-lg p-8">
                            {/* Timeline content will go here */}
                            <div className="text-center text-gray-500 text-xl">
                                Timeline content will be implemented here
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;