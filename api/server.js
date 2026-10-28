
const express = require("express");
const { z } = require("zod");

const app = express();
const projects = require("./projects");
const skills = require("./skills");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const PORT = process.env.PORT || 4000;

app.use(helmet());

app.use(express.json({ limit: "10kb" }));
// Task 51: Limit repeated contact form submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,                 // Maximum 5 requests per IP per window
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: {
      code: "RATE_LIMITED",
      message: "Too many contact submissions. Please try again later.",
    },
  },
});

// Strict validation schema for contact submissions
const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(3).max(120),
    message: z.string().trim().min(10).max(2000),
  })
  .strict();

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
      year: 2026,
    },
    summary:
      "Aspiring DevOps engineer interested in cloud computing, automation, CI/CD, containerization, and application security.",
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

// Task 46 + 48: Contact endpoint with strict Zod validation
app.post("/api/contact", contactLimiter, (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: {
        code: "INVALID_CONTACT_DATA",
        message: "The contact data is invalid.",
        details: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
    });
  }

  const { name, email, subject, message } = result.data;

  // Demo endpoint: validates data but does not send or store emails.
  console.log(`Valid contact submission received from ${email}`);

  return res.status(201).json({
    status: "received",
    message: "Contact form submission received successfully.",
  });
});


// Handle requests to routes that do not exist
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found.",
    },
  });
});

// Handle errors from middleware and route handlers
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // Malformed JSON submitted to express.json()
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      error: {
        code: "INVALID_JSON",
        message: "The request body contains invalid JSON.",
      },
    });
  }

  // Request body exceeds the configured 10 KB limit
  if (err.type === "entity.too.large") {
    return res.status(413).json({
      error: {
        code: "PAYLOAD_TOO_LARGE",
        message: "The request body exceeds the allowed size.",
      },
    });
  }

  const status = Number.isInteger(err.status) &&
    err.status >= 400 &&
    err.status < 500
      ? err.status
      : 500;

  if (status === 500) {
    console.error("Internal API error:", err.message);
  }

  return res.status(status).json({
    error: {
      code: status === 500 ? "INTERNAL_SERVER_ERROR" : "REQUEST_ERROR",
      message:
        status === 500
          ? "An unexpected server error occurred."
          : "The request could not be processed.",
    },
  });
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${PORT}`);
});
