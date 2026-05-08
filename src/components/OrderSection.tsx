import { trackWhatsAppClick, trackInstagramClick } from '../lib/analytics'

export default function OrderSection() {
  return (
    <section id="pedidos" className="py-24 md:py-32 bg-[#A0301A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FAF6F0' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='23' cy='23' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[#D4B896] text-xs tracking-[0.4em] uppercase mb-6 font-[family-name:var(--font-sans)]">
          Encomendas
        </p>

        <h2
          className="font-[family-name:var(--font-serif)] text-[#FAF6F0] font-light leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Bora pedir?
        </h2>

        <p className="text-[#D4956A] font-[family-name:var(--font-sans)] text-sm leading-relaxed mb-4 max-w-lg mx-auto">
          É só mandar mensagem, combinar o pedido e aguardar.
          Entregamos com moto própria ou você retira {' '}
          <strong className="text-[#D4B896]">tudo feito fresquinho no dia</strong>.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-4 mb-10">
          {['Ter–Sex · 18h–23h', 'Sáb · 11h30–14h30', 'Dom · 11h30–16h', 'Entrega própria'].map((info) => (
            <span
              key={info}
              className="px-4 py-1.5 rounded-full border border-[#FAF6F0]/20 text-[#D4B896] text-xs tracking-wide font-[family-name:var(--font-sans)]"
            >
              {info}
            </span>
          ))}
        </div>

        <a
          href="https://wa.me/5531988769796?text=Olá! Vim pelo site e gostaria de fazer um pedido."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('order_section')}
          className="animate-pulse-glow inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#FAF6F0] text-[#A0301A] text-base font-semibold tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          <WhatsAppIcon />
          Pedir pelo WhatsApp
        </a>

        <p className="mt-8 text-[#C08050]/90 text-sm font-[family-name:var(--font-sans)]">
          Também atendemos por Instagram:{' '}
          <a href="https://www.instagram.com/massas100caseiras/" target="_blank" rel="noopener noreferrer" onClick={() => trackInstagramClick('order_section')} className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-[#D4B896] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @massas100caseiras
          </a>
        </p>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
