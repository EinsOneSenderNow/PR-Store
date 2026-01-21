import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { useLenis } from './SmoothScroll'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-blue-500 transition-colors cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  )
}
