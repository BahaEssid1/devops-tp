
import Link from "next/link";
import projects from "../data/projects";

export default function Projects({ limit }) {
  const visibleProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects">
      <div className="container">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>
            Practical projects and labs related to software development,
            automation, and DevOps.
          </p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <span className="project-number">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="project-status">{project.status}</span>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                className="project-link"
                href={`/projects/${project.slug}`}
              >
                View project details →
              </Link>
            </article>
          ))}
        </div>

        {typeof limit === "number" && projects.length > limit && (
          <div className="all-projects-link">
            <Link className="btn btn-primary" href="/projects">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
