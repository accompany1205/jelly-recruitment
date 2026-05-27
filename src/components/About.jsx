export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-6" data-aos="fade-right" data-aos-delay="200">
            <div className="about-images-wrapper">
              <div className="image-main">
                <img
                  src="/assets/img/about/about-5.webp"
                  alt="JELLY team collaborating on a technology strategy"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>

              <div className="image-offset">
                <img
                  src="/assets/img/about/about-square-3.webp"
                  alt="Modern software development workspace"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>

              <div className="experience-badge">
                <span
                  className="years purecounter"
                  data-purecounter-start="0"
                  data-purecounter-end="1"
                  data-purecounter-duration="1"
                >
                  0
                </span>
                <span className="text">
                  Years of
                  <br />
                  Experience
                </span>
              </div>

              <div className="shape-pattern"></div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-subtitle">Who We Are</div>

              <h2>Innovating for Your Success Through Technology</h2>

              <p className="lead-text">
                JELLY is a technology consulting and software development company helping businesses grow through
                smart, scalable, and future-ready digital solutions.
              </p>

              <p className="mb-4 description">
                We partner with startups and growing organizations to design, build, and optimize technology that
                drives real business outcomes. From strategy to execution, our team combines technical excellence with a
                deep understanding of business needs.
              </p>

              <div className="features-grid">
                <div className="feature-card">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Strategic IT Consulting</span>
                </div>
                <div className="feature-card">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Custom Software Solutions</span>
                </div>
                <div className="feature-card">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Agile &amp; Transparent Process</span>
                </div>
                <div className="feature-card">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Long-Term Technical Partnership</span>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-box">
                  <span
                    className="number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="45"
                    data-purecounter-duration="1"
                  >
                    0
                  </span>
                  <span className="label">Projects Delivered</span>
                </div>

                <div className="stat-box">
                  <span
                    className="number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="10"
                    data-purecounter-duration="1"
                  >
                    0
                  </span>
                  <span className="label">Happy Clients</span>
                </div>

                <div className="stat-box">
                  <span
                    className="number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="5"
                    data-purecounter-duration="1"
                  >
                    0
                  </span>
                  <span className="label">Years Experience</span>
                </div>
              </div>

              <div className="action-buttons">
                <a href="#services" className="btn btn-primary-custom">
                  Discover Our Services <i className="bi bi-arrow-right"></i>
                </a>

                <div className="contact-info">
                  <div className="icon-box">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="text">
                    <span>Call Us Today</span>
                    <a href="tel:+40358630588">+1 5312124015</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
