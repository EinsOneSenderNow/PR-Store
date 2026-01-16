export default function AppBar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-neutral-950/70 backdrop-blur-xl z-50 border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">PRStore</div>
        <button className="w-10 h-10 rounded-full bg-neutral-800/80 flex items-center justify-center hover:bg-neutral-700 transition-all duration-300 hover:scale-105">
          <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </header>
  )
}