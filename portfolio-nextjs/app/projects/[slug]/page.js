
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container">
        <section className="project-detail">
          <Link className="back-link" href="/projects">
            ← Back to all projects
          </Link>

          <span className="eyebrow">{project.status}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <h2>About this project</h2>
          <p>{project.details}</p>

          <h2>Technologies</h2>
          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <a
            className="btn btn-secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
