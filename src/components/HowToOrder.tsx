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
        <div className="relative mb-20 text-center">
          <m.h2 
            className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Как <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">заказать</span>
          </m.h2>
          
          {/* Декоративная черта под текстом */}
          <m.div 
            className="h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
        
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
