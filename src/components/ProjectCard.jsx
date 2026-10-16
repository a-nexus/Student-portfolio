
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title || "Project preview"}
            loading="lazy"
          />
        ) : (
          <span className="image-placeholder">
            {project.title?.[0]?.toUpperCase() || "P"}
          </span>
        )}
      </div>

      <h3>{project.title || "Untitled Project"}</h3>

      <p className="muted">
        {project.description || "No description available."}
      </p>

      <div className="badges">
        {(project.technologies || []).map((tech) => (
          <span className="badge small" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a
            className="btn btn-ghost btn-small"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub repository"
          >
            <Github size={16} />
          </a>
        )}

        {project.demo && (
          <a
            className="btn btn-primary btn-small"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live project"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
