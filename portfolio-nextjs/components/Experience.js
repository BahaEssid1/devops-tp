
const experiences = [
  {
    title: "DevOps & Cloud Computing Studies",
    description:
      "Studying infrastructure, Linux, networking, containers, CI/CD, and cloud-native technologies.",
  },
  {
    title: "Hands-on Infrastructure Labs",
    description:
      "Practicing with Ubuntu Server, SSH, virtual machines, Docker, Jenkins, Vagrant, and K3s.",
  },
  {
    title: "Building DevOps Projects",
    description:
      "Applying Git workflows, automated tests, microservices, containerization, and deployment practices through practical projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-heading">
          <h2>Experience & Learning</h2>
          <p>My current technical learning journey.</p>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.title}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
