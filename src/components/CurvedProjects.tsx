import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function CurvedProjects() {
  return (
    <section id="projects" className="reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Featured Projects</h2>
          </div>
          <p>
            Space for your strongest work: project visual, short write-up, tech stack, and links to live demo plus source code.
          </p>
        </div>

        <div className="projects-grid" id="projectsGrid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card-wrapper card-${index + 1} reveal reveal-delay-${Math.min(index + 1, 4)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

