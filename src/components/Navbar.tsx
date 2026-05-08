import { useState, useEffect } from 'react'
import logoImg from '../assets/logo-massas.png'
import ThemeToggle from './ThemeToggle'
import { trackWhatsAppClick, trackMenuOpen } from '../lib/analytics'

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
          ? 'bg-[#FAF6F0]/95 dark:bg-[#2B1A0F]/95 backdrop-blur-md shadow-sm border-b border-[#E8DDD0] dark:border-[#50321E]'
          : 'bg-transparent'
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
          <ThemeToggle scrolled={scrolled} />
          <a
            href="https://wa.me/5531988769796?text=Olá! Vim pelo site e gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm rounded-full transition-all duration-300 bg-[#A0301A] text-[#FAF6F0] hover:bg-[#BF3E20] shadow-sm"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
          >
            Pedir pelo WhatsApp
          </a>
        </div>

        {/* Mobile hamburger + theme toggle */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle scrolled={scrolled} />
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
            onClick={() => { setMenuOpen(false); trackWhatsAppClick('navbar_mobile') }}
            className="mt-1 px-5 py-2.5 text-sm rounded-full bg-[#A0301A] text-[#FAF6F0] text-center hover:bg-[#BF3E20] transition-colors"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
