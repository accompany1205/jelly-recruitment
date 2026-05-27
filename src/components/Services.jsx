const services = [
  {
    icon: 'bi-code-slash',
    title: 'Web Development',
    description:
      'Fast, secure, and scalable websites and web applications built to support business growth and performance.',
  },
  {
    icon: 'bi-phone',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android, designed for performance and user engagement.',
  },
  {
    icon: 'bi-cpu',
    title: 'AI & ML Solutions',
    description:
      'Intelligent automation and data-driven solutions using artificial intelligence and machine learning technologies.',
    featured: true,
  },
  {
    icon: 'bi-cloud-check',
    title: 'DevOps & Cloud',
    description:
      'Modern cloud infrastructure and DevOps practices to improve reliability, scalability, and deployment speed.',
  },
  {
    icon: 'bi-gear-wide-connected',
    title: 'Custom Software Development',
    description:
      'Tailor-made software solutions designed around your workflows, business logic, and long-term goals.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to help you plan, optimize, and execute successful digital initiatives.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>What We Offer</h2>
        <p>Comprehensive technology solutions tailored to your business needs</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className={`service-card${service.featured ? ' featured' : ''}`}>
                {service.featured && (
                  <div className="featured-badge">
                    <i className="bi bi-star-fill"></i>
                    <span>Popular</span>
                  </div>
                )}
                <div className="icon-wrapper">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-row" data-aos="fade-up" data-aos-delay="400">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">45+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
