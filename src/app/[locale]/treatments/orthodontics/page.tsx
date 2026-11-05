import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("orthodontics.metaTitle"),
    description: t("orthodontics.metaDesc"),
  };
}

export default async function OrthodonticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const benefits = [0,1,2,3,4,5].map((i) => t(`orthodontics.benefits.${i}` as any));
  const options = [0,1,2].map((i) => ({
    icon: (t as any)(`orthodontics.options.${i}.icon`),
    title: (t as any)(`orthodontics.options.${i}.title`),
    desc: (t as any)(`orthodontics.options.${i}.desc`),
  }));

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85"
        imageAlt={t("orthodontics.metaTitle")}
        badge={t("orthodontics.badge")}
        title={t("orthodontics.heroTitle")}
        subtitle={t("orthodontics.heroSubtitle")}
        variant={2}
        cta={{ label: t("bookFree"), href: `/${locale}/contact` }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("orthodontics.whatWeOffer")}</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">{t("orthodontics.desc")}</p>
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

            <div className="space-y-4">
              {options.map((opt) => (
                <div key={opt.title} className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-3xl">{opt.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">{opt.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{opt.desc}</p>
                  </div>
                </div>
              ))}
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
