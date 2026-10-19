import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

interface ServicesProps {
  locale: string;
}

const SERVICE_DATA = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="18" y="4" width="12" height="6" rx="3" fill="currentColor" />
        <rect x="16" y="10" width="16" height="5" rx="2" fill="currentColor" />
        <rect x="20" y="15" width="8" height="4" rx="1.5" fill="currentColor" opacity="0.8" />
        <rect x="21" y="19" width="6" height="18" rx="3" fill="currentColor" />
        <path d="M19 25h-4M19 29h-4M19 33h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 25h4M29 29h4M29 33h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=60',
    imgAlt: 'Implante dentare',
    accent: 'from-sky-600 to-sky-800',
    iconColor: 'bg-sky-500/20 text-sky-200',
    linkColor: 'text-sky-600',
    href: (locale: string) => `/${locale}/treatments/dental-implants`,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M8 36h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 36V20l8 10 6-16 6 16 8-10v16" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="10" cy="19" r="3" fill="currentColor" />
        <circle cx="24" cy="13" r="3" fill="currentColor" />
        <circle cx="38" cy="19" r="3" fill="currentColor" />
        <rect x="10" y="36" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=60',
    imgAlt: 'Kurora dentare',
    accent: 'from-amber-600 to-amber-800',
    iconColor: 'bg-amber-500/20 text-amber-200',
    linkColor: 'text-amber-600',
    href: (locale: string) => `/${locale}/treatments/crowns`,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M8 18 C8 14 10 12 14 12 L34 12 C38 12 40 14 40 18 L40 26 C40 34 34 38 24 38 C14 38 8 34 8 26 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <line x1="20" y1="12" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="28" y1="12" x2="28" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path d="M38 6 L39 9 L42 10 L39 11 L38 14 L37 11 L34 10 L37 9 Z" fill="currentColor" />
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=60',
    imgAlt: 'Faseta dentare',
    accent: 'from-violet-600 to-violet-800',
    iconColor: 'bg-violet-500/20 text-violet-200',
    linkColor: 'text-violet-600',
    href: (locale: string) => `/${locale}/treatments/veneers`,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M6 28 C6 16 12 10 24 10 C36 10 42 16 42 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="6" y="26" width="5" height="10" rx="2.5" fill="currentColor" />
        <rect x="14" y="22" width="5" height="14" rx="2.5" fill="currentColor" />
        <rect x="21.5" y="20" width="5" height="16" rx="2.5" fill="currentColor" />
        <rect x="29" y="22" width="5" height="14" rx="2.5" fill="currentColor" />
        <rect x="37" y="26" width="5" height="10" rx="2.5" fill="currentColor" />
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=60',
    imgAlt: 'All-on-6 implante',
    accent: 'from-sky-600 to-sky-800',
    iconColor: 'bg-sky-500/20 text-sky-200',
    linkColor: 'text-sky-600',
    href: (locale: string) => `/${locale}/treatments/all-on-6`,
  },
];

export default async function Services({ locale }: ServicesProps) {
  const t = await getTranslations('services');

  const services = [
    { ...SERVICE_DATA[0], title: t('items.0.title'), desc: t('items.0.desc') },
    { ...SERVICE_DATA[1], title: t('items.1.title'), desc: t('items.1.desc') },
    { ...SERVICE_DATA[2], title: t('items.2.title'), desc: t('items.2.desc') },
    { ...SERVICE_DATA[3], title: t('items.3.title'), desc: t('items.3.desc') },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href(locale)}
              className={`reveal group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer delay-${i}`}
            >
              {/* Image area */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.imgAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                {/* Dark gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`} />
                {/* Icon on top of image */}
                <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center ${service.iconColor} backdrop-blur-sm`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.desc}</p>

                {/* Link */}
                <div className={`mt-4 flex items-center gap-1.5 text-sm font-semibold ${service.linkColor}`}>
                  <span>{t('learnMore')}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
