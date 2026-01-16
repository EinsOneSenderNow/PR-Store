import { motion } from 'framer-motion'

export default function Advantages() {
  const advantages = [
    { title: 'Преимущество 1', desc: 'Описание первого преимущества вашей компании' },
    { title: 'Преимущество 2', desc: 'Описание второго преимущества вашей компании' },
    { title: 'Преимущество 3', desc: 'Описание третьего преимущества вашей компании' },
  ]

  return (
    <section className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Преимущества
        </motion.h2>
        
        <div className="grid grid-cols-3 gap-6 mb-32">
          {advantages.map((item, i) => (
            <motion.div 
              key={i}
              className="bg-neutral-900/50 border border-neutral-800/50 rounded-3xl p-10 hover:bg-neutral-900 hover:border-neutral-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-5xl font-bold mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Примеры работ
        </motion.h2>
        
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
<motion.div 
  key={i}
  className="card-hover aspect-square bg-neutral-900/50 border border-neutral-800/50 rounded-3xl flex items-center justify-center text-neutral-600 hover:border-neutral-700 hover:bg-neutral-900 cursor-pointer"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: i * 0.15 }}
  viewport={{ once: true, margin: "-100px" }}
>
  Фото {i}
</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}