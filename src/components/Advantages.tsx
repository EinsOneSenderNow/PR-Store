import { m } from 'framer-motion'
import { ADVANTAGES, WORK_EXAMPLES } from '../data/content'

export default function Advantages() {
  const getHoverColor = (index: number) => {
    const colors = [
      'hover:bg-blue-900/30 hover:border-blue-700/50',
      'hover:bg-red-900/30 hover:border-red-700/50',
      'hover:bg-green-900/30 hover:border-green-700/50'
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <m.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Преимущества
        </m.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-32">
          {ADVANTAGES.map((item, i) => (
            <m.div 
              key={i}
              className={`bg-slate-900/50 border border-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 transition-colors duration-300 ${getHoverColor(i)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </m.div>
          ))}
        </div>

        <m.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Примеры работ
        </m.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WORK_EXAMPLES.map((item, i) => (
            <m.div 
              key={item.id}
              className={`card-hover aspect-square bg-slate-900/50 border border-slate-800/50 rounded-2xl sm:rounded-3xl flex items-center justify-center text-slate-600 cursor-pointer ${getHoverColor(i)}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {item.label}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
