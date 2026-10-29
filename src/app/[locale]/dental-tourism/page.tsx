import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Turizëm Dentar",
    description: "Turizëm dentar në Shqipëri - kombinoni trajtimin dentar me pushim.",
  };
}

export default async function DentalTourismPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tourism");

  const packageItems = [
    t("packages.items.0"),
    t("packages.items.1"),
    t("packages.items.2"),
    t("packages.items.3"),
    t("packages.items.4"),
    t("packages.items.5"),
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Turizëm dentar në Shqipëri"
        badge="✈️ Turizëm Dentar"
        title={t("title")}
        subtitle={t("subtitle")}
        variant={2}
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">{t("desc")}</p>

          <div className="max-w-xl">
            <div className="bg-[#f0fdfa] rounded-2xl p-6 border border-[#0284c7]/20">
              <h2 className="text-xl font-bold text-[#0284c7] mb-5">{t("packages.title")}</h2>
              <ul className="space-y-3">
                {packageItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#0284c7] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Rezervo Paketën Tënde
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
