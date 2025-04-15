import { useState } from "react"
import '../styles/footer.css';


function Footer() {
    // Define possible states for form submission: idle (initial), success, or error
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    return (
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-heading">Contact Me</h3>
            <p className="contact-email">rousseauc@msoe.edu</p>
            <a href="https://www.linkedin.com/in/caderousseau/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/images/linkedIn1.png"
                alt="LinkedIn Logo"
                className="linkedin-logo"
              />
            </a>
            <img
              src="/assets/images/contactpic.jpg"
              alt="Profile"
              className="contact-photo"
            />
          </div>
      
          {/* Right Side - Contact Form */}
          <form
            action="https://formspree.io/f/movervry"
            method="POST"
            className="contact-form"
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
            <div className="name-fields">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
      
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
      
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
      
            <button type="submit" className="submit-button">Send</button>
      
            {status === "success" && (
              <div className="form-success">Thank you! Your message has been sent successfully.</div>
            )}
            {status === "error" && (
              <div className="form-error">Oops! There was a problem sending your message. Please try again.</div>
            )}
          </form>
        </div>
      );
}

export default Footer;