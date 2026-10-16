
import { Github, Linkedin } from "lucide-react";

function Footer({ name = "My Portfolio", socials = {} }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © 2026 {name}. Thanks for visiting!
        </p>

        <div className="social-icons">
          {socials.github && (
            <a
              className="icon-link"
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <Github size={18} />
            </a>
          )}

          {socials.linkedin && (
            <a
              className="icon-link"
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
