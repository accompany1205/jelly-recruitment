import { useEffect } from 'react'
import AOS from 'aos'
import PureCounter from '@srexi/purecounterjs'

export default function useSiteEffects() {
  useEffect(() => {
    document.body.classList.add('index-page')
    const toggleScrolled = () => {
      const body = document.body
      const header = document.querySelector('#header')
      if (
        !header?.classList.contains('scroll-up-sticky') &&
        !header?.classList.contains('sticky-top') &&
        !header?.classList.contains('fixed-top')
      ) {
        return
      }
      if (window.scrollY > 100) {
        body.classList.add('scrolled')
      } else {
        body.classList.remove('scrolled')
      }
    }

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle')
    const mobileNavToggle = () => {
      document.body.classList.toggle('mobile-nav-active')
      mobileNavToggleBtn?.classList.toggle('bi-list')
      mobileNavToggleBtn?.classList.toggle('bi-x')
    }

    const scrollTop = document.querySelector('.scroll-top')
    const toggleScrollTop = () => {
      if (!scrollTop) return
      if (window.scrollY > 100) {
        scrollTop.classList.add('active')
      } else {
        scrollTop.classList.remove('active')
      }
    }

    const handleScrollTopClick = (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navmenuLinks = document.querySelectorAll('.navmenu a')
    const navmenuScrollspy = () => {
      navmenuLinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll('.navmenu a.active').forEach((link) => {
            link.classList.remove('active')
          })
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }

    const handleMobileNavClick = () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle()
      }
    }

    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })

    new PureCounter()

    toggleScrolled()
    toggleScrollTop()
    navmenuScrollspy()

    mobileNavToggleBtn?.addEventListener('click', mobileNavToggle)
    scrollTop?.addEventListener('click', handleScrollTopClick)
    document.addEventListener('scroll', toggleScrolled)
    document.addEventListener('scroll', toggleScrollTop)
    document.addEventListener('scroll', navmenuScrollspy)
    navmenuLinks.forEach((link) => {
      link.addEventListener('click', handleMobileNavClick)
    })

    return () => {
      document.body.classList.remove('index-page')
      mobileNavToggleBtn?.removeEventListener('click', mobileNavToggle)
      scrollTop?.removeEventListener('click', handleScrollTopClick)
      document.removeEventListener('scroll', toggleScrolled)
      document.removeEventListener('scroll', toggleScrollTop)
      document.removeEventListener('scroll', navmenuScrollspy)
      navmenuLinks.forEach((link) => {
        link.removeEventListener('click', handleMobileNavClick)
      })
    }
  }, [])
}
