import { getTranslations } from 'next-intl/server';

const CARD_ICONS = [
  // Technology icon
  <svg key="tech" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect x="3" y="5" width="26" height="17" rx="2" stroke="currentColor" strokeWidth="2" />
    <line x1="10" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="22" x2="16" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 16 L13 12 L17 15 L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="10" r="1.5" fill="currentColor" />
  </svg>,
  // Plane/tourism icon
  <svg key="plane" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <path d="M4 20 L14 16 L10 7 L13 6 L21 14 L27 12 C29 11.5 30 13 29 14.5 L21 18 L20 26 L17 27 L15 20 L4 20Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>,
];

export default async function WhyUs() {
  const t = await getTranslations('whyUs');

  const cards = [
    { icon: CARD_ICONS[0], title: t('cards.0.title'), desc: t('cards.0.desc') },
    { icon: CARD_ICONS[1], title: t('cards.1.title'), desc: t('cards.1.desc') },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Dark teal bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e] via-sky-800 to-[#0284c7]" />
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
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-sky-200 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-3xl mx-auto w-full">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal group bg-white/10 hover:bg-white/[0.15] backdrop-blur-sm rounded-2xl p-7 border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 cursor-default delay-${i}`}
            >
              <div className="w-14 h-14 bg-sky-500/30 group-hover:bg-sky-500/40 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 text-sky-200">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-sky-100/80 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="reveal bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center delay-3">
          {([0, 1, 2, 3] as const).map((i) => (
            <div key={i}>
              <p className="text-2xl font-extrabold text-white">{t(`stats.${i}.value`)}</p>
              <p className="text-sky-200 text-sm mt-0.5 font-medium">{t(`stats.${i}.label`)}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal delay-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 hover:bg-sky-50 font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
