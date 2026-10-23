
import Link from "next/link";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <span className="eyebrow">
                DevOps & Cloud Computing
              </span>

              <h1>
                Hi, I&apos;m Baha.
                <br />
                I build and automate{" "}
                <span>software delivery.</span>
              </h1>

              <p>
                I&apos;m a DevOps and Cloud Computing student passionate
                about Linux, automation, containers, CI/CD, cloud
                technologies, and building reliable software delivery
                workflows.
              </p>

              <div className="hero-actions">
                <Link className="btn btn-primary" href="#projects">
                  Explore My Projects
                </Link>

                <a
                  className="btn btn-secondary"
                  href="https://github.com/BahaEssid1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects limit={3} />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
