import logoImg from '../assets/logo-massas.png'
import { trackWhatsAppClick, trackInstagramClick } from '../lib/analytics'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2A2420] py-10 md:py-14 px-6">
      <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
                <img
                  src={logoImg}
                  alt="Massas 100 Caseiras"
                  style={{ height: '60px', width: 'auto', display: 'block' }}
                  draggable={false}
                />
            </div>
            <p className="text-[#B0978A] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
              Massas e molhos caseiros com produção própria e entrega em Belo Horizonte.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <p className="text-[#C96B35]/80 text-[10px] tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-sans)]">
                Menu
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: 'Massas', href: '#massas' },
                  { label: 'Como Funciona', href: '#como-funciona' },
                  { label: 'Galeria', href: '#galeria' },
                  { label: 'Pedidos', href: '#pedidos' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-[#C8B09A] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#C96B35]/80 text-[10px] tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-sans)]">
                Contato
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="https://wa.me/5531988769796?text=Olá! Gostaria de fazer um pedido."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('footer')}
                    className="inline-flex items-center gap-1.5 text-[#C8B09A] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.851L.057 23.447a.5.5 0 0 0 .496.553h.046l5.765-1.511A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.932 9.932 0 0 1-5.073-1.388l-.364-.214-3.762.986 1.004-3.668-.237-.378A9.936 9.936 0 0 1 2.062 12C2.062 6.505 6.505 2.062 12 2.062S21.938 6.505 21.938 12 17.495 21.938 12 21.938z"/></svg>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/massas100caseiras/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackInstagramClick('footer')}
                    className="inline-flex items-center gap-1.5 text-[#C8B09A] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    Instagram
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    href="tel:+5531988769796"
                    className="text-[#C8B09A] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    (31) 98876-9796
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    href="tel:+5531986457106"
                    className="text-[#C8B09A] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    (31) 98645-7106
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-5 border-t border-[#3A302A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <p className="text-[#5A4A3E] text-xs font-[family-name:var(--font-sans)]">
            © {year} Massas 100 Caseiras. Todos os direitos reservados.
          </p>
          <p className="hidden sm:block text-[#4A3A30] text-xs font-[family-name:var(--font-sans)]">
            Feito com carinho e farinha de trigo
          </p>
        </div>
      </div>
    </footer>
  )
}
