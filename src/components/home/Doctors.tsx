import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface DoctorsProps {
  locale: string;
}

const DOCTOR_STATIC = [
  {
    name: 'Dr. Arlind Myftari',
    title: 'DMD, MD',
    photo: '/doctors/arlind-myftari.png',
    gradient: { from: '#0d9488', to: '#134e4a' },
  },
  {
    name: 'Dr. Odeta Shehu',
    title: 'DMD',
    photo: '/doctors/odeta-shehu.jpg',
    gradient: { from: '#134e4a', to: '#0f766e' },
  },
];

export default async function Doctors({ locale }: DoctorsProps) {
  const t = await getTranslations('doctorsSection');

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/3 translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-14 reveal">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 shadow-sm">
              {t('badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-500 mt-2 max-w-md">{t('subtitle')}</p>
          </div>
          <Link
            href={`/${locale}/about`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-200 text-teal-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {t('viewAbout')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {DOCTOR_STATIC.map((doc, i) => (
            <div
              key={doc.name}
              className={`reveal group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 delay-${i}`}
            >
              {/* Photo area */}
              <div
                className="h-64 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${doc.gradient.from} 0%, ${doc.gradient.to} 100%)` }}
              >
                <Image
                  src={doc.photo}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 text-xs font-bold text-teal-700 px-2.5 py-1 rounded-full shadow-sm">
                  {t(`doctors.${i}.experience`)}
                </div>
                <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                  {doc.title}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-teal-700 transition-colors mb-1">
                  {doc.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-100 mb-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t(`doctors.${i}.specialty`)}
                </span>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{t(`doctors.${i}.education`)}</p>
                <ul className="space-y-1.5">
                  {([0, 1, 2] as const).map((j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      {t(`doctors.${i}.extras.${j}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
