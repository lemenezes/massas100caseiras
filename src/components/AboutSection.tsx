import photo7 from '../assets/7.jpg'

const values = [
  {
    title: 'Ingredientes de Qualidade',
    description: 'Escolhemos bem o que entra na massa. Sem atalhos, sem economizar no que importa.',
  },
  {
    title: 'Feito no Dia',
    description: 'Cada pedido é preparado fresquinho na data combinada. Do nosso fogão direto pra sua mesa.',
  },
  {
    title: 'Receitas de Família',
    description: 'Receitas que passam de geração em geração — com o sabor que a gente lembra de casa.',
  },
]

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#2A2420] relative overflow-hidden">
      {/* Decorative serif letter */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-[family-name:var(--font-serif)] text-white/[0.02] leading-none select-none pointer-events-none pr-4 hidden lg:block">
        M
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-[#8C7B6B] text-xs tracking-[0.4em] uppercase mb-6 font-[family-name:var(--font-sans)]">
              Quem somos
            </p>
            <h2
              className="font-[family-name:var(--font-serif)] text-[#FAF6F0] font-light leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
            >
              Comida caseira feita{' '}
              <em className="italic text-[#E07840]">com carinho</em>
            </h2>
            <p className="text-[#9A8878] text-sm leading-relaxed mb-8 font-[family-name:var(--font-sans)]">
              A Massas 100 Caseiras nasceu do amor por comida boa de verdade.
              Massas e molhos feitos com produção própria, sabor de família e
              entrega na sua porta porque comida boa merece chegar quentinha.
            </p>
            <div className="w-10 h-px bg-[#C96B35]" />
          </div>

          {/* Right: photo + values */}
          <div className="flex flex-col gap-7">
            {/* Real photo */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={photo7}
                alt="Massas sendo preparadas artesanalmente"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {values.map((v, i) => (
              <div key={v.title} className="flex gap-5 items-start">
                <span className="font-[family-name:var(--font-serif)] text-[#C96B35]/50 text-xl font-light w-6 flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-serif)] text-[#FAF6F0] text-lg font-medium mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-[#6B5B4E] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
