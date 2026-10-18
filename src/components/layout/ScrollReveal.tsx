'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // Runs after hydration — safe to modify DOM now
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('will-animate');
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    elements.forEach((el) => {
      el.classList.add('will-animate');
      observer.observe(el);
    });

    // Re-observe after Suspense content loads
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        if (!el.classList.contains('visible')) {
          el.classList.add('will-animate');
          observer.observe(el);
        }
      });
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
