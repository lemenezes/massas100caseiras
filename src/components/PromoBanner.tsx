export default function PromoBanner() {
  return (
    <div className="bg-[#F5B301] py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <p className="text-[#1C1C1E] text-sm font-bold">
          🎉 Frete grátis em pedidos acima de R$ 80 — apenas essa semana!
        </p>
        <a
          href="https://wa.me/5500000000000?text=Olá! Quero aproveitar o frete grátis."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-[#1C1C1E] text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-[#C0392B] transition-colors duration-200"
        >
          Aproveitar →
        </a>
      </div>
    </div>
  )
}
