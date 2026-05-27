import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const testimonials = [
  {
    text: 'JELLY transformed our legacy systems into a modern, cloud-based platform. Their expertise and professionalism exceeded our expectations.',
    name: 'Jennifer Martinez',
    role: 'CTO, FinanceFlow Inc.',
    image: '/assets/img/person/person-f-2.webp',
  },
  {
    text: 'The mobile app delivered by JELLY increased our user engagement by over 300%. The team was responsive, creative, and delivered on time.',
    name: 'Robert Chang',
    role: 'CEO, RetailPlus',
    image: '/assets/img/person/person-m-5.webp',
  },
  {
    text: 'Their AI solutions helped us automate more than half of our manual processes, saving hundreds of hours every month. Outstanding results.',
    name: 'Amanda Foster',
    role: 'VP of Operations, LogiTech Solutions',
    image: '/assets/img/person/person-f-9.webp',
  },
  {
    text: 'JELLY felt like an extension of our internal team. Clear communication, strong technical leadership, and excellent delivery.',
    name: 'James Mitchell',
    role: 'Product Lead, InnovateNow',
    image: '/assets/img/person/person-m-11.webp',
  },
]

function TestimonialCard({ text, name, role, image }) {
  return (
    <div className="testimonial-card">
      <div className="card-top">
        <div className="stars">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <span className="quote-mark">
          <i className="bi bi-quote"></i>
        </span>
      </div>

      <p className="testimonial-text">{text}</p>

      <div className="author-info">
        <img src={image} alt="Client" className="author-img" loading="lazy" />
        <div className="author-details">
          <h5>{name}</h5>
          <span>{role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Client Success</h2>
        <p>What our clients say about working with JELLY</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
            <div className="testimonials-sidebar">
              <div className="avatar-stack">
                <img src="/assets/img/person/person-f-7.webp" alt="Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-m-5.webp" alt="Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-f-9.webp" alt="Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-m-11.webp" alt="Client" className="avatar" loading="lazy" />
                <span className="avatar-count">+100</span>
              </div>

              <div className="sidebar-content">
                <span className="satisfied-badge">
                  <i className="bi bi-heart-fill"></i> Trusted by Growing Businesses
                </span>

                <h3>Real Results. Real Feedback.</h3>

                <p>
                  We take pride in long-term partnerships and measurable outcomes. Here&apos;s what our clients say about
                  collaborating with JELLY.
                </p>

                <a href="#contact" className="btn-view-all">
                  Start Your Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="testimonials-carousel init-swiper">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop
                speed={700}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                spaceBetween={24}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.name}>
                    <TestimonialCard {...testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
