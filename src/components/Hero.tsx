import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-2xl"
          style={{ top: '10%', left: '10%' }}
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-56 h-56 rounded-3xl bg-gradient-to-br from-blue-500/30 to-transparent blur-xl"
          style={{ top: '60%', left: '12%' }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-500/25 to-transparent blur-2xl"
          style={{ top: '15%', right: '5%' }}
          animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-pink-500/35 to-transparent blur-xl"
          style={{ top: '70%', right: '18%' }}
          animate={{ y: [0, -50, 0], x: [0, 25, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-violet-500/30 to-transparent blur-xl"
          style={{ top: '40%', left: '45%' }}
          animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-7xl font-bold mb-6 tracking-tight">PR Store</h1>
        <p className="text-xl text-neutral-400 mb-12 max-w-md mx-auto">Подзаголовок вашей компании с кратким описанием</p>
        <div className="flex gap-5 justify-center">
          <a 
            href="#how-to-order" 
            className="px-10 py-4 bg-white text-black rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            Заказать
          </a>
          <button 
            disabled 
            className="px-10 py-4 border border-neutral-700 text-neutral-500 rounded-full font-medium cursor-not-allowed opacity-50"
          >
            Скоро
          </button>
        </div>
      </motion.div>
    </section>
  )
}