"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

const LOCALES = [
  { code: "sq", flag: "🇦🇱", label: "Shqip" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
];

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const treatmentsLinks = [
    { label: t("implants"), href: `/${locale}/treatments/dental-implants` },
    { label: t("crowns"), href: `/${locale}/treatments/crowns` },
    { label: t("veneers"), href: `/${locale}/treatments/veneers` },
    { label: t("allOn6"), href: `/${locale}/treatments/all-on-6` },
    { label: t("whitening"), href: `/${locale}/treatments/whitening` },
    { label: t("orthodontics"), href: `/${locale}/treatments/orthodontics` },
    { label: t("cleaning"), href: `/${locale}/treatments/cleaning` },
  ];

  const aboutLinks = [
    { label: t("about"), href: `/${locale}/about` },
    { label: t("doctors"), href: `/${locale}/doctors` },
    { label: t("beforeAfter"), href: `/${locale}/before-after` },
    { label: t("tourism"), href: `/${locale}/dental-tourism` },
  ];

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2" onClick={closeMobile}>
            <div className="w-9 h-9 rounded-full bg-[#0d9488] flex items-center justify-center">
              <span className="text-white text-lg">🦷</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              KOKONA <span className="text-[#0d9488]">Dental</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            <Link
              href={`/${locale}`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0d9488] transition-colors"
            >
              {t("home")}
            </Link>

            {/* Treatments Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0d9488] transition-colors"
                onMouseEnter={() => setDesktopDropdown("treatments")}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                {t("treatments")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopDropdown === "treatments" && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setDesktopDropdown("treatments")}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {treatmentsLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0fdfa] hover:text-[#0d9488] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0d9488] transition-colors"
                onMouseEnter={() => setDesktopDropdown("about")}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                {t("about")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopDropdown === "about" && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setDesktopDropdown("about")}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0fdfa] hover:text-[#0d9488] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0d9488] transition-colors"
            >
              {t("contact")}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2 border-l pl-3 border-gray-200">
              {LOCALES.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  title={loc.label}
                  className={`px-2 py-1 rounded-lg text-sm transition-all ${
                    locale === loc.code
                      ? "bg-[#0d9488] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {loc.flag}
                </button>
              ))}
            </div>

            <Link
              href="#contact"
              className="ml-3 px-4 py-2 bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {t("appointment")}
            </Link>
          </nav>

          {/* Mobile: Language + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1">
              {LOCALES.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => switchLocale(loc.code)}
                  className={`px-1.5 py-1 rounded text-xs transition-all ${
                    locale === loc.code ? "bg-[#0d9488] text-white" : "text-gray-600"
                  }`}
                >
                  {loc.flag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link
              href={`/${locale}`}
              onClick={closeMobile}
              className="block px-3 py-3 text-gray-700 font-medium hover:text-[#0d9488] hover:bg-[#f0fdfa] rounded-lg transition-colors"
            >
              {t("home")}
            </Link>

            {/* Treatments accordion */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "treatments" ? null : "treatments")}
                className="w-full flex items-center justify-between px-3 py-3 text-gray-700 font-medium hover:text-[#0d9488] hover:bg-[#f0fdfa] rounded-lg transition-colors"
              >
                {t("treatments")}
                <svg
                  className={`w-4 h-4 transition-transform ${mobileDropdown === "treatments" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === "treatments" && (
                <div className="ml-4 border-l-2 border-[#0d9488] pl-3 mt-1 space-y-1">
                  {treatmentsLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-[#0d9488] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About accordion */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "about" ? null : "about")}
                className="w-full flex items-center justify-between px-3 py-3 text-gray-700 font-medium hover:text-[#0d9488] hover:bg-[#f0fdfa] rounded-lg transition-colors"
              >
                {t("about")}
                <svg
                  className={`w-4 h-4 transition-transform ${mobileDropdown === "about" ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdown === "about" && (
                <div className="ml-4 border-l-2 border-[#0d9488] pl-3 mt-1 space-y-1">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-[#0d9488] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              onClick={closeMobile}
              className="block px-3 py-3 text-gray-700 font-medium hover:text-[#0d9488] hover:bg-[#f0fdfa] rounded-lg transition-colors"
            >
              {t("contact")}
            </Link>

            <div className="pt-2 pb-1">
              <Link
                href="#contact"
                onClick={closeMobile}
                className="block w-full text-center px-4 py-3 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold rounded-xl transition-colors"
              >
                {t("appointment")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
