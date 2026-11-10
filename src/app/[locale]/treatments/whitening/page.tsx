import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("whitening.metaTitle"),
    description: t("whitening.metaDesc"),
  };
}

export default async function WhiteningPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const options = [0,1,2].map((i) => ({
    icon: (t as any)(`whitening.options.${i}.icon`),
    title: (t as any)(`whitening.options.${i}.title`),
    desc: (t as any)(`whitening.options.${i}.desc`),
    badge: (t as any)(`whitening.options.${i}.badge`),
  }));

  const faqs = [0,1,2,3].map((i) => ({
    q: (t as any)(`whitening.faqs.${i}.q`),
    a: (t as any)(`whitening.faqs.${i}.a`),
  }));

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0120.jpg"
        imageAlt={t("whitening.metaTitle")}
        badge={t("whitening.badge")}
        title={t("whitening.heroTitle")}
        subtitle={t("whitening.heroSubtitle")}
        variant={1}
        cta={{ label: t("bookNow"), href: `/${locale}/contact` }}
      />

      {/* Zoom Bleaching Section */}
      <section className="py-16 bg-gradient-to-br from-[#071e2e] via-[#0c3550] to-[#071e2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                {t("whitening.zoomSubtitle")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                {t("whitening.zoomTitle")}
              </h2>
              <p className="text-sky-200 text-base leading-relaxed mb-8">
                {t("whitening.zoomDesc")}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { key: "zoomFeature1", icon: "⚡" },
                  { key: "zoomFeature2", icon: "⏱️" },
                  { key: "zoomFeature3", icon: "🛡️" },
                  { key: "zoomFeature4", icon: "✅" },
                ].map((f) => (
                  <div key={f.key} className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-xl">{f.icon}</span>
                    <span className="text-white text-sm font-semibold">{(t as any)(`whitening.${f.key}`)}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://www.philipszoom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-[#0284c7] font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {(t as any)("whitening.zoomLearnMore")}
              </a>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=85"
                alt="Philips ZOOM Bleaching"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071e2e]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 inline-block">
                  <p className="text-[#0284c7] font-extrabold text-lg">Philips ZOOM</p>
                  <p className="text-gray-600 text-xs">Professional Whitening System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("whitening.ourSolutions")}</h2>
              <div className="space-y-4">
                {options.map((opt) => (
                  <div key={opt.title} className="border border-gray-100 rounded-2xl p-5 flex gap-4 items-start hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <span className="text-2xl">{opt.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-sm">{opt.title}</h3>
                        {opt.badge === 'popular' && (
                          <span className="bg-[#0284c7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{t("whitening.popular")}</span>
                        )}
                        {opt.badge === 'max' && (
                          <span className="bg-[#0284c7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{t("whitening.maxResult")}</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("whitening.faqTitle")}</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
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
