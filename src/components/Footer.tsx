import { COMPANY_INFO } from '../data/content'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-7 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4">
        <div className="w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">{COMPANY_INFO.name}</h3>
          <p className="text-slate-500 text-sm sm:text-base">{COMPANY_INFO.copyright}</p>
        </div>
        
        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-3 sm:mb-5 text-slate-300">Контакты</h4>
          <p className="block text-slate-500 mb-2 sm:mb-3 hover:text-slate-300 transition-colors text-sm sm:text-base">{COMPANY_INFO.contact.phone}</p>
          <a href={`mailto:${COMPANY_INFO.contact.email}`} className="block text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base">{COMPANY_INFO.contact.email}</a>
        </div>

        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-3 sm:mb-5 text-slate-300">Площадки</h4>
          {COMPANY_INFO.socials.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-slate-500 mb-2 sm:mb-3 hover:text-slate-300 transition-colors text-sm sm:text-base"
            >
              {social.name}
            </a>
          ))}
        </div>
        
        {/* <div>
          <h4 className="font-semibold mb-3 sm:mb-5 text-slate-300">Соцсети</h4>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="block text-slate-500 mb-2 sm:mb-3 hover:text-slate-300 transition-colors text-sm sm:text-base">Telegram</a>
          <a href="https://vk.com/id0" target="_blank" rel="noopener noreferrer" className="block text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base">VK</a>
        </div> */}
      </div>
    </footer>
  )
}