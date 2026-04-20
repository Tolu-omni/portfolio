import { useEffect } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutDashboard from "./components/AboutDashboard";
import CurvedProjects from "./components/CurvedProjects";
import SystemsSection from "./components/SystemsSection";
import BlogPreview from "./components/BlogPreview";
import AboutExtended from "./components/AboutExtended";
import FinalCTA from "./components/FinalCTA";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BackgroundEffects />
      <div className="nav-wrap">
        <Navbar />
      </div>

      <main>
        <Hero />
        <AboutDashboard />
        <CurvedProjects />
        <SystemsSection />
        <BlogPreview />
        <AboutExtended />
        <FinalCTA />
      </main>

      <footer className="reveal is-visible">
        <div className="container">
          © 2026 Omoniyi Tolulope — Designed with intention.
        </div>
      </footer>
    </>
  );
}
