
"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-bar" aria-label="Main navigation">
          <a href="/#home" className="logo">
            Baha Essid<span>.</span>
          </a>

          <div className="nav-right">
            <div className="nav-links">
              {links.map((link) => (
                <a key={link.href} href={`/${link.href}`}>
                  {link.label}
                </a>
              ))}
              <a href="/projects">All Projects</a>
            </div>

            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle color theme"
              aria-pressed={dark}
              onClick={() => setDark((current) => !current)}
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
