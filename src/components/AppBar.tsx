import { COMPANY_INFO } from '../data/content'

export default function AppBar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-slate-950/80 backdrop-blur-xl z-50 rounded-b-2xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={COMPANY_INFO.icon}
            alt={`${COMPANY_INFO.name} Logo`}
            className="w-10 h-10 rounded-lg"
          />
          <div className="text-lg sm:text-xl font-semibold tracking-tight">{COMPANY_INFO.name}</div>
        </div>
        <button className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </header>
  )
}