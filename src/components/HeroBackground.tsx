import { m, useTransform, MotionValue, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

function InteractiveShape({
  className,
  style,
  animate,
  transition,
  mouseX,
  mouseY,
  parentY,
}: {
  className: string
  style: CSSProperties
  animate: any
  transition: any
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  parentY: MotionValue<number>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 150, damping: 20 })
  const y = useSpring(0, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const handleMotion = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      // Calculate center relative to viewport
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mx = mouseX.get()
      const my = mouseY.get()

      const dx = mx - centerX
      const dy = my - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxDist = 400 // Radius of influence

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist
        const repulsion = 80 // Max repulsion pixels
        x.set(-(dx / dist) * force * repulsion)
        y.set(-(dy / dist) * force * repulsion)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    // Subscribe to mouse changes
    const unsubscribeX = mouseX.on('change', handleMotion)
    const unsubscribeY = mouseY.on('change', handleMotion)
    // Also subscribe to parentY (parallax) changes as they affect position
    const unsubscribeParentY = parentY.on('change', handleMotion)

    return () => {
      unsubscribeX()
      unsubscribeY()
      unsubscribeParentY()
    }
  }, [mouseX, mouseY, parentY, x, y])

  return (
    <m.div
      ref={ref}
      className="absolute"
      style={{ ...style, x, y }}
    >
      <m.div
        className={className}
        animate={animate}
        transition={transition}
      />
    </m.div>
  )
}

export default function HeroBackground({ scrollY }: { scrollY: MotionValue<number> }) {
  const y1 = useTransform(scrollY, [0, 1000], [0, 500])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <m.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="w-72 h-72 rounded-full bg-gradient-to-br from-red-500/30 to-transparent blur-2xl"
          style={{ top: '10%', left: '10%' }}
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="w-56 h-56 rounded-3xl bg-gradient-to-br from-green-500/30 to-transparent blur-xl"
          style={{ top: '65%', left: '7%' }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="hidden lg:block w-56 h-56 rounded-3xl bg-gradient-to-br from-red-500/30 to-transparent blur-xl"
          style={{ top: '20%', left: '40%' }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-blue-500/25 to-transparent blur-2xl"
          style={{ top: '10%', right: '5%' }}
          animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="w-36 h-36 rounded-full bg-gradient-to-br from-red-500/35 to-transparent blur-xl"
          style={{ top: '70%', right: '10%' }}
          animate={{ y: [0, -50, 0], x: [0, 25, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="hidden lg:block w-44 h-44 rounded-full bg-gradient-to-br from-green-500/30 to-transparent blur-xl"
          style={{ top: '60%', right: '35%' }}
          animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="hidden lg:block w-44 h-44 rounded-3xl bg-gradient-to-br from-blue-500/30 to-transparent blur-xl"
          style={{ top: '55%', left: '35%' }}
          animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="sm:hidden w-48 h-48 rounded-full bg-gradient-to-br from-red-500/25 to-transparent blur-2xl"
          style={{ top: '5%', left: '-10%' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <InteractiveShape
          mouseX={mouseX}
          mouseY={mouseY}
          parentY={y1}
          className="sm:hidden w-56 h-56 rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-2xl"
          style={{ top: '50%', right: '-15%' }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </m.div>
  )
}
