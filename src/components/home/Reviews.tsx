'use client';

import { useTranslations } from 'next-intl';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Maxillodent.al+by+Arlind+Myftari/@41.3348619,19.8156074,762m/data=!3m2!1e3!4b1!4m6!3m5!1s0x13503195940a8843:0x1fcca5530d50ae8f!8m2!3d41.3348579!4d19.818177!16s%2Fg%2F11z_7xybs_?entry=ttu";
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJQ4gKlJUxUxMRj64wDVM1zB8";

function StarRating({ count = 5, size = 'md' }: { count?: number; size?: 'sm' | 'md' | 'lg' }) {
  const sz = size === 'lg' ? 'w-8 h-8' : size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${sz} ${i < count ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const STATS = [
  { value: '15+', labelKey: 'stats.years' },
  { value: '5000+', labelKey: 'stats.patients' },
  { value: '98%', labelKey: 'stats.satisfaction' },
  { value: '12', labelKey: 'stats.reviews' },
];

export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-br from-[#071e2e] via-[#0c3550] to-[#071e2e] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-sky-200 text-lg">{t('subtitle')}</p>
        </div>

        {/* Main rating card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 sm:p-12 mb-10 text-center">
          {/* Google logo + rating */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-white font-bold text-xl">Google Reviews</span>
            </div>

            <div className="text-8xl font-extrabold text-white leading-none">5.0</div>
            <StarRating count={5} size="lg" />
            <p className="text-sky-200 text-lg font-medium">{t('basedOn')}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              {t('readReviews')}
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {t('leaveReview')}
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
              <p className="text-3xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-sky-200 text-xs font-medium">{t(stat.labelKey as any)}</p>
            </div>
          ))}
        </div>

        {/* Social platforms */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://instagram.com/maxillodent.al" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-3 transition-all hover:-translate-y-0.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="url(#igGrad2)">
              <defs>
                <linearGradient id="igGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-white font-semibold text-sm">Instagram</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61596250434364" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-3 transition-all hover:-translate-y-0.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-white font-semibold text-sm">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
