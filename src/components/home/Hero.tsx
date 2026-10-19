'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface HeroProps { locale: string; }

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

// Particle canvas
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const N = 50;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94,234,212,${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

// Floating tooth shape — stylized, not photorealistic
function FloatingTooth({ className, size = 120, style }: { className: string; size?: number; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0fdf4" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="rootGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Crown */}
        <path
          d="M20 38 C20 18 34 8 50 8 C66 8 80 18 80 38 L80 58 C80 68 66 74 50 74 C34 74 20 68 20 58 Z"
          fill="url(#toothGrad)" filter="url(#glow)" opacity="0.92"
        />
        {/* Highlight */}
        <path d="M28 18 C24 26 22 34 22 40" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        {/* Root left */}
        <path d="M34 72 C32 84 30 98 34 108 C37 115 44 116 46 108 L50 84" fill="url(#rootGrad)" opacity="0.7" />
        {/* Root right */}
        <path d="M66 72 C68 84 70 98 66 108 C63 115 56 116 54 108 L50 84" fill="url(#rootGrad)" opacity="0.7" />
        {/* Root center */}
        <path d="M42 74 L50 110 L58 74" fill="url(#rootGrad)" opacity="0.5" />
        {/* Sparkle */}
        <circle cx="76" cy="20" r="2.5" fill="white" opacity="0.9" />
        <circle cx="82" cy="30" r="1.5" fill="white" opacity="0.6" />
        <circle cx="70" cy="14" r="1.5" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations('hero');
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const patients = useCountUp(5200, 2000, statsActive);
  const years    = useCountUp(15,   1500, statsActive);
  const success  = useCountUp(98,   1800, statsActive);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] max-h-[960px] overflow-hidden flex items-center justify-center">

        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020c14] via-[#071e2e] to-[#05172a]" />

        {/* Radial glow spots */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Animated particles */}
        <ParticleCanvas />

        {/* Floating teeth — different sizes, positions, speeds */}
        <FloatingTooth
          size={140}
          className="absolute left-[6%] top-[18%] opacity-70 animate-float pointer-events-none"
        />
        <FloatingTooth
          size={90}
          className="absolute right-[8%] top-[30%] opacity-50 animate-float-delay pointer-events-none"
        />
        <FloatingTooth
          size={65}
          className="absolute right-[20%] bottom-[18%] opacity-35 animate-float pointer-events-none"
          style={{ animationDuration: '4.5s', animationDelay: '1s' } as React.CSSProperties}
        />
        <FloatingTooth
          size={50}
          className="absolute left-[18%] bottom-[22%] opacity-25 animate-float-delay pointer-events-none"
          style={{ animationDuration: '5s' } as React.CSSProperties}
        />

        {/* Hero content — centered */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16 lg:pt-20">


          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 drop-shadow-2xl">
            {t('title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">
              {t('titleHighlight')}
            </span>
            <br className="hidden sm:block" />
            {' '}{t('titleEnd')}
          </h1>

          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold text-base rounded-full shadow-lg shadow-sky-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/30 hover:shadow-xl"
            >
              {t('ctaPrimary')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link
              href={`/${locale}/before-after`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 text-white/80 hover:text-white font-semibold text-base rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="inline-flex items-center gap-8 sm:gap-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5">
            {[
              { val: `${patients.toLocaleString()}+`, label: t('stat1Label') },
              { val: `${years}+`,                      label: t('stat2Label') },
              { val: `${success}%`,                    label: t('stat3Label') },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-300">{s.val}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-0.5 font-medium tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Trust bar */}
      <div className="bg-[#071e2e] border-b border-sky-900/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs font-semibold text-sky-700 uppercase tracking-widest whitespace-nowrap">
              {t('trustBarLabel')}
            </p>
            <div className="w-px h-5 bg-sky-800 hidden sm:block" />
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 sm:gap-10">
              {['ISO 9001', 'CE Mark', 'EDA Member', 'ADA Standards', 'SGS Verified'].map(p => (
                <span key={p} className="text-sm font-bold text-sky-700 hover:text-sky-400 transition-colors cursor-default tracking-tight">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
