import { Fragment } from 'react'

const processSteps = [
  { step: '1', title: 'Discovery', text: 'Understanding your goals' },
  { step: '2', title: 'Planning', text: 'Defining strategy & roadmap' },
  { step: '3', title: 'Build', text: 'Designing & development' },
  { step: '4', title: 'Launch & Scale', text: 'Continuous improvement' },
]

const capabilities = [
  {
    icon: 'bi-bullseye',
    title: 'Business-Focused Strategy',
    text: 'Technology decisions aligned with measurable business outcomes.',
  },
  {
    icon: 'bi-code-slash',
    title: 'Technical Excellence',
    text: 'Modern architectures, clean code, and scalable systems.',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Long-Term Partnership',
    text: 'Ongoing support, optimization, and continuous improvement.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Choose Us</h2>
        <p>Your trusted IT consulting and technology partner</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="sidebar-content">
              <div className="badge-wrapper">
                <span className="section-badge">
                  <i className="bi bi-stars"></i> Our Advantage
                </span>
              </div>

              <h2>Transform Your Vision Into Digital Excellence</h2>

              <p className="description">
                BANDRINO combines technical expertise with business insight to deliver solutions that create real,
                measurable impact. We don&apos;t just build software — we build long-term partnerships.
              </p>

              <div className="stat-cards">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stat-value">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="45"
                      data-purecounter-duration="1"
                    >
                      0
                    </span>
                    +
                  </div>
                  <div className="stat-text">Projects Delivered</div>
                </div>

                <div className="stat-card" data-aos="zoom-in" data-aos-delay="350">
                  <div className="stat-value">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="95"
                      data-purecounter-duration="1"
                    >
                      0
                    </span>
                    %
                  </div>
                  <div className="stat-text">Client Satisfaction</div>
                </div>

                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-value">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="5"
                      data-purecounter-duration="1"
                    >
                      0
                    </span>
                    +
                  </div>
                  <div className="stat-text">Years Experience</div>
                </div>
              </div>

              <div className="action-buttons">
                <a href="#contact" className="btn-main">
                  Get Started Today
                </a>
                <a href="#services" className="btn-outline">
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="features-grid">
              <div className="feature-box highlight" data-aos="fade-up" data-aos-delay="250">
                <div className="feature-ribbon">Top Rated</div>
                <div className="feature-icon">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Expert Team</h4>
                  <p>
                    Our developers, consultants, and architects bring years of experience across industries and modern
                    technologies.
                  </p>
                  <a href="#team" className="feature-link">
                    Meet the Team <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div className="feature-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Agile &amp; Transparent Process</h4>
                  <p>
                    We follow agile methodologies to deliver faster, stay flexible, and keep you informed every step of
                    the way.
                  </p>
                  <a href="#services" className="feature-link">
                    Learn How <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div className="feature-box" data-aos="fade-up" data-aos-delay="350">
                <div className="feature-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Quality-First Delivery</h4>
                  <p>
                    Code reviews, testing, and best practices ensure every solution meets the highest quality standards.
                  </p>
                  <a href="#contact" className="feature-link">
                    Start a Project <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="process-timeline" data-aos="fade-up" data-aos-delay="400">
              <h5 className="timeline-title">
                <i className="bi bi-diagram-3-fill"></i> Our Proven Process
              </h5>

              <div className="timeline-steps">
                {processSteps.map((item, index) => (
                  <Fragment key={item.step}>
                    <div className="timeline-step">
                      <div className="step-marker">{item.step}</div>
                      <div className="step-info">
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </div>
                    {index < processSteps.length - 1 && <div className="timeline-connector"></div>}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="capabilities-section" data-aos="fade-up" data-aos-delay="450">
              <h5 className="capabilities-heading">What We Bring to the Table</h5>

              <div className="capabilities-grid">
                {capabilities.map((capability) => (
                  <div key={capability.title} className="capability-card">
                    <div className="capability-icon">
                      <i className={`bi ${capability.icon}`}></i>
                    </div>
                    <h6>{capability.title}</h6>
                    <p>{capability.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
