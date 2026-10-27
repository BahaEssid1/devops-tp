
async function getSkills() {
  try {
    const apiUrl =
      process.env.API_URL || "http://localhost:4000";

    const response = await fetch(`${apiUrl}/api/skills`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.skills;
  } catch (error) {
    console.error("Failed to fetch skills from API:", error);
    return [];
  }
}

export default async function Skills() {
  const skills = await getSkills();

  return (
    <section id="skills">
      <div className="container">
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <p>Technologies I am learning and using in practical labs.</p>
        </div>

        {skills.length === 0 ? (
          <p>Skills are temporarily unavailable. Please try again later.</p>
        ) : (
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
