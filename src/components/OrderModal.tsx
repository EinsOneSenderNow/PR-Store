import { m, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

const serviceOptions = [
  { value: '3d-print', label: '3D-печать' },
  { value: 'modeling', label: '3D-моделирование' },
  { value: 'consultation', label: 'Консультация' },
] as const

// Схема валидации
const schema = z.object({
  name: z.string().min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
  contact: z.string().refine(
    (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^@[a-zA-Z0-9_]{2,}$/.test(val),
    'Укажите email или Telegram (@username)'
  ),
  type: z.enum(['3d-print', 'modeling', 'consultation']),
  comment: z.string().max(500, 'Максимум 500 символов').optional()
})

type FormData = z.infer<typeof schema>

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      contact: '',
      type: '3d-print',
      comment: ''
    }
  })

  const selectedType = watch('type')
  const selectedOption = serviceOptions.find(opt => opt.value === selectedType)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsSelectOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsSelectOpen(false)
      reset() // Сбрасываем форму при закрытии
    }
  }, [isOpen, reset])

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
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
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Имя */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Ваше имя</label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${
                      errors.name 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder="Иван"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Контакт */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Telegram или Email</label>
                  <input
                    {...register('contact')}
                    type="text"
                    className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${
                      errors.contact 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder="@username или email@example.com"
                  />
                  {errors.contact && <p className="text-red-400 text-sm mt-1">{errors.contact.message}</p>}
                </div>

                {/* Кастомный Select */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Тип услуги</label>
                  <div ref={selectRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 text-white text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelectOpen 
                          ? 'border-blue-500 ring-1 ring-blue-500' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <span>{selectedOption?.label}</span>
                      <m.svg 
                        animate={{ rotate: isSelectOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5 text-slate-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </m.svg>
                    </button>

                    <AnimatePresence>
                      {isSelectOpen && (
                        <m.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-xl z-10"
                        >
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setValue('type', option.value)
                                setIsSelectOpen(false)
                              }}
                              className={`w-full px-4 py-3 text-left transition-all cursor-pointer ${
                                selectedType === option.value
                                  ? 'bg-blue-600/20 text-blue-400'
                                  : 'text-white hover:bg-slate-700/50'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Комментарий */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Комментарий (необязательно)</label>
                  <textarea
                    {...register('comment')}
                    className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all h-24 resize-none ${
                      errors.comment 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                    placeholder="Опишите задачу..."
                  />
                  {errors.comment && <p className="text-red-400 text-sm mt-1">{errors.comment.message}</p>}
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
