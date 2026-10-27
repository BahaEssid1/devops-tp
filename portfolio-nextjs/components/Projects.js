
import Link from "next/link";

async function getProjects() {
  try {
    const apiUrl =
      process.env.API_URL || "http://localhost:4000";

    const response = await fetch(`${apiUrl}/api/projects`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Failed to fetch projects from API:", error);
    return [];
  }
}

export default async function Projects({ limit }) {
  const projects = await getProjects();

  const visibleProjects =
    typeof limit === "number"
      ? projects.slice(0, limit)
      : projects;

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

        {projects.length === 0 ? (
          <p>Projects are temporarily unavailable. Please try again later.</p>
        ) : (
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
        )}

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
