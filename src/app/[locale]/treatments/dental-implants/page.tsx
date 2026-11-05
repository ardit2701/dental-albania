import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("implants.metaTitle"),
    description: t("implants.metaDesc"),
  };
}

export default async function DentalImplantsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const benefits = [0,1,2,3].map((i) => (t as any)(`implants.benefits.${i}`));
  const straumannFeatures = [0,1,2,3].map((i) => (t as any)(`implants.straumannFeatures.${i}`));
  const neodentFeatures = [0,1,2,3].map((i) => (t as any)(`implants.neodentFeatures.${i}`));
  const infoRows = [0,1,2,3].map((i) => ({
    label: (t as any)(`implants.infoRows.${i}.label`),
    val: (t as any)(`implants.infoRows.${i}.val`),
  }));

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1600&q=85"
        imageAlt={t("implants.metaTitle")}
        badge={t("implants.badge")}
        title={t("implants.title")}
        subtitle={t("implants.desc")}
        variant={1}
        cta={{ label: t("bookFree"), href: `/${locale}/contact` }}
      />

      {/* Brand trust bar */}
      <div className="bg-gradient-to-r from-[#071e2e] to-[#0284c7]/90 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
          <p className="text-sky-200 text-xs font-semibold uppercase tracking-widest">{t("topBrandsLabel")}</p>
          <div className="hidden sm:block w-px h-6 bg-sky-700" />
          <div className="flex items-center gap-8">
            {/* Straumann */}
            <a href="https://www.straumann.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <circle cx="18" cy="18" r="16" fill="#003087" />
                  <path d="M10 18 C10 13 13 10 18 10 C23 10 26 13 26 18 C26 23 23 26 18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="18" cy="18" r="3" fill="white" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm leading-none">Straumann®</p>
                <p className="text-sky-300 text-[10px]">Swiss Quality · Est. 1954</p>
              </div>
            </a>
            <div className="w-px h-8 bg-sky-700" />
            {/* Neodent */}
            <a href="https://www.neodent.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <circle cx="18" cy="18" r="16" fill="#00843D" />
                  <path d="M11 25 L11 11 L18 22 L25 11 L25 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm leading-none">Neodent®</p>
                <p className="text-sky-300 text-[10px]">Straumann Group · Brazil</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Brand comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {/* Straumann */}
            <a href="https://www.straumann.com" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-100 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white hover:border-blue-300 hover:shadow-md transition-all block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#003087] rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M7 12 C7 9 9 7 12 7 C15 7 17 9 17 12 C17 15 15 17 12 17" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <circle cx="12" cy="12" r="2" fill="white" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-gray-900 text-base">Straumann®</h3>
                  <p className="text-blue-600 text-xs font-semibold">{t("implants.straumannSubtitle")}</p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">{t("implants.worldNo1")}</span>
              </div>
              {/* Price banner */}
              <div className="bg-[#003087] rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
                <span className="text-blue-200 text-xs font-medium">{t("implants.priceLabel")}</span>
                <span className="text-white font-extrabold text-lg">{t("implants.straumannPrice")}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {straumannFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </a>

            {/* Neodent */}
            <a href="https://www.neodent.com" target="_blank" rel="noopener noreferrer" className="border-2 border-green-100 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-white hover:border-green-300 hover:shadow-md transition-all block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00843D] rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M7 17 L7 7 L12 15 L17 7 L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-gray-900 text-base">Neodent®</h3>
                  <p className="text-green-600 text-xs font-semibold truncate">Straumann Group · {t("implants.neodentQuality")}</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Best Value</span>
              </div>
              {/* Price banner */}
              <div className="bg-[#00843D] rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
                <span className="text-green-200 text-xs font-medium">{t("implants.priceLabel")}</span>
                <span className="text-white font-extrabold text-lg">{t("implants.neodentPrice")}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {neodentFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </a>
          </div>

          {/* Benefits + info card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("benefitsTitle")}</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 p-3 bg-[#f0fdfa] rounded-xl">
                    <div className="w-6 h-6 bg-[#0284c7] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0284c7] to-[#0c4a6e] rounded-3xl p-8 text-center">
              <span className="text-7xl block mb-4">🦷</span>
              <h3 className="text-white text-xl font-bold mb-1">{t("implants.cardTitle")}</h3>
              <p className="text-sky-200 text-sm mb-4">{t("implants.cardSubtitle")}</p>
              <div className="space-y-2 text-sm text-left">
                {infoRows.map((r) => (
                  <div key={r.label} className="flex justify-between bg-white/10 rounded-lg px-3 py-2">
                    <span className="text-sky-200">{r.label}</span>
                    <span className="text-white font-bold">{r.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-sky-200 text-xs mt-4">{t("implants.priceNote")}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              {t("bookFree")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
