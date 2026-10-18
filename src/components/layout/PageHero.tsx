import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  /** 'kenBurns' | 'kenBurns2' | 'kenBurns3' — default kenBurns */
  variant?: 1 | 2 | 3;
  /** Optional CTA link */
  cta?: { label: string; href: string };
}

const variantClass: Record<1 | 2 | 3, string> = {
  1: 'ken-burns',
  2: 'ken-burns-2',
  3: 'ken-burns-3',
};

export default function PageHero({
  title, subtitle, badge, imageSrc, imageAlt,
  variant = 1, cta,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[52vh] min-h-[380px] max-h-[540px] overflow-hidden pt-16 lg:pt-20">
      {/* Ken Burns photo */}
      <div className="absolute inset-0 origin-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className={`object-cover ${variantClass[variant]}`}
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#134e4a]/80 via-[#0d9488]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                {badge}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-6">
                {subtitle}
              </p>
            )}
            {cta && (
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
