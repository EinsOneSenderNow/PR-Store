import { m, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: '3d-print',
    comment: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send data to backend or Telegram
    console.log('Form submitted:', formData)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[70] px-4"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">Оставить заявку</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Иван"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Telegram или Email</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="@username или email@example.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Тип услуги</label>
                  <select
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="3d-print">3D-печать</option>
                    <option value="modeling">3D-моделирование</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1">Комментарий (необязательно)</label>
                  <textarea
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all h-24 resize-none"
                    placeholder="Опишите задачу..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 mt-4 cursor-pointer"
                >
                  Отправить
                </button>
              </form>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  )
}
