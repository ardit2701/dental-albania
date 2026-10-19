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

  const savingsItems = [
    { treatment: t("savings.items.0.treatment"), uk: t("savings.items.0.uk"), albania: t("savings.items.0.albania") },
    { treatment: t("savings.items.1.treatment"), uk: t("savings.items.1.uk"), albania: t("savings.items.1.albania") },
    { treatment: t("savings.items.2.treatment"), uk: t("savings.items.2.uk"), albania: t("savings.items.2.albania") },
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Package includes */}
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

            {/* Savings table */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-5">{t("savings.title")}</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-[#0c4a6e] text-white">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Trajtimi</th>
                      <th className="text-center px-3 py-3 font-semibold">UK/EU</th>
                      <th className="text-center px-3 py-3 font-semibold text-[#7dd3fc]">Albania</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savingsItems.map((row, i) => (
                      <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-gray-700 font-medium">{row.treatment}</td>
                        <td className="px-3 py-3 text-center text-gray-500 line-through">{row.uk}</td>
                        <td className="px-3 py-3 text-center font-bold text-[#0284c7]">{row.albania}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
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
