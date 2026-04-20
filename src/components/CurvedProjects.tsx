import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function CurvedProjects() {
  const [index, setIndex] = useState(0);
  const wheelCooldown = useRef(false);
  const wheelAccumX = useRef(0);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const mouseStartX = useRef<number | null>(null);
  const mouseDeltaX = useRef(0);

  const [isMobile, setIsMobile] = useState(false);

  const SWIPE_THRESHOLD = 55;
  const WHEEL_THRESHOLD = 70;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stepNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const stepPrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const stage = document.querySelector(".curved-stage") as HTMLElement | null;
      if (!stage || isMobile) return;

      const rect = stage.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) return;

      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 4) {
        return;
      }

      if (wheelCooldown.current) return;

      wheelAccumX.current += e.deltaX;

      if (wheelAccumX.current >= WHEEL_THRESHOLD) {
        e.preventDefault();
        stepNext();
        wheelAccumX.current = 0;
        wheelCooldown.current = true;
      } else if (wheelAccumX.current <= -WHEEL_THRESHOLD) {
        e.preventDefault();
        stepPrev();
        wheelAccumX.current = 0;
        wheelCooldown.current = true;
      }

      if (wheelCooldown.current) {
        window.setTimeout(() => {
          wheelCooldown.current = false;
        }, 420);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") stepNext();
      if (e.key === "ArrowLeft") stepPrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isMobile]);

  const cards = useMemo(() => {
    return projects.map((project, i) => {
      let rawOffset = i - index;

      if (rawOffset > projects.length / 2) rawOffset -= projects.length;
      if (rawOffset < -projects.length / 2) rawOffset += projects.length;

      const abs = Math.abs(rawOffset);

      const spacing = 155;
      const depthDrop = 26;

      const x = rawOffset * spacing;
      const y = abs * depthDrop;
      const rotate = rawOffset * 4;
      const scale = rawOffset === 0 ? 1.08 : 1 - abs * 0.08;

      let opacity = 1;
      if (abs === 1) opacity = 0.42;
      if (abs >= 2) opacity = 0.14;

      return { project, rawOffset, x, y, rotate, scale, opacity };
    });
  }, [index]);

  return (
    <section id="projects" className="reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Featured Projects</h2>
          </div>
          <p>
            Scroll left or right gently, drag, swipe, or use arrow keys to move
            through the projects one at a time.
          </p>
        </div>

        <div
          className="curved-stage"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            touchDeltaX.current = 0;
          }}
          onTouchMove={(e) => {
            if (touchStartX.current === null) return;
            touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
          }}
          onTouchEnd={() => {
            if (touchDeltaX.current <= -SWIPE_THRESHOLD) stepNext();
            if (touchDeltaX.current >= SWIPE_THRESHOLD) stepPrev();
            touchStartX.current = null;
            touchDeltaX.current = 0;
          }}
          onMouseDown={(e) => {
            mouseStartX.current = e.clientX;
            mouseDeltaX.current = 0;
          }}
          onMouseMove={(e) => {
            if (mouseStartX.current === null) return;
            mouseDeltaX.current = e.clientX - mouseStartX.current;
          }}
          onMouseUp={() => {
            if (mouseDeltaX.current <= -SWIPE_THRESHOLD) stepNext();
            if (mouseDeltaX.current >= SWIPE_THRESHOLD) stepPrev();
            mouseStartX.current = null;
            mouseDeltaX.current = 0;
          }}
          onMouseLeave={() => {
            mouseStartX.current = null;
            mouseDeltaX.current = 0;
          }}
        >
          {cards.map(({ project, rawOffset, x, y, rotate, scale, opacity }) => (
            <div
              key={project.id}
              className={`curved-card-item ${rawOffset === 0 ? "is-active" : ""}`}
              style={{
                transform: isMobile
                  ? "none"
                  : `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg) scale(${scale})`,
                zIndex: 100 - Math.abs(rawOffset),
                opacity: isMobile ? 1 : opacity,
                pointerEvents: rawOffset === 0 ? "auto" : "none",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}