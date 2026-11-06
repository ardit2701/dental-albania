import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("allOn6.metaTitle"),
    description: t("allOn6.metaDesc"),
  };
}

export default async function AllOn6Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const benefits = [
    t("allOn6.benefits.0"),
    t("allOn6.benefits.1"),
    t("allOn6.benefits.2"),
    t("allOn6.benefits.3"),
  ];

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0119.jpg"
        imageAlt={t("allOn6.metaTitle")}
        badge={t("allOn6.badge")}
        title={t("allOn6.title")}
        subtitle={t("allOn6.desc")}
        variant={1}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="rounded-3xl overflow-hidden shadow-xl">
              {/* Photo header */}
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                  alt="All-on-6"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0284c7]/90 to-[#0284c7]/20" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <h3 className="text-white text-xl font-bold">All-on-6</h3>
                  <p className="text-sky-200 text-sm mt-1">{t("allOn6.cardSubtitle")}</p>
                </div>
              </div>
              {/* Info section */}
              <div className="bg-gradient-to-br from-[#0284c7] to-[#0369a1] p-6 text-center">
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-[#bae6fd] text-sm">{t("allOn6.priceNote")}</p>
                </div>
              </div>
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
