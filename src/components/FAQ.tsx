import { m, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FAQ_ITEMS } from '../data/content'

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-800">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-4 mb-12">
          {/* Иконка (размер адаптирован под высоту текста) */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-blue-400 shrink-0"
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-10 h-10 sm:w-12 sm:h-12" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="5" y="5" width="90" height="90" rx="24" strokeWidth="6" className="opacity-20" />
              <rect x="5" y="5" width="90" height="90" rx="24" strokeWidth="6" />
              <text 
                x="50%" y="50%" dominantBaseline="central" textAnchor="middle" 
                fontSize="36" fontWeight="900" fill="currentColor" stroke="none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                FAQ
              </text>
            </svg>
          </m.div>

          {/* Текст заголовка */}
          <m.h2 
            className="text-3xl sm:text-4xl font-black tracking-tighter uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Частые 
            <span className="ml-2 text-blue-400">
              вопросы
            </span>
          </m.h2>
        </div>
        
        <div className="bg-slate-900/30 rounded-3xl p-6 sm:p-10 border border-slate-800/50">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
