import { useState } from "react"

const Footer = () => {
    // Define possible states for form submission: idle (initial), success, or error
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    return (
        <div className="bg-[#faf3eb] dark:bg-gray-900 min-h-screen p-16 flex flex-col gap-16 md:flex-row md:justify-center md:items-start transition-colors duration-300">
            {/* Left Side - Contact Info */}
            <div className="flex-1 flex flex-col items-center gap-6">
                <h3 className="text-4xl font-serif text-gray-800 dark:text-gray-100 transition-colors duration-300">Contact Me</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">rousseauc@msoe.edu</p>
                <a href="https://www.linkedin.com/in/caderousseau/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/images/linkedIn1.png"
                        alt="LinkedIn Logo"
                        className="w-8 h-8"
                    />
                </a>
                <img
                    src="/assets/images/contactpic.jpg"
                    alt="Profile"
                    className="w-72 h-auto object-cover rounded shadow-lg dark:shadow-gray-800/50"
                />
            </div>

            {/* Right Side - Contact Form */}
            <form
                action="https://formspree.io/f/movervry"
                method="POST"
                className="flex-[2] flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);

                    fetch(form.action, {
                        method: form.method,
                        body: data,
                        headers: { Accept: "application/json" },
                    })
                        .then((response) => {
                            if (response.ok) {
                                setStatus("success");
                                form.reset();
                            } else {
                                setStatus("error");
                            }
                        })
                        .catch(() => {
                            setStatus("error");
                        });
                }}
            >
                <div className="flex gap-4 flex-wrap">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="firstName" className="text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            className="border border-gray-400 dark:border-gray-600 p-2 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="lastName" className="text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            className="border border-gray-400 dark:border-gray-600 p-2 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Email *</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="border border-gray-400 dark:border-gray-600 p-2 text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        className="border border-gray-400 dark:border-gray-600 p-2 text-base min-h-[150px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                </div>

                <button 
                    type="submit" 
                    className="bg-[#5c4d3f] dark:bg-gray-700 text-white text-lg py-3 px-4 border-none cursor-pointer hover:bg-[#4a3e32] dark:hover:bg-gray-600 transition-colors duration-300 shadow-lg dark:shadow-gray-800/50"
                >
                    Send
                </button>

                {status === "success" && (
                    <div className="text-green-600 dark:text-green-400 font-medium transition-colors duration-300">Thank you! Your message has been sent successfully.</div>
                )}
                {status === "error" && (
                    <div className="text-red-600 dark:text-red-400 font-medium transition-colors duration-300">Oops! There was a problem sending your message. Please try again.</div>
                )}
            </form>
        </div>
    );
}

export default Footer;