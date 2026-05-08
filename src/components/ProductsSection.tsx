import photo3 from '../assets/3.jpg'
import { trackWhatsAppClick, trackCardapioView } from '../lib/analytics'
import photo4 from '../assets/4.jpg'
import photo6 from '../assets/6.jpg'
import photo7 from '../assets/7.jpg'
import photo9 from '../assets/9.jpg'
import photo10 from '../assets/10.jpg'

interface Product {
  name: string
  description: string
  price: string
  tag?: string
  photo: string
}

const products: Product[] = [
  {
    name: 'Lasanha',
    description: 'Clássica e bem recheada, com camadas de massa fresca, molho e muçarela gratinada. Sempre muito bem servida.',
    price: 'R$ 32,00',
    tag: 'Mais Pedido',
    photo: photo3,
  },
  {
    name: 'Rondelli',
    description: 'Massa enrolada com recheio generoso. Sabores: presunto e muçarela, quatro queijos, frango, bacalhau, tomate seco e mais.',
    price: 'a partir de R$ 32,00',
    photo: photo4,
  },
  {
    name: 'Canelone',
    description: 'Recheado e gratinado. Opções: presunto e muçarela, frango com requeijão, camarão com cream cheese, damasco e provolone.',
    price: 'a partir de R$ 32,00',
    photo: photo6,
  },
  {
    name: 'Nhoque',
    description: 'Nhoque caseiro bem fofinho, feito com receita de família. Muito gostoso com qualquer molho.',
    price: 'R$ 30,00',
    tag: 'Destaque',
    photo: photo7,
  },
  {
    name: 'Espaguete ao Forno',
    description: 'Espaguete gratinado com molho e muçarela. Aquele sabor de comida caseira que a gente adora. Ótimo preço.',
    price: 'R$ 25,00',
    photo: photo9,
  },
  {
    name: 'Fagotine',
    description: 'Massa recheada em formato de trouxinha. Sabores: palmito, carne seca, quatro queijos, linguiça calabresa e mais.',
    price: 'a partir de R$ 31,00',
    photo: photo10,
  },
]

export default function ProductsSection() {
  return (
    <section id="massas" className="py-24 md:py-32 bg-[#FAF6F0] dark:bg-[#2B1A0F] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#8C7B6B] text-xs tracking-[0.4em] uppercase mb-4 font-[family-name:var(--font-sans)]">
            Cardápio
          </p>
          <h2
            className="font-[family-name:var(--font-serif)] text-[#2A2420] dark:text-[#FAF6F0] font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Nossas Massas
          </h2>
          <div className="w-12 h-px bg-[#C96B35] mx-auto mt-6" />
          <p className="mt-6 text-[#8C7B6B] max-w-md mx-auto text-sm leading-relaxed font-[family-name:var(--font-sans)] whitespace-nowrap">
            Tudo feito no dia do pedido, com produção própria e sabor de casa.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['Assado ou congelado', 'Acompanha molho e muçarela', 'Entrega própria'].map((info) => (
              <span key={info} className="px-3 py-1 rounded-full border border-[#C96B35]/30 text-[#8C7B6B] text-xs font-[family-name:var(--font-sans)]">
                {info}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5531988769796?text=Olá! Gostaria de ver o cardápio completo."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackWhatsAppClick('cardapio_cta'); trackCardapioView() }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A0301A] text-[#FAF6F0] text-sm tracking-wide hover:bg-[#BF3E20] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver cardápio completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white dark:bg-[#3D2515] rounded-2xl overflow-hidden border border-[#E8DDD0] dark:border-[#50321E] hover:border-[#C96B35]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Food photo */}
      <div className="relative h-44 overflow-hidden bg-[#2A2420]">
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {product.tag && (
          <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#A0301A] text-[#FAF6F0] font-[family-name:var(--font-sans)] shadow">
            {product.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-serif)] text-[#2A2420] dark:text-[#FAF6F0] text-xl font-medium mb-2 group-hover:text-[#A0301A] dark:group-hover:text-[#E07840] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-[#8C7B6B] dark:text-[#9A7860] text-sm leading-relaxed mb-5 font-[family-name:var(--font-sans)]">
          {product.description}
        </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#F0E8DE] dark:border-[#50321E]">
          <span className="text-[#A0301A] font-[family-name:var(--font-serif)] text-base font-semibold">
            {product.price}
          </span>
          <a
            href="https://wa.me/5531988769796"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8C7B6B] hover:text-[#A0301A] transition-colors tracking-wide font-[family-name:var(--font-sans)]"
          >
            Pedir →
          </a>
        </div>
      </div>
    </div>
  )
}
