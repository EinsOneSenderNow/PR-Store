import { m } from 'framer-motion'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { WORK_EXAMPLES } from '../data/content'

export default function Showcase() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-8">
      <Helmet>
        <title>Витрина — PR Layer</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <m.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Наши <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">работы</span>
          </m.h1>
          <m.p
            className="text-slate-400 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Примеры выполненных заказов по 3D-печати
          </m.p>
          <m.div
            className="h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_EXAMPLES.map((item, i) => (
            <m.div
              key={item.id}
              className="group relative aspect-[4/5] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(item.id)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Сюда потом вставишь <img> */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-medium text-lg">
                {item.label}
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">{item.label}</p>
                {item.description && (
                  <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                )}
                <p className="text-blue-400 text-sm mt-2">Нажмите для просмотра →</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Лайтбокс */}
      {selected !== null && (
        <m.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <m.div
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const item = WORK_EXAMPLES.find(w => w.id === selected)!
              return (
                <>
                  <div className="aspect-[4/3] bg-slate-800 rounded-2xl mb-4 flex items-center justify-center text-slate-600">
                    {/* Сюда <img src={item.image} /> */}
                    {item.label}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
                  {item.description && (
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  )}
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    Закрыть
                  </button>
                </>
              )
            })()}
          </m.div>
        </m.div>
      )}
    </main>
  )
}