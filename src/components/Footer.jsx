import { EmailForm } from './Contact'

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 footer-info">
            <a href="#hero" className="logo d-flex align-items-center mb-4">
              <span className="sitename">JELLY RECRUITMENT LIMITED</span>
            </a>
            <p>
              Jelly delivers end-to-end IT services and consulting for startups and growing businesses, helping teams
              scale through smart technology and strategic guidance.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Web Development</a>
              </li>
              <li>
                <a href="#services">Mobile Apps</a>
              </li>
              <li>
                <a href="#services">AI &amp; ML Solutions</a>
              </li>
              <li>
                <a href="#services">DevOps &amp; Cloud</a>
              </li>
              <li>
                <a href="#services">Custom Software</a>
              </li>
              <li>
                <a href="#services">IT Consulting</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to receive insights, technology trends, and updates from the JELLY team.</p>

              <EmailForm placeholder="Your Email Address" successMessage="Thank you for subscribing!" />
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="row gy-3">
          <div className="col-md-6 order-2 order-md-1">
            <div className="copyright">
              <p>
                © <span>2026</span> <strong className="sitename">JELLY RECRUITMENT LIMITED</strong>. All Rights
                Reserved.
              </p>
            </div>
          </div>

          <div className="col-md-6 order-1 order-md-2">
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
