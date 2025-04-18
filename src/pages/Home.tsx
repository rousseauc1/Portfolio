

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 md:py-24">
                    <div className="max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            Cade Rousseau
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
                            Software Engineer
                        </h2>
                        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-xl">
                            <img 
                                src="/images/profile.jpg" 
                                alt="Cade Rousseau" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
                
                {/* About Section */}
                <section className="py-16 md:py-24 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Hello!
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                            My name is Cade Rousseau and I am a software engineering major with a data science minor.
                            I am set to graduate in May 2027 from Milwaukee School of Engineering.
                        </p>
                        <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
                            <img 
                                src="/images/about.jpg" 
                                alt="About Cade" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home