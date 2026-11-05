'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const TAB_ICONS = [
  <svg key="imp" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <rect x="12" y="3" width="8" height="4" rx="2" fill="currentColor" />
    <rect x="10" y="7" width="12" height="4" rx="1.5" fill="currentColor" />
    <rect x="13" y="11" width="6" height="14" rx="3" fill="currentColor" />
    <ellipse cx="16" cy="27" rx="4" ry="2.5" fill="currentColor" opacity="0.4" />
  </svg>,
  <svg key="crown" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M4 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 24V14l6 7 4-12 4 12 6-7v10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="6" cy="13" r="2" fill="currentColor" />
    <circle cx="16" cy="9" r="2" fill="currentColor" />
    <circle cx="26" cy="13" r="2" fill="currentColor" />
  </svg>,
  <svg key="ven" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M4 12 C4 9 6 8 9 8 L23 8 C26 8 28 9 28 12 L28 18 C28 24 23 26 16 26 C9 26 4 24 4 18 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <line x1="13" y1="8" x2="13" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="19" y1="8" x2="19" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M26 4 L27 6 L29 7 L27 8 L26 10 L25 8 L23 7 L25 6 Z" fill="currentColor" />
  </svg>,
];

const STEP_PHOTOS = [
  // Implants: clinic · implant close-up · clinic · smile result · clinic
  [
    '/clinic/clinic-0122.jpg',
    'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0128.jpg',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0121.jpg',
  ],
  // Crowns: crown work · clinic · dental veneer work · clinic · orthodontics smile
  [
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0119.jpg',
    'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0120.jpg',
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
  ],
  // Veneers: dental tools · clinic · clinic · smile result · implant
  [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0121.jpg',
    '/clinic/clinic-0122.jpg',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    '/clinic/clinic-0120.jpg',
  ],
];

export default function TreatmentProcess() {
  const t = useTranslations('process');
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const tabs = [0, 1, 2].map((ti) => ({
    label: t(`tabs.${ti}.label`),
    steps: [0, 1, 2, 3, 4].map((si) => ({
      title: t(`tabs.${ti}.steps.${si}.title`),
      body: t(`tabs.${ti}.steps.${si}.body`),
    })),
  }));

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setActiveStep(0);
    swiperRef.current?.slideTo(0);
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 reveal delay-1">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 gap-1">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => handleTabChange(idx)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-sky-700 hover:bg-sky-50'
                }`}
              >
                <span className={activeTab === idx ? 'text-white' : 'text-sky-600'}>
                  {TAB_ICONS[idx]}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Slider */}
        <div className="reveal delay-2 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {tabs[activeTab].steps.map((step, idx) => (
              <SwiperSlide key={`${activeTab}-${idx}`}>
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-video">
                  <Image
                    src={STEP_PHOTOS[activeTab][idx]}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sky-600 shadow-lg flex items-center justify-center">
                      <span className="text-white font-extrabold text-base sm:text-lg">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Progress dots top right */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2">
                    {tabs[activeTab].steps.map((_, di) => (
                      <button
                        key={di}
                        onClick={() => { swiperRef.current?.slideTo(di); }}
                        className={`rounded-full transition-all duration-300 ${
                          activeStep === di ? 'bg-white w-5 h-2' : 'bg-white/40 w-2 h-2'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                    <p className="text-sky-300 text-xs sm:text-sm font-semibold mb-1.5 uppercase tracking-wider">
                      {t('step')} {idx + 1} / {tabs[activeTab].steps.length}
                    </p>
                    <h3 className="text-white font-extrabold text-lg sm:text-2xl mb-2 leading-tight">{step.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">{step.body}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev / Next arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
