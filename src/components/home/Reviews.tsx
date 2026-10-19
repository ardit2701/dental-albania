'use client';

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const AVATAR_COLORS = [
  'from-sky-500 to-sky-700',
  'from-violet-500 to-violet-700',
  'from-amber-500 to-amber-700',
  'from-sky-500 to-sky-700',
  'from-rose-500 to-rose-700',
  'from-emerald-500 to-emerald-700',
];

export default function Reviews() {
  const t = useTranslations('reviews');

  const reviews = Array.from({ length: 6 }).map((_, i) => ({
    text: t(`items.${i}.text`),
    name: t(`items.${i}.name`),
    date: t(`items.${i}.date`),
    avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
  }));

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Vlerësimet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {t('title')}
          </h2>

          {/* Google rating badge - prominent */}
          <div className="reveal inline-flex flex-col sm:flex-row items-center gap-5 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100 delay-1">
            {/* Google G */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-sm border border-gray-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-gray-900 leading-none">{t('rating')}</span>
                  <span className="text-lg font-bold text-gray-400">/5</span>
                </div>
                <p className="text-sm text-gray-500 font-medium mt-0.5">Google Reviews</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-14 bg-gray-100" />

            <div className="text-center sm:text-left">
              <StarRating count={5} />
              <p className="text-sm text-gray-500 mt-1.5">{t('basedOn')}</p>
              <p className="text-xs text-sky-600 font-semibold mt-0.5">{t('ratingLabel')}</p>
            </div>

            <div className="hidden sm:block w-px h-14 bg-gray-100" />

            {/* Trust indicator */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-sm text-left">
                <p className="font-bold text-gray-900">Verified</p>
                <p className="text-gray-400">Authentic reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="reveal delay-2">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Stars */}
                  <StarRating count={5} />

                  {/* Quote mark */}
                  <div className="mt-3 mb-1 text-sky-100">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 italic leading-relaxed text-sm flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-50">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    <div className="shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
