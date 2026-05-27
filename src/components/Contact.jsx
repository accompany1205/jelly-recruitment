import { useState } from 'react'

function EmailForm({ className, placeholder, successMessage }) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => {
      setStatus('sent')
      event.target.reset()
    }, 800)
  }

  return (
    <form action="#" method="post" className={`php-email-form ${className || ''}`} onSubmit={handleSubmit}>
      <div className="position-relative">
        <input type="email" name="email" placeholder={placeholder} required />
        <button type="submit" className="btn-subscribe">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div className={`loading${status === 'loading' ? ' d-block' : ''}`}>Loading</div>
      <div className="error-message"></div>
      <div className={`sent-message${status === 'sent' ? ' d-block' : ''}`}>{successMessage}</div>
    </form>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => {
      setStatus('sent')
      event.target.reset()
    }, 800)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Let&apos;s discuss how BANDRINO can help you achieve your technology goals</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-stretch">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="info-panel">
              <div className="panel-header">
                <span className="section-badge">
                  <i className="bi bi-chat-dots-fill"></i>
                  Get In Touch
                </span>
                <h3>Let&apos;s Bring Your Vision to Life</h3>
                <p>
                  Whether you&apos;re planning a new product, improving existing systems, or exploring new technologies,
                  our team is ready to help.
                </p>
              </div>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-envelope-paper-fill"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email Us</span>
                    <a href="mailto:support@bandrino.com">support@bandrino.com</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Call Us</span>
                    <a href="tel:+40358630588">+40 358 630 588</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-pin-map-fill"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Visit Us</span>
                    <span>Strada Ozunului 2, 520001 Sfantu Gheorghe, Romania</span>
                  </div>
                </div>
              </div>

              <div className="stats-strip">
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-text">Client Satisfaction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-text">Support</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-text">Projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="form-card">
              <div className="form-card-header">
                <div className="header-icon">
                  <i className="bi bi-send-fill"></i>
                </div>
                <div className="header-text">
                  <h4>Send Us a Message</h4>
                  <p>Fill out the form and our team will get back to you within 24 hours.</p>
                </div>
              </div>

              <form action="#" method="post" className="php-email-form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <label>Your Name</label>
                      <div className="input-wrapper">
                        <i className="bi bi-person"></i>
                        <input type="text" name="name" placeholder="John Doe" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <label>Email Address</label>
                      <div className="input-wrapper">
                        <i className="bi bi-envelope"></i>
                        <input type="email" name="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group-custom">
                      <label>Subject</label>
                      <div className="input-wrapper">
                        <i className="bi bi-chat-square-text"></i>
                        <input type="text" name="subject" placeholder="How can we help?" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group-custom">
                      <label>Your Message</label>
                      <div className="input-wrapper textarea-wrapper">
                        <i className="bi bi-pencil-square"></i>
                        <textarea name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <div className={`loading${status === 'loading' ? ' d-block' : ''}`}>Loading</div>
                  <div className="error-message"></div>
                  <div className={`sent-message${status === 'sent' ? ' d-block' : ''}`}>
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit" className="btn-submit">
                    <span>Send Message</span>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </button>

                  <div className="secure-note">
                    <i className="bi bi-lock-fill"></i>
                    <span>Your information is secure and confidential</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { EmailForm }
