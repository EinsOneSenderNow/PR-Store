export default function Footer() {
  return (
    <footer className="px-8 py-7 bg-neutral-950 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-tight">PR Store</h3>
          <p className="text-neutral-500">© 2026 Все права защищены</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-5 text-neutral-300">Контакты</h4>
          <p className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">+7 (999) 123-45-67</p>
          <a href="mailto:email@example.com" className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">email@example.com</a>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-neutral-300">Площадки</h4>
          <a href="https://ozon.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">Ozon</a>
          <a href="https://avito.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">Авито</a>
          <a href="https://youla.ru" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 hover:text-neutral-300 transition-colors">Юла</a>
        </div>
        
        {/* <div>
          <h4 className="font-semibold mb-5 text-neutral-300">Соцсети</h4>
          <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">Telegram</a>
          <a href="https://vk.com/id0" target="_blank" rel="noopener noreferrer" className="block text-neutral-500 mb-3 hover:text-neutral-300 transition-colors">VK</a>
        </div> */}
      </div>
    </footer>
  )
}