
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Projects | DevOps Portfolio",
  description: "Explore my DevOps, cloud, and software development projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <span className="eyebrow">My Work</span>
            <h1>All Projects</h1>
            <p>
              Explore my projects, practical labs, and ongoing learning
              in DevOps, cloud computing, and software development.
            </p>
          </div>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}
