import { useState, useEffect } from 'react'
import logoImg from '../assets/logo-massas.png'
import { trackWhatsAppClick, trackMenuOpen, trackInstagramClick } from '../lib/analytics'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Massas', href: '#massas' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Pedidos', href: '#pedidos' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF6F0]/96 dark:bg-[#2B1A0F]/96 backdrop-blur-lg shadow-sm border-b border-[#E8DDD0] dark:border-[#50321E]'
          : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="block flex-shrink-0">
          <img
            src={logoImg}
            alt="Massas 100 Caseiras"
            style={{ height: '48px', width: 'auto', display: 'block' }}
            draggable={false}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? 'text-[#2A2420] dark:text-[#FAF6F0]' : 'text-[#FAF6F0]'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/massas100caseiras/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onClick={() => trackInstagramClick('navbar_desktop')}
            className={`transition-colors duration-300 hover:opacity-70 ${scrolled ? 'text-[#2A2420] dark:text-[#FAF6F0]' : 'text-[#FAF6F0]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://wa.me/5531988769796?text=Olá! Vim pelo site e gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full transition-all duration-300 bg-[#A0301A] text-[#FAF6F0] hover:bg-[#BF3E20] shadow-sm"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.851L.057 23.447a.5.5 0 0 0 .496.553h.046l5.765-1.511A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.932 9.932 0 0 1-5.073-1.388l-.364-.214-3.762.986 1.004-3.668-.237-.378A9.936 9.936 0 0 1 2.062 12C2.062 6.505 6.505 2.062 12 2.062S21.938 6.505 21.938 12 17.495 21.938 12 21.938z"/></svg>
            Pedir pelo WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <button
            aria-label="Menu"
            className={`flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
              scrolled ? 'text-[#2A2420] dark:text-[#FAF6F0]' : 'text-[#FAF6F0]'
            }`}
            onClick={() => { setMenuOpen(!menuOpen); if (!menuOpen) trackMenuOpen() }}
          >
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#FAF6F0]/97 dark:bg-[#2B1A0F]/97 backdrop-blur-md border-b border-[#E8DDD0] dark:border-[#50321E]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#2A2420] dark:text-[#FAF6F0] text-sm tracking-wide py-1 border-b border-[#E8DDD0] dark:border-[#50321E] last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531988769796?text=Olá! Vim pelo site e gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setMenuOpen(false); trackInstagramClick('navbar_mobile') }}
            className="inline-flex items-center gap-2 text-[#2A2420] dark:text-[#FAF6F0] text-sm py-1 border-b border-[#E8DDD0] dark:border-[#50321E]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
          <a
            href="https://wa.me/5531988769796?text=Olá! Vim pelo site e gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setMenuOpen(false); trackWhatsAppClick('navbar_mobile') }}
            className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm rounded-full bg-[#A0301A] text-[#FAF6F0] text-center hover:bg-[#BF3E20] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.851L.057 23.447a.5.5 0 0 0 .496.553h.046l5.765-1.511A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.932 9.932 0 0 1-5.073-1.388l-.364-.214-3.762.986 1.004-3.668-.237-.378A9.936 9.936 0 0 1 2.062 12C2.062 6.505 6.505 2.062 12 2.062S21.938 6.505 21.938 12 17.495 21.938 12 21.938z"/></svg>
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
