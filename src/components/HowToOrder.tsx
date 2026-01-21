import { m } from 'framer-motion'
import { ORDER_STEPS } from '../data/content'

export default function HowToOrder() {
  const getStepGradient = (index: number) => {
    const gradients = [
      'from-blue-600 to-blue-800',
      'from-red-600 to-red-800',
      'from-green-600 to-green-800'
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="how-to-order" className="min-h-screen px-4 sm:px-8 py-16 sm:py-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <m.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Как заказать
        </m.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ORDER_STEPS.map((step, i) => (
            <m.div 
              key={step.num}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${getStepGradient(i)} text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-8 shadow-lg`}>
                {step.num}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{step.desc}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
