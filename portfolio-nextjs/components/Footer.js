
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Baha Essid. Built with Next.js,
          React, and CSS.
        </p>
      </div>
    </footer>
  );
}
