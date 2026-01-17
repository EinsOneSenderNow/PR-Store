export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-7 bg-neutral-950 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-4">
        <div className="w-full sm:w-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">PR Store</h3>
          <p className="text-neutral-500 text-sm sm:text-base">© 2026 Все права защищены</p>
        </div>
        
        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-3 sm:mb-5 text-neutral-300">Контакты</h4>
          <p className="block text-neutral-500 mb-2 sm:mb-3 hover:text-neutral-300 transition-colors text-sm sm:text-base">+7 (999) 123-45-67</p>
          <a href="mailto:email@example.com" className="block text-neutral-500 hover:text-neutral-300 transition-colors text-sm sm:text-base">email@example.com</a>
        </div>

        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-3 sm:mb-5 text-neutral-300">Площадки</h4>
          <a href="https://ozon.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-2 sm:mb-3 hover:text-neutral-300 transition-colors text-sm sm:text-base">Ozon</a>
          <a href="https://avito.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-2 sm:mb-3 hover:text-neutral-300 transition-colors text-sm sm:text-base">Авито</a>
          <a href="https://youla.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 hover:text-neutral-300 transition-colors text-sm sm:text-base">Юла</a>
        </div>
        
        {/* <div>
          <h4 className="font-semibold mb-3 sm:mb-5 text-neutral-300">Соцсети</h4>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-2 sm:mb-3 hover:text-neutral-300 transition-colors text-sm sm:text-base">Telegram</a>
          <a href="https://vk.com/id0" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 hover:text-neutral-300 transition-colors text-sm sm:text-base">VK</a>
        </div> */}
      </div>
    </footer>
  )
}