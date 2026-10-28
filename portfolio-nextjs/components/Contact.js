
"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || "Unable to submit your message."
        );
      }

      setStatus({
        type: "success",
        message: data.message || "Your message was received.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Unable to submit your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-heading">
          <h2>Let's Connect</h2>
          <p>
            Have a project idea, a question, or an opportunity? Send me a
            message.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-intro">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h3>Let's build something great together.</h3>
            <p>
              I'm interested in DevOps, cloud computing, automation, and
              software engineering. Feel free to reach out.
            </p>

            <div className="contact-links">
              <a
                className="contact-link"
                href="https://github.com/BahaEssid1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon" aria-hidden="true">
                  GH
                </span>
                <span>
                  <strong>GitHub</strong>
                  <small>Explore my projects</small>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                className="contact-link"
                href="mailto:essidbaha18gmail.com"
              >
                <span className="contact-link-icon" aria-hidden="true">
                  @
                </span>
                <span>
                  <strong>Email</strong>
                  <small>Contact me directly</small>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>

          <div className="contact-card">
            <div className="contact-form-heading">
              <h3>Send a message</h3>
              <p>Fill in the details below.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-fields-row">
                <label className="contact-field">
                  <span>Your name</span>
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={80}
                  />
                </label>

                <label className="contact-field">
                  <span>Email address</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>Subject</span>
                <input
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  maxLength={120}
                />
              </label>

              <label className="contact-field">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={5}
                />
                <small className="contact-hint">
                  Maximum 2,000 characters.
                </small>
              </label>

              {status.message && (
                <p
                  className={`contact-status contact-status-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}

              <button
                className="btn btn-primary contact-submit"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending message..." : "Send message"}
                {!loading && <span aria-hidden="true"> ↗</span>}
              </button>

              <p className="contact-privacy-note">
                Your details are sent to the portfolio API to process this
                demo submission.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
