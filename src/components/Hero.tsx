function HeroName() {
  const buildLine = (text: string, delayOffset = 0) =>
    text.split("").map((letter, index) => (
      <span
        key={`${text}-${index}`}
        className="char"
        style={{ animationDelay: `${(index + delayOffset) * 0.045}s` }}
      >
        {letter}
      </span>
    ));

  return (
    <h1 className="hero-big" aria-label="Omoniyi Tolulope">
      <span className="hero-line">{buildLine("Omoniyi", 0)}</span>
      <span className="hero-line">{buildLine("Tolulope", 9)}</span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section className="hero-v2 reveal is-visible" id="home">
      <div className="hero-v2-inner container">
        <div className="hero-left">
          <HeroName />

          <div className="hero-meta">
            <span className="dot"></span>
            <span>Frontend Engineer</span>
          </div>

          <p className="location">Ogun State, NG</p>

          <div className="hero-stats">
            <article className="stat interactive-block reveal reveal-delay-1">
              <h3>8+</h3>
              <p>Production-ready projects shipped.</p>
            </article>
            <article className="stat interactive-block reveal reveal-delay-2">
              <h3>+</h3>
              <p>Years refining frontend and product UI.</p>
            </article>
            <article className="stat interactive-block reveal reveal-delay-3">
              <h3>99%</h3>
              <p>Obsessed with polish, speed, and details.</p>
            </article>
            <article className="stat interactive-block reveal reveal-delay-4">
              <h3>24/7</h3>
              <p>Always building, testing, and improving.</p>
            </article>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-tags">
            <span>React</span>
            <span>Web3</span>
            <span>UI Systems</span>
          </div>

          <p className="hero-desc">
            Building digital products that feel smooth, fast, and intentional.
            I care about experience, performance, and the small details people remember.
          </p>

          <a href="#projects" className="hero-cta">See My Work →</a>

          <div className="availability">
            <span className="dot live"></span>
            Available for work
          </div>
        </div>
      </div>
    </section>
  );
}