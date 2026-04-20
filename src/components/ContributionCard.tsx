import { useState } from "react";
import { contributionLevels } from "../data/portfolio";

export default function ContributionCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const colors = [
    "rgba(124,255,131,0.08)",
    "rgba(124,255,131,0.16)",
    "rgba(97,255,99,0.34)",
    "rgba(80,255,92,0.56)",
    "rgba(88,255,88,0.95)",
  ];

  return (
    <article className="system-card interactive-block contribution-card reveal reveal-delay-1">
      <div className="system-head">
        <span className="system-pill">GitHub Activity</span>
        <span className="system-meta">Profile · Tolu-omni</span>
      </div>

      <div className="contribution-grid">
        {contributionLevels.map((level, index) => (
          <span
            key={index}
            className={`contribution-cell ${activeIndex === index ? "active" : ""}`}
            style={{ background: colors[level] }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          />
        ))}
      </div>

      <div className="contribution-foot">
        <div className="contribution-bar">
          <span style={{ width: "68%" }}></span>
        </div>
        <p>
          <a
            href="https://github.com/Tolu-omni"
            target="_blank"
            rel="noopener"
          >
            Open GitHub Profile
          </a>
        </p>
      </div>
    </article>
  );
}

