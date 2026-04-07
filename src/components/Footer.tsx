import { COMPANY_INFO } from '../data/content'
import React from 'react'

const ICONS: Record<string, React.ReactNode> = {
  telegram: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.441-.168.575-.537.769-.893.796-.775.059-1.362-.468-2.112-.909-1.175-.689-1.837-1.112-2.975-1.782-1.318-.775-.462-1.203.287-1.905.193-.186 3.562-3.058 3.625-3.311.008-.031.012-.143-.056-.2-.068-.056-.168-.037-.243-.019-.106.025-1.793 1.058-5.068 3.091-.481.3-.912.443-1.293.437-.425-.006-1.237-.212-1.843-.387-.743-.218-1.337-.331-1.281-.706.025-.187.318-.381.875-.575 3.431-1.375 5.718-2.281 6.862-2.718 3.262-1.243 3.937-1.425 4.381-1.425.093 0 .306.019.443.118.118.087.156.206.168.306.012.087.012.181 0 .281z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  wildberries: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm3.5 9.5H9v-1.5l1.5-.75v-3L9 9.5V8h5v1.5l-1.5.75v3l1.5.75V16z" />
    </svg>
  ),
  vk: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.013-.823.006-2.423.006-2.423s.2-.343.469-.065c.249.256.487.57.69.889.121.19.24.377.355.564.451.711 1.201 1.248 2.012 1.248h1.6c.059 0 .104-.01.14-.027.429-.249.262-.83-.179-1.389l-.447-.562c-.415-.519-.811-1.014-1.182-1.503-.312-.413-.263-.585.051-.971.054-.065.11-.131.168-.198.814-.951 1.81-2.115 1.947-2.903.047-.26.004-.492-.127-.655-.186-.232-.519-.3-.896-.3h-1.638c-.303 0-.541.05-.712.214-.162.155-.26.368-.344.629-.015.047-.031.096-.046.146-.312.981-.692 1.841-1.132 2.562-.236.386-.464.678-.655.803-.189.124-.367.09-.474-.014-.131-.128-.21-.383-.21-.763l.001-2.316c0-.36-.044-.613-.13-.754-.217-.354-.627-.514-1.218-.514h-2.146c-.297 0-.544.027-.733.08-.415.116-.621.365-.621.574 0 .423.447.521.492 1.582v1.61c0 .321-.044.525-.131.609-.088.084-.21.127-.367.127-.321 0-.743-.448-1.157-1.046a16.8 16.8 0 0 1-1.171-2.072c-.104-.236-.207-.472-.304-.701-.134-.316-.363-.464-.672-.464H3.844c-.664 0-.822.312-.705.626.347.933 1.637 3.323 3.09 5.315 1.55 2.13 3.344 3.445 5.334 3.445h1.599z" />
    </svg>
  ),
  ozon: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
    </svg>
  ),
  avito: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4a2 2 0 110 4 2 2 0 010-4zm0 10c-2.67 0-5.07-1.33-6.5-3.36.03-2.16 4.33-3.34 6.5-3.34 2.16 0 6.47 1.18 6.5 3.34C17.07 15.67 14.67 17 12 17z" />
    </svg>
  ),
  youla: (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
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
            С заботой о вас!
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
