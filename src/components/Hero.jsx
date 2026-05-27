export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-content">
              <div className="hero-tag" data-aos="fade-up" data-aos-delay="250">
                <span className="tag-dot"></span>
                <span className="tag-text">IT Services &amp; Consulting</span>
              </div>

              <h1 className="hero-headline" data-aos="fade-up" data-aos-delay="300">
                Strategic IT Consulting for Business Growth
              </h1>

              <p className="hero-text" data-aos="fade-up" data-aos-delay="350">
                At <strong>JELLY</strong>, we help businesses harness technology to solve real
                challenges, streamline operations, and accelerate sustainable growth. Your trusted partner for digital
                transformation, software development, and IT strategy.
              </p>

              <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
                <a href="#contact" className="cta-button">
                  <span>Schedule a Consultation</span>
                  <i className="bi bi-arrow-right"></i>
                </a>

                <a href="#services" className="cta-link">
                  <i className="bi bi-grid"></i>
                  <span>Explore Our Services</span>
                </a>
              </div>

              <div className="hero-trust mt-4" data-aos="fade-up" data-aos-delay="450">
                <small className="text-muted">Trusted by innovative companies worldwide</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="stats-grid">
              <div className="stat-card stat-card-primary" data-aos="zoom-in" data-aos-delay="350">
                <div className="stat-icon-wrap">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-value">45+</span>
                  <span className="stat-title">Projects Delivered</span>
                </div>
              </div>

              <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="stat-icon-wrap">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-value">10+</span>
                  <span className="stat-title">Happy Clients</span>
                </div>
              </div>

              <div className="stat-card" data-aos="zoom-in" data-aos-delay="450">
                <div className="stat-icon-wrap">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-value">5+</span>
                  <span className="stat-title">Years Experience</span>
                </div>
              </div>

              <div className="stat-card stat-card-accent" data-aos="zoom-in" data-aos-delay="500">
                <div className="stat-icon-wrap">
                  <i className="bi bi-briefcase"></i>
                </div>
                <div className="stat-info">
                  <span className="stat-value">95%</span>
                  <span className="stat-title">Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
