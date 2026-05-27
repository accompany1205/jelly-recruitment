const owner = {
  name: 'MD AKBAR ALI',
  role: 'Owner',
  badge: 'Owner',
  image: '/assets/img/team/md-akbar-ali.png',
}

function TeamMemberCard({ name, role, badge, image, featured = false }) {
  return (
    <div className={`team-card${featured ? ' featured' : ''}`}>
      <div className="member-img">
        <img src={image} className="img-fluid" alt={name} loading="lazy" />
        <div className="social-overlay">
          <div className="social-links">
            <a href="#" aria-label={`${name} on LinkedIn`}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" aria-label={`${name} on email`}>
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="member-info">
        <span className="member-badge">{badge}</span>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>Meet the leadership behind Jelly Recruitment Limited</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 justify-content-center">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <TeamMemberCard {...owner} featured />
          </div>
        </div>

        <div className="team-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="stats-wrapper">
                <div className="stat-item">
                  <span className="stat-number">45+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Industries Served</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
