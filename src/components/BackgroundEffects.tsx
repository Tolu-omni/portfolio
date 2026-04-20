export default function BackgroundEffects() {
  return (
    <>
      <div className="site-bg"></div>
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb orb-1"></div>
        <div className="aurora-orb orb-2"></div>
        <div className="aurora-orb orb-3"></div>
      </div>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="scanlines" aria-hidden="true"></div>
      <div className="beam" aria-hidden="true"></div>
      <div className="sparkle" aria-hidden="true"></div>
    </>
  );
}