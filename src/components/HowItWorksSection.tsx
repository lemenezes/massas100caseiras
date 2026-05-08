const steps = [
  {
    number: '01',
    title: 'Escolha sua massa',
    description: 'Olha as opções no cardápio e escolhe o que mais deu vontade. Tem massa, molho e kit pra montar em casa.',
  },
  {
    number: '02',
    title: 'Manda mensagem',
    description: 'Fala pelo WhatsApp, combina o que vai pedir, a quantidade, o horário e como vai pagar. Simples assim.',
  },
  {
    number: '03',
    title: 'A gente prepara',
    description: 'Tudo é feito fresquinho no dia combinado, com produção própria. Nada fica parado na geladeira.',
  },
  {
    number: '04',
    title: 'Recebe em casa',
    description: 'Entregamos com moto própria ou você retira. Chega quentinho e pronto pra ir pra mesa.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-[#F5EFE6] dark:bg-[#2E1B0D] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#8C7B6B] text-xs tracking-[0.4em] uppercase mb-4 font-[family-name:var(--font-sans)]">
            Processo
          </p>
          <h2
            className="font-[family-name:var(--font-serif)] text-[#2A2420] dark:text-[#FAF6F0] font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Como Pedir
          </h2>
          <div className="w-12 h-px bg-[#C96B35] mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#C96B35]/40 to-transparent -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full border border-[#C96B35]/30 flex items-center justify-center mb-6 bg-[#FAF6F0] dark:bg-[#3D2515]">
                  <span className="font-[family-name:var(--font-serif)] text-[#C96B35] text-lg font-light">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-[#2A2420] dark:text-[#FAF6F0] text-xl font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-[#8C7B6B] text-sm leading-relaxed font-[family-name:var(--font-sans)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
