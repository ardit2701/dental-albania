import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "howItWorks" });
  return { title: t("meta.title"), description: t("meta.desc") };
}

export default async function HowItWorksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("howItWorks");

  const steps = [0, 1, 2, 3, 4].map((i) => ({
    number: i + 1,
    icon: t(`steps.${i}.icon`),
    title: t(`steps.${i}.title`),
    desc: t(`steps.${i}.desc`),
    tag: t(`steps.${i}.tag`),
  }));

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Si funksionon procesi dentar"
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        variant={1}
      />

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{t("stepsTitle")}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t("stepsSubtitle")}</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0284c7] to-[#7dd3fc] -translate-x-1/2 hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Number bubble */}
                  <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#0284c7] border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`sm:w-[44%] ${i % 2 === 0 ? "sm:ml-0 sm:mr-auto sm:pr-12" : "sm:ml-auto sm:mr-0 sm:pl-12"}`}>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-[#0284c7] bg-[#0284c7]/10 px-3 py-1 rounded-full">
                          {t("stepLabel")} {step.number}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{step.tag}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Empty side spacer for zigzag */}
                  <div className="hidden sm:block sm:w-[44%]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              {t("cta")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* AI Video Section */}
      <section className="py-20 bg-[#0c4a6e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {t("video.badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t("video.title")}</h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-w-xs mx-auto">
            <video
              className="w-full h-auto block"
              controls
              playsInline
            >
              <source src="/dr-arlind-intro.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/10">
                <p className="text-2xl mb-2">{t(`video.points.${i}.icon`)}</p>
                <p className="text-white font-semibold text-sm">{t(`video.points.${i}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
