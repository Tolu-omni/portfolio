import { useLagosTime } from "../hooks/useLagosTime";

export default function AboutDashboard() {
  const lagosTime = useLagosTime();

  return (
    <section className="dashboard-section reveal" id="about">
      <div className="container dashboard-grid">
        <article className="dash-card interactive-block dash-about reveal">
          <div className="dash-pill">About</div>
          <h2>Frontend Engineer</h2>
          <p>
            I build interfaces that feel sharp, responsive, and intentional. My focus is on clean frontend architecture, polished user experience, and products that don’t just work — they leave an impression.
          </p>
          <p>
            I spend most of my time refining interactions, building scalable UI systems, and turning strong product ideas into experiences people actually enjoy using.
          </p>

          <div className="dash-stats">
            <div className="dash-stat">
              <strong>2+</strong>
              <span>Years Building</span>
            </div>
            <div className="dash-stat">
              <strong>React</strong>
              <span>Main Ecosystem</span>
            </div>
            <div className="dash-stat">
              <strong>24/7</strong>
              <span>Creative Mode</span>
            </div>
          </div>
        </article>

        <article className="dash-card interactive-block dash-mantra reveal reveal-delay-1">
          <div className="dash-pill">Mantra</div>
          <blockquote>
            “Build cleanly.<br />
            Let the product speak.”
          </blockquote>
          <p>OMONIYI TOLULOPE</p>
        </article>

        <article className="dash-card interactive-block dash-availability reveal reveal-delay-2">
          <div className="dash-pill">Availability</div>
          <div className="availability-row">
            <div>
              <span className="availability-label">GMT+1</span>
              <strong>{lagosTime}</strong>
              <small>Africa/Lagos</small>
            </div>
            <div className="availability-arrow">→</div>
            <div>
              <span className="availability-label">Status</span>
              <strong>Open</strong>
              <small>Available for work</small>
            </div>
          </div>

          <div className="status-box">
            <span className="status-dot"></span>
            <div>
              <strong>Most likely building</strong>
              <p>The best UI usually comes from details people almost don’t notice.</p>
            </div>
          </div>
        </article>

        <div className="dash-actions reveal reveal-delay-3">
          <a href="https://github.com/Tolu-omni" target="_blank" rel="noopener" className="dash-action-icon interactive-block">GH</a>
          <a href="#" className="dash-action-icon interactive-block">X</a>
          <a href="#" className="dash-action-icon interactive-block">IN</a>

          <a href="#projects" className="dash-action-wide interactive-block">
            <div>
              <span className="dash-action-label">Work</span>
              <strong>View Projects</strong>
            </div>
            <span className="dash-action-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}