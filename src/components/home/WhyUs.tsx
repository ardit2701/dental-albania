import { getTranslations } from 'next-intl/server';

const CARD_ICONS = [
  // Euro/Price icon
  <svg key="price" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" />
    <path d="M20 11 C18 9 14 9 12 11 C9 13 9 19 12 21 C14 23 18 23 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Shield/certification icon
  <svg key="shield" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path d="M16 3 L27 7 L27 16 C27 22 22 27 16 29 C10 27 5 22 5 16 L5 7 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M11 16 L14 19 L21 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Doctor/medical icon
  <svg key="doc" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <circle cx="16" cy="9" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M6 26 C6 20 10 17 16 17 C22 17 26 20 26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="23" cy="20" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <line x1="23" y1="18" x2="23" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
];

export default async function WhyUs() {
  const t = await getTranslations('whyUs');

  const cards = [
    { icon: CARD_ICONS[0], title: t('cards.0.title'), desc: t('cards.0.desc') },
    { icon: CARD_ICONS[1], title: t('cards.1.title'), desc: t('cards.1.desc') },
    { icon: CARD_ICONS[2], title: t('cards.2.title'), desc: t('cards.2.desc') },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Dark teal bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#134e4a] via-teal-800 to-[#0d9488]" />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-teal-200 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal group bg-white/10 hover:bg-white/[0.15] backdrop-blur-sm rounded-2xl p-7 border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 cursor-default delay-${i}`}
            >
              <div className="w-14 h-14 bg-teal-500/30 group-hover:bg-teal-500/40 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 text-teal-200">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-teal-100/80 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="reveal bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center delay-3">
          {([0, 1, 2, 3] as const).map((i) => (
            <div key={i}>
              <p className="text-2xl font-extrabold text-white">{t(`stats.${i}.value`)}</p>
              <p className="text-teal-200 text-sm mt-0.5 font-medium">{t(`stats.${i}.label`)}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal delay-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t('cta')}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
