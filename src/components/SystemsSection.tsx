import ContributionCard from "./ContributionCard";
import { skills } from "../data/portfolio";

export default function SystemsSection() {
  return (
    <section className="systems-section reveal" id="systems">
      <div className="container systems-grid">
        <ContributionCard />

        <article className="system-card interactive-block stack-card reveal reveal-delay-2">
          <div className="system-head">
            <span className="system-pill">Tech Stack</span>
          </div>

          <p className="stack-copy">
            Primarily working within the JavaScript ecosystem — but always open to whatever stack gets the job done cleanly and fast.
          </p>

          <div className="tech-icons-grid">
            {skills.map((skill) => (
              <div className="tech-icon-card" key={skill} title={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="systems-cta reveal reveal-delay-3">
          <a href="#projects" className="systems-view-all">View All Projects</a>
        </div>
      </div>
    </section>
  );
}