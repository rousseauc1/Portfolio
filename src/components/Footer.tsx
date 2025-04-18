import { useState } from "react"

function Footer() {
    // Define possible states for form submission: idle (initial), success, or error
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    return (
        <div className="bg-[#faf3eb] min-h-screen p-16 flex flex-col gap-16 md:flex-row md:justify-center md:items-start">
            {/* Left Side - Contact Info */}
            <div className="flex-1 flex flex-col items-center gap-6">
                <h3 className="text-4xl font-serif">Contact Me</h3>
                <p className="text-lg text-gray-600">rousseauc@msoe.edu</p>
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
                    className="w-72 h-auto object-cover rounded"
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
                        <label htmlFor="firstName" className="text-sm mb-1">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            className="border border-gray-400 p-2 text-base"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="lastName" className="text-sm mb-1">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            className="border border-gray-400 p-2 text-base"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm mb-1">Email *</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="border border-gray-400 p-2 text-base"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm mb-1">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        className="border border-gray-400 p-2 text-base min-h-[150px]"
                    />
                </div>

                <button 
                    type="submit" 
                    className="bg-[#5c4d3f] text-white text-lg py-3 px-4 border-none cursor-pointer"
                >
                    Send
                </button>

                {status === "success" && (
                    <div className="text-green-600 font-medium">Thank you! Your message has been sent successfully.</div>
                )}
                {status === "error" && (
                    <div className="text-red-600 font-medium">Oops! There was a problem sending your message. Please try again.</div>
                )}
            </form>
        </div>
    );
}

export default Footer;