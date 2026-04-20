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

export default function App() {
  useEffect(() => {
    const updateBackgroundMouse = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
      document.documentElement.style.setProperty("--spot-x", `${x}%`);
      document.documentElement.style.setProperty("--spot-y", `${y}%`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateBackgroundMouse(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      updateBackgroundMouse(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
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

      <footer className="reveal">
        <div className="container">
          © 2026 Omoniyi Tolulope — Designed with intention.
        </div>
      </footer>
    </>
  );
}