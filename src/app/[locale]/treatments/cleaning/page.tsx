import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("cleaning.metaTitle"),
    description: t("cleaning.metaDesc"),
  };
}

export default async function CleaningPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const steps = [0,1,2,3].map((i) => ({
    num: (t as any)(`cleaning.steps.${i}.num`),
    title: (t as any)(`cleaning.steps.${i}.title`),
    desc: (t as any)(`cleaning.steps.${i}.desc`),
  }));

  const infoItems = [0,1,2].map((i) => ({
    icon: (t as any)(`cleaning.infoItems.${i}.icon`),
    label: (t as any)(`cleaning.infoItems.${i}.label`),
    value: (t as any)(`cleaning.infoItems.${i}.value`),
  }));

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=85"
        imageAlt={t("cleaning.metaTitle")}
        badge={t("cleaning.badge")}
        title={t("cleaning.heroTitle")}
        subtitle={t("cleaning.heroSubtitle")}
        variant={3}
        cta={{ label: t("bookNow"), href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("cleaning.howTitle")}</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">{t("cleaning.howDesc")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-3xl font-extrabold text-[#0284c7]/20 leading-none shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {infoItems.map((info) => (
              <div key={info.label} className="bg-gradient-to-br from-[#0284c7] to-[#0c4a6e] rounded-2xl p-5 text-center">
                <span className="text-2xl block mb-2">{info.icon}</span>
                <p className="text-sky-200 text-xs font-medium">{info.label}</p>
                <p className="text-white font-bold text-lg">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm mb-4">{t("cleaning.footerText")}</p>
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
