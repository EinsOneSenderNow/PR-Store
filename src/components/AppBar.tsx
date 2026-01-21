import { useState, useRef, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { COMPANY_INFO } from '../data/content'

export default function AppBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-2 sm:px-4">
      <div className="w-full max-w-5xl h-16 bg-slate-950/80 backdrop-blur-xl rounded-2xl relative shadow-lg shadow-black/20 border border-slate-800/50">
        <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-blue-600 via-red-500 to-green-500 opacity-50" />
        <div className="h-full px-4 sm:px-6 flex items-center justify-between relative">
          <a href="/" className="flex items-center gap-3 group">
          <img 
            src={COMPANY_INFO.icon}
            alt={`${COMPANY_INFO.name} Logo`}
            className="w-10 h-10 rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            {COMPANY_INFO.name}
          </div>
        </a>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-slate-600"
          >
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <m.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-xl overflow-hidden py-1 z-50"
              >
                {['Профиль', 'Контакты', 'Заказы'].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item}
                  </button>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </header>
  )
}
