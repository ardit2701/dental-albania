'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';

// Sad tooth SVG (before)
function SadTooth() {
  return (
    <svg viewBox="0 0 120 140" className="w-20 h-24 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 8 C38 8 22 26 22 46 C22 60 28 72 30 82 C34 98 32 120 38 132 C41 140 48 143 55 138 C59 135 61 124 60 124 C59 124 61 135 65 138 C72 143 79 140 82 132 C88 120 86 98 90 82 C92 72 98 60 98 46 C98 26 82 8 60 8Z"
        fill="#e5e7eb"
        stroke="#d1d5db"
        strokeWidth="2"
      />
      <path d="M44 55 C42 58 40 62 40 66" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M76 55 C78 58 80 62 80 66" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M47 78 C52 72 68 72 73 78" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="50" r="4" fill="#9ca3af" />
      <circle cx="76" cy="50" r="4" fill="#9ca3af" />
    </svg>
  );
}

// Happy tooth SVG (after)
function HappyTooth() {
  return (
    <svg viewBox="0 0 120 140" className="w-20 h-24 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 8 C38 8 22 26 22 46 C22 60 28 72 30 82 C34 98 32 120 38 132 C41 140 48 143 55 138 C59 135 61 124 60 124 C59 124 61 135 65 138 C72 143 79 140 82 132 C88 120 86 98 90 82 C92 72 98 60 98 46 C98 26 82 8 60 8Z"
        fill="white"
        stroke="#0284c7"
        strokeWidth="2"
      />
      <path d="M38 18 C30 28 25 38 25 46" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <circle cx="44" cy="50" r="4.5" fill="#0284c7" />
      <circle cx="76" cy="50" r="4.5" fill="#0284c7" />
      <path d="M44 70 Q60 84 76 70" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="88" cy="24" r="4" fill="#0284c7" opacity="0.6" />
      <circle cx="94" cy="34" r="2.5" fill="#0284c7" opacity="0.4" />
      <circle cx="82" cy="18" r="2" fill="#0284c7" opacity="0.5" />
    </svg>
  );
}

const CASE_IDS = ['#2847', '#1932', '#3301', '#2156', '#4488', '#1654'];

export default function BeforeAfter() {
  const t = useTranslations('beforeAfter');
  const swiperRef = useRef<SwiperType | null>(null);

  const cases = CASE_IDS.map((id, i) => ({
    patient: `${t('patientPrefix')} ${id}`,
    caption: t(`cases.${i}`),
  }));

  return (
    <section id="results" className="py-20 lg:py-28 bg-white overflow-hidden">
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

        {/* Swiper */}
        <div className="reveal delay-2">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {cases.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover">
                  {/* Split before/after */}
                  <div className="relative grid grid-cols-2 h-52 sm:h-60">
                    {/* Before panel */}
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
                      <SadTooth />
                      <span className="absolute top-3 left-3 bg-gray-700/80 text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider">
                        {t('before')}
                      </span>
                    </div>

                    {/* Vertical divider with arrow */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* After panel */}
                    <div className="relative bg-gradient-to-br from-sky-500 to-sky-700 flex flex-col items-center justify-center">
                      <HappyTooth />
                      <span className="absolute top-3 right-3 bg-white/90 text-sky-700 text-xs font-bold px-2.5 py-1 rounded-full tracking-wider shadow-sm">
                        {t('after')}
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4 flex items-center justify-between border-t border-gray-50">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{c.caption}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{c.patient}</p>
                    </div>
                    <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-semibold border border-sky-100 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {t('verified')}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation */}
          <div className="flex justify-center gap-3 mt-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-full bg-white border-2 border-sky-200 text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-full bg-sky-600 border-2 border-sky-600 text-white hover:bg-sky-700 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
