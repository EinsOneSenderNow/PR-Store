import { motion, useTransform, MotionValue } from 'framer-motion'

export default function HeroBackground({ scrollY }: { scrollY: MotionValue<number> }) {
  const y1 = useTransform(scrollY, [0, 1000], [0, 500])
  
  return (
    <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <motion.div
          className="absolute hidden sm:block w-72 h-72 rounded-full bg-gradient-to-br from-red-500/30 to-transparent blur-2xl"
          style={{ top: '10%', left: '10%' }}
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute hidden sm:block w-56 h-56 rounded-3xl bg-gradient-to-br from-green-500/30 to-transparent blur-xl"
          style={{ top: '65%', left: '7%' }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute hidden lg:block w-56 h-56 rounded-3xl bg-gradient-to-br from-red-500/30 to-transparent blur-xl"
          style={{ top: '20%', left: '40%' }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute hidden sm:block w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-500/25 to-transparent blur-2xl"
          style={{ top: '10%', right: '5%' }}
          animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute hidden sm:block w-36 h-36 rounded-full bg-gradient-to-br from-red-500/35 to-transparent blur-xl"
          style={{ top: '70%', right: '10%' }}
          animate={{ y: [0, -50, 0], x: [0, 25, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute hidden lg:block w-44 h-44 rounded-full bg-gradient-to-br from-green-500/30 to-transparent blur-xl"
          style={{ top: '60%', right: '35%' }}
          animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute hidden lg:block w-44 h-44 rounded-3xl bg-gradient-to-br from-blue-500/30 to-transparent blur-xl"
          style={{ top: '55%', left: '35%' }}
          animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute sm:hidden w-48 h-48 rounded-full bg-gradient-to-br from-red-500/25 to-transparent blur-2xl"
          style={{ top: '5%', left: '-10%' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute sm:hidden w-56 h-56 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-2xl"
          style={{ top: '50%', right: '-15%' }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
  )
}
