export default function BlogPreview() {
  return (
    <section className="blog-preview-section reveal" id="blog">
      <div className="container">
        <div className="blog-preview-head">
          <h2>BLOG</h2>
          <a href="#" className="blog-preview-btn">View All Articles</a>
        </div>

        <article className="blog-preview-card interactive-block reveal reveal-delay-1">
          <div className="blog-preview-inner">
            <span className="blog-preview-kicker">Writing / Notes / Process</span>
            <h3>Coming Soon</h3>
            <p>
              I’ll be sharing product breakdowns, frontend notes, interface thinking, and the systems behind the work.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}