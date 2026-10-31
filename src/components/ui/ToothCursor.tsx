'use client';

import { useEffect, useRef } from 'react';

export default function ToothCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const el = ref.current;
    if (!el) return;

    let x = -100, y = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(render);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-full hidden lg:block"
      style={{ willChange: 'transform' }}
    >
      <svg width="22" height="28" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 1px 3px rgba(2,132,199,0.5))' }}>
        <defs>
          <linearGradient id="tc-crown" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0fdf4" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="tc-root" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Crown */}
        <path
          d="M20 38 C20 18 34 8 50 8 C66 8 80 18 80 38 L80 58 C80 68 66 74 50 74 C34 74 20 68 20 58 Z"
          fill="url(#tc-crown)" opacity="0.95"
        />
        {/* Highlight */}
        <path d="M28 18 C24 26 22 34 22 40" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        {/* Root left */}
        <path d="M34 72 C32 84 30 98 34 108 C37 115 44 116 46 108 L50 84" fill="url(#tc-root)" opacity="0.75" />
        {/* Root right */}
        <path d="M66 72 C68 84 70 98 66 108 C63 115 56 116 54 108 L50 84" fill="url(#tc-root)" opacity="0.75" />
        {/* Root center */}
        <path d="M42 74 L50 110 L58 74" fill="url(#tc-root)" opacity="0.5" />
      </svg>
    </div>
  );
}
