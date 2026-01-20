import { motion, useScroll } from 'framer-motion'
import HeroBackground from './HeroBackground'
import { COMPANY_INFO } from '../data/content'

export default function Hero() {
  const { scrollY } = useScroll()

  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <HeroBackground scrollY={scrollY} />

      <motion.div 
        className="relative z-10 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img 
          src={COMPANY_INFO.logo}
          alt={`${COMPANY_INFO.name} Logo`}
          className="w-24 h-24 sm:w-75 sm:h-75 mb-6 sm:mb-8 rounded-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
        />
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent pb-2">
          {COMPANY_INFO.name}
        </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8 sm:mb-12 max-w-md mx-auto px-4">{COMPANY_INFO.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center px-4">
            <a 
              href="#how-to-order" 
              className="px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Заказать
            </a>
            <button 
              disabled 
              className="px-8 sm:px-10 py-3 sm:py-4 border border-neutral-700 text-neutral-500 rounded-full font-medium cursor-not-allowed opacity-50"
            >
              Скоро
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
