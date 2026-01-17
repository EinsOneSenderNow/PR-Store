import { motion } from 'framer-motion'

export default function HowToOrder() {
  const steps = [
    { num: 1, title: 'Шаг первый', desc: 'Описание первого шага' },
    { num: 2, title: 'Шаг второй', desc: 'Описание второго шага' },
    { num: 3, title: 'Шаг третий', desc: 'Описание третьего шага' },
    { num: 4, title: 'Шаг четвёртый', desc: 'Описание четвёртого шага' },
  ]

  return (
    <section id="how-to-order" className="min-h-screen px-4 sm:px-8 py-16 sm:py-32 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Как заказать
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-neutral-950 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-8">
                {step.num}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}