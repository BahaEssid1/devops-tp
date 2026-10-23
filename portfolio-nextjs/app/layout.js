
import "./globals.css";

export const metadata = {
  title: "DevOps Portfolio | Baha Essid",
  description:
    "DevOps and Cloud Computing portfolio showcasing projects, technical skills, and practical experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
