
const express = require("express");

const app = express();
const projects = require("./projects");
const skills = require("./skills");
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DevSecOps Portfolio API",
    status: "running",
  });
});

// Task 30: API health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "devsecops-portfolio-api",
    timestamp: new Date().toISOString(),
  });
});


app.get("/api/profile", (req, res) => {
  res.status(200).json({
    name: "Baha Essid",
    title: "DevOps and Cloud Computing Student",
    education: {
      degree: "Master's Degree in DevOps and Cloud Computing",
      institution: "ISET Tozeur",
      year: 2026
    },
    summary:
      "Aspiring DevOps engineer interested in cloud computing, automation, CI/CD, containerization, and application security."
  });
});


app.get("/api/projects", (req, res) => {
  res.status(200).json({
    count: projects.length,
    projects,
  });
});

app.get("/api/skills", (req, res) => {
  res.status(200).json({
    count: skills.length,
    skills,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${PORT}`);
});
