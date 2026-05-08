import logoImg from '../assets/logo-massas.png'
import { trackWhatsAppClick, trackInstagramClick } from '../lib/analytics'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2A2420] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
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
            <p className="text-[#6B5B4E] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
              Massas e molhos caseiros com produção própria e entrega em Belo Horizonte.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <p className="text-[#8C7B6B] text-[10px] tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-sans)]">
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
                    <a href={l.href} className="text-[#9A8878] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#8C7B6B] text-[10px] tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-sans)]">
                Contato
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="https://wa.me/5531988769796?text=Olá! Gostaria de fazer um pedido."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('footer')}
                    className="text-[#9A8878] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/massas100caseiras/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackInstagramClick('footer')}
                    className="text-[#9A8878] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5531988769796"
                    className="text-[#9A8878] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    (31) 98876-9796
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5531986457106"
                    className="text-[#9A8878] text-sm hover:text-[#FAF6F0] transition-colors duration-200 font-[family-name:var(--font-sans)]"
                  >
                    (31) 98645-7106
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#3A302A] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[#4A3A30] text-xs font-[family-name:var(--font-sans)]">
            © {year} Massas 100 Caseiras. Todos os direitos reservados.
          </p>
          <p className="text-[#4A3A30] text-xs font-[family-name:var(--font-sans)]">
            Feito com ❤️ e farinha de trigo
          </p>
        </div>
      </div>
    </footer>
  )
}
