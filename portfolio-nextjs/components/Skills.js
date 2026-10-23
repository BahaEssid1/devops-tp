
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <p>Technologies I am learning and using in practical labs.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
