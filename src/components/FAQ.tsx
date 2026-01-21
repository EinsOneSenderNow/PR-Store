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
        <m.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Частые вопросы
        </m.h2>
        
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
