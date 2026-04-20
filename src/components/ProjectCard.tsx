import type { MouseEvent } from "react";
import type { ProjectItem } from "../data/portfolio";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (window.innerWidth <= 980) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;

    const rotateY = px * 7;
    const rotateX = py * -7;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onMouseLeave = (e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <article
      className="project-card interactive-block"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-media">
        <span className="project-tag">{project.tag}</span>

        {project.image && !project.mock ? (
          <img
            className="project-screenshot"
            src={project.image}
            alt={`${project.title} preview`}
          />
        ) : (
          <div className="mock-window">
            <div className="mock-top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mock-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>

      <div className="project-content">
        <span className="project-year">{project.year}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-links">
          <a
            className="project-link"
            href={project.live || "#"}
            target="_blank"
            rel="noopener"
          >
            Live Demo
          </a>
          <a
            className="project-link"
            href={project.github || "#"}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a className="project-link" href={project.extra || "#"}>
            Details
          </a>
        </div>
      </div>
    </article>
  );
}