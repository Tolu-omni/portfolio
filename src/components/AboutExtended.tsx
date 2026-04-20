import { skills } from "../data/portfolio";

export default function AboutExtended() {
  return (
    <section id="about-extended" className="reveal">
      <div className="container split-grid">
        <article className="panel interactive-block reveal reveal-delay-1">
          <div className="panel-body">
            <div className="section-head" style={{ marginBottom: 20 }}>
              <div>
                <h2>About Me</h2>
              </div>
            </div>

            <div className="about-copy">
              <p>
                I'm a product-focused developer who likes making interfaces feel effortless.
              </p>
              <p>
                My thing is building modern experiences with React, clean architecture, and strong frontend systems.
              </p>
              <p>
                Outside of code, I'm inspired by music, motion, culture, design systems, and products that know how to leave an impression.
              </p>
            </div>

            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </article>

        <aside className="panel interactive-block spotify-card reveal reveal-delay-2">
          <div className="panel-body">
            <div className="spotify-top">
              <div className="spotify-badge">
                <span className="spotify-dot"></span>
                <span>Now Playing</span>
              </div>
              <button className="theme-toggle" type="button">
                Connect Spotify
              </button>
            </div>

            <div className="track">
              <div className="album"></div>
              <div>
                <h3>Not connected yet</h3>
                <p>Connect Spotify to show your live track</p>
              </div>
            </div>

            <div className="progress">
              <div className="bar">
                <span style={{ width: "38%" }}></span>
              </div>
              <div className="tiny">0:58 / 2:31</div>
            </div>

            <div className="small-grid">
              <div className="small-card">
                <h4>Status</h4>
                <p className="tiny">Listening mode</p>
              </div>
              <div className="small-card">
                <h4>Device</h4>
                <p className="tiny">MacBook Pro</p>
              </div>
              <div className="small-card">
                <h4>Album</h4>
                <p className="tiny">Unknown yet</p>
              </div>
              <div className="small-card">
                <h4>Link</h4>
                <p className="tiny">
                  <a href="#">Open in Spotify</a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

