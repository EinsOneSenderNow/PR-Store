import { m } from 'framer-motion'
import { WORK_EXAMPLES } from '../data/content'

export default function AboutAndWorks() {
  return (
    <section className="px-4 sm:px-8 py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Переработанный блок "О нас" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 sm:mb-48">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Ваши идеи в объеме: <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                профессиональная 3D-печать на заказ
              </span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-6">
              Мы превращаем сложные 3D-модели в реальные физические объекты с безупречной точностью. Используя современные технологии FDM-печати и качественные материалы (PLA), мы создаем как уникальные детали для дома, так и функциональные прототипы для бизнеса. Каждый проект для нас — это сочетание инженерного расчета и внимания к вашим задачам.
            </p>
            <div className="flex gap-4 items-center text-blue-400 font-medium italic">
              <span className="w-12 h-[1px] bg-blue-400/50"></span>
              С заботой о каждой детали
            </div>
          </m.div>

          <m.div 
  className="grid grid-cols-2 gap-6"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  {/* Левая колонка */}
  <div className="flex flex-col gap-6">
    <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-3xl h-36">
      <div className="text-3xl font-bold text-white mb-2">0.1 мм</div>
      <div className="text-slate-500 text-sm">Высокая точность печати слоев</div>
    </div>
    <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-3xl h-36 translate-x-3">
      <div className="text-3xl font-bold text-white mb-2">100+</div>
      <div className="text-slate-500 text-sm">Выполненных проектов</div>
    </div>
  </div>

  {/* Правая колонка — смещена вниз */}
  <div className="flex flex-col gap-6 mt-10">
    <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-3xl h-36">
      <div className="text-3xl font-bold text-white mb-2">24/7</div>
      <div className="text-slate-500 text-sm">Ваш проект в печати без остановок</div>
    </div>
    <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-3xl h-36 translate-x-3">
      <div className="text-3xl font-bold text-white mb-2">PLA</div>
      <div className="text-slate-500 text-sm">Качественные материалы для печати</div>
    </div>
  </div>
</m.div>
        </div>

        {/* Секция Примеры работ (Портфолио) */}
        <div className="space-y-12">
          <div className="relative mb-20 text-center">
            
            <m.h2 
              className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Примеры <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">работ</span>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_EXAMPLES.map((item, i) => (
              <m.div 
                key={item.id}
                className="group relative aspect-[4/5] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Заглушка под будущие изображения */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-medium group-hover:scale-110 transition-transform duration-500">
                  {item.label}
                </div>
                
                {/* Подпись при наведении */}
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">{item.label}</p>
                  <p className="text-blue-400 text-sm">Посмотреть проект</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}