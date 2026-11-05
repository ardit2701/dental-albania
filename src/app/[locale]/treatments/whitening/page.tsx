import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
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
        cta={{ label: t("bookNow"), href: "#contact" }}
      />

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
