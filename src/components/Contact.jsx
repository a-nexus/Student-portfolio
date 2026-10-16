
import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ email = "", socials = {} }) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="muted">
            I AM OPEN TO INTERNSHIPS AND NEW OPPORTUNITIES
          </p>

          <div className="contact-links">
            {email && (
              <a
                className="icon-link icon-link-text"
                href={`mailto:${email}`}
                aria-label="Send me an email"
              >
                <Mail size={18} />
              </a>
            )}

            {socials.github && (
              <a
                className="icon-link icon-link-text"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
              >
                <Github size={18} />
              </a>
            )}

            {socials.linkedin && (
              <a
                className="icon-link icon-link-text"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>

          {email && (
            <a className="btn btn-primary" href={`mailto:${email}`}>
              Contact Me
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
