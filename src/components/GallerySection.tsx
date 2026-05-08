import photo3 from '../assets/3.jpg'
import { trackInstagramClick } from '../lib/analytics'
import photo4 from '../assets/4.jpg'
import photo5 from '../assets/5.jpg'
import photo6 from '../assets/6.jpg'
import photo7 from '../assets/7.jpg'
import photo8 from '../assets/8.jpg'
import photo9 from '../assets/9.jpg'
import photo10 from '../assets/10.jpg'

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-[#FAF6F0] dark:bg-[#2B1A0F] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-[#8C7B6B] text-xs tracking-[0.4em] uppercase mb-4 font-[family-name:var(--font-sans)]">
              Galeria
            </p>
            <h2
              className="font-[family-name:var(--font-serif)] text-[#2A2420] dark:text-[#FAF6F0] font-light leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Beleza que se come
            </h2>
          </div>
          <p className="text-[#8C7B6B] text-sm max-w-xs leading-relaxed font-[family-name:var(--font-sans)] md:text-right">
            Cada massa é única moldada à mão com textura e personalidade próprias.
          </p>
        </div>

        {/* Grid unificado — desktop: 3 colunas, 4 linhas fixas; mobile: 1 coluna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:[grid-template-rows:320px_320px_320px_220px]">
          <GalleryCard src={photo8} label="Mesa de família"    className="aspect-[4/3] md:aspect-auto md:col-span-2" />
          <GalleryCard src={photo3} label="Pappardelle"        className="aspect-[4/3] md:aspect-auto" />
          <GalleryCard src={photo4} label="Nhoque"             className="aspect-[4/3] md:aspect-auto" />
          <GalleryCard src={photo9} label="Espaguete ao Forno" className="aspect-[4/3] md:aspect-auto" />
          <GalleryCard src={photo6} label="Canelone"           className="aspect-[4/3] md:aspect-auto" />
          <GalleryCard src={photo10} label="Fagotine"          className="aspect-[4/3] md:aspect-auto" />
          <GalleryCard src={photo7} label="Nossa cozinha"      className="aspect-[4/3] md:aspect-auto md:col-span-2" />
          <GalleryCard src={photo5} label="Produção do dia"    className="aspect-[16/9] md:aspect-auto md:col-span-3" />
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/massas100caseiras/" target="_blank" rel="noopener noreferrer" onClick={() => trackInstagramClick('gallery')} className="text-[#8C7B6B] text-sm font-[family-name:var(--font-sans)] hover:text-[#A0301A] transition-colors">
            Ver mais no Instagram @massas100caseiras ↗
          </a>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({ src, label, className }: { src: string; label: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl cursor-pointer bg-[#2A2420] ${className ?? ''}`}>
      <img
        src={src}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[#FAF6F0] font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase drop-shadow">
          {label}
        </span>
      </div>
    </div>
  )
}
