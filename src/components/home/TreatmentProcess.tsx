'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const TAB_ICONS = [
  // Implant icon
  <svg key="imp" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <rect x="12" y="3" width="8" height="4" rx="2" fill="currentColor" />
    <rect x="10" y="7" width="12" height="4" rx="1.5" fill="currentColor" />
    <rect x="13" y="11" width="6" height="14" rx="3" fill="currentColor" />
    <ellipse cx="16" cy="27" rx="4" ry="2.5" fill="currentColor" opacity="0.4" />
  </svg>,
  // Crown icon
  <svg key="crown" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M4 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 24V14l6 7 4-12 4 12 6-7v10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="6" cy="13" r="2" fill="currentColor" />
    <circle cx="16" cy="9" r="2" fill="currentColor" />
    <circle cx="26" cy="13" r="2" fill="currentColor" />
  </svg>,
  // Veneer/teeth icon
  <svg key="ven" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M4 12 C4 9 6 8 9 8 L23 8 C26 8 28 9 28 12 L28 18 C28 24 23 26 16 26 C9 26 4 24 4 18 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <line x1="13" y1="8" x2="13" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="19" y1="8" x2="19" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M26 4 L27 6 L29 7 L27 8 L26 10 L25 8 L23 7 L25 6 Z" fill="currentColor" />
  </svg>,
];

const TAB_PHOTO_SRCS = [
  'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80',
];

export default function TreatmentProcess() {
  const t = useTranslations('process');
  const [activeTab, setActiveTab] = useState(0);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const bodyRefs = useRef<Array<HTMLDivElement | null>>([]);

  const tabs = [
    {
      label: t('tabs.0.label'),
      steps: [
        { title: t('tabs.0.steps.0.title'), body: t('tabs.0.steps.0.body') },
        { title: t('tabs.0.steps.1.title'), body: t('tabs.0.steps.1.body') },
        { title: t('tabs.0.steps.2.title'), body: t('tabs.0.steps.2.body') },
      ],
    },
    {
      label: t('tabs.1.label'),
      steps: [
        { title: t('tabs.1.steps.0.title'), body: t('tabs.1.steps.0.body') },
        { title: t('tabs.1.steps.1.title'), body: t('tabs.1.steps.1.body') },
        { title: t('tabs.1.steps.2.title'), body: t('tabs.1.steps.2.body') },
      ],
    },
    {
      label: t('tabs.2.label'),
      steps: [
        { title: t('tabs.2.steps.0.title'), body: t('tabs.2.steps.0.body') },
        { title: t('tabs.2.steps.1.title'), body: t('tabs.2.steps.1.body') },
        { title: t('tabs.2.steps.2.title'), body: t('tabs.2.steps.2.body') },
      ],
    },
  ];

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setOpenStep(0);
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

        {/* Pill Tab Buttons */}
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

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Accordion steps */}
          <div className="space-y-3 reveal-left delay-2">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-6">
              {tabs[activeTab].steps.map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      openStep === idx ? 'bg-sky-600 scale-125' : openStep !== null && openStep > idx ? 'bg-sky-300' : 'bg-gray-200'
                    }`}
                  />
                  {idx < tabs[activeTab].steps.length - 1 && (
                    <div className={`h-px w-8 transition-colors duration-300 ${openStep !== null && openStep > idx ? 'bg-sky-300' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
              <span className="ml-2 text-xs text-gray-400 font-medium">
                {t('step')} {openStep !== null ? openStep + 1 : 1} / {tabs[activeTab].steps.length}
              </span>
            </div>

            {tabs[activeTab].steps.map((step, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openStep === idx
                    ? 'border-sky-200 shadow-lg shadow-sky-50'
                    : 'border-gray-100 shadow-sm hover:border-gray-200'
                }`}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 text-left group"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                >
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-200 ${
                      openStep === idx
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-sky-50 group-hover:text-sky-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className={`font-semibold flex-1 transition-colors ${openStep === idx ? 'text-sky-700' : 'text-gray-800 group-hover:text-sky-700'}`}>
                    {step.title}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                      openStep === idx ? 'rotate-180 text-sky-600' : 'text-gray-300'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  ref={(el) => { bodyRefs.current[idx] = el; }}
                  className={`accordion-body ${openStep === idx ? 'open' : ''}`}
                >
                  <div className="px-5 pb-5 pl-[76px]">
                    <p className="text-gray-500 leading-relaxed text-sm">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Real procedure photo */}
          <div className="flex justify-center reveal-right delay-3">
            <div className="w-full max-w-sm rounded-3xl shadow-2xl relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <Image
                src={TAB_PHOTO_SRCS[activeTab]}
                alt={tabs[activeTab].label}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 90vw, 400px"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base">{t(`photos.${activeTab}.label`)}</p>
                <p className="text-sky-200 text-sm mt-0.5">{t(`photos.${activeTab}.sub`)}</p>
              </div>

              {/* Step dots indicator */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                {tabs[activeTab].steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setOpenStep(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      openStep === idx ? 'bg-white w-5 h-2' : 'bg-white/50 w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
