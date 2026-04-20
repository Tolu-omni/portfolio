import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <span className="brand-dot"></span>
        <span>Tolu.dev</span>
      </a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#systems">Systems</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <a className="nav-cta" href="#contact">Hire Me</a>
      </div>
    </nav>
  );
}