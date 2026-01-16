export default function Footer() {
  return (
    <footer className="px-8 py-16 bg-neutral-950 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-tight">PRStore</h3>
          <p className="text-neutral-500">© 2025 Все права защищены</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-5 text-neutral-300">Контакты</h4>
          <p className="text-neutral-500 mb-3 hover:text-neutral-300 transition-colors cursor-pointer">+7 (999) 123-45-67</p>
          <p className="text-neutral-500 mb-3 hover:text-neutral-300 transition-colors cursor-pointer">email@example.com</p>
          <p className="text-neutral-500">г. Москва, ул. Примерная, 1</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-5 text-neutral-300">Соцсети</h4>
          <p className="text-neutral-500 mb-3 hover:text-neutral-300 transition-colors cursor-pointer">Telegram</p>
          <p className="text-neutral-500 mb-3 hover:text-neutral-300 transition-colors cursor-pointer">VK</p>
          <p className="text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">WhatsApp</p>
        </div>
      </div>
    </footer>
  )
}