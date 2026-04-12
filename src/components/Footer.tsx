import { COMPANY_INFO } from '../data/content'
import React from 'react'

const ICONS: Record<string, React.ReactNode> = {
  telegram: (
     <img src="/telegram.svg" alt="Telegram" className="w-5 h-5 shrink-0" />
  ),
  email: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  wildberries: (
    <img src="/wb.ico" alt="Ozon" className="w-5 h-5 shrink-0" />
  ),
  vk: (
    <img src="/vk.svg" alt="VK" className="w-5 h-5 shrink-0" />
  ),
  ozon: (
    <img src="/ozon.ico" alt="Ozon" className="w-5 h-5 shrink-0" />
  ),
  avito: (
    <img src="/avito.ico" alt="Ozon" className="w-5 h-5 shrink-0" />
  ),
  youla: (
    <img src="/youla.png" alt="Ozon" className="w-5 h-5 shrink-0" />
  ),
}

// Иконка + цвет hover для каждого типа площадки
const SOCIAL_CONFIG: Record<string, { icon: React.ReactNode; hover: string }> = {
  ozon:        { icon: ICONS.ozon,        hover: 'hover:text-blue-500'   },
  avito:       { icon: ICONS.avito,       hover: 'hover:text-green-400'  },
  youla:       { icon: ICONS.youla,       hover: 'hover:text-orange-400' },
  wildberries: { icon: ICONS.wildberries, hover: 'hover:text-purple-400' },
  vk:          { icon: ICONS.vk,          hover: 'hover:text-blue-500'   },
  telegram:    { icon: ICONS.telegram,    hover: 'hover:text-blue-400'   },
}

// Разбиваем socials на два массива по принадлежности
const MARKETPLACES = ['ozon', 'avito', 'youla']
const SOCIALS      = ['wildberries', 'vk', 'telegram']

export default function Footer() {
  const marketplaces = COMPANY_INFO.socials.filter(s => MARKETPLACES.includes(s.type))
  const socials      = COMPANY_INFO.socials.filter(s => SOCIALS.includes(s.type))

  return (
    <footer className="px-4 sm:px-8 py-10 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12 sm:gap-4">

        {/* Колонка 1: Бренд */}
        <div className="w-full sm:w-auto">
          <h3 className="w-fit text-xl sm:text-2xl font-semibold mb-1 tracking-tight bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent">
            {COMPANY_INFO.name}
          </h3>
          <p className="text-blue-400/80 text-xs sm:text-sm font-medium mb-4 italic">
            С заботой о каждой детали
          </p>
          <p className="text-slate-500 text-sm">{COMPANY_INFO.copyright}</p>
        </div>

        {/* Колонка 2: Контакты */}
        <div className="w-full sm:w-auto">
          <h4 className="font-semibold mb-5 text-slate-300">Контакты</h4>
          <a
            href={`https://t.me/${COMPANY_INFO.contact.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 mb-3 hover:text-blue-400 transition-colors text-sm sm:text-base"
          >
            {ICONS.telegram}
            @{COMPANY_INFO.contact.telegram}
          </a>
          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-sm sm:text-base"
          >
            {ICONS.email}
            {COMPANY_INFO.contact.email}
          </a>
        </div>

        {/* Объединенный блок Площадок */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-12 sm:gap-16">
          
          {/* Подколонка 3: Маркетплейсы */}
          <div>
            <h4 className="font-semibold mb-5 text-slate-300 text-nowrap">Площадки</h4>
            <div className="space-y-3">
              {marketplaces.map((social) => {
                const config = SOCIAL_CONFIG[social.type] ?? { icon: null, hover: 'hover:text-slate-300' }
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center gap-2 text-slate-500 ${config.hover} transition-colors text-sm sm:text-base`}
                  >
                    {config.icon}
                    {social.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Подколонка 4: Соцсети (без заголовка, но с отступом) */}
          <div className="sm:mt-11"> {/* mt-11 компенсирует высоту заголовка h4 (24px) + mb-5 (20px) */}
            <div className="space-y-3">
              {socials.map((social) => {
                const config = SOCIAL_CONFIG[social.type] ?? { icon: null, hover: 'hover:text-slate-300' }
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center gap-2 text-slate-500 ${config.hover} transition-colors text-sm sm:text-base`}
                  >
                    {config.icon}
                    {social.name}
                  </a>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
